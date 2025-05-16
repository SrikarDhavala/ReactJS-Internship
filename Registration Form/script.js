function storePersonalData() {
    const personalData = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        dob: document.getElementById("dob").value,
        mobileNumber: document.getElementById("mobile").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value
    };

    localStorage.setItem("personalData", JSON.stringify(personalData));

    window.location.href = "index2.html";
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registrationForm");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            const personalData = JSON.parse(localStorage.getItem("personalData")) || {};

            const collegeData = {
                roll: document.getElementById("roll").value,
                enrollment: document.getElementById("enr").value,
                semester: document.getElementById("sem").value,
                branch: document.getElementById("branch").value,
                section: document.getElementById("section").value,
                course: document.getElementById("course").value
            };

            const studentData = {
                ...personalData,
                education: collegeData
            };

            console.log("Student Data:", JSON.stringify(studentData, null, 2));

            localStorage.removeItem("personalData");
        });
    }
});