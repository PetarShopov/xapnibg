export class BeverageModel {
    constructor(
        public id: number,
        public name: string,
        public preparation: string,
        public preparationTime: number,
        public ingredients: string[],
        public image: string,
        public author?: string,
        public timestamp?: number
    ) { }
}