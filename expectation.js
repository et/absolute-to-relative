"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const index_1 = require("./index");
function expressConfig() {
    const app = express();
    app.disable('x-powered-by');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    return app;
}
exports.default = expressConfig;
//# sourceMappingURL=express.js.map