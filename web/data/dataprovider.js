const peliculas = require('./data.json');
var usuarios = require("./users.json");

function getAllData() {
    return peliculas;
}

function validateUser(email,password){
    let u = usuarios.filter(
        (u)=>{
            return( (u.email==email) && (u.password==password) )
        }
    )
    if(u.length>0)
        return u[0]
    else
        return null
    
}

module.exports = {
    getAllData,
    validateUser
};
