export class RecipeModel {
    constructor(
        public id: number,
        public title: string,
        public preparation: string,
        public ingredients: string[],
        public image: string,
        public type: string,
        public author?: string,
        public timestamp?: number
    ) { }
}