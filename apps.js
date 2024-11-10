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
var jobTitle = document.getElementById("Job-title");
var about = document.getElementById("about-message");
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
var workDescription = document.getElementById("job-description");
// education inputs
var institutName = document.getElementById("Institution-name");
var field = document.getElementById("field-of-study");
var degree = document.getElementById("Institution-degree");
var educationMonthFrom = document.getElementById("education-month-from");
var educationYearFrom = document.getElementById("education-year-from");
var educationMonthTo = document.getElementById("education-month-to");
var educationYearTo = document.getElementById("education-year-to");
var currentlyStudy = document.getElementById("check-currently-study");
var studyDescription = document.getElementById("study-description");
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
  skill: [],
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
    "justify-center"
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
  ShowToWorkExperience();
});
backToPersonalInformations.addEventListener("click", (e) => {
  e.preventDefault();
  backToInfos();
});
//
navigateToEducation.addEventListener("click", (e) => {
  e.preventDefault();
  ShowEducation();
});
backToWorkExperience.addEventListener("click", (e) => {
  e.preventDefault();
  backToexp();
});
//
navigateToCertifications.addEventListener("click", (e) => {
  e.preventDefault();
  Showcertificats();
});
backToEducation.addEventListener("click", (e) => {
  e.preventDefault();
  backToEduc();
});
//
navigateTolanguages.addEventListener("click", (e) => {
  e.preventDefault();
  Showlanguages();
});
backToCertifications.addEventListener("click", (e) => {
  e.preventDefault();
  backToCertif();
});
//
navigateToSkills.addEventListener("click", (e) => {
  e.preventDefault();
  Showskills();
});
BackToLanguages.addEventListener("click", (e) => {
  e.preventDefault();
  BackToLang();
});

// finish button
confirmInformations.addEventListener("click", (e) => {
  e.preventDefault();
  storepersonalInfo();
  storeWorkExperience();
  storeEducation();
  storecertificat();
  storeLanguage();
  storeSkills();
  showToast();
  skills.classList.add("hidden");
  navigateToDownload.classList.remove("hidden");
  console.log(userData);
});

addNewSocialMedia.addEventListener("click", (e) => {
  e.preventDefault();
  const addsocialinput = document.createElement("div");
  //  addsocialinput.classList.add('mt-8');
  addsocialinput.innerHTML = ` 
                <div class="mt-3">
                  <label class="block mb-2 text-sm font-medium text-gray-900"
                    >Name</label
                  >
                  <select
                    id="add-media"
                    class="bg-secondary border border-none text-gray-900 mb-6 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  >
                    <option selected>Choose</option>
                    <option>Linkedin</option>
                    <option>github</option>
                    <option>other</option>
                  </select>
                </div>
                <label for="url">Url</label>
                <div class="flex ">
                  <input
                    type="text"
                    id="media-url"
                    class="bg-secondary border border-none text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5 w-full"
                  />`;
  AddMedia.appendChild(addsocialinput);
});

AddNewCertification.addEventListener("click", (e) => {
  e.preventDefault();
  const addCertifInput = document.createElement("div");
  addCertifInput.innerHTML = `<div class="md:grid md:justify-center">
            <div class="mt-8 md:w-input">
              <label for="base-input">Name</label>
              <input
                type="text"
                id="certificat-name"
                class="bg-secondary border border-none text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
              />
            </div>
            <!-- Time Period -->
            <label for="timePeriod">Time Period</label>
            <div class="mt-4 md:flex md:justify-around">
              <label for="" class="block lg:hidden">From</label>
              <div
                class="flex md:justify-normal justify-between md:h-10 md:gap-6"
              >
                <input
                  type="text"
                  id="certificat-month-from"
                  class="bg-secondary border-none text-black text-sm rounded-lg focus:ring-primary focus:border-primary block w-36 md:w-28 p-2.5"
                  placeholder="month"
                />
                <input
                  type="Number"
                  id="certificat-year-from"
                  class="ml-5 bg-secondary border-none text-black text-sm rounded-lg focus:ring-primary focus:border-primary block w-36 md:w-28 p-2.5"
                  placeholder="year"
                />
              </div>
              <label for="" class="block lg:hidden">To</label>
              <span class="mt-2 hidden md:block">-</span>
              <div>
                <div class="flex justify-between md:justify-normal md:gap-6">
                  <input
                    type="text"
                    id="certifcat-month-to"
                    class="bg-secondary border-none text-black text-sm rounded-lg focus:ring-primary focus:border-primary block w-36 md:w-28 p-2.5"
                    placeholder="month"
                  />
                  <input
                    type="Number"
                    id="certificat-year-to"
                    class="ml-5 bg-secondary border-none text-black text-sm rounded-lg focus:ring-primary focus:border-primary block w-36 md:w-28 p-2.5"
                    placeholder="year"
                  />
                </div>
              </div>
            </div>
            <!-- Lien de certificat -->
            <div id="certificatInput">
              <label for="base-input">Url</label>
              <div class="flex md:h-10">
                <input
                  type="text"
                  id="certificat-url"
                  class="bg-secondary border border-none text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-input p-2.5"
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
                  class="bg-secondary border border-none mt-3 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-72 p-2.5"
                />`;
  Addsoftskill.appendChild(addSoftInput);
});

