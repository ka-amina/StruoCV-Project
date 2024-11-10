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
const navigateTolanguages=document.getElementById("NavigateToLanguages")
const backToCertifications = document.getElementById("BackToCertifications");

const navigateToSkills = document.getElementById("NavigateToSkills");
const BackToLanguages= document.getElementById("BackToLanguages");
const navigateToDownload= document.getElementById("Download")

// forms Name
const personalInformations = document.getElementById("personal-informations");
const workExperience = document.getElementById("work-experience");
const education = document.getElementById("education");
const certifications = document.getElementById("certifications");
const skills = document.getElementById("skills");
const languages= document.getElementById("language")
// add new inputs dynamically
const addNewSocialMedia = document.getElementById("addNewSocialMedia");
const AddNewWorkExperience = document.getElementById("AddNewWorkExperience");
const AddNewEducation = document.getElementById("AddNewEducation");
const AddNewCertification = document.getElementById("AddNewCertification");
const AddNewSoftSkill = document.getElementById("AddNewSoftSkill");
const AddNewHardSkill = document.getElementById("AddNewHardSkill");
//finish forms
const confirmInformations = document.getElementById("confirmInformations");
// toast box
const toastBox = document.getElementById("toast-box");
// add inputs
const AddMedia = document.getElementById("mediaInputs");
const addcertif= document.getElementById("certificatInput");
const Addsoftskill= document.getElementById("Addsoftskill");
const AddhardSkill= document.getElementById("AddhardSkill");
const addWork= document.getElementById("addWork");
const addEducation= document.getElementById("addEducation");
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
function Showlanguages(){
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
            /> <span class="ml-7">The resume ready to download</span>`;
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
navigateTolanguages.addEventListener("click", (e)=>{
    e.preventDefault()
    Showlanguages();
})
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
  showToast();
  skills.classList.add('hidden')
  navigateToDownload.classList.remove('hidden')

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

AddNewCertification.addEventListener("click", (e)=>{
    e.preventDefault()
    const addCertifInput = document.createElement("div");
    addCertifInput.innerHTML=`<div class="md:grid md:justify-center">
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
          </div>`
   addcertif.appendChild(addCertifInput)
})

AddNewSoftSkill.addEventListener("click",(e)=>{
    e.preventDefault()
 const addSoftInput= document.createElement("div")
 addSoftInput.innerHTML=`<input
                  type="text"
                  id="soft-skills"
                  class="bg-secondary border border-none mt-3 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-72 p-2.5"
                />`
    Addsoftskill.appendChild(addSoftInput)
})

AddNewHardSkill.addEventListener("click",(e)=>{
    e.preventDefault()
 const addhardskillInput= document.createElement("div")
 addhardskillInput.innerHTML=`<input
                  type="text"
                  id="hard-skills"
                  class="bg-secondary border border-none mt-3 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-72 p-2.5"
                />`
    AddhardSkill.appendChild(addhardskillInput)
})

AddNewWorkExperience.addEventListener("click",(e)=>{
    e.preventDefault()
    const work= document.createElement('div')
    work.innerHTML=`<div class="md:grid md:justify-center">
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
                <div class="flex items-center mb-4 mt-3">
                  <input
                    id="check-currently-work"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 border-2 rounded-3xl border-primary"
                  />
                  <label for="checkbox" class="ms-2 text-sm font-medium"
                    >I currently work here</label
                  >
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
          </div>`
          addWork.appendChild(work)
})

AddNewEducation.addEventListener("click",(e)=>{
    e.preventDefault()
    const addEd = document.createElement('div')
    addEd.innerHTML=`<div class="md:grid md:justify-center">
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
                  <div class="flex items-center mb-4 mt-3">
                    <input
                      id="check-currently-study"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-primary bg-primary border-primary rounded checked:bg-primary checked:border-primary"
                    />
                    <label for="checkbox" class="ms-2 text-sm font-medium"
                      >I currently study here</label
                    >
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
            </div>`
            addEducation.appendChild(addEd)
})

// display selected image 
function displayImg(e){
    const img=document.getElementById("showImg");
    img.src= URL.createObjectURL(e.target.files[0]);
    img.classList.remove('hidden')
}
