import chai from "chai";
import { Model } from "mongoose";
import * as sinon from "sinon";
import Car from "../../../models/Car";
import { carMock, carMockWithId } from "../../mocks/carMock";
const { expect } = chai;

describe("Car Model", () => {
  const carModel = new Car();
  beforeEach(async () => {
    sinon.stub(Model, "create").resolves(carMockWithId);
  });

  afterEach(() => {
    sinon.restore();
  });

  describe("creating a car", () => { 
    it("successfully created", async () => { 
      const newCar = await carModel.create(carMock);
			expect(newCar).to.be.deep.equal(carMockWithId);
    });
  });
});
