import Sequelize from 'sequelize';
import { sequelize } from '../database/databse';

const Prospecto = sequelize.define('prospectos', 
{
    folio: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.CHAR
    },
    primerapellido: {
        type: Sequelize.CHAR
    },
    segundoapellido: {
        type: Sequelize.CHAR
    },
    calle: {
        type: Sequelize.CHAR
    },
    numero: {
        type: Sequelize.CHAR
    },
    colonia: {
        type: Sequelize.CHAR
    },
    codigopostal: {
        type: Sequelize.INTEGER
    },
    telefono: {
        type: Sequelize.CHAR
    },
    rfc: {
        type: Sequelize.CHAR
    },
    estatus: {
        type: Sequelize.CHAR
    }
}, {
    timestamps: false
})

export default Prospecto;