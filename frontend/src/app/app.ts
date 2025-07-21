import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngebotSeite } from "./components/angebot-seite";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AngebotSeite],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'frontend';
}
