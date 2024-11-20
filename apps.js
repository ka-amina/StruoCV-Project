import formValidator from "./formValidator.js";

// navigation buttons
const navigateToWorkExperience = document.getElementById(
  "NavigateToWorkExperience"
);
const backToPersonalInformations = document.getElementById(
  "backToPersonalInformations"
);
const navigateToEducation = document.getElementById("NavigateToEducation");
const backToWorkExperience = document.getElementById("backToWorkExperience");
const navigateToCertifications = document.getElementById(
  "NavigateToCertifications"
);
const backToEducation = document.getElementById("backToEducation");
const navigateTolanguages = document.getElementById("NavigateToLanguages");
const backToCertifications = document.getElementById("BackToCertifications");

const navigateToSkills = document.getElementById("NavigateToSkills");
const BackToLanguages = document.getElementById("BackToLanguages");
const navigateToDownload = document.getElementById("Download");

// forms Name
const personalInformations = document.getElementById("personal-informations");
const workExperience = document.getElementById("work-experience");
const education = document.getElementById("education");
const certifications = document.getElementById("certifications");
const skills = document.getElementById("skills");
const languages = document.getElementById("language");
// add new inputs dynamically
const addNewSocialMedia = document.getElementById("addNewSocialMedia");
const AddNewWorkExperience = document.getElementById("AddNewWorkExperience");
const AddNewEducation = document.getElementById("AddNewEducation");
const AddNewCertification = document.getElementById("AddNewCertification");
const AddNewSoftSkill = document.getElementById("AddNewSoftSkill");
const AddNewHardSkill = document.getElementById("AddNewHardSkill");
const AddNewLanguage = document.getElementById("AddNewLanguage");
//finish forms
const confirmInformations = document.getElementById("confirmInformations");
// toast box
const toastBox = document.getElementById("toast-box");
// add inputs
const AddMedia = document.getElementById("mediaInputs");
const addcertif = document.getElementById("certificatInput");
const Addsoftskill = document.getElementById("Addsoftskill");
const AddhardSkill = document.getElementById("AddhardSkill");
const addWork = document.getElementById("addWork");
const addEducation = document.getElementById("addEducation");
const addLanguage = document.getElementById("AddLanguage");
// personal informations inputs
var profileImage = document.getElementById("profileImg");
var fullName = document.getElementById("user-name");
var email = document.getElementById("user-email");
var phoneCode = document.getElementById("phone-code");
var phoneNumber = document.getElementById("user-Phone");
var position = document.getElementById("Job-title");
const about = new Quill("#about-message", {
  theme: "snow",
  placeholder: "Write about you...",
});
var addMediaInput = document.getElementById("add-media");
var mediaUrl = document.getElementById("media-url");
// work experience inputs
var companyName = document.getElementById("company-name");
var jobTitle = document.getElementById("job-title");
var jobMonthFrom = document.getElementById("job-month-from");
var jobYearFrom = document.getElementById("job-year-from");
var jobMonthTo = document.getElementById("job-month-to");
var jobYearTo = document.getElementById("job-year-to");
var currentlyWork = document.getElementById("check-currently-work");
new Quill("#job-description", {
  theme: "snow",
  placeholder: "Write about your position...",
});
// education inputs
new Quill("#study-description", {
  theme: "snow",
  placeholder: "Write about your career...",
});
// certifications inputs
var certificatName = document.getElementById("certificat-name");
var certificatMonthFrom = document.getElementById("certificat-month-from");
var certificatYearFrom = document.getElementById("certificat-year-from");
var certificatMonthTo = document.getElementById("certifcat-month-to");
var certificatYearTo = document.getElementById("certificat-year-to");
var cetificatUrl = document.getElementById("certificat-url");
// language inputs
var selectLanguage = document.getElementById("add-language");
var selectLevel = document.getElementById("add-level");
//skills inputs
var softSkills = document.getElementById("soft-skills");
var hardSkills = document.getElementById("hard-skills");
// user data
let userData = {
  personalInfos: [],
  Work: [],
  school: [],
  certif: [],
  lang: [],
  skill: {
    softSkills: [],
    hardSkills: [],
  },
};

