describe ("Bike", function() {

  beforeEach( function () {
    bike = new Bike();
  });

  it("should be working by default", function () {
    expect(bike.isWorking()).toEqual(true);
  });

  it("should be able to break a bike", function() {
    bike.break();
    expect(bike.isWorking()).toEqual(false);
  });
})
