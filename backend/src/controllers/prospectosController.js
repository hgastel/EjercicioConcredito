import Prospecto from '../models/ProspectosModel';
import QueryTypes from 'sequelize';
import { sequelize } from '../database/databse';

export async function getProspecto(req,res){

    try
    {
        const prospectos = await sequelize.query(`select folio as "Folio", nombre as "Nombre",primerapellido as "Primer Apellido", segundoapellido as "Segundo Apellido", estatus as "Estatus" from prospectos ORDER BY 1 ASC`, { type: QueryTypes.SELECT, plain: false});
        res.json(prospectos[0]);
        //console.log(prospectos[0]);
    }catch(e)
    {
        console.log(e);
    }
    
}

export async function getProspectoByFolio(req,res){
    const { folio } = req.params;
    try
    {
        const prospectos = await sequelize.query(`select folio as "Folio", nombre as "Nombre",primerapellido as "Primer Apellido", segundoapellido as "Segundo Apellido", calle as "Calle", numero as "Numero", colonia as "Colonia", codigopostal as "Codigo Postal", telefono as "Telefono", rfc as "RFC", estatus as "Estatus" from prospectos where folio = :folio`, { type: QueryTypes.SELECT, plain: false, replacements: {folio:folio}});
        res.json(prospectos[0]);
        //console.log(prospectos[0]);
    }catch(e)
    {
        console.log(e);
    }
}


export async function createProspecto(req,res){

    let { nombre,primerapellido,segundoapellido,calle,numero,colonia,codigopostal,telefono,rfc,estatus} = req.body;

    console.log(req.body);

    try{
        let newProspecto = await Prospecto.create({
            nombre,
            primerapellido,
            segundoapellido,
            calle,
            numero,
            colonia,
            codigopostal,
            telefono,
            rfc,
            estatus
        }, {
            fields: ['nombre','primerapellido','segundoapellido','calle','numero','colonia','codigopostal','telefono','rfc','estatus']
        });
        if (newProspecto){

            return res.json({
                message: '1',
                data: newProspecto,
            });
        }
    } catch(e) {
        console.log(e);
        res.status(500).json({
            message: '0',
            data: {}
        });
    }
}

export async function createObservacion(req,res){
    
        let { folio, observacion} = req.body;
    
        console.log(req.body);

        try
        {
            const prospectos = await sequelize.query(`INSERT INTO rechazados (folio,observacion) values (:folio,:observacion);`, { type: QueryTypes.INSERT, plain: false,replacements: {folio:folio,observacion:observacion}});
            return res.json({
                message: 'Observacion creada con exito!'
            });
            //console.log(prospectos[0]);
        }catch(e)
        {
            console.log(e);
        }
    }

export async function getObservacionByFolio(req,res){
        const { folio } = req.params;

        try
        {
            const prospectos = await sequelize.query(`select observacion from rechazados where folio = :folio LIMIT 1;`, { type: QueryTypes.SELECT, plain: false, replacements: {folio:folio}});
            res.json(prospectos[0]);
            //console.log(prospectos[0]);
        }catch(e)
        {
            console.log(e);
        }
    }

export async function updateProspecto(req,res)
{
    const { folio } = req.params;
    let { estatus } = req.body;

    try{
        const prospectos = await Prospecto.findAll({
            attributes: ['folio','estatus'],
            where: {
                folio
            }
        });
        if(prospectos.length > 0)
        {
            prospectos.forEach(async prospecto => {
                await prospecto.update({
                    estatus
                });
            })
        }
    
        return res.json({
            message: 'Prospecto actualizado exitosamente',
            data: prospectos
        })
    }catch(e){
        console.log(e);
    }
}