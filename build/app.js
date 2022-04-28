"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
//Swagger
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerOptions_1 = require("./swaggerOptions");
const books_routes_1 = __importDefault(require("./routes/books.routes"));
const users_routes_1 = __importDefault(require("./routes/users.routes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        // Rutas de API
        this.app.use('/books', books_routes_1.default);
        this.app.use('/users', users_routes_1.default);
        // Configuracion de Swagger
        const specs = (0, swagger_jsdoc_1.default)(swaggerOptions_1.options);
        this.app.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('server in port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
