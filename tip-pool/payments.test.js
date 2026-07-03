describe("Payments test", function () {

  beforeEach(function () {
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
  });

  it("should create a payment object", function () {
    let payment = createCurPayment();

    expect(payment.billAmt).toEqual("100");
    expect(payment.tipAmt).toEqual("20");
    expect(payment.tipPercent).toEqual(20);
  });

  it("should return undefined with empty bill amount", function () {
    billAmtInput.value = "";

    let payment = createCurPayment();

    expect(payment).toBeUndefined();
  });

  it("should return undefined with empty tip amount", function () {
    tipAmtInput.value = "";

    let payment = createCurPayment();

    expect(payment).toBeUndefined();
  });

  afterEach(function () {
    billAmtInput.value = "";
    tipAmtInput.value = "";
  });

});