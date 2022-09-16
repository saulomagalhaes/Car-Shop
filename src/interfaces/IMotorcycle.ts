import { z } from 'zod';
import { vehicleZodSchema } from './IVehicle';

export const motorcycleZodSchema = vehicleZodSchema.extend({
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z
    .number({
      required_error: 'engineCapacity is required',
      invalid_type_error: 'engineCapacity must be a number',
    })
    .int()
    .positive()
    .max(2500),
});

export type IMotorcycle = z.infer<typeof motorcycleZodSchema>;
