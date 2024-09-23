//1 - importamos modulo con require
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

//2 - configuracion
const app = express();
app.use(express.json());
app.use(cors());


//3 - conexion
const conexion = mysql.createConnection({
    host: "localhost",
    database: "personas",
    user: "root",
    password: ""
});

//4 - rutas
app.post('/login', (req, res ) => {
    const db = "SELECT * FROM users WHERE email = ? AND contrasena = ?";
    
    conexion.query(db,[req.body.email, req.body.password],(err, data)=>{
        console.log(req.body, data)
        if(err) return res.json("error en el inicio de sesion");

        if (data.length > 0) {
            return res.status(200).json({ message: "BIENVENIDO A LA PLATAFORMA" });
        } else {
            return res.status(401).json({ message: "Usuario o contraseña incorrectos" });
        }
    })
});

// register
app.post('/register', (req, res) => {
    const { email, password, text, number,tel } = req.body;
    console.log(req.body)

    // Verificar si el correo ya está registrado
    const dbCheck = "SELECT * FROM users WHERE email = ?";
    conexion.query(dbCheck, [email], (err, data) => {
    if (err) return res.status(500).json({ success: false, message: "Error en el registro" });

    if (data.length > 0) {
        return res.status(400).json({ success: false, message: "El correo electrónico ya está registrado" });
    } else {
        // Insertar el nuevo usuario con sus datos
        const dbInsert = "INSERT INTO users (email, contrasena, nombre, documento,telefono ) VALUES (?, ?, ?, ?, ?)";
        conexion.query(dbInsert, [email, password, text, number,tel ], (err, data) => {
            console.log(email, password)
        if (err) {
            console.error(err); // Imprime el error en la consola    
        }
        return res.status(201).json({ success: true, message: "Registro exitoso" });
        });
    }

    });
});
// poner a escuchar al servidor
app.listen(8081,()=>{
    console.log("servidor escuchando...");
})