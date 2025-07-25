import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';

@Component({
  selector: 'app-angebot-seite-step4',
  imports: [CommonModule, FormsModule, MatCardModule],
  templateUrl: './angebot-seite-step4.html',
  styles: ''
})
export class AngebotSeiteStep4 {
  private http = inject(HttpClient);
  gridCols = 4;
  artikelListe: any[] = [];

  constructor() {
    this.ladeDaten();
  }



  ladeDaten() {
    this.http.get<any[]>('http://localhost:3000/artikel').subscribe(data => {
      this.artikelListe = data;
    });
  
  }

}
