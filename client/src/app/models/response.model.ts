export class ResponseModel {
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public subject: string,
        public message: string,
        public timestamp?: number
    ) { }
}