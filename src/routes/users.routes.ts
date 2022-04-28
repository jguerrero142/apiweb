import { Router } from 'express';
import usersController from '../controller/users.controller';



class UsersRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/add', usersController.create );
    }
}


const usersRoutes = new UsersRoutes();
export default usersRoutes.router;