export class BookResponse {
    constructor(
        public bookId: number,
        public bookName: string,
        public firstAuthor: string,
        public secondAuthor: string,
        public publisher: string,
        public yearOfPublication: string
    ) {}
}
