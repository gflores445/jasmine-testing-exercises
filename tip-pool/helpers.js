
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}


function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}

function appendDeleteBtn(tr, type) {
  let newTd = document.createElement("td");
  newTd.innerText = "X";
  newTd.setAttribute("class", "deleteBtn");
  newTd.addEventListener("click", function(evt) {
    removeElement(evt, type);
  });

  tr.append(newTd);
}

function removeElement(evt, type) {
  let target = evt.target.parentElement;

  if (type === "payment") {
    delete allPayments[target.id];
    updateSummary();
  } else if (type === "server") {
    delete allServers[target.id];
    updateServerTable();
  }

  target.remove();
}
