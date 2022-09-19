import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';
import errorHandler from './middlewares/error';
import carRouter from './routes/cars';
import motorcycleRouter from './routes/motorcycle';
import swaggerDocument from './swagger.json';

const app = express();
app.use(cors());
app.use(express.json());
app.use(carRouter);
app.use(motorcycleRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(errorHandler);

export default app;
