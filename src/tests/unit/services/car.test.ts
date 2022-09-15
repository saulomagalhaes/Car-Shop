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
    sinon.stub(carModel, "read").resolves([carMockWithId]);
  });
  afterEach(() => {
    sinon.restore();
  });
  describe("Create Car", () => {
    it("Success", async () => {
      const carCreated = await carService.create(carMock);

      expect(carCreated).to.be.deep.equal(carMockWithId);
    });

    it("Failure", async () => {
      let error;
      try {
        await carService.create({});
      } catch (err) {
        error = err;
      }

      expect(error).to.be.instanceOf(ZodError);
    });
  });

  describe("Read", () => {
    it("Success", async () => {
      const carCreated = await carService.read();

      expect(carCreated).to.be.deep.equal([carMockWithId]);
    });
  });
});
