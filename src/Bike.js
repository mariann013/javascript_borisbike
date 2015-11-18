function Bike() {

  this.working = true;
};

Bike.prototype.isWorking = function() {
  return (this.working);
};

Bike.prototype.break = function() {
  this.working = false;
};
