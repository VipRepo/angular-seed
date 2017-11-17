import {InjectionToken} from '@angular/core';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig = {
    routes: {
        langs: 'langs',
        error404: '404'
    },

    endpoints: {
        langs: 'http://localhost:9080/api/technologies',
        repos: 'http://localhost:9080/api/repo'
    },
};
