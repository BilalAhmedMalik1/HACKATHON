const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const language = (document.getElementById('language') as HTMLInputElement).value;
    const profilesummary = (document.getElementById('profilesummary') as HTMLInputElement).value;
    const LinkedIn = (document.getElementById('LinkedIn') as HTMLInputElement).value;

    const resumeHTML = `
        <h2><b>${name}</b></h2>
        <h3>Personal Information</h3>
        <p><b>Email:</b><span contenteditable="true">${email}</span></p>
        <p><b>Phone:</b><span contenteditable="true">${phone}</span></p>
        <p><b>linkedin:</b><span contenteditable="true">${LinkedIn}</span></p>

        <h3>profile summary</h3>
        <p contenteditable="true">${profilesummary}</p>

        <h3>Education</h3>
        <p contenteditable="true">${education}</p>

        <h3>Experience</h3>
        <p contenteditable="true">${experience}</p>
 
        <h3>Skills</h3>
        <p contenteditable="true">${skills}</p>

        <h3>Language</h3>
        <p contenteditable="true">${language}</p>
    `;

    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
    }else {
        console.error('The resume display element is missing');
    }
});
