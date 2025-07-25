import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@Component({
  selector: 'app-angebot-seite-step3',
  imports: [CommonModule, FormsModule, MatSlideToggleModule],
  templateUrl: './angebot-seite-step3.html',
  styles: ''
})
export class AngebotSeiteStep3 {
  private http = inject(HttpClient);
  artikelListe: any[] = [];

  constructor() {
    this.ladeDaten();
  }


  ladeDaten() {
    this.http.get<any[]>('http://localhost:3000/artikel').subscribe(data => {
      this.artikelListe=data;
    });
  }

    typeOf(obj: any): string {
    // Für Arrays gibt typeof "object" zurück, daher extra prüfen!
    if (Array.isArray(obj)) {
      return 'array';
    }
    return typeof obj;
  }

   deepTypeOf(obj: any): any {
    if (obj === null) return 'null';
    if (Array.isArray(obj)) {
      if (obj.length === 0) return 'array(empty)';
      return `array(${this.deepTypeOf(obj[0])})`;
    }
    if (typeof obj === 'object') {
      const result: any = {};
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          result[key] = this.deepTypeOf(obj[key]);
        }
      }
      return result;
    }
    return typeof obj;
  }
}
