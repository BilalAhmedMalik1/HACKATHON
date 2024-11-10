var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var language = document.getElementById('language').value;
    var profilesummary = document.getElementById('profilesummary').value;
    var LinkedIn = document.getElementById('LinkedIn').value;
    var resumeHTML = "\n        <h2><b>".concat(name, "</b></h2>\n        <h3>Personal Information</h3>\n        <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n        <p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n        <p><b>linkedin:</b><span contenteditable=\"true\">").concat(LinkedIn, "</span></p>\n\n        <h3>profile summary</h3>\n        <p contenteditable=\"true\">").concat(profilesummary, "</p>\n\n        <h3>Education</h3>\n        <p contenteditable=\"true\">").concat(education, "</p>\n\n        <h3>Experience</h3>\n        <p contenteditable=\"true\">").concat(experience, "</p>\n \n        <h3>Skills</h3>\n        <p contenteditable=\"true\">").concat(skills, "</p>\n\n        <h3>Language</h3>\n        <p contenteditable=\"true\">").concat(language, "</p>\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing');
    }
});
