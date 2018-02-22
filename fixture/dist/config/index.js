"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const convict = require("convict");
const config = convict({
    env: {
        doc: 'The application environment.',
        format: ['development', 'production', 'staging', 'test'],
        default: 'development'
    },
    port: {
        doc: 'The port to bind.',
        format: 'port',
        default: 8081,
        env: 'PORT'
    }
});
exports.default = config;
//# sourceMappingURL=index.js.map