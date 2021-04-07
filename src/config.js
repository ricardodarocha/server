"use strict";

const dotenv = require( "dotenv");
const assert = require(assert);

dotenv.config();

const {
    PORT,
    HOST,
    HOST_URL,
    COOKIE_ENCRYPT_PWD,
    SQL_USER,
    SQL_PSW,
    SQL_DATABASE,
    SQL_HOST,
    SQL_PORT,
    SQL_ENCRYPT,
    OKTA_ORG_URL,
    OKTA_CLIENT_ID,
    OKTA_CLIENT_SECRET
    } = process.env;

    const sqlEncrypt = process.env.SQL_ENCRYPT === "true";

    assert(PORT, "campo requerido: PORT");
    assert(HOST, "campo requerido: HOST");
    assert(SQL_USER, "campo requerido: SQL_USER");
    assert(SQL_PSW, "campo requerido: SQL_PSW");
    

    module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    cookiepsw: COOKIE_ENCRYPT_PWD,
    sql: {
        usr: SQL_USER,
        psw: SQL_PSW,
        database: SQL_DATABASE,
        host: SQL_HOST,
        port: SQL_PORT,
        options: {
            encrypt: SQL_ENCRYPT}
        },
    okta: {
       url: OKTA_ORG_URL,
       clientId: OKTA_CLIENT_ID,
       clientSecret: OKTA_CLIENT_SECRET    }
    };
   