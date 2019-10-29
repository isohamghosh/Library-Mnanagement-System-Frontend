export class RequestedBookResponse {
    constructor(
        public registrationId: number,
        public bookId: string,
        public userId: string,
        public registrationDate: any
    ) { }
}
