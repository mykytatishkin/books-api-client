export class Picture {
    id: number;
    bookId: number;
    imageUrl: any;
    
    constructor(id: number, bookId: number, imageUrl: any) {
        this.id = id;
        this.bookId = bookId;
        this.imageUrl = imageUrl;
    }
}
