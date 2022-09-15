import { expect } from "chai";
import * as sinon from "sinon";
import { ZodError } from "zod";
import CarModel from "../../../models/Car";
import CarService from "../../../services/Car";
import { carMock, carMockWithId } from "../../mocks/carMock";

describe("Car Service", () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);

  beforeEach(() => {
    sinon.stub(carModel, "create").resolves(carMockWithId);
  });
  afterEach(() => {
    sinon.restore();
  });
  describe("creating a car", () => {
    it("successfully created", async () => {
      const frameCreated = await carService.create(carMock);

      expect(frameCreated).to.be.deep.equal(carMockWithId);
    });

    it("failure", async () => {
      let error;
      try {
        await carService.create({});
      } catch (err) {
        error = err;
      }

      expect(error).to.be.instanceOf(ZodError);
    });
  });
});
