function DockingStation(capacity) {
  this.bikes = [];
  this.capacity = capacity || 20;
};

DockingStation.prototype.dock = function(bike) {
  if (this.bikes.length === this.capacity) {
    throw "Sorry, docking station full!";
  } else {
    this.bikes.push(bike);
  };
};

DockingStation.prototype.release = function(bike) {
  if (this.bikes.length === 0) {
    throw "Sorry, there are no bikes!";
  } else {
    this.bikes.splice(this.bikes.indexOf(bike), 1);
  };
};

DockingStation.prototype.reportBreak = function(bike) {
  bike.break();
  return bike.isWorking();
};
