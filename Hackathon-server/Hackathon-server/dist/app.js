"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const reqRoutes_1 = require("./routes/reqRoutes");
class App {
    constructor() {
        this.routePrv = new reqRoutes_1.Routes();
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map