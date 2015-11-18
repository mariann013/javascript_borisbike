function DockingStation(capacity) {
  this.bikes = [];
  this.capacity = capacity || 20;
};

DockingStation.prototype.dock = function(bike) {
  this.bikes.push(bike);
};
