import { z } from 'zod';
import { vehicleZodSchema } from './IVehicle';

export const carZodSchema = vehicleZodSchema.extend({
  doorsQty: z
    .number({
      required_error: 'doorsQty is required',
      invalid_type_error: 'doorsQty must be a number',
    })
    .int()
    .positive()
    .min(2)
    .max(4),
  seatsQty: z
    .number({
      required_error: 'seatsQty is required',
      invalid_type_error: 'seatsQty must be a number',
    })
    .int()
    .min(2)
    .max(7),
});

export type ICar = z.infer<typeof carZodSchema>;
