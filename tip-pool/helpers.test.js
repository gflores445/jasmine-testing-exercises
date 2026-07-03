describe("Helpers test", function () {

  beforeEach(function () {
    allPayments = {
      payment1: {
        billAmt: "100",
        tipAmt: "20",
        tipPercent: 20
      },
      payment2: {
        billAmt: "50",
        tipAmt: "10",
        tipPercent: 20
      }
    };
  });

  it("should sum bill amounts", function () {
    expect(sumPaymentTotal("billAmt")).toEqual(150);
  });

  it("should sum tip amounts", function () {
    expect(sumPaymentTotal("tipAmt")).toEqual(30);
  });

  it("should sum tip percentages", function () {
    expect(sumPaymentTotal("tipPercent")).toEqual(40);
  });

  it("should calculate tip percent correctly", function () {
    expect(calculateTipPercent(100, 20)).toEqual(20);
  });

  it("should append a td", function () {
    let newTr = document.createElement("tr");

    appendTd(newTr, "test");

    expect(newTr.children.length).toEqual(1);
    expect(newTr.children[0].innerText).toEqual("test");
  });

  it("should append delete button", function () {
    let newTr = document.createElement("tr");

    appendDeleteBtn(newTr, "server");

    expect(newTr.children.length).toEqual(1);
    expect(newTr.children[0].innerText).toEqual("X");
  });

  afterEach(function () {
    allPayments = {};
  });

});