const button = document.getElementById('color-change-button');
const imgElement = document.createElement("img");
const body = document.body;
let isDarkMode = false;


button.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        body.style.backgroundColor = '#222';
        body.style.color = '#ffffff';
        button.style.backgroundColor = '#ffe100';
        imgElement.src = "images/sun_icon.png";
        button.innerHTML = "";
        button.appendChild(imgElement);
    } else {
        body.style.backgroundColor = '#f0f0f0';
        body.style.color = '#000000';
        button.style.backgroundColor = '#ffe100';
        button.style.color = '#000000';
        imgElement.src = "images/moon_icon.png";
        button.innerHTML = "";
        button.appendChild(imgElement);
    }
});
