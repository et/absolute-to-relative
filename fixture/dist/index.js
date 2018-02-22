"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as Knex from 'knex';
//import { Model } from 'objection';
const index_1 = require("config/index");
const express_1 = require("config/express");
// const knexConfig = require('../knexfile');
// // Initialize knex.
// export const knex = Knex(knexConfig[config.get('env')]);
//
// // Create or migrate:
// knex.migrate.latest();
//
// // Bind all Models to a knex instance. If you only have one database in
// // your server this is all you have to do. For multi database systems, see
// // the Model.bindKnex method.
// Model.knex(knex);
//
const app = express_1.default();
app.set('port', index_1.default.get('port'));
exports.default = app;
//# sourceMappingURL=app.js.map