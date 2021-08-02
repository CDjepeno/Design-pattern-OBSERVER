import { WeatherStation } from "../src/classes/WeatherStation";
import { DisplayCondition } from "../src/classes/subscribers/DisplayCondition";
describe("EventListener test suite ", () => {
  it("Sould Be possible to have an EventListener objet", () => {
    const weatherStation = new WeatherStation(10, 15, 322);
    expect(weatherStation).toBeDefined();
  });
  it("Sould be able to tubscribe a specific event", () => {
    const weatherStation = new WeatherStation(10, 15, 322);
    const displayCondition = new DisplayCondition(weatherStation);
    const callback: Function = () => {};

    weatherStation.subscribe(displayCondition);

    expect(weatherStation.subscribe).toBeDefined();
  });
});
