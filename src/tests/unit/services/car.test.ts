import { expect } from "chai";
import * as sinon from "sinon";
import { ZodError } from "zod";
import { ErrorTypes } from "../../../errors/catalog";
import CarModel from "../../../models/Car";
import CarService from "../../../services/Car";
import { carMock, carMockWithId } from "../../mocks/carMock";

describe("Car Service", () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);

  before(() => {
    sinon.stub(carModel, "create").resolves(carMockWithId);
    sinon.stub(carModel, "read").resolves([carMockWithId]);
    sinon
      .stub(carModel, "readOne")
      .onCall(0)
      .resolves(carMockWithId)
      .onCall(1)
      .resolves(null);
    sinon
      .stub(carModel, "update")
      .onCall(0)
      .resolves(carMockWithId)
      .onCall(1)
      .resolves(null);
    sinon
      .stub(carModel, "delete")
      .onCall(0)
      .resolves(carMockWithId)
      .onCall(1)
      .resolves(null);
  });
  after(() => {
    sinon.restore();
  });
  describe("Create Car", () => {
    it("Success", async () => {
      const carCreated = await carService.create(carMock);

      expect(carCreated).to.be.deep.equal(carMockWithId);
    });

    it("Failure - Zod Fails", async () => {
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
      const cars = await carService.read();
      expect(cars).to.be.deep.equal([carMockWithId]);
    });
  });

  describe("ReadOne", () => {
    it("Success", async () => {
      const car = await carService.readOne("62cf1fc6498565d94eba52cd");
      expect(car).to.be.deep.equal(carMockWithId);
    });

    it("Failure - Not Found", async () => {
      let error;
      try {
        await carService.readOne("123ERRADO");
      } catch (err: any) {
        error = err;
      }
      expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
    });
  });

  describe("Update", () => {
    it("Success", async () => {
      const carCreated = await carService.update(
        "62cf1fc6498565d94eba52cd",
        carMock
      );
      expect(carCreated).to.be.deep.equal(carMockWithId);
    });

    it("Failure - Zod Fails", async () => {
      let error;
      try {
        await carService.update("62cf1fc6498565d94eba52cd", {});
      } catch (err) {
        error = err;
      }
      expect(error).to.be.instanceOf(ZodError);
    });

    it("Failure - Not Found", async () => {
      let err: any;
      try {
        await carService.update("any-id", carMock);
      } catch (error) {
        err = error;
      }
      expect(err.message).to.be.eq(ErrorTypes.EntityNotFound);
    });
  });

  describe("Delete", () => {
    it("Success", async () => {
      const car = await carService.delete("62cf1fc6498565d94eba52cd");
      expect(car).to.be.deep.equal(carMockWithId);
    });

    it("Failure - Not Found", async () => {
      let error;
      try {
        await carService.delete("any-id");
      } catch (err: any) {
        error = err;
      }
      expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
    });
  });
});
