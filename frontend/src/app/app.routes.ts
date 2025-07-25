import { Routes } from '@angular/router';
import { AngebotSeite } from './components/angebot-seite.component/angebot-seite.component';
import { AngebotSeiteStep1 } from './components/angebot-seite-steps/angebot-seite-step1';
import { AngebotSeiteStep2 } from './components/angebot-seite-steps/angebot-seite-step2';
import { AngebotSeiteStep3 } from './components/angebot-seite-steps/angebot-seite-step3';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: AngebotSeite },
    { path: 'step1', component: AngebotSeiteStep1 },
    { path: 'step2', component: AngebotSeiteStep2 },
    { path: 'step3', component: AngebotSeiteStep3}
];
