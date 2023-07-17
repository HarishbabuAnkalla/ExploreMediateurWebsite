var container = document.querySelector('.container');

container.addEventListener('mouseenter', function() {
    container.style.animationPlayState = 'paused'; /* Pause animation on hover */
});

container.addEventListener('mouseleave', function() {
    container.style.animationPlayState = 'running'; /* Resume animation on mouse leave */
});


const toggleButtons = document.getElementsByClassName('toggleButton');
const contents = document.getElementsByClassName('content');

for (let i = 0; i < toggleButtons.length; i++) {
    toggleButtons[i].addEventListener('click', function() {
        // Hide all contents
        for (let j = 0; j < contents.length; j++) {
            contents[j].classList.add('hidden');
        }

        // Show only the clicked content
        const contentId = this.nextElementSibling.id;
        document.getElementById(contentId).classList.remove('hidden');
    });
}



var openModalBtn = document.getElementById('openModalBtn');
var modal = document.getElementById('modal');
window.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('modal');

    // Show the modal on page load
    modal.style.display = 'block';

    var closeBtn = document.getElementsByClassName('close')[0];

    // Close modal when the close button is clicked
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside the modal
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

const homeLink = document.getElementById('homeLink');

homeLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    window.location.reload(); // Reload the page
});


const imageLink = document.getElementById('imageLink');

imageLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    window.location.reload(); // Reload the page
});






const containers = document.querySelectorAll('.wcu-card');

const addJerkingClass = (event) => {
    event.target.classList.add('jerking');
};

const removeJerkingClass = (event) => {
    event.target.classList.remove('jerking');
};

containers.forEach((container) => {
    container.addEventListener('mouseover', addJerkingClass);
    container.addEventListener('mouseout', removeJerkingClass);
    container.addEventListener('touchstart', addJerkingClass);
    container.addEventListener('touchend', removeJerkingClass);
});




const pageButtons = document.querySelectorAll('.page-button');
const pages = document.querySelectorAll('.page');

pageButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const selectedPageId = button.getAttribute('data-page');
        const selectedPage = document.getElementById(selectedPageId);

        pages.forEach((page) => {
            if (page === selectedPage) {
                page.classList.toggle('show');
            } else {
                page.classList.remove('show');
            }
        });
    });
});








document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("countrycode").value;
    var city = document.getElementById("city").value;
    var branch = document.getElementById("branch").value;
    var age = document.getElementById("age").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var countryintrest = document.getElementById("countryintrest").value;
    var visa = document.getElementById("visa").value;
    var consultation = document.getElementById("consultation").value;
    var message = document.getElementById("message").value;

    // Send email alert
    var subject = "New Form Submission";
    var body = "Name: " + name + "\nEmail: " + email + "\nNumber: " + number + "\nCity: " + city + "\nBranch: " + branch + "\nAge: " + age + "\nEducation: " + education + "\nExperience: " + experience + "\nCountry Intrest: " + countryintrest + "\nVisa: " + visa + "\nConsultation: " + consultation + "\nMessage: " + message;
    var mailtoLink = "mailto:exploremediateurpvtltd@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    window.location.href = mailtoLink;
});


document.getElementById("myFormsModal").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("countrycode").value;
    var city = document.getElementById("city").value;
    var branch = document.getElementById("branch").value;
    var age = document.getElementById("age").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var countryintrest = document.getElementById("countryintrest").value;
    var visa = document.getElementById("visa").value;
    var consultation = document.getElementById("consultation").value;
    var message = document.getElementById("message").value;

    // Send email alert
    var subject = "New Form Submission";
    var body = "Name: " + name + "\nEmail: " + email + "\nNumber: " + number + "\nCity: " + city + "\nBranch: " + branch + "\nAge: " + age + "\nEducation: " + education + "\nExperience: " + experience + "\nCountry Intrest: " + countryintrest + "\nVisa: " + visa + "\nConsultation: " + consultation + "\nMessage: " + message;
    var mailtoLink = "mailto:exploremediateurpvtltd@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    window.location.href = mailtoLink;
});

document.getElementById('facebook-button').addEventListener('click', function() {
    window.open('https://www.facebook.com/profile.php?id=100094423380458&mibextid=ZbWKwL', '_blank');
});

document.getElementById('instagram-button').addEventListener('click', function() {
    window.open('https://instagram.com/explore_mediateur_pvt_ltd?igshid=MzRlODBiNWFlZA==', '_blank');
});

document.getElementById('whatsapp-button').addEventListener('click', function() {
    window.open('https://wa.me/+918760867680', '_blank');
});

document.getElementById('twitter-button').addEventListener('click', function() {
    window.open('https://twitter.com/ExplorePrivate?t=CqCjbuZpy8yWraiaA3q9mw&s=09', '_blank');
});





document.getElementById("calculate").addEventListener("click", calculatePoints);

function calculatePoints() {
    var pointage = parseInt(document.getElementById("pointage").value);
    var pointenglish = parseInt(document.getElementById("pointenglish").value);
    var pointeducation = parseInt(document.getElementById("pointeducation").value);
    var pointexperience = parseInt(document.getElementById("pointexperience").value);
    var pointsponsorship = document.getElementById("pointsponsorship").checked;
    var pointpartner = parseInt(document.getElementById("pointpartner").value);

    var totalPoints = pointage + pointenglish + pointeducation + pointexperience;
    if (pointsponsorship) {
        totalPoints += 5;
    }
    totalPoints += pointpartner;

    document.getElementById("result").textContent = "Total Points: " + totalPoints;
}