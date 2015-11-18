function Bike() {

  this.working = true;
};

Bike.prototype.isWorking = function() {
  return (this.working);
};
