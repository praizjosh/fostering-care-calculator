document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("care_allowance_form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const fosteringHistory = document.getElementsByName("fostering-history");
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

      console.log("Selected Option:", selectedFosteringHistory);
      console.log("fosteringHistory:", fosteringHistory);

      const starterAmount = ["£25,900", "£51,800", "£77,700", "£103,600"];
      const expertAmount = ["£29,000", "£58,000", "£87,000", "£116,000"];

      const fosteringHistoryOption = selectedFosteringHistory
        ? fosteringHistory.indexOf(selectedFosteringHistory)
        : -1;

      // First control flow
      if (fosteringHistoryOption === 0) {
        if (selectedChildrenNumber === childrenNumber[1].value) {
          console.log("You could receive around:", starterAmount[1]);
        } else if (selectedChildrenNumber === childrenNumber[2].value) {
          console.log("You could receive around:", starterAmount[2]);
        } else if (selectedChildrenNumber === childrenNumber[3].value) {
          console.log("You could receive around:", starterAmount[3]);
        } else {
          console.log("You could receive around:", starterAmount[0]);
        }
      } else if (fosteringHistoryOption === 1) {
        // Second control flow
        if (selectedChildrenNumber === childrenNumber[1].value) {
          console.log("You could receive around:", expertAmount[1]);
        } else if (selectedChildrenNumber === childrenNumber[2].value) {
          console.log("You could receive around:", expertAmount[2]);
        } else if (selectedChildrenNumber === childrenNumber[3].value) {
          console.log("You could receive around:", expertAmount[3]);
        } else {
          console.log("You could receive around:", expertAmount[0]);
        }
      } else {
        console.log("Invalid option selected");
      }
    });
});
