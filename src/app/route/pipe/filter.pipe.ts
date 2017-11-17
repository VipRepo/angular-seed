import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})

export class FilterPipe implements PipeTransform {
    transform(items: any[], args: any[]): any {
        if (args && items) {
            return items.filter(item => {
                let name: string = item.name;
                return name.toLowerCase().indexOf(args.toString().toLowerCase()) !== -1
            });
        }
        else {
            return items;
        }
        // console.log(items);
        // console.log(args);

    }
}
