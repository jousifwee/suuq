import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-angebot-seite',
  imports: [ CommonModule, FormsModule],
  templateUrl: 'angebot-seite.component.html',
  styleUrl: 'angebot-seite.component.scss'
})
export class AngebotSeite {
 private http = inject(HttpClient);
  artikelListe = signal<any[]>([]);
  neueBetrag: { [key: number]: number } = {};

  constructor() {
    this.ladeDaten();
  }

  ladeDaten() {
    this.http.get<any[]>('http://localhost:3000/artikel_angebote').subscribe(data => {
      this.artikelListe.set(data);
    });
  }

  neuesAngebot(artikel: any) {
    const betrag = this.neueBetrag[artikel.id];
    this.http.post('http://localhost:3000/angebot', {
      artikel_id: artikel.id,
      bietender_id: '1',
      betrag: betrag
    }).subscribe({
      next: () => this.ladeDaten(),
      error: err => alert(err.error.message)
    });
  }
}
