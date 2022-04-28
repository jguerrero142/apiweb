"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Pool } = require('pg');
const lte = {
    user: 'postgres',
    host: 'conectados-lteprod.cguzmfwfdc9x.us-east-1.rds.amazonaws.com',
    port: '5432',
    password: 'DjQL7xv4KGFNgzSIl5V3',
    database: 'lteprod'
};
const campus = {
    user: 'postgres',
    host: 'campuslte-prod.cguzmfwfdc9x.us-east-1.rds.amazonaws.com',
    port: '5432',
    password: 'ApoloSistemas_2020$',
    database: 'postgres'
};
const pool = new Pool(campus);
exports.default = pool;
