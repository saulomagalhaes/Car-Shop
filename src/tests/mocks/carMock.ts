import { ICar } from "../../interfaces/ICar";

export const carMock:ICar= {
  model: 'Ferrari',
  year: 2021,
  color: 'red',
  status: true,
  buyValue: 100000,
  doorsQty: 2,
  seatsQty: 2,
};

export const carMockWithId:ICar & { _id:string } = {
  _id: '62cf1fc6498565d94eba52cd',
  model: 'Ferrari',
  year: 2021,
  color: 'red',
  status: true,
  buyValue: 100000,
  doorsQty: 2,
  seatsQty: 2,
};