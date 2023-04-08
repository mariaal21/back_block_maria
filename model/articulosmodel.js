const { Pool } = require("pg")
const queries = require("./queris")

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    database: "blog",
    password: "admin"
})

//get all entries by author
const getAutorArticulos = async (email, limit, skip) => {
    let client, result;
    try {
        client = await pool.connect()
        const data = await client.query(queries.TodosLosArticulos, [email, limit, skip])
        result = data.rows
    } catch (error) {
        console.log(error)
        throw error
    } finally { client.release() }

    return result
}

const getTodosArticulos = async (limit, skip) => {
    let client, result;
    try {
        client = await pool.connect()
        const data = await client.query(queries.getTodosArticles, [limit, skip])
        result = data.rows
    } catch (error) {
        console.log(error)
        throw error
    } finally { client.release() }

    return result
}

const getArticulosNombre = async (title, author) => {
    let client, result;
    try {
        client = await pool.connect()
        const data = await client.query(queries.UnArticulo, [title, author])
        result = data.rows

    } catch (error) {
        console.log(error)
        throw error
    } finally { client.release() }
    return result
}

const createArticuloNuevo = async (body, email) => {
    let client, result;
    try {
        client = await pool.connect()
        result = await client.query(queries.crearArticle, [body.title, body.content, body.extract, body.image, email, body.category])
    } catch (error) {
        console.log(error)
        throw error
    } finally { client.release() }
    return result
}

const changeArticulo = async (body, email, title) => {
    let client, result;
    try {
        client = await pool.connect()
        result = await client.query(queries.actualizarArtiuclo, [body.title, body.content, body.extract, body.image, email, body.category, title])
    } catch (error) {
        console.log(error)
        throw error
    } finally { client.release() }
    return result
}
const borrarArticulo = async (email, title) => {
    let client, result;
    try {
        client = await pool.connect()
        result = await client.query(queries.eliminarArticulo, [title, email])
    } catch (error) {
        console.log(error)
        throw error
    } finally { client.release() }
    return result
}
const buscarArticulo = async (search, limit, skip) => {
    let client, result;
    try {
        client = await pool.connect()
        data = await client.query(queries.buscarArticulos, [`%${search}%`, limit, skip])
        result = data.rows
    } catch (error) {
        console.log(error)
        throw error
    } finally { client.release() }
    return result
}
module.exports = 
{
    getAutorArticulos, 
    getTodosArticulos, 
    getArticulosNombre, 
    createArticuloNuevo, 
    changeArticulo, 
    borrarArticulo,
    buscarArticulo 
}