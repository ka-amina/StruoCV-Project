const validationPersonalInfoForm = {
  "user-name": {
    regex: /^[a-zA-Z\s]{2,30}$/,
    message: "Full name must be 2-30 characters long and contain only letters.",
  },
  "user-email": {
    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: "Please enter a valid email address.",
  },
  "user-Phone": {
    regex: /^\d{10,15}$/,
    message: "Phone number must be between 10 to 15 digits",
  },
  "Job-title": {
    regex: /^[a-zA-Z0-9\s]{2,50}$/,
    message:
      "Job title must be 2-50 characters long and contain only letters and numbers.",
  },
};
const validationCertificationForm = {
  "certificat-name": {
    regex: /^[a-zA-Z\s]{2,50}$/,
    message:
      "Certification name must be 2-50 characters long and contain only letters and spaces.",
  },
  "certificat-url": {
    regex: /^(https?:\/\/)?([\w\-]+\.)+[a-zA-Z]{2,6}(\/[\w\- .\/?%&=]*)?$/,
    message: "Please enter a valid URL starting with http:// or https://.",
  },
};

const validationExperienceForm = {
  "company-name": {
    regex: /^[a-zA-Z\s]{2,50}$/,
    message: "You should write the company name.",
  },
  "job-title": {
    regex: /^[a-zA-Z0-9\s]{2,50}$/,
    message:
      "Job title must be 2-50 characters long and contain only letters, numbers, and spaces.",
  },
  // "job-description": {
  //   regex: /^[\s\S]{10,275}$/,
  //   message: "Job description must be between 10 to 500 characters long.",
  // },
};

const validationEducationForm = {
  "Institution-name": {
    regex: /^[a-zA-Z\s]{2,50}$/,
    message: "Please enter the institution name.",
  },
  "field-of-study": {
    regex: /^[a-zA-Z0-9\s]{2,50}$/,
    message: "Please enter the field of study.",
  },
  "Institution-degree": {
    regex: /^[a-zA-Z0-9\s]{2,50}$/,
    message: "Please enter the degree",
  },
  // "study-description": {
  //     regex: /^[\s\S]{10,275}$/,
  //     message: "Description must be between 10 and 500 characters.",
  //   },
};
const validationLanguageForm = {
  "add-language": {
    regex: /^(?!Choose$).+$/,
    message: "Please select a language.",
  },
  "add-level": {
    regex: /^(?!Choose$).+$/,
    message: "Please select a proficiency level.",
  },
};

const validationSkillsForm = {
    "soft-skills": {
      regex: /^[a-zA-Z\s]{2,50}$/, 
      message: "Skill must be 2-50 characters long.",
    },
    "hard-skills": {
      regex: /^[a-zA-Z\s]{2,50}$/,
      message: "Skill must be 2-50 characters long.",
    },
  };

function toggleError(field, show, message = "") {
  const errorDisplay = document.getElementById(`${field}-Error`);
  const inputField = document.getElementById(field);

  if (show) {
    errorDisplay.textContent = message;
    errorDisplay.classList.remove("hidden");
    inputField.classList.add("border-error");
  } else {
    errorDisplay.classList.add("hidden");
    inputField.classList.remove("border-error");
  }
}

//
function validateField(field, value) {
  const rule = validationPersonalInfoForm[field];

  if (rule && !rule.regex.test(value)) {
    toggleError(field, true, rule.message);
    return false;
  } else {
    toggleError(field, false);
    return true;
  }
}
function validateField2(field, value) {
  const rule = validationExperienceForm[field];

  if (rule && !rule.regex.test(value)) {
    toggleError(field, true, rule.message);
    return false;
  } else {
    toggleError(field, false);
    return true;
  }
}
function validateField3(field, value) {
  const rule = validationEducationForm[field];

  if (rule && !rule.regex.test(value)) {
    toggleError(field, true, rule.message);
    return false;
  } else {
    toggleError(field, false);
    return true;
  }
}
function validateField4(field, value) {
  const rule = validationCertificationForm[field];

  if (rule && !rule.regex.test(value)) {
    toggleError(field, true, rule.message);
    return false;
  } else {
    toggleError(field, false);
    return true;
  }
}
function validateField5(field, value) {
  const rule = validationLanguageForm[field];

  if (rule && !rule.regex.test(value)) {
    toggleError(field, true, rule.message);
    return false;
  } else {
    toggleError(field, false);
    return true;
  }
}
function validateField6(field, value) {
  const rule = validationSkillsForm [field];

  if (rule && !rule.regex.test(value)) {
    toggleError(field, true, rule.message);
    return false;
  } else {
    toggleError(field, false);
    return true;
  }
}

//
function validateForm1() {
  let valid = true;
  for (let field in validationPersonalInfoForm) {
    const fieldValue = document.getElementById(field).value;
    const isFieldValid = validateField(field, fieldValue);
    if (!isFieldValid) valid = false;
  }

  return valid;
}

function validateForm2() {
  let valid = true;
  for (let field in validationExperienceForm) {
    const fieldValue = document.getElementById(field).value;
    const isFieldValid = validateField2(field, fieldValue);
    if (!isFieldValid) valid = false;
  }

  return valid;
}
function validateEducation() {
  let valid = true;
  for (let field in validationEducationForm) {
    const fieldValue = document.getElementById(field).value;
    const isFieldValid = validateField3(field, fieldValue);
    if (!isFieldValid) valid = false;
  }

  return valid;
}
function validateCertification() {
  let valid = true;
  for (let field in validationCertificationForm) {
    const fieldValue = document.getElementById(field).value;
    const isFieldValid = validateField4(field, fieldValue);
    if (!isFieldValid) valid = false;
  }

  return valid;
}
function validateLanguage() {
  let valid = true;
  for (let field in validationLanguageForm) {
    const fieldValue = document.getElementById(field).value;
    const isFieldValid = validateField5(field, fieldValue);
    if (!isFieldValid) valid = false;
  }

  return valid;
}
function validateSkills() {
  let valid = true;
  for (let field in validationSkillsForm ) {
    const fieldValue = document.getElementById(field).value;
    const isFieldValid = validateField6(field, fieldValue);
    if (!isFieldValid) valid = false;
  }

  return valid;
}

export default {
  validateForm1,
  validateField,
  toggleError,
  validateForm2,
  validateEducation,
  validateCertification,
  validateLanguage,
  validateSkills
};
