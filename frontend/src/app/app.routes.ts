import { Routes } from '@angular/router';
import { AngebotSeite } from './components/angebot-seite.component/angebot-seite.component';
import { AngebotSeiteStep1 } from './components/angebot-seite-steps/angebot-seite-step1';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: AngebotSeite },
    { path: 'step1', component: AngebotSeiteStep1}
];
