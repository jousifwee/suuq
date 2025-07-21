import { Routes } from '@angular/router';
import { AngebotSeite } from './components/angebot-seite.component';
import { Angebote } from './components/angebote/angebote';
import { Dummy } from './components/dummy/dummy';

export const routes: Routes = [
    { path: 'angebotx', component: AngebotSeite },
    { path: 'angebote', component: Angebote },
    { path: '', component: Dummy }
];
