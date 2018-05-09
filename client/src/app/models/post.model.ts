export class PostModel {
    constructor(
        public id: number,
        public content: string,
        public likes: number,
        public comments: string[],
        public image: string,
        public author?: string,
        public timestamp?: number
    ) { }
}