//Navigation functions
function ShowToWorkExperience() {
  
  personalInformations.classList.add("hidden");
  workExperience.classList.remove("hidden");
}
function backToInfos() {
  personalInformations.classList.remove("hidden");
  workExperience.classList.add("hidden");
}
//
function ShowEducation() {
  workExperience.classList.add("hidden");
  education.classList.remove("hidden");
}
function backToexp() {
  workExperience.classList.remove("hidden");
  education.classList.add("hidden");
}
//
function Showcertificats() {
  certifications.classList.remove("hidden");
  education.classList.add("hidden");
}
function backToEduc() {
  certifications.classList.add("hidden");
  education.classList.remove("hidden");
}
//
function Showlanguages() {
  certifications.classList.add("hidden");
  languages.classList.remove("hidden");
}
function backToCertif() {
  certifications.classList.remove("hidden");
  languages.classList.add("hidden");
}
//
function Showskills() {
  skills.classList.remove("hidden");
  languages.classList.add("hidden");
}
function BackToLang() {
  skills.classList.add("hidden");
  languages.classList.remove("hidden");
}

function showToast() {
  let toast = document.createElement("div");
  toast.classList.add(
    "h-16",
    "w-60",
    "shadow-xl",
    "mb-4",
    "border",
    "rounded-lg",
    "p-3",
    "flex",
    "items-center",
    "justify-center",
    "bg-white"
  );
  toast.innerHTML = `<img
              src="./icons/toast.svg"
              alt="personalinfo"
              width="24"
              height="24"
            /> <span class="ml-7">The resume is ready to download</span>`;
  toastBox.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 4000);
}

//make  previous and next buttons workes correctly
//
navigateToWorkExperience.addEventListener("click", (e) => {
  e.preventDefault();
  const valid = formValidator.validateForm1(this);

  if (valid) {
  ShowToWorkExperience();
  }
});
backToPersonalInformations.addEventListener("click", (e) => {
  e.preventDefault();
  backToInfos();
});
//
navigateToEducation.addEventListener("click", (e) => {
  const valid = formValidator.validateForm2(this);
  e.preventDefault();
  if (valid) {
  ShowEducation();
  }
});
backToWorkExperience.addEventListener("click", (e) => {
  e.preventDefault();
  backToexp();
});
//
navigateToCertifications.addEventListener("click", (e) => {
  const valid= formValidator.validateEducation(this);
  e.preventDefault();
  if(valid){
  Showcertificats();
  }
});
backToEducation.addEventListener("click", (e) => {
  e.preventDefault();
  
  backToEduc();
 
});
//
navigateTolanguages.addEventListener("click", (e) => {
  const valid= formValidator.validateCertification(this);
  e.preventDefault();
  if(valid){
  Showlanguages();
}
});
backToCertifications.addEventListener("click", (e) => {
  e.preventDefault();
  backToCertif();
});
//
navigateToSkills.addEventListener("click", (e) => {
  const valid= formValidator.validateLanguage(this);
  e.preventDefault();
  if(valid){
    Showskills();
  }
});
BackToLanguages.addEventListener("click", (e) => {
  e.preventDefault();
  BackToLang();
});

// finish button
confirmInformations.addEventListener("click", (e) => {
  const valid= formValidator.validateSkills(this);
  e.preventDefault();
  if(valid){
  storepersonalInfo();
  storeWorkExperience();
  storeEducation();
  storecertificat();
  storeLanguage();
  storeSkills();
  showToast();
  skills.classList.add("hidden");
  navigateToDownload.classList.remove("hidden");
  }
  console.log(userData);
});

// add elements dynamically

addNewSocialMedia.addEventListener("click", (e) => {
  e.preventDefault();
  const socialMediaTemplate = document.querySelector(".social-media-template");
  const clonedSocialMedia = socialMediaTemplate.cloneNode(true);
  const urlInput = clonedSocialMedia.querySelector(".social-media-url");
  urlInput.value = ""; 
  AddMedia.insertBefore(clonedSocialMedia, addNewSocialMedia);
});

