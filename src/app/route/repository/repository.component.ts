import { Component, OnInit } from "@angular/core";
import {Repo} from './repo.model';
import {Pager} from '../model/pager.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// import 'rxjs/add/operator/switchMap';

import {RepoService} from './repository.service';

@Component({
    selector: "lang",
    templateUrl: './repository.component.html',
    styleUrls: ['./repository.component.scss']
})
export class RepoComponent implements OnInit {

    repos: Repo[] = null;
    pager: Pager;
    maxSize: number = 5;
    page: number = 1;
    pageSize: number = 10;
    lang: string;



    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private repoService: RepoService,
    ) {
        this.route.paramMap.switchMap((params: ParamMap) => {
            console.log('Params' + params.get('lang'));
            this.lang = params.get('lang');

            return this.repoService.getRepos(this.lang, 0, this.pageSize);
        })
            .subscribe((res: any) => {
                console.log(res);
                this.handleResponse(res);
                // let headers = res.headers;
                // let response: any = res.body;
                // let collectionSize = headers.get('totalitems');
                // this.pager = new Pager(collectionSize, this.maxSize, this.page, this.pageSize);
                //
                // console.log('Pager' + this.pager);
                // let langs: Repo[] = response.map((r: any) => r.payload.pull_request.base.repo)
                //     .map((r: any) => new Repo(r.full_name, r.description, r.stargazers_count,
                //         r.open_issues, r.forks_count, r.git_url, r.watchers_count));
                // this.repos = langs;
            });
    }

    handleResponse(res: any) {
        let headers = res.headers;
        let response: any = res.body;
        let collectionSize = headers.get('totalitems');
        this.pager = new Pager(collectionSize, this.maxSize, this.page, this.pageSize);

        console.log('Pager' + this.pager);
        let langs: Repo[] = response.map((r: any) => r.payload.pull_request.base.repo)
            .map((r: any) => new Repo(r.full_name, r.description, r.stargazers_count,
                r.open_issues, r.forks_count, r.git_url, r.watchers_count));
        this.repos = langs;
    }

    fetchRepos(skip: number, limit: number) {
        return this.repoService.getRepos(this.lang, skip, limit)
            .subscribe((res: any) => {
                this.handleResponse(res);
                // console.log(res);
                // let headers = res.headers;
                // let response: any = res.body;
                // let collectionSize = headers.get('totalitems');
                // this.pager = new Pager(collectionSize, this.maxSize, this.page, this.pageSize);
                //
                // console.log('Pager' + this.pager);
                // let langs: Repo[] = response.map((r: any) => r.payload.pull_request.base.repo)
                //     .map((r: any) => new Repo(r.full_name, r.description, r.stargazers_count,
                //         r.open_issues, r.forks_count, r.git_url, r.watchers_count));
                // this.repos = langs;
            });
    }

    pageChanged(event: any) {
        console.log("page changed in paranet controller" + event);
        this.page = event;
        let skip = (this.page - 1) * this.pageSize;
        return this.fetchRepos(skip, this.pageSize);
        // this.pageChangeEvent.emit(event);
    }

    ngOnInit() {
        // this.pager = new Pager(100, 5, 1, 10);
    }

}
