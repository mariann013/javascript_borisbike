describe ("DockingStation", function() {

  var bike;

  beforeEach( function() {
    dockingStation = new DockingStation;
    bikes = [];
    bike = { isWorking: function(){}, break: function(){} }
    capacity = dockingStation.capacity;
  });

  it("should dock a bike", function() {
    dockingStation.dock(bike);
    expect(dockingStation.bikes).toEqual([bike]);
  });

  it("should release a bike when there is a bike", function () {
    dockingStation.dock(bike);
    dockingStation.release(bike);
    expect(dockingStation.bikes).toEqual([]);
  });

  it("should throw errror if there are no bikes available", function () {
      expect(function() { dockingStation.release(bike) }).toThrow("Sorry, there are no bikes!");
  });

  it("should throw error if station has reached capacity", function() {
    for(var i = 0; i <capacity; ++i) {
      dockingStation.dock(bike);
    };
    expect( function() { dockingStation.dock(bike) }).toThrow("Sorry, docking station full!");
  });

  it("should be able to report broken bike", function () {
    bike = new Bike;
    dockingStation.reportBreak(bike);
    expect(bike.isWorking()).toEqual(false);
  });
})