let certifCounter = 1;
AddNewCertification.addEventListener("click", (e) => {
  e.preventDefault();

  const dynamicCertifId = `certif-${certifCounter++}`;

  const addCertifInput = document.createElement("div");
  addCertifInput.id = dynamicCertifId;
  addCertifInput.innerHTML = `
    <div class="md:grid md:justify-center">
      <div class="mt-8 md:w-input">
        <label for="base-input">Name</label>
        <input
          type="text"
          class="dynamic-certificat-name bg-secondary border border-none text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
          placeholder="Certification Name"
        />
      </div>
      <!-- Time Period -->
      <label for="timePeriod">Time Period</label>
      <div class="mt-4 md:flex md:justify-around">
        <label for="" class="block lg:hidden">From</label>
        <div class="flex md:justify-normal justify-between md:h-10 md:gap-6">
          <input
            type="text"
            class="dynamic-certificat-month-from bg-secondary border-none text-black text-sm rounded-lg focus:ring-primary focus:border-primary block w-36 md:w-28 p-2.5"
            placeholder="Month"
          />
          <input
            type="Number"
            class="dynamic-certificat-year-from ml-5 bg-secondary border-none text-black text-sm rounded-lg focus:ring-primary focus:border-primary block w-36 md:w-28 p-2.5"
            placeholder="Year"
          />
        </div>
        <label for="" class="block lg:hidden">To</label>
        <span class="mt-2 hidden md:block">-</span>
        <div>
          <div class="flex justify-between md:justify-normal md:gap-6">
            <input
              type="text"
              class="dynamic-certificat-month-to bg-secondary border-none text-black text-sm rounded-lg focus:ring-primary focus:border-primary block w-36 md:w-28 p-2.5"
              placeholder="Month"
            />
            <input
              type="Number"
              class="dynamic-certificat-year-to ml-5 bg-secondary border-none text-black text-sm rounded-lg focus:ring-primary focus:border-primary block w-36 md:w-28 p-2.5"
              placeholder="Year"
            />
          </div>
        </div>
      </div>
      <!-- Lien de certificat -->
      <div id="certificatInput">
        <label for="base-input">URL</label>
        <div class="flex md:h-10">
          <input
            type="text"
            class="dynamic-certificat-url bg-secondary border border-none text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-input p-2.5"
            placeholder="Certification URL"
          />
        </div>
      </div>
    </div>`;
  addcertif.appendChild(addCertifInput);
});

AddNewSoftSkill.addEventListener("click", (e) => {
  e.preventDefault();
  const addSoftInput = document.createElement("div");
  addSoftInput.innerHTML = `<input
                type="text"
                id="soft-skills"
                class=" soft-skill-input bg-secondary border border-none mt-3 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-72 p-2.5" 
              />`;
  Addsoftskill.appendChild(addSoftInput);
});

AddNewHardSkill.addEventListener("click", (e) => {
  e.preventDefault();
  const addHardInput = document.createElement("div");
  addHardInput.innerHTML = `<input
                type="text"
                id="hard-skills"
                class="hard-skill-input bg-secondary border border-none mt-3 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-72 p-2.5"
              />`;
  AddhardSkill.appendChild(addHardInput);
});

let expcounter = 0;
AddNewWorkExperience.addEventListener("click", (e) => {
  e.preventDefault();
  const uniqueId = `job-description-${expcounter}`;
  const work = document.createElement("div");
  work.innerHTML = `<div class="md:grid md:justify-center md:mt-14">
              <div class="md:w-input">
                <div class="mt-8">
                  <label for="base-input">Company Name</label>
                  <input
                    type="text"
                    id="company-name"
                    class="bg-secondary border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  />
                  <div
                    id="company-name-Error"
                    class="text-error w-96 hidden"
                  ></div>
                </div>
                <div class="mt-4">
                  <label for="job">Job Title</label>
                  <input
                    type="text"
                    id="job-title"
                    class="bg-secondary border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  />
                  <div id="job-title-Error" class="text-error hidden"></div>
                </div>
              </div>
              <!-- Time Period -->

              <label for="timePeriod">Time Period</label>
              <div class="mt-4 md:flex md:justify-around">
                <label for="" class="block lg:hidden">From</label>
                <div
                  class="flex md:justify-normal justify-between md:h-10 md:gap-6"
                >
                  <select
                    id="job-month-from"
                    class="bg-secondary border border-gray-300 text-black text-sm rounded-lg focus:ring-primary focus:border-primary block w-36 md:w-28 p-2.5"
                  >
                    <option>month</option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                  </select>
                  <input
                    type="text"
                    id="job-year-from"
                    class="ml-5 bg-secondary border border-gray-300 text-black text-sm rounded-lg focus:ring-primary focus:border-primary block w-36 md:w-28 p-2.5"
                    placeholder="year"
                  />
                </div>
                <label for="" class="block lg:hidden">To</label>
                <span class="mt-2 hidden md:block">-</span>
                <div>
                  <div class="flex justify-between md:justify-normal md:gap-6">
                    <select
                      id="job-month-to"
                      class="bg-secondary border border-gray-300 text-black text-sm rounded-lg focus:ring-primary focus:border-primary block w-36 md:w-28 p-2.5"
                    >
                      <option>month</option>
                      <option>January</option>
                      <option>February</option>
                      <option>March</option>
                      <option>April</option>
                      <option>May</option>
                      <option>June</option>
                      <option>July</option>
                      <option>August</option>
                      <option>September</option>
                      <option>October</option>
                      <option>November</option>
                      <option>December</option>
                    </select>
                    <input
                      type="Number"
                      id="job-year-to"
                      class="ml-5 bg-secondary border border-gray-300 text-black text-sm rounded-lg focus:ring-primary focus:border-primary block w-36 md:w-28 p-2.5"
                      placeholder="year"
                    />
                  </div>
                  <div class="inline-flex items-center ml-3.5 mt-3">
                    <label
                      class="flex items-center cursor-pointer relative"
                      for="check-currently-work"
                    >
                      <input
                        type="checkbox"
                        class="peer h-5 w-5 cursor-pointer appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-primary checked:border-nu-gray-100"
                        id="check-currently-work"
                      />
                      <span
                        class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-width="1"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </label>
                    <label
                      class="cursor-pointer ml-3 text-slate-600 text-sm font-medium"
                      for="check-currently-work"
                    >
                      I currently work here
                    </label>
                  </div>
                </div>
              </div>
              <!-- Description -->
              <div class="mt-4">
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Description</label
                >
                <div
                  id="${uniqueId}"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-secondary rounded-lg border border-gray-300 focus:ring-primary focus:border-primary"
                  style="min-height: 50px"
                ></div>
                <div id="job-description-Error" class="text-error hidden"></div>
              </div>
            </div>`;
  addWork.appendChild(work);
  new Quill(`#${uniqueId}`, {
    theme: "snow",
    placeholder: "Write about your position...",
  });
  expcounter++;
});
let edcounter= 0;
AddNewEducation.addEventListener("click", (e) => {
  e.preventDefault();
  const uniqueId = `study-description-${edcounter}`
  const addEd = document.createElement("div");
  addEd.innerHTML = `<div class="md:grid md:justify-center mt-14">
              <div class="block md:flex md:mt-4 md:justify-between">
                <div class="mt-8 md:mt-0">
                  <label for="Institution">Institution Name</label>
                  <input
                    type="text"
                    id="Institution-name"
                    class="bg-secondary border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 md:w-36"
                  />
                </div>
                <div class="mt-4 md:mt-0">
                  <label for="study">Field of study</label>
                  <input
                    type="text"
                    id="field-of-study"
                    class="bg-secondary border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 md:w-36"
                  />
                </div>
                <div class="mt-4 md:mt-0">
                  <label for="degree">Degree</label>
                  <input
                    type="text"
                    id="Institution-degree"
                    class="bg-secondary border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 md:w-36"
                  />
                </div>
              </div>
              <div class="flex justify-around">
                <div
                  id="Institution-name-Error"
                  class="text-error hidden w-28 mr-auto"
                ></div>
                <div
                  id="field-of-study-Error"
                  class="text-error hidden w-32 mr-12"
                ></div>
                <div
                  id="Institution-degree-Error"
                  class="text-error hidden w-32 ml-12"
                ></div>
              </div>

              <!-- Time Period -->
              <label for="timePeriod">Time Period</label>
              <div class="mt-4 md:flex md:justify-around">
                <label for="" class="block lg:hidden">From</label>
                <div class="flex md:justify-normal justify-between md:h-10 md:gap-6">
                  <select
                    id="education-month-from"
                    class="bg-secondary border border-gray-300 text-black text-sm rounded-lg focus:ring-primary focus:border-primary block w-36 md:w-28 p-2.5"
                  >
                    <option>month</option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                  </select>
                  <input
                    type="Number"
                    id="education-year-from"
                    class="ml-5 bg-secondary border border-gray-300 text-black text-sm rounded-lg focus:ring-primary focus:border-primary block w-36 md:w-28 p-2.5"
                    placeholder="year"
                  />
                </div>
                <label for="" class="block lg:hidden">To</label>
                <span class="mt-2 hidden md:block md:px-2">-</span>
                <div>
                  <div class="flex justify-between md:justify-normal md:gap-6">
                    <select
                      id="education-month-to"
                      class="bg-secondary border border-gray-300 text-black text-sm rounded-lg focus:ring-primary focus:border-primary block w-36 md:w-28 p-2.5"
                    >
                      <option>month</option>
                      <option>January</option>
                      <option>February</option>
                      <option>March</option>
                      <option>April</option>
                      <option>May</option>
                      <option>June</option>
                      <option>July</option>
                      <option>August</option>
                      <option>September</option>
                      <option>October</option>
                      <option>November</option>
                      <option>December</option>
                    </select>
                    <input
                      type="Number"
                      id="education-year-to"
                      class="ml-5 bg-secondary border border-gray-300 text-black text-sm rounded-lg focus:ring-primary focus:border-primary block w-36 md:w-28 p-2.5"
                      placeholder="year"
                    />
                  </div>
                  <div class="inline-flex items-center ml-3.5 mt-3">
                    <label
                      class="flex items-center cursor-pointer relative"
                      for="check-currently-study"
                    >
                      <input
                        type="checkbox"
                        class="peer h-5 w-5 cursor-pointer appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-primary checked:border-nu-gray-100"
                        id="check-currently-study"
                      />
                      <span
                        class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-width="1"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </label>
                    <label
                      class="cursor-pointer ml-3 text-slate-600 text-sm font-medium"
                      for="check-currently-study"
                    >
                      I currently study here
                    </label>
                  </div>
                </div>
              </div>
              <!-- Description -->
              <div class="mt-4">
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Description</label
                >
                <div
                  id="${uniqueId}"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-secondary rounded-lg border border-gray-300 focus:ring-primary focus:border-primary"
                  style="min-height: 50px"
                ></div>
                <div
                  id="study-description-Error"
                  class="text-error hidden"
                ></div>
              </div>
            </div>`;

  addEducation.appendChild(addEd);
  new Quill(`#${uniqueId}`, {
    theme: "snow",
    placeholder: "Write about your position...",
  });
  edcounter++;
});

