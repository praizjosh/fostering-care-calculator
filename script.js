function calculateAllowance() {
  const fosteringHistory = document.getElementsByName("fostering_history");
  const childrenNumber = document.getElementsByName("children_number");
  const ageRange = document.getElementsByName("age_range");

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

  // Check if all required fields are selected
  if (
    !selectedFosteringHistory ||
    !selectedChildrenNumber ||
    !selectedAgeRange
  ) {
    // Display warning for missing selection
    const warningMessage = "Please select an option for all required fields.";
    const warningElement = document.getElementById("warning_message");
    warningElement.textContent = warningMessage;
    warningElement.style.display = "block";
    return; // Do not proceed with the calculation
  } else {
    // Hide any previous warning if present
    const warningElement = document.getElementById("warning_message");
    warningElement.style.display = "none";
    document.getElementById("summary_grid").style.display = "block";
  }

  const starterAmount = ["£25,900", "£51,800", "£77,700", "£103,600"];
  const expertAmount = ["£29,000", "£58,000", "£87,000", "£116,000"];

  const isFirstOption = selectedFosteringHistory === fosteringHistory[0].value;

  // Update the values in the summary section
  document.getElementById("fostering_history_value").textContent = isFirstOption
    ? "a new"
    : "an experienced";
  document.getElementById("children_number_value").textContent =
    selectedChildrenNumber +
    (selectedChildrenNumber === "1" ? " child" : " children");
  document.getElementById("age_range_value").textContent = selectedAgeRange;

  function logResult(amount) {
    console.log("You could receive around:", amount);
    document.getElementById("overall_value").textContent = amount;
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
}

function altAction() {
  document.getElementById("enquiry_form").style.display = "block";
}

function restartAction() {
  const form = document.getElementById("care_allowance_form");
  form.reset();
  document.getElementById("summary_grid").style.display = "none";
}
