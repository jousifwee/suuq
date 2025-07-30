import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatSidenavContainer, MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { MatNavList, MatListItem, MatDivider } from '@angular/material/list';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltip } from '@angular/material/tooltip';


// für keycloak erweiterung: 
import { CommonModule } from '@angular/common';
import { KeycloakService } from './keycloak.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, MatSidenavContainer, MatSidenav, MatSidenavContent
    , MatNavList, MatListItem, MatToolbar, MatTooltip, MatIcon, MatDivider, CommonModule],
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
  constructor(private clipboard: Clipboard, private snackBar: MatSnackBar) { }

  copyToken(token: string) {
    this.clipboard.copy(token);
    this.snackBar.open('Token kopiert!', 'OK', { duration: 1200 });
  }
  logout() {
    this.keycloak.logout();
  }
}
