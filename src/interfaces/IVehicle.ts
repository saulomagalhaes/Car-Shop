import { z } from 'zod';

export const vehicleZodSchema = z.object({
  model: z
    .string({
      required_error: 'Model is required',
      invalid_type_error: 'Color must be a string',
    })
    .min(3),
  year: z
    .number({
      required_error: 'Year is required',
      invalid_type_error: 'Year must be a number',
    })
    .int()
    .min(1900)
    .max(2022),
  color: z
    .string({
      required_error: 'Color is required',
      invalid_type_error: 'Color must be a string',
    })
    .min(3, { message: 'Color must be 3 or more characters long' }),
  status: z.boolean().optional(),
  buyValue: z
    .number({
      required_error: 'buyValue is required',
      invalid_type_error: 'buyValue must be a number',
    })
    .int(),
});

export type IVehicle = z.infer<typeof vehicleZodSchema>;
