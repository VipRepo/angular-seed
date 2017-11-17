import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import {AppConfig} from '../../config/app.config';

import {Repo} from './repo.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RepoService {
    private headers: HttpHeaders;
    private repoUrl: string;

    private handleError(error: any) {
        if (error instanceof Response) {
            return Observable.throw(error.json()['error'] || 'backend server error');
        }
        return Observable.throw(error || 'backend server error');
    }

    constructor(private http: HttpClient) {
        this.repoUrl = AppConfig.endpoints.repos;
        this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    }

    getRepos(lang: string, skip: number, limit: number): Observable<any> {
        console.log('Fetching Repos');
        let params = new HttpParams().set('lang', lang).set('skip', skip.toString()).set('limit', limit + '');
        return this.http.get(this.repoUrl, { params: params, observe: 'response' });
        // .subscribe((res: any) => {
        //     console.log(res);
        //     let headers = res.headers;
        //     let response: any = res.body;
        //
        //     console.log('Lnags recieved' + response);
        //     let langs: Repo[] = response.map((r: any) => r.payload.pull_request.base.repo)
        //         .map((r: any) => new Repo(r.full_name, r.description, r.stargazers_count,
        //             r.open_issues, r.forks_count, r.git_url, r.watchers_count));
        //     return { "langs": langs, "headers": headers };
        // });
    }

}
