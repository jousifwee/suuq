import { Routes } from '@angular/router';
import { AngebotSeite } from './components/angebot-seite.component/angebot-seite.component';
import { AngebotSeiteStep1 } from './components/angebot-seite-steps/angebot-seite-step1';

export const routes: Routes = [
    { path: '', component: AngebotSeite },
    { path: 'step1', component: AngebotSeiteStep1}
];
