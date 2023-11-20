const storedUsers = localStorage.getItem("userInformation");

if (storedUsers) {
    const userDetails = JSON.parse(storedUsers);

    document.getElementById("first-name").textContent = userDetails.firstName;
    document.getElementById("last-name").textContent = userDetails.lastName;
    document.getElementById("country").textContent = userDetails.country;
    document.getElementById("phone-number").textContent = userDetails.phoneNumber;
    document.getElementById("state").textContent = userDetails.state;
    document.getElementById("city").textContent = userDetails.city;
    document.getElementById("village").textContent = userDetails.village;
}else{
    promptUserDetails();
}


function promptUserDetails() {
    const firstName = prompt("Enter your first name:");
    const lastName = prompt("Enter your last name:");
    const country = prompt("Enter your country:");
    const phoneNumber = prompt("Enter your phone number:");
    const state = prompt("Enter your state:");
    const city = prompt("Enter your city:");
    const village = prompt("Enter your village:");

    const userDetails = {
        firstName,
        lastName,
        country,
        phoneNumber,
        state,
        city,
        village,
    };

    localStorage.setItem("userInformation", JSON.stringify(userDetails));

    document.getElementById("first-name").textContent = userDetails.firstName;
    document.getElementById("last-name").textContent = userDetails.lastName;
    document.getElementById("country").textContent = userDetails.country;
    document.getElementById("phone-number").textContent = userDetails.phoneNumber;
    document.getElementById("state").textContent = userDetails.state;
    document.getElementById("city").textContent = userDetails.city;
    document.getElementById("village").textContent = userDetails.village;
}

const themeSelector = document.getElementById('theme');

themeSelector.addEventListener('change', function() {
    const selectedTheme = themeSelector.value;

    if (selectedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
    }

    localStorage.setItem('theme', selectedTheme);
});

window.addEventListener('load', function() {
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
       
        document.body.classList.add('light-mode');
    }
});