const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RolSchema = new Schema({
    nombre: String,
    descripcion: String,
    activo: Boolean
},
{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

module.exports = mongoose.model('Rol', RolSchema);