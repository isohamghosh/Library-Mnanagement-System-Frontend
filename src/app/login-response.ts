export class LoginResponse {
    constructor(
        public id: number,
        public name: string,
        public emailId: string,
        public password: string,
        public role: string
    ) {}
}