AddNewLanguage.addEventListener("click", (e) => {
  e.preventDefault();

  const languageInputsContainer = document.getElementById("languageInputs");
  const languageTemplate = document.querySelector(".languages-template");
  const clonedLanguage = languageTemplate.cloneNode(true);
  clonedLanguage.classList.remove("hidden");
  clonedLanguage.classList.add("cloned-language");
  languageInputsContainer.appendChild(clonedLanguage);
});

// display selected image
window.displayImg = function (event) {
  const file = event.target.files[0];
  const profileImageElements = document.querySelectorAll(
    ".displayProfileImage"
  );
  const showImgElement = document.getElementById("showImg");
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const imageSrc = e.target.result;
      showImgElement.src = imageSrc;
      showImgElement.classList.remove("hidden");
      profileImageElements.forEach((imgElement) => {
        imgElement.src = imageSrc;
      });
    };

    reader.readAsDataURL(file);
  }
};

//store personal infos
let personalInfo={}
function storepersonalInfo() {
  personalInfo = {
    profileImage: profileImage.files[0],
    fullName: fullName.value,
    email: email.value,
    phoneCode: phoneCode.value,
    phoneNumber: phoneNumber.value,
    jobTitle: position.value,
    about: about.root.innerHTML,
    socialMedia: [],
  };

  // Collect social media inputs
  const socialMediaFields = document.querySelectorAll(
    ".social-media-template:not(.hidden)"
  );

  socialMediaFields.forEach((field) => {
    const mediaSelect = field.querySelector(".social-media-name");
    const mediaInput = field.querySelector(".social-media-url");
    if (mediaSelect && mediaInput) {
      const mediaName = mediaSelect.value;
      const mediaUrl = mediaInput.value;
      personalInfo.socialMedia.push({
        addMediaInput: mediaName,
        mediaUrl: mediaUrl,
      });
    }
  });

  userData.personalInfos.push(personalInfo);

  // Populate resume fields
  const fullNameDisplay = document.querySelectorAll(".fullNameDisplay");
  const emailDisplay = document.querySelectorAll(".emailDisplay");
  const displayPosition = document.querySelectorAll(".displayPosition");
  const displayPhone = document.querySelectorAll(".displayPhone");
  const linkedin = document.querySelectorAll(".displayLinkedIn");
  const github = document.querySelectorAll(".displayGithub");
  const displayAbout = document.querySelectorAll(".displayAbout");
  displayAbout.forEach((element) => {
    element.innerHTML = personalInfo.about;
  });

  fullNameDisplay.forEach(
    (element) => (element.textContent = personalInfo.fullName)
  );
  emailDisplay.forEach((element) => (element.textContent = personalInfo.email));
  displayPhone.forEach(
    (element) =>
      (element.textContent = `${personalInfo.phoneCode} ${personalInfo.phoneNumber}`)
  );
  displayPosition.forEach(
    (element) => (element.textContent = personalInfo.jobTitle)
  );


  personalInfo.socialMedia.forEach((media) => {
    if (media.addMediaInput === "Linkedin") {
      linkedin.forEach((element) => {
        element.textContent = media.mediaUrl;
      });
    } else if (media.addMediaInput === "github") {
      github.forEach((element) => {
        element.textContent = media.mediaUrl;
      });
    }
  });
}

