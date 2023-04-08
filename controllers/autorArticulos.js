const {
    getAutorArticulos,
    getTodosArticulos,
    getArticulosNombre,
    createArticuloNuevo,
    changeArticulo,
    borrarArticulo,
    buscarArticulo
} = require("../model/articulosmodel")

const getArticuloAutor = async (req, res) => {
    let { author, limit, skip } = req.params
    try {
        const entries = await getAutorArticulos(author, limit, skip)
        if (entries.length == 0) {
            return res.status(404).json({ ok: false, msg: "No hay nada" })
        } else {
            return res.status(200).json({
                ok: true,
                entries
            })
        }
    } catch (error) {
        res.status(500).json({ ok: false, msg: "Error" })
    }
}

const getArticulos = async (req, res) => {
    let { limit, skip } = req.params
    try {
        const entries = await getTodosArticulos(limit, skip)
        if (entries.length == 0) {
            return res.status(404).json({ ok: false, msg: "No hay nada" })
        } else {
            return res.status(200).json({
                ok: true,
                entries
            })
        }
    } catch (error) {
        res.status(500).json({ ok: false, msg: "Error" })
    }
}


const getArticulo = async (req, res) => {
    const { title, author } = req.params
    try {
        const entry = await getArticulosNombre(title, author)
        if (entry.length == 0) {
            res.status(404).json({ ok: false, msg: "No se encuentran articulos" })
        } else { res.status(200).json({ ok: true, entry }) }
    } catch (error) {
        res.status(500).json({ ok: false, msg: "Error" })
    }
}

const createArticulo = async (req, res) => {
    const body = req.body
    const { author } = req.params
    try {
        await createArticuloNuevo(body, author)
        res.status(201).json({ ok: true })
    } catch (error) {
        res.status(500).json({ ok: false, msg: "Error" })
    }

}
const updateArticulo = async (req, res) => {
    const { title, author } = req.params
    const body = req.body
    try {
        await changeArticulo(body, author, title)
        res.status(201).json({ ok: true })
    } catch (error) {
        res.status(500).json({ ok: false, msg: "Error " })
    }
}
const deleteArticulo = async (req, res) => {
    const { title, author } = req.body
    try {
        await borrarArticulo(author, title)
        res.status(200).json({ ok: true })
    } catch (error) {
        res.status(500).json({ ok: false, msg: "Error " })
    }
}

const searchArticulo = async (req, res) => {
    const { search, limit, skip } = req.params
    try {
        const entries = await buscarArticulo(search, limit, skip)
        if (entries.length == 0) { res.status(404).json({ ok: false, msg: "No hay nada" }) }
        else {
            res.status(200).json({ ok: true, entries })
        }
    } catch (error) {
        res.status(500).json({ ok: false, msg: "Error" })
    }
}

module.exports = 
{ 
    getArticuloAutor, 
    getArticulos, 
    getArticulo, 
    createArticulo, 
    updateArticulo, 
    deleteArticulo, 
    searchArticulo
}