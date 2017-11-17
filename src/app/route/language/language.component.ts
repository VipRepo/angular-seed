import { Component, OnInit } from "@angular/core";
import {Lang} from './language.model';

import {LangService} from './language.service';

@Component({
    selector: "lang",
    templateUrl: './language.component.html',
    styleUrls: ['./language.component.scss']
})
export class LangComponent {

    langs: Lang[] = null;

    constructor(private langService: LangService) {

        this.langService.getAllLangs().subscribe((langs) => {
            this.langs = langs;
        });
    }

}
