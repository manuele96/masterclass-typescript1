"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userControllers_1 = __importDefault(require("./controllers/userControllers"));
const routes = (0, express_1.Router)();
routes.get("/user", userControllers_1.default.index);
routes.post("/user", userControllers_1.default.create);
exports.default = routes;
