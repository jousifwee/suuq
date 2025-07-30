import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { KeycloakService } from './app/keycloak.service';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthInterceptor } from './app/auth.interceptor'; // optional

// ohne Keycloak:
// bootstrapApplication(App, appConfig)
//  .catch((err) => console.error(err));

const keycloak = new KeycloakService();

keycloak.init().then(() => {
  bootstrapApplication(App, {
    ...appConfig,
    providers: [
      ...(appConfig.providers ?? []),
      { provide: KeycloakService, useValue: keycloak },
      //provideHttpClient(),
      provideHttpClient(withInterceptors([AuthInterceptor])) // optional
    ]
  });
});