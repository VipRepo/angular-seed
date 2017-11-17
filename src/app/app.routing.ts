import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LangComponent } from './route/language/language.component';
import { RepoComponent } from './route/repository/repository.component';

export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot([
    {
        path: '',
        component: LangComponent
    },
    {
        path: 'tech/:lang',
        component: RepoComponent
    }
]);
