export class Picture {
    id: number;
    bookId: number;
    imageUrl: string;
    
    constructor(id: number, bookId: number, imageUrl: string) {
        this.id = id;
        this.bookId = bookId;
        this.imageUrl = imageUrl;
    }
}
