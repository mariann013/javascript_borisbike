describe ("Bike", function() {

  beforeEach( function () {
    bike = new Bike();
  });

  it("should be working by default", function () {
    expect(bike.isWorking()).toEqual(true);
  });

})
