(function () {
  document.addEventListener("DOMContentLoaded", function () {
    document
      .getElementById("care_allowance_form")
      .addEventListener("submit", function (event) {
        event.preventDefault();

        document.getElementById("summary-grid").style.display = "block";

        const fosteringHistory =
          document.getElementsByName("fostering-history");
        const childrenNumber = document.getElementsByName("children-number");
        const ageRange = document.getElementsByName("age-range");

        let selectedFosteringHistory = null;
        let selectedChildrenNumber = null;
        let selectedAgeRange = null;

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

        for (const option of ageRange) {
          if (option.checked) {
            selectedAgeRange = option.value;
            break;
          }
        }

        const starterAmount = ["£25,900", "£51,800", "£77,700", "£103,600"];
        const expertAmount = ["£29,000", "£58,000", "£87,000", "£116,000"];

        const isFirstOption =
          selectedFosteringHistory === fosteringHistory[0].value;

        // Update the values in the summary section
        document.getElementById("fostering-history-value").textContent =
          isFirstOption ? "a new" : "an experienced";
        document.getElementById("children-number-value").textContent =
          selectedChildrenNumber +
          (selectedChildrenNumber === "1" ? " child" : " children");
        document.getElementById("age-range-value").textContent =
          selectedAgeRange;

        function logResult(amount) {
          console.log("You could receive around:", amount);
          document.getElementById("overall-value").textContent = amount;
        }

        if (selectedChildrenNumber === childrenNumber[1].value) {
          logResult(isFirstOption ? starterAmount[1] : expertAmount[1]);
        } else if (selectedChildrenNumber === childrenNumber[2].value) {
          logResult(isFirstOption ? starterAmount[2] : expertAmount[2]);
        } else if (selectedChildrenNumber === childrenNumber[3].value) {
          logResult(isFirstOption ? starterAmount[3] : expertAmount[3]);
        } else {
          logResult(isFirstOption ? starterAmount[0] : expertAmount[0]);
        }
      });
  });
})();
