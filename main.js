var $ = jQuery.noConflict();
if (typeof loanCalc !== "undefined") {
  $(document).ready(() => {
    locationChange();
  });
  let currentAmount = 500;
  $("#r1").ionRangeSlider({
    skin: "big",
    values: [500, 1000, 1600, 2500, 5000],
    prefix: "$",
    prettify_separator: ",",
    grid: true,
    grid_margin: false,
    onStart: (data) => {
      currentAmount = data.from_value;
      calculateLoan(data.from_value);
      $(".irs-grid-pol").click((evt) => {
        let nextSibling = evt.target.nextElementSibling;
        if (nextSibling && nextSibling.className) {
          loanRange.update({
            from: nextSibling.className.replace(
              "irs-grid-text js-grid-text-",
              ""
            ),
          });
        }
      });
    },
    onChange: (data) => {
      currentAmount = data.from_value;
      calculateLoan(data.from_value);
    },
    onUpdate: (data) => {
      currentAmount = data.from_value;
      calculateLoan(data.from_value);
      $(".irs-grid-pol").click((evt) => {
        let nextSibling = evt.target.nextElementSibling;
        if (nextSibling && nextSibling.className) {
          loanRange.update({
            from: nextSibling.className.replace(
              "irs-grid-text js-grid-text-",
              ""
            ),
          });
        }
      });
    },
  });
  let loanRange = $("#r1").data("ionRangeSlider");
  const calculateLoan = (amount) => {
    if (!amount) {
      amount = currentAmount;
    }
    const location = $("#location").val();
    if (loanCalc && loanCalc[location] && loanCalc[location][amount]) {
      let loanSplit = loanCalc[location][amount];
      $("#month").text(loanSplit.monthsLoanLength);
      $("#totalCost").text(loanSplit.paymentAmount);
      $("#paymentText").text(loanSplit.paymentText);
      $("#totalPayments").text(loanSplit.numberOfPayments);
      $("");
      if (loanSplit.APR) {
        let apr = loanSplit.APR.split("%");
        $("#apr").text(`${parseFloat(apr[0])}%`);
      }
    } else {
      $("#month").text(0);
      $("#totalCost").text("$0");
      $("#apr").text("0%");
      $("#totalPayments").text(0);
    }
  };

  const locationChange = () => {
    const location = $("#location").val();
    const locationName = $("#location option:selected").text();
    if (location) {
      if (window.location && window.location.pathname.indexOf("/es/") > -1) {
        $("#titleLocation").text(`en ${locationName.toUpperCase()}`);
      } else {
        $("#titleLocation").text(`in ${locationName.toUpperCase()}`);
      }
    } else {
      $("#titleLocation").text("");
    }
    if (loanCalc && loanCalc[location]) {
      let ranges = Object.keys(loanCalc[location]);
      loanRange.update({
        values: ranges.map((value) => parseInt(value)),
      });
    }
    calculateLoan();
  };
}
