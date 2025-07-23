import { Component } from '@angular/core';
import { RouterModule, RouterOutlet} from '@angular/router';
import { MatSidenavContainer, MatSidenav, MatSidenavContent} from '@angular/material/sidenav';
import { MatNavList } from '@angular/material/list';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, MatSidenavContainer, MatSidenav, MatSidenavContent, MatNavList, MatButton],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'frontend';
}
