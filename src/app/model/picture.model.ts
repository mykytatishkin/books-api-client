export class Picture {
    id: number;
    bookId: number;
    imageUrl: any;
    
    constructor(bookId: number, imageUrl: any) {
        this.id = 0;
        this.bookId = bookId;
        this.imageUrl = imageUrl;
    }
}
