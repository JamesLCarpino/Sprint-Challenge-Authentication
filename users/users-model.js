const db = require('../database/dbConfig')

module.exports={
    find,
    add,
    findByUsername
}

function find(){
    return db('users')
}

function add(user){
    return db('users').insert(user)
}

function findByUsername(username){
    return db('users').where({username}).first()
}