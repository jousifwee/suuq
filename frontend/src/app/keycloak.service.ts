import Keycloak from 'keycloak-js';

export class KeycloakService {
    private keycloak = new Keycloak({
        url: 'http://localhost:8080/',
        realm: 'suuq',
        clientId: 'suuq-angular-frontend-app',
    });

    async init(): Promise<boolean> {
        try {
            await this.keycloak.init({
                onLoad: 'login-required',
                checkLoginIframe: false,
            });
            return true;
        } catch (e) {
            console.error('Keycloak init error', e);
            return false;
        }
    }

    getToken() {
        return this.keycloak.token;
    }

    getHeaderHr() {
        return (this.decodeToken(this.getToken(), 0));
    }
    getSignatureHr() {
        return (this.decodeToken(this.getToken(), 2));
    }
    getTokenHr() {
        return (this.decodeToken(this.getToken(), 1));
    }

    getUsername() {
        return this.keycloak.tokenParsed?.['preferred_username'];
    }

    logout() {
        this.keycloak.logout();
    }

    private decodeTokenOld(token: string | undefined, index: number): string {
        try {
            if (token === undefined) { return "" };
            const payload = token.split('.')[index];
            const decoded = atob(payload);
            // return decoded;// JSON.parse(decoded);
            const ret = JSON.stringify(JSON.parse(decoded), null, 2); //.replace(/\n/g, '<br>');
            console.warn(ret);
            return ret;
        } catch (e) {
            return 'Token konnte nicht dekodiert werden';
        }
    }

    private decodeToken(token: string | undefined, index: number): string {
        try {
            if (!token) return "";

            const payload = token.split('.')[index];
            const decoded = atob(payload);
            const obj = JSON.parse(decoded);

            // Neue Reihenfolge bauen
            const keys = Object.keys(obj);
            const ordered: any = {};

            for (const key of keys) {
                ordered[key] = obj[key];
                if ((key === 'iat' || key === 'exp') && typeof obj[key] === 'number') {
                    ordered[key + '_asDate'] = new Date(obj[key] * 1000).toLocaleString();
                }
            }
            return JSON.stringify(ordered, null, 2);
        } catch (e) {
            return 'Token konnte nicht dekodiert werden';
        }
    }

}
