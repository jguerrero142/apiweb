import  express, { Application } from "express";
import  cors  from "cors";
import  morgan  from "morgan";

//Swagger
import  swaggerUI  from "swagger-ui-express";
import  swaggerJsDoc  from "swagger-jsdoc";
import { options } from "./swaggerOptions"


import index from './routes/books.routes';
import booksRoutes from './routes/books.routes';
import usersRoutes from "./routes/users.routes";

class Server {

    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config():void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());        
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        
        
    }

    routes(): void {
        // Rutas de API
        this.app.use('/books', booksRoutes);
        this.app.use('/users', usersRoutes);



        // Configuracion de Swagger
        const specs = swaggerJsDoc(options)
        this.app.use('/docs',swaggerUI.serve, swaggerUI.setup(specs));
    }

    start():void{
        this.app.listen(this.app.get('port'), () => {
            console.log('server in port', this.app.get('port'));
        });
    }
}

    const server = new Server();
    server.start();