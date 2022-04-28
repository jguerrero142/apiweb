import { Router } from 'express';
import booksController from '../controller/books.controller';


class BooksRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.post('/setbooks', booksController.setBooks );
    }
}


const booksRoutes = new BooksRoutes();
export default booksRoutes.router;
