"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
//export const getIndex: Handler = (req, res) => res.send('hello wd');
class UsersController {
    constructor() {
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield database_1.default.query(`select * from public.users u where "document" = '1151940028'`);
                return res.json(user.rows);
            }
            catch (e) {
                console.log(e);
            }
        });
        this.add = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield database_1.default.query(`select * from public.users u where "document" = '1151940028'`);
                return res.json(user.rows);
            }
            catch (e) {
                console.log(e);
            }
        });
        this.setBooks = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { product_id, course_id, user_id } = req.body;
            try {
                const user = yield database_1.default.query(`insert into user_products_courses_permissions (product_id, course_id , user_id) VALUES ($1, $2, $3)`, [product_id, course_id, user_id]);
                return res.json({ message: "usuario guardado" });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
}
const usersController = new UsersController();
exports.default = usersController;
