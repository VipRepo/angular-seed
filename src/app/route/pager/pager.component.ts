import { Component, Input, EventEmitter, Output } from "@angular/core";
import {Pager} from '../model/pager.model';


@Component({
    selector: "pager",
    templateUrl: './pager.component.html',
    styleUrls: []
})
export class PagerComponent {

    @Input()
    pager: Pager;

    @Output() pageChangeEvent = new EventEmitter<string>();

    pageChange(event: any) {
        console.log("page changed");
        this.pageChangeEvent.emit(event);
    }
}
