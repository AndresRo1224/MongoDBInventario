import Categoria from "../models/Categorias.js";
const obtenerCategorias = async (req, res) => {
    const categorias = await Categoria.find();
    console.log("Categorias encontradas:", categorias); // <-- Agrega este log
    res.json(categorias);
};
export { obtenerCategorias };