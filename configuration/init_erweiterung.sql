
-- Ich werde SQL erstellen, um die Rollen "anwender" und "admin" zu erstellen, aber nur wenn diese noch nicht existieren. Dafür verwende ich PostgreSQL's `DO` Block mit PL/pgSQL, um die Existenz der Rollen zuerst zu prüfen.
DO $$
BEGIN
    -- Prüfe, ob Rolle "anwender" existiert und erstelle sie falls nicht
    IF NOT EXISTS (SELECT FROM pg_roles WHERE rolname = 'anwender') THEN
        CREATE ROLE anwender;
    END IF;
    
    -- Prüfe, ob Rolle "admin" existiert und erstelle sie falls nicht
    IF NOT EXISTS (SELECT FROM pg_roles WHERE rolname = 'admin') THEN
        CREATE ROLE admin;
    END IF;
END
$$

-- Ich werde SQL-Befehle erstellen, um:
-- 1. Den Suchpfad für beide Rollen auf das Schema 'suuq' zu setzen
-- 2. Beiden Rollen die Schemarechte für 'suuq' zu gewähren
-- 3. Der Rolle 'anwender' Leserechte auf alle Tabellen, Prozeduren und Sequenzen zu geben
-- 4. Der Rolle 'admin' Insert-, Update- und Delete-Rechte auf alle Tabellen, Prozeduren und Sequenzen zu geben
-- Suchpfad für beide Rollen auf 'suuq' setzen
ALTER ROLE anwender SET search_path TO suuq;
ALTER ROLE admin SET search_path TO suuq;

-- Schemarechte für beide Rollen gewähren
GRANT USAGE ON SCHEMA suuq TO anwender;
GRANT USAGE ON SCHEMA suuq TO admin;

-- Leserechte für 'anwender' auf alle Objekte
GRANT SELECT ON ALL TABLES IN SCHEMA suuq TO anwender;
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA suuq TO anwender;
GRANT EXECUTE ON ALL PROCEDURES IN SCHEMA suuq TO anwender;
GRANT USAGE ON ALL SEQUENCES IN SCHEMA suuq TO anwender;

-- Insert-, Update-, Delete-Rechte für 'admin' auf alle Objekte
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA suuq TO admin;
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA suuq TO admin;
GRANT EXECUTE ON ALL PROCEDURES IN SCHEMA suuq TO admin;
GRANT USAGE, UPDATE ON ALL SEQUENCES IN SCHEMA suuq TO admin;

-- Für zukünftige Tabellen, Sequenzen und Funktionen
ALTER DEFAULT PRIVILEGES IN SCHEMA suuq GRANT SELECT ON TABLES TO anwender;
ALTER DEFAULT PRIVILEGES IN SCHEMA suuq GRANT EXECUTE ON FUNCTIONS TO anwender;
-- ALTER DEFAULT PRIVILEGES IN SCHEMA suuq GRANT EXECUTE ON PROCEDURES TO anwender;
ALTER DEFAULT PRIVILEGES IN SCHEMA suuq GRANT USAGE ON SEQUENCES TO anwender;

ALTER DEFAULT PRIVILEGES IN SCHEMA suuq GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO admin;
ALTER DEFAULT PRIVILEGES IN SCHEMA suuq GRANT EXECUTE ON FUNCTIONS TO admin;
-- ALTER DEFAULT PRIVILEGES IN SCHEMA suuq GRANT EXECUTE ON PROCEDURES TO admin;
ALTER DEFAULT PRIVILEGES IN SCHEMA suuq GRANT USAGE, UPDATE ON SEQUENCES TO admin;