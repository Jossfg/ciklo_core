const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    nombre: String,
    correo: String,
    telefono: Number,
    direccion: String,
    rol: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'rol'
    },
    activo: Boolean
},
{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