//store workExperience
function storeWorkExperience() {
  const workContainers = document.querySelectorAll("#addWork > div");

  workContainers.forEach((container) => {
    const companyName = container.querySelector("#company-name").value;
    const jobTitle = container.querySelector("#job-title").value;
    const jobMonthFrom = container.querySelector("#job-month-from").value;
    const jobYearFrom = container.querySelector("#job-year-from").value;
    const jobMonthTo = container.querySelector("#job-month-to").value;
    const jobYearTo = container.querySelector("#job-year-to").value;
    const currentlyWork =
      container.querySelector("#check-currently-work")?.checked || false;

      const descriptionDiv = container.querySelector(`[id^="job-description"]`);
      const workDescription = Quill.find(descriptionDiv).root.innerHTML

    const workExp = {
      companyName,
      jobTitle,
      jobMonthFrom,
      jobYearFrom,
      jobMonthTo,
      jobYearTo,
      currentlyWork,
      workDescription,
    };

    userData.Work.push(workExp);
  });

  console.log(userData.Work);

  const displayWorkexp = document.querySelector("#displayExperiences");
  const displayWorkexp1 = document.querySelector("#displayExperiences1");
  if (displayWorkexp) displayWorkexp.innerHTML = "";
  if (displayWorkexp1) displayWorkexp1.innerHTML = "";

  userData.Work.forEach((work) => {
    if (displayWorkexp) {
      const experienceInfoHtml = `
        <div>
          <h3 class="font-bold text-xl mt-2 mb-1">${work.jobTitle}</h3>
          <div class="text-nu-blue-500 font-semibold text-md mb-2">
            <span>${work.companyName}</span>,  
            <span>${work.jobMonthFrom}</span>  
            <span>${work.jobYearFrom}</span> - 
            <span>${work.jobMonthTo}</span> 
            <span>${work.jobYearTo}</span>
          </div>
          <div>
            ${work.workDescription}
          </div>
        </div>
      `;
      displayWorkexp.innerHTML += experienceInfoHtml;
    }

    if (displayWorkexp1) {
      const experienceInfoHtml1 = `
        <span class="text-xl font-serif">${work.jobTitle}</span>
        <span class="font-serif text-nu-gray-100 text-md">${work.companyName}, ${work.jobMonthFrom} ${work.jobYearFrom} - ${work.jobMonthTo} ${work.jobYearTo}</span>
        <p class="leading-5 mt-2">
          ${work.workDescription}
        </p>`;
      displayWorkexp1.innerHTML += experienceInfoHtml1;
    }
  });
}

