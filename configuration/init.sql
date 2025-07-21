-- Schema erzeugen
create schema if not exists suuq;

-- Schema aktiv setzen
set search_path to suuq;

-- Rolle für PostgREST (unverändert)
create role anon nologin;

-- Tabelle artikel
create table artikel (
    id serial primary key,
    titel varchar not null,
    beschreibung text,
    anbieter_id varchar not null,
    preis_vorschlag numeric(10,2) not null check (preis_vorschlag >= 0),
    status varchar not null default 'offen',
    angelegt_am timestamptz default now()
);

-- Tabelle angebot
create table angebot (
    id serial primary key,
    artikel_id integer references artikel(id),
    bietender_id varchar not null,
    betrag numeric(10,2) not null check (betrag >= 0),
    erstellt_am timestamptz default now()
);

-- Trigger-Funktion
create or replace function check_angebot_hoechstgebot()
returns trigger as $$
declare
    max_betrag numeric(10,2);
begin
    select coalesce(max(betrag), 0) into max_betrag from angebot where artikel_id = new.artikel_id;

    if max_betrag > 0 then
        if new.betrag < max_betrag + 0.5 then
            raise exception 'Neues Angebot (%s) muss mindestens 50 Cent über dem bisherigen Höchstgebot (%s) liegen.', new.betrag, max_betrag;
        end if;
    else
        if new.betrag < 0.5 then
            raise exception 'Erstes Gebot muss mindestens 0.5 betragen.';
        end if;
    end if;

    return new;
end;
$$ language plpgsql;

-- Trigger erstellen
create trigger trg_check_angebot
before insert on angebot
for each row execute function check_angebot_hoechstgebot();

-- Beispiel-Daten
insert into artikel (titel, beschreibung, anbieter_id, preis_vorschlag) values
('Bücherregal', 'Ein schönes Regal', '1', 50.00),
('Kaffeemaschine', 'Vollautomat', '1', 120.00);

insert into angebot (artikel_id, bietender_id, betrag) values
(1, '1', 55.00),
(2, '1', 125.00);

-- View für Artikel mit Angeboten
create view artikel_angebote as
select 
  a.*, 
  json_agg(b) filter (where b.id is not null) as angebote
from artikel a
left join angebot b on a.id = b.artikel_id
group by a.id;

-- Rechte für PostgREST
grant usage on schema suuq to anon;
grant select, insert on artikel to anon;
grant select, insert on angebot to anon;
grant select on artikel_angebote to anon;
