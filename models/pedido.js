const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PedidoSchema = new Schema({
    origen: String,
    destino: String,
    paquetes: [
        {
            nombre: String,
            peso: Number
        }
    ],
    vehiculo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'vehiculo'
    },
    estado: Boolean,
    total: Number
},
{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

module.exports = mongoose.model('Pedido', PedidoSchema);