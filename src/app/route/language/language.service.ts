import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {AppConfig} from '../../config/app.config';

import {Lang} from './language.model';
import {Observable} from 'rxjs/Observable';
// import {MatSnackBar, MatSnackBarConfig} from '@angular/material';
// import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class LangService {
    private headers: HttpHeaders;
    private langsUrl: string;
    // private translations: any;

    private handleError(error: any) {
        if (error instanceof Response) {
            return Observable.throw(error.json()['error'] || 'backend server error');
        }
        return Observable.throw(error || 'backend server error');
    }

    constructor(private http: HttpClient) {
        this.langsUrl = AppConfig.endpoints.langs;
        this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });

        // this.translateService.get(['heroCreated', 'saved', 'heroLikeMaximum', 'heroRemoved'], {
        //   'value': AppConfig.votesLimit
        // }).subscribe((texts) => {
        //   this.translations = texts;
        // });
    }

    getAllLangs(): Observable<Lang[]> {
        console.log('Fetching Langs');
        return this.http.get(this.langsUrl)
            .map((response: string[]) => {
                console.log('Lnags recieved' + response);
                let langs: Lang[] = response.map((r: string) => new Lang(r));
                return langs;
            })
            .catch(error => this.handleError(error));
    }

}
