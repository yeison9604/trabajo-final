import sql from "mssql"

const config = {

    user: "tdea",
    password: "losmejores123",
    server: "localhost",
    database: "Taller1",
    options:{
        encrypt:true,
        trustServerCertificate:true,
    }

};

async function getConexion(){
    const con = await sql.connect(config);
}