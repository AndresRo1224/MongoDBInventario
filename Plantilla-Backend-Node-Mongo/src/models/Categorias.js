// filepath: d:\Usuario\Desktop\universidad\cloud-computing\Plantilla-Backend-Node-Mongo\Plantilla-Backend-Node-Mongo\src\models\Categorias.js
import mongoose from 'mongoose';
const categoriaSchema = new mongoose.Schema({
    CategoriaID: {
        type: String,
        required: true,
        trim: true
    },
    CategoriaNombre: {
        type: String,
        required: true,
        trim: true
    },
    Descripcion: {
        type: String,
        required: true,
        trim: true
    },
    Imagen: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
});
const Categoria = mongoose.model('categorias', categoriaSchema); // nombre igual a la colección
export default Categoria;