const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;
const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;
const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement;
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const username = (document.getElementById('username') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const language = (document.getElementById('language') as HTMLInputElement).value;
    const profilesummary = (document.getElementById('profilesummary') as HTMLInputElement).value;
    const LinkedIn = (document.getElementById('LinkedIn') as HTMLInputElement).value;

    const resumeData = {
        name,
        email,
        phone,
        education,
        experience,
        skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData));

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

        resumeDisplayElement.innerHTML = resumeHTML;
        const shareableURL =
        `${window.location.origin}?username=${encodeURIComponent(username)}`;
        // Display the shareable link
        shareableLinkContainer.style.display = 'block';
        shareableLinkElement.href = shareableURL;
        shareableLinkElement.textContent = shareableURL;
        });
        // Handle PDF download
        downloadPdfButton.addEventListener('click', () => {
        window.print(); // This will open the print dialog and allow the user to save as PDF
        });
        // Prefill the form based on the username in the URL
        window.addEventListener('DOMContentLoaded', () => {
        const urlParams = new URLSearchParams(window.location.search);
        const username = urlParams.get('username');
        if (username) {
        
        // Autofill form if data is found in localStorage
        const savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
        const resumeData = JSON.parse(savedResumeData);
        (document.getElementById('Username') as HTMLInputElement).value =
        username;
        (document.getElementById('name') as HTMLInputElement).value =
        resumeData.name;
        (document.getElementById('email') as HTMLInputElement).value =
        resumeData.email;
        (document.getElementById('phone') as HTMLInputElement).value =
        resumeData.phone;
        (document.getElementById('education') as HTMLTextAreaElement).value =
        resumeData.education;
        (document.getElementById('experience') as HTMLTextAreaElement).value
        = resumeData.experience;
        (document.getElementById('skills') as HTMLTextAreaElement).value =
        resumeData.skills;
        (document.getElementById('language') as HTMLTextAreaElement).value =
        resumeData.language;
        (document.getElementById('LinkedIn') as HTMLTextAreaElement).value =
        resumeData.LinkedIn;
        (document.getElementById('profilesummary') as HTMLTextAreaElement).value =
        resumeData.profilesummary;
       
      
        }
        }
        });