(function () {
  document.addEventListener("DOMContentLoaded", function () {
    document
      .getElementById("care_allowance_form")
      .addEventListener("submit", function (event) {
        event.preventDefault();

        const fosteringHistory =
          document.getElementsByName("fostering-history");
        const childrenNumber = document.getElementsByName("children-number");

        let selectedFosteringHistory = null;
        let selectedChildrenNumber = null;

        for (const option of fosteringHistory) {
          if (option.checked) {
            selectedFosteringHistory = option.value;
            break;
          }
        }

        for (const option of childrenNumber) {
          if (option.checked) {
            selectedChildrenNumber = option.value;
            break;
          }
        }

        console.log("Selected Option:", selectedFosteringHistory);

        const starterAmount = ["£25,900", "£51,800", "£77,700", "£103,600"];
        const expertAmount = ["£29,000", "£58,000", "£87,000", "£116,000"];

        // Check if the user selected the first option in fostering-history
        const isFirstOption =
          selectedFosteringHistory === fosteringHistory[0].value;

        // Function to log the result based on the selected amount
        function logResult(amount) {
          console.log("You could receive around:", amount);
        }

        // Check the selected option in children-number and log the result
        if (selectedChildrenNumber === childrenNumber[1].value) {
          if (isFirstOption) {
            logResult(starterAmount[1]);
          } else {
            logResult(expertAmount[1]);
          }
        } else if (selectedChildrenNumber === childrenNumber[2].value) {
          if (isFirstOption) {
            logResult(starterAmount[2]);
          } else {
            logResult(expertAmount[2]);
          }
        } else if (selectedChildrenNumber === childrenNumber[3].value) {
          if (isFirstOption) {
            logResult(starterAmount[3]);
          } else {
            logResult(expertAmount[3]);
          }
        } else {
          if (isFirstOption) {
            logResult(starterAmount[0]);
          } else {
            logResult(expertAmount[0]);
          }
        }
      });
  });
})();
