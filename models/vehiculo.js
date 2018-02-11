const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VehiculoSchema = new Schema({
    tipo: String,
    capacidad: Number,
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usuario'
    },
    activo: Boolean
},
{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

module.exports = mongoose.model('Vehiculo', VehiculoSchema);