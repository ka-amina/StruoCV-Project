// navigation buttons
const  navigateToWorkExperience = document.getElementById("NavigateToWorkExperience");
const  backToPersonalInformations = document.getElementById("backToPersonalInformations");
const  navigateToEducation = document.getElementById("NavigateToEducation");
const  backToWorkExperience = document.getElementById("backToWorkExperience");
const  navigateToCertifications = document.getElementById("NavigateToCertifications");
const  backToEducation = document.getElementById("backToEducation");
const  navigateToSkills = document.getElementById("NavigateToSkills");
const  backToCertifications = document.getElementById("BackToCertifications");

// forms Name
const  personalInformations = document.getElementById("personal-informations");
const  workExperience = document.getElementById("work-experience");
const  education = document.getElementById("education");
const  certifications = document.getElementById("certifications");
const  skills = document.getElementById("skills");
// add new inputs dynamically
const  addNewSocialMedia = document.getElementById("addNewSocialMedia");
const  AddNewWorkExperience = document.getElementById("AddNewWorkExperience");
const  AddNewEducation = document.getElementById("AddNewEducation");
const  AddNewCertification = document.getElementById("AddNewCertification");
const  AddNewSoftSkill = document.getElementById("AddNewSoftSkill");
const  AddNewHardSkill = document.getElementById("AddNewHardSkill");
//finish forms
const  confirmInformations = document.getElementById("confirmInformations");
//Navigation functions
function ShowToWorkExperience() {
    personalInformations.classList.add("hidden");
    workExperience.classList.remove("hidden")
}
function backToInfos() {
    personalInformations.classList.remove("hidden");
    workExperience.classList.add("hidden")
}
//
function ShowEducation() {
    workExperience.classList.add("hidden");
    education.classList.remove("hidden")
}
function backToexp() {
    workExperience.classList.remove("hidden");
    education.classList.add("hidden")
}
//
function Showcertificats() {
    certifications.classList.remove("hidden");
    education.classList.add("hidden")
}
function backToEduc() {
    certifications.classList.add("hidden");
    education.classList.remove("hidden")
}
//
function Showskills() {
    skills.classList.remove("hidden");
    certifications.classList.add("hidden")
}
function backToCertif() {
    certifications.classList.remove("hidden");
    skills.classList.add("hidden")
}
const toastBox= document.getElementById('toast-box')
function showToast(){
    let toast = document.createElement('div')
    toast.classList.add('h-16', 'w-60', 'shadow-xl', 'mb-4', 'border', 'rounded-lg', 'p-3', 'flex', 'items-center', 'justify-center')
    toast.innerHTML=`<img
              src="./icons/toast.svg"
              alt="personalinfo"
              width="24"
              height="24"
            /> <span class="ml-7">The resume ready to download</span>`
    toastBox.appendChild(toast)
    setTimeout(()=>{
        toast.remove();
    },2000)
}

//make  previous and next buttons workes correctly
//
navigateToWorkExperience.addEventListener("click",(e)=> {
    e.preventDefault()
    ShowToWorkExperience()
})
backToPersonalInformations.addEventListener("click",(e)=> {
    e.preventDefault()
    backToInfos()
})
//
navigateToEducation.addEventListener("click",(e)=> {
    e.preventDefault()
    ShowEducation()
    
})
backToWorkExperience.addEventListener("click",(e)=> {
    e.preventDefault()
    backToexp()
})
//
navigateToCertifications.addEventListener("click",(e)=> {
    e.preventDefault()
    Showcertificats()
})
backToEducation.addEventListener("click",(e)=> {
    e.preventDefault()
    backToEduc()
})
//

navigateToSkills.addEventListener("click",(e)=> {
    e.preventDefault()
    Showskills()
    
})
backToCertifications.addEventListener("click",(e)=> {
    e.preventDefault()
    backToCertif()
})
// finish button
confirmInformations.addEventListener("click", (e)=>{
    e.preventDefault()
    showToast();
})

