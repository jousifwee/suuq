import { Component } from '@angular/core';
import { RouterModule, RouterOutlet} from '@angular/router';
import { AngebotSeite } from "./components/angebot-seite.component/angebot-seite.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'frontend';
}