//store education data
function storeEducation() {
  const schoolContainers = document.querySelectorAll("#addEducation > div");
  schoolContainers.forEach((container) => {
    const institutName = container.querySelector("#Institution-name").value;
    const field = container.querySelector("#field-of-study").value;
    const degree = container.querySelector("#Institution-degree").value;
    const educationMonthFrom = container.querySelector(
      "#education-month-from"
    ).value;
    const educationYearFrom = container.querySelector(
      "#education-year-from"
    ).value;
    const educationMonthTo = container.querySelector(
      "#education-month-to"
    ).value;
    const educationYearTo = container.querySelector("#education-year-to").value;
    const currentlyStudy =
      container.querySelector("#check-currently-study")?.checked || false;
      const descriptionDiv = container.querySelector(`[id^="study-description"]`);
      const studyDescription= Quill.find(descriptionDiv).root.innerHTML

    const study = {
      institutName,
      field,
      degree,
      educationMonthFrom,
      educationYearFrom,
      educationMonthTo,
      educationYearTo,
      currentlyStudy,
      studyDescription,
    };
    userData.school.push(study);

    const educationresume1=document.querySelector("#displayEducationInfo");
    const educationresume2=document.querySelector("#displayEducationInfo2");
if (educationresume1){
    const educationInfoHtml = `
      <div id="displayEducationInfo">
        <h3 class="font-bold text-xl mt-2 mb-1">${degree} in ${field}</h3>
        <div class="text-nu-blue-500 font-semibold text-md mb-2">
          <span id="institutName">${institutName}</span>,  
          <span id="educationmonthfrom">${educationMonthFrom}</span>  
          <span id="educationyearfrom">${educationYearFrom}</span> - 
          <span id="educationmonthto">${educationMonthTo}</span> 
          <span id="educationsyearto">${educationYearTo}</span>
        </div>
        <div id="diaplayeducationdesc">
          ${studyDescription}
        </div>
      </div>
    `;
    educationresume1.innerHTML +=
      educationInfoHtml;
    }
    if(educationresume2){
      const educationInfoHtml1 = `
      <span class="text-xl font-serif">${degree} en ${field}</span>
      <span class="font-serif text-nu-gray-100 text-md">${institutName}, ${educationMonthFrom} ${educationYearFrom} - ${educationMonthTo} ${educationYearTo}</span>
      <p class="leading-5 mt-2">
        ${studyDescription}
      </p> `;
    educationresume2.innerHTML +=
      educationInfoHtml1;
    }
  });
}

//store certification Data
function storecertificat() {
  const certificat = {
    certificatName: certificatName.value,
    certificatMonthFrom: certificatMonthFrom.value,
    certificatYearFrom: certificatYearFrom.value,
    certificatMonthTo: certificatMonthTo.value,
    certificatYearTo: certificatYearTo.value,
    cetificatUrl: cetificatUrl.value,
  };
  userData.certif.push(certificat);
  const dynamicForms = document.querySelectorAll('[id^="certif-"]');
  dynamicForms.forEach((form) => {
    const dynamicCertificat = {
      certificatName: form.querySelector(".dynamic-certificat-name").value,
      certificatMonthFrom: form.querySelector(".dynamic-certificat-month-from")
        .value,
      certificatYearFrom: form.querySelector(".dynamic-certificat-year-from")
        .value,
      certificatMonthTo: form.querySelector(".dynamic-certificat-month-to")
        .value,
      certificatYearTo: form.querySelector(".dynamic-certificat-year-to").value,
      cetificatUrl: form.querySelector(".dynamic-certificat-url").value,
    };
    userData.certif.push(dynamicCertificat);
  });

  console.log(userData.certif);

  const certificatContainer = document.querySelectorAll(".certificates-list");
 
  certificatContainer.forEach((element)=> {
    element.innerHTML="";
    userData.certif.forEach((certificat) => {
      const certificatItem = document.createElement("li");
      const formattedText = `${certificat.certificatName} <br/>(${certificat.certificatMonthFrom} ${certificat.certificatYearFrom} - ${certificat.certificatMonthTo} ${certificat.certificatYearTo}) <br/> - <a href="${certificat.cetificatUrl}" target="_blank">Link to certificate</a>`;
      certificatItem.innerHTML = formattedText;
      element.appendChild(certificatItem);
      
    });
  })
}
//store language data
function storeLanguage() {
  const staticLanguage = document.querySelector("#add-language").value;
  const staticLevel = document.querySelector("#add-level").value;
  userData.lang.push({
    Language: staticLanguage,
    Level: staticLevel,
  });

  const clonedLanguages = document.querySelectorAll(".cloned-language");

  clonedLanguages.forEach((Language) => {
    const selectLanguage = Language.querySelector("#add-language").value;
    const selectLevel = Language.querySelector("#add-level").value;
    userData.lang.push({
      Language: selectLanguage,
      Level: selectLevel,
    });
  });
  console.log(userData.lang);
  // display languages on resume
  const displayLanguages = document.querySelectorAll(".displayLanguages");
  displayLanguages.forEach((element) => {
    element.innerHTML = "";
    userData.lang.forEach((item) => {
      const displayLanguageSpan = document.createElement("span");
      const displayLevelSpan = document.createElement("span");

      displayLanguageSpan.textContent = item.Language;
      displayLevelSpan.textContent = item.Level;

      const langLevdiv = document.createElement("div");
      langLevdiv.appendChild(displayLanguageSpan);
      langLevdiv.appendChild(document.createTextNode(":  "));
      langLevdiv.appendChild(displayLevelSpan);

      element.appendChild(langLevdiv);
    });
  });
}

