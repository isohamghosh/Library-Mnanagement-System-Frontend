export class AllocatedBookResponse {
    constructor(
        public transactionId: number,
        public studentId: number,
        public registrationId: number,
        public issueDate: any,
        public returnDate: any,
        public fine: number
    ) { }
}
