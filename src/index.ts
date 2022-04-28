// import app from './app';

// app.listen(app.get('port'))
// console.log('server on port 3000')
// const { Pool } = require('pg');

// const config = {
//         user: 'postgres',
//         host: 'conectados-lteprod.cguzmfwfdc9x.us-east-1.rds.amazonaws.com',
//         port: '5432',
//         password: 'DjQL7xv4KGFNgzSIl5V3',
//         database: 'lteprod'
// }

// const pool = new Pool(config)

// const getBooks = async () => {
//    try {
//     const res = await pool.query(`select * from comercial.orden_estudiantes oe where identificacion = '1151940028'`);
//     console.log(res.rows);
//     pool.end();
//    }catch(e){
//        console.log(e);
//    }
// }

// getBooks();