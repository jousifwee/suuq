import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet} from '@angular/router';
import { MatSidenavContainer, MatSidenav, MatSidenavContent} from '@angular/material/sidenav';
import { MatNavList, MatListItem, MatList} from '@angular/material/list';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
// für keycloak erweiterung: 
import { CommonModule } from '@angular/common';
import { KeycloakService } from './keycloak.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, MatSidenavContainer, MatSidenav, MatSidenavContent
  , MatNavList, MatListItem, MatList, MatToolbar, MatIcon],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'frontend';
  private keycloak = inject(KeycloakService);
  username = this.keycloak.getUsername();
  token = this.keycloak.getTokenHr();
  header = this.keycloak.getHeaderHr();
  signature = this.keycloak.getSignatureHr();

  logout() {
    this.keycloak.logout();
  }
}