AddNewHardSkill.addEventListener("click", (e) => {
  e.preventDefault();
  const addhardskillInput = document.createElement("div");
  addhardskillInput.innerHTML = `<input
                  type="text"
                  id="hard-skills"
                  class="bg-secondary border border-none mt-3 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-72 p-2.5"
                />`;
  AddhardSkill.appendChild(addhardskillInput);
});
let workCheek = 0;
AddNewWorkExperience.addEventListener("click", (e) => {
  e.preventDefault();
  const work = document.createElement("div");
  work.innerHTML = `<div class="md:grid md:justify-center">
            <div class="md:w-input">
              <div class="mt-8">
                <label for="base-input">Company Name</label>
                <input
                  type="text"
                  id="company-name"
                  class="bg-secondary border border-none text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                />
              </div>
              <div class="mt-4">
                <label for="job">Job Title</label>
                <input
                  type="text"
                  id="job-title"
                  class="bg-secondary border border-none text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                />
              </div>
            </div>
            <!-- Time Period -->

            <label for="timePeriod">Time Period</label>
            <div class="mt-4 md:flex md:justify-around">
              <label for="" class="block lg:hidden">From</label>
              <div
                class="flex md:justify-normal justify-between md:h-10 md:gap-6"
              >
                <input
                  type="text"
                  id="job-month-from"
                  class="bg-secondary border-none text-black text-sm rounded-lg focus:ring-primary focus:border-primary block w-36 md:w-28 p-2.5"
                  placeholder="month"
                />
                <input
                  type="Number"
                  id="job-year-from"
                  class="ml-5 bg-secondary border-none text-black text-sm rounded-lg focus:ring-primary focus:border-primary block w-36 md:w-28 p-2.5"
                  placeholder="year"
                />
              </div>
              <label for="" class="block lg:hidden">To</label>
              <span class="mt-2 hidden md:block">-</span>
              <div>
                <div class="flex justify-between md:justify-normal md:gap-6">
                  <input
                    type="text"
                    id="job-month-to"
                    class="bg-secondary border-none text-black text-sm rounded-lg focus:ring-primary focus:border-primary block w-36 md:w-28 p-2.5"
                    placeholder="month"
                  />
                  <input
                    type="Number"
                    id="job-year-to"
                    class="ml-5 bg-secondary border-none text-black text-sm rounded-lg focus:ring-primary focus:border-primary block w-36 md:w-28 p-2.5"
                    placeholder="year"
                  />
                </div>
                <div class="inline-flex items-center ml-3.5 mt-3">
                    <label class="flex items-center cursor-pointer relative" for="check-currently-work${workCheek}">
                      <input type="checkbox"
                        class="peer h-5 w-5 cursor-pointer appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-primary checked:border-nu-gray-100"
                        id="check-currently-work${workCheek}" />
                      <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                          stroke="currentColor" stroke-width="1">
                          <path fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"></path>
                        </svg>
                      </span>
                    </label>
                    <label class="cursor-pointer ml-3 text-slate-600 text-sm font-medium" for="check-currently-work${workCheek}">
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
              <textarea
                id="job-description"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-secondary rounded-lg border border-none focus:ring-primary focus:border-primary"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
          </div>`;
  addWork.appendChild(work);
  workCheek++;
});
let studyCheck = 0;
AddNewEducation.addEventListener("click", (e) => {
  e.preventDefault();
  const addEd = document.createElement("div");
  addEd.innerHTML = `<div class="md:grid md:justify-center">
              <div class="block md:flex md:mt-4 md:justify-between">
                <div class="mt-8 md:mt-0">
                  <label for="Institution">Institution Name</label>
                  <input
                    type="text"
                    id="Institution-name"
                    class="bg-secondary border border-none text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 md:w-36"
                  />
                </div>
                <div class="mt-4 md:mt-0">
                  <label for="study">Field of study</label>
                  <input
                    type="text"
                    id="field-of-study"
                    class="bg-secondary border border-none text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 md:w-36"
                  />
                </div>
                <div class="mt-4 md:mt-0">
                  <label for="degree">Degree</label>
                  <input
                    type="text"
                    id="Institution-degree"
                    class="bg-secondary border border-none text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 md:w-36"
                  />
                </div>
              </div>
              <!-- Time Period -->
              <label for="timePeriod">Time Period</label>
              <div class="mt-4 md:flex md:justify-around">
                <label for="" class="block lg:hidden">From</label>
                <div
                  class="flex md:justify-normal justify-between md:h-10 md:gap-6"
                >
                  <input
                    type="text"
                    id="education-month-from"
                    class="bg-secondary border-none text-black text-sm rounded-lg focus:ring-primary focus:border-primary block w-36 md:w-28 p-2.5"
                    placeholder="month"
                  />
                  <input
                    type="Number"
                    id="education-year-from"
                    class="ml-5 bg-secondary border-none text-black text-sm rounded-lg focus:ring-primary focus:border-primary block w-36 md:w-28 p-2.5"
                    placeholder="year"
                  />
                </div>
                <label for="" class="block lg:hidden">To</label>
                <span class="mt-2 hidden md:block md:px-2">-</span>
                <div>
                  <div class="flex justify-between md:justify-normal md:gap-6">
                    <input
                      type="text"
                      id="education-month-to"
                      class="bg-secondary border-none text-black text-sm rounded-lg focus:ring-primary focus:border-primary block w-36 md:w-28 p-2.5"
                      placeholder="month"
                    />
                    <input
                      type="Number"
                      id="education-year-to"
                      class="ml-5 bg-secondary border-none text-black text-sm rounded-lg focus:ring-primary focus:border-primary block w-36 md:w-28 p-2.5"
                      placeholder="year"
                    />
                  </div>
                  <div class="inline-flex items-center ml-3.5 mt-3">
                    <label class="flex items-center cursor-pointer relative" for="check-currently-study${studyCheck}">
                      <input type="checkbox"
                        class="peer h-5 w-5 cursor-pointer appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-primary checked:border-nu-gray-100"
                        id="check-currently-study${studyCheck}" />
                      <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                          stroke="currentColor" stroke-width="1">
                          <path fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"></path>
                        </svg>
                      </span>
                    </label>
                    <label class="cursor-pointer ml-3 text-slate-600 text-sm font-medium" for="check-currently-study${studyCheck}">
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
                <textarea
                  id="study-description"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-secondary rounded-lg border border-none focus:ring-primary focus:border-primary"
                  placeholder="Write your thoughts here..."
                ></textarea>
              </div>
            </div>`;
  addEducation.appendChild(addEd);
  studyCheck++;
});
AddNewLanguage.addEventListener("click", (e) => {
  e.preventDefault();
  const addLang = document.createElement("div");
  addLang.innerHTML = `<label class="block my-2 text-sm font-medium text-gray-900"
              >Select language</label
            >
            <select
              id="add-language"
              class="bg-secondary border border-none text-gray-900 mb-6 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
            >
              <option selected>Choose</option>
              <option>English</option>
              <option>Arabic</option>
              <option>Frensh</option>
              <option>Espagnol</option>
              <option>Arabic</option>
            </select>
            <label class="block mb-2 text-sm font-medium text-gray-900"
              >Level</label
            >
            <div class="flex md:h-10" id="AddLanguage">
              <select
                id="add-level"
                class="bg-secondary border border-none text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-72 p-2.5"
              >
                <option selected>Choose</option>
                <option>Pre Intermediate</option>
                <option>Intermediate</option>
                <option>Proficiency</option>
              </select>`;
  addLanguage.appendChild(addLang)
});

