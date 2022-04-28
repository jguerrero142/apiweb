import { Handler, Request, Response } from "express";
import pool from "../database";

//export const getIndex: Handler = (req, res) => res.send('hello wd');

class UsersController {

    public create = async (req: Request, res: Response) => {
        try {
         const user = await pool .query(`select * from public.users u where "document" = '1151940028'`);
         return res.json(user.rows);
         
        }catch(e){
            console.log(e);
        }
     }

     public add = async (req: Request, res: Response) => {
        try {
         const user = await pool .query(`select * from public.users u where "document" = '1151940028'`);
         return res.json(user.rows);
         
        }catch(e){
            console.log(e);
        }
     }
    
    public setBooks = async (req: Request, res: Response) =>{
        const { product_id, course_id, user_id} = req.body
        try {
            const user = await pool .query(`insert into user_products_courses_permissions (product_id, course_id , user_id) VALUES ($1, $2, $3)`,[product_id, course_id, user_id]);
            return res.json({message: "usuario guardado"});
            
           }catch(e){
               console.log(e);
           }
    }

}

const usersController = new UsersController();
export default usersController;

 