"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const app_controller_1 = __importDefault(require("../controller/app.controller"));
class BooksRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/', app_controller_1.default.setBooks);
    }
}
const booksRoutes = new BooksRoutes();
exports.default = booksRoutes.router;