// display selected image
function displayImg(event) {
  const img = document.getElementById("showImg");
  img.src = URL.createObjectURL(event.target.files[0]);
  img.classList.remove("hidden");
}

//store personal infos
function storepersonalInfo() {
  const personalInfo = {
    profileImage: profileImage.files[0],
    fullName: fullName.value,
    email: email.value,
    phoneCode: phoneCode.value,
    jobTitle: jobTitle.value,
    about: about.value,
    addMediaInput: addMediaInput.value,
    mediaUrl: mediaUrl.value,
  };
  userData.personalInfos.push(personalInfo);
  console.log(userData.personalInfos);
}
//store workExperience
function storeWorkExperience() {
  const workExp = {
    companyName: companyName.value,
    jobTitle: jobTitle.value,
    jobMonthFrom: jobMonthFrom.value,
    jobYearFrom: jobYearFrom.value,
    jobMonthTo: jobMonthTo.value,
    jobYearTo: jobYearTo.value,
    currentlyWork: currentlyWork.value,
    workDescription: workDescription.value,
  };
  userData.Work.push(workExp);
  console.log(userData.Work);
}
//store education data
function storeEducation() {
  const school = {
    institutName: institutName.value,
    field: field.value,
    degree: degree.value,
    educationMonthFrom: educationMonthFrom.value,
    educationYearFrom: educationYearFrom.value,
    educationMonthTo: educationMonthTo.value,
    educationYearTo: educationYearTo.value,
    currentlyStudy: currentlyStudy.value,
    studyDescription: studyDescription.value,
  };
  userData.school.push(school);
  console.log(userData.school);
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
  console.log(userData.certif);
}
//store language data
function storeLanguage() {
  const language = {
    selectLanguage: selectLanguage.value,
    selectLevel: selectLevel.value,
  };
  userData.lang.push(language);
  console.log(userData.lang);
}
//store skills
function storeSkills() {
  const skills = {
    softSkills: softSkills.value,
    hardSkills: hardSkills.value,
  };
  userData.skill.push(skills);
  console.log(userData.skill);
}
