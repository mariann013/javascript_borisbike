describe ("DockingStation", function() {

  var bike;

  beforeEach( function() {
    dockingStation = new DockingStation;
    bikes = [];
    // plane = { land: function(){}, isLanded: function(){ return true} }
    capacity = dockingStation.capacity;
  });

  it("should dock a bike", function() {
    dockingStation.dock(bike);
    expect(dockingStation.bikes).toEqual([bike]);
  });

  it("should release a bike", function () {
    dockingStation.dock(bike);
    dockingStation.releaseBike(bike);
    expect(dockingStation.bikes).toEqual([]);
  });
})
