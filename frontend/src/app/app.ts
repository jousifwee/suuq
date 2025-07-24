import { Component } from '@angular/core';
import { RouterModule, RouterOutlet} from '@angular/router';
import { MatSidenavContainer, MatSidenav, MatSidenavContent} from '@angular/material/sidenav';
import { MatNavList } from '@angular/material/list';
import { MatButton } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, MatSidenavContainer, MatSidenav, MatSidenavContent
  , MatNavList, MatToolbar, MatButton,MatIcon],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'frontend';
}
