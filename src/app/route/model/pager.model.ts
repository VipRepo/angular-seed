export class Pager {
    constructor(public collectionSize: number,
        public maxSize: number,
        public page: number,
        public pageSize: number
    ) {
        this.collectionSize = collectionSize;
        this.maxSize = maxSize;
        this.page = page;
        this.pageSize = pageSize;
    }
}
