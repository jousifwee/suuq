import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-angebote',
  imports: [ CommonModule, FormsModule],
  templateUrl: './angebote.html',
  styleUrl: './angebote.scss'
})
export class Angebote {
private http = inject(HttpClient);
readonly angebote = signal<any[]>([]);

constructor() {
  this.http.get<any[]>('/api/angebote').subscribe(data => this.angebote.set(data));
}

}
