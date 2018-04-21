export class ResponseModel {
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public subject: string,
        public message: string,
        public date: string,
        public type: string,
        public mark: string,
        public timestamp?: number
    ) { }
}