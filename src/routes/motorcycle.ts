import { Router } from 'express';
import MotorcycleController from '../controllers/Motorcycle';
import MotorcycleModel from '../models/Motorcycle';
import MotorcycleService from '../services/Motorcycle';

const motorcycles = 'motorcycles';
const route = Router();

const motorcycleModel = new MotorcycleModel();
const motorcycleService = new MotorcycleService(motorcycleModel);
const motorcycleController = new MotorcycleController(motorcycleService);

route.post('/motorcycles', (req, res) => motorcycleController.create(req, res));
route.get('/motorcycles', (req, res) => motorcycleController.read(req, res));
route.get('/motorcycles/:id', (req, res) => motorcycleController.readOne(req, res));
route.put('/motorcycles/:id', (req, res) => motorcycleController.update(req, res));
route.delete(`/${motorcycles}/:id`, (req, res) => motorcycleController.delete(req, res));

export default route;