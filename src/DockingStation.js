function DockingStation(capacity) {
  this.bikes = [];
  this.capacity = capacity || 20;
};

DockingStation.prototype.dock = function(bike) {
  this.bikes.push(bike);
};

DockingStation.prototype.releaseBike = function(bike) {
  this.bikes.splice(this.bikes.indexOf(bike), 1);
};
