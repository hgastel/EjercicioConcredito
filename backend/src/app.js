import express, {json} from 'express';
import morgan from 'morgan';
const cors = require('cors');
const path = require('path');

// Importing routes
import prospRoutes from './routes/prospectos';

// initialization
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(json());
app.use(cors());

// routes
app.use('/api/prospectos',prospRoutes);

// Routes
app.use(require('./routes/image.routes'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));


export default app;