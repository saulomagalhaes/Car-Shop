import chai from "chai";
import { Model } from "mongoose";
import * as sinon from "sinon";
import Car from "../../../models/Car";
import { carMock, carMockWithId } from "../../mocks/carMock";
const { expect } = chai;

describe("Car Model", () => {
  const carModel = new Car();
  before(async () => {
    sinon.stub(Model, "create").resolves(carMockWithId);
    sinon.stub(Model, "find").resolves([carMockWithId]);
    sinon.stub(Model, "findOne").resolves(carMockWithId);
    sinon
      .stub(Model, "findOneAndUpdate")
      .onCall(0)
      .resolves(carMockWithId)
      .onCall(1)
      .rejects()
      .onCall(2)
      .resolves(null);
  });

  after(() => {
    sinon.restore();
  });

  describe("Create Car", () => {
    it("Sucess", async () => {
      const newCar = await carModel.create(carMock);
      expect(newCar).to.be.deep.equal(carMockWithId);
    });
  });

  describe("Read", () => {
    it("Sucess", async () => {
      const cars = await carModel.read();
      expect(cars).to.be.deep.equal([carMockWithId]);
    });
  });

  describe("ReadOne", () => {
    it("Sucess", async () => {
      const car = await carModel.readOne("62cf1fc6498565d94eba52cd");
      expect(car).to.be.deep.equal(carMockWithId);
    });

    it("Failure", async () => {
      try {
        await carModel.readOne("123ERRADO");
      } catch (error: any) {
        expect(error.message).to.be.eq("InvalidMongoId");
      }
    });
  });

  describe("Update", () => {
    it("Sucess", async () => {
      const car = await carModel.update("62cf1fc6498565d94eba52cd", carMock);
      expect(car).to.be.deep.equal(carMockWithId);
    });

    it("Failure", async () => {
      try {
        await carModel.update("123ERRADO", carMock);
      } catch (error: any) {
        expect(error.message).to.be.eq("InvalidMongoId");
      }
    });
  });
});
