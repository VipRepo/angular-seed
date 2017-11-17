export class Repo {
    constructor(public name: string,
        public desc: string,
        public stars: any,
        public openIssues: number,
        public forksCount: number,
        public gitURL: string,
        public watcherCount: number,
    ) {
        this.name = name;
        this.desc = desc;
        this.stars = stars;
        this.openIssues = openIssues;
        this.forksCount = forksCount;
        this.gitURL = gitURL;
        this.watcherCount = watcherCount;
    }
}