//store skills
function storeSkills() {
  const staticSoftSkill = document.getElementById("soft-skills").value;
  const staticHardSkill = document.getElementById("hard-skills").value;

  const softSkillsInputs = document.querySelectorAll(".soft-skill-input");
  const hardSkillsInputs = document.querySelectorAll(".hard-skill-input");

  if (staticSoftSkill) {
    userData.skill.softSkills.push({ softSkill: staticSoftSkill });
  }

  if (staticHardSkill) {
    userData.skill.hardSkills.push({ hardSkill: staticHardSkill });
  }

  softSkillsInputs.forEach((input) => {
    if (input.value) {
      userData.skill.softSkills.push({ softSkill: input.value });
    }
  });
  hardSkillsInputs.forEach((input) => {
    if (input.value) {
      userData.skill.hardSkills.push({ hardSkill: input.value });
    }
  });
  console.log(userData.skill);

  const displaySoftSkills = document.querySelectorAll(".displaySoftSkills");
  const displayHardSkills = document.querySelectorAll(".displayHardSkills");

  displaySoftSkills.forEach((softSkillContainer) => {
    softSkillContainer.innerHTML = "";
    userData.skill.softSkills.forEach((item) => {
      const span = document.createElement("span");
      span.textContent = item.softSkill;
      softSkillContainer.appendChild(span);
    });
  });

  displayHardSkills.forEach((hardSkillContainer) => {
    hardSkillContainer.innerHTML = "";
    userData.skill.hardSkills.forEach((item) => {
      const span = document.createElement("span");
      span.textContent = item.hardSkill;
      hardSkillContainer.appendChild(span);
    });
  });
}

// download the resume
// 1st
const DownloadFirstResume = document.getElementById("DownloadFirstResume");
const firstResume = document.getElementById("firstResume");
DownloadFirstResume.addEventListener("click", async function () {
  const fromattedFullName= personalInfo.fullName.replace(/\s+/g,'_')
  const filename = `${fromattedFullName}_Resume`;

  const options = {
    margin: 0,
    filename: filename,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  };
  try {
    await html2pdf().set(options).from(firstResume).save();
  } catch (error) {
    console.error("false:", error.message);
  }
});
// 2nd
const DownloadsecondResume = document.getElementById("DownloadsecondResume");
const secondResume = document.getElementById("secondResume");
DownloadsecondResume.addEventListener("click", async function () {
  const fromattedFullName= personalInfo.fullName.replace(/\s+/g,'_')
  const filename = `${fromattedFullName}_Resume`;

  const options = {
    margin: 0,
    filename: filename,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  };
  try {
    await html2pdf().set(options).from(secondResume).save();
  } catch (error) {
    console.error("false:", error.message);
  }
});

// to display the first resume
const displayCv1 = document.getElementById("displayCv1");
const resume1 = document.getElementById("resume1");
displayCv1.addEventListener("click", (e) => {
  e.preventDefault();
  navigateToDownload.classList.add("hidden");
  resume1.classList.remove("hidden");
});
//display the second resume 
const display2ndResume = document.getElementById("DisplayCv2");
const resume2= document.getElementById("resume2")
display2ndResume.addEventListener("click" , (e)=>{
  e.preventDefault();
  navigateToDownload.classList.add("hidden");
  resume2.classList.remove("hidden")

})

// back to models
const backButtons = document.querySelectorAll(".back-to-modales");

backButtons.forEach((Buttoon) => {
  Buttoon.addEventListener("click", (e) => {
    e.preventDefault();
    resume1.classList.add("hidden");
    resume2.classList.add("hidden");
    navigateToDownload.classList.remove("hidden");
  });
});