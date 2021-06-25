import { Router } from 'express';
const router = Router();

const path = require('path');
const multer = require('multer');

import { updateProspecto,createProspecto,getProspecto, getProspectoByFolio, createObservacion,getObservacionByFolio} from '../controllers/prospectosController';

router.post('/', createProspecto);
router.get('/', getProspecto);
router.get('/:folio', getProspectoByFolio);
router.put('/:folio', updateProspecto);
router.post('/observacion/',createObservacion);
router.get('/observacion/:folio',getObservacionByFolio);

export default router;