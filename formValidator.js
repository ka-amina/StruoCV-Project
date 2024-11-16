// const validationRules = {
//   "user-name": {
//     regex: /^[a-zA-Z\s]{2,30}$/,
//     message: "Full name must be 2-30 characters long and contain only letters.",
//   },
//   "user-email": {
//     regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//     message: "Please enter a valid email address.",
//   },
//   "user-Phone": {
//     regex: /^\d{10,15}$/,
//     message: "Phone number must be between 10 to 15 digits",
//   },
//   "Job-title": {
//     regex: /^[a-zA-Z0-9\s]{2,50}$/,
//     message:
//       "Job title must be 2-50 characters long and contain only letters and numbers.",
//   },
// //   "company-name": {
// //     regix: /^[a-zA-Z\s]/,
// //     message:"you should write the company name"
// //   },
// //   "job-title": {},
// //   "job-description": {},
// };

// function toggleError(field, show, message = "") {
//   const errorDisplay = document.getElementById(`${field}-Error`);
//   const inputField = document.getElementById(field);

//   if (show) {
//     errorDisplay.textContent = message;
//     errorDisplay.classList.remove("hidden");
//     inputField.classList.add("border-red-500");
//   } else {
//     errorDisplay.classList.add("hidden");
//     inputField.classList.remove("border-red-500");
//   }
// }

// function validateField(field, value) {
//   const rule = validationRules[field];

//   if (rule && !rule.regex.test(value)) {
//     toggleError(field, true, rule.message);
//     return false;
//   } else {
//     toggleError(field, false);
//     return true;
//   }
// }

// function validateForm() {
//   let valid = true;
//   for (let field in validationRules) {
//     const fieldValue = document.getElementById(field).value;
//     const isFieldValid = validateField(field, fieldValue);
//     if (!isFieldValid) valid = false;
//   }

//   return valid;
// }

// export default { validateForm, validateField, toggleError };
