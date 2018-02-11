const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    nombre: String,
    correo: String,
    telefono: Number,
    direccion: String,
    activo: Boolean,
    rol: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'rol'
    }
},
{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
