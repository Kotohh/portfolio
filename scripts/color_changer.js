const button = document.getElementById('color-change-button');
const body = document.body;
let isDarkMode = false;

button.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        body.style.backgroundColor = '#222';
        body.style.color = '#ffffff';
        button.style.backgroundColor = '#ffe100';
        button.textContent = 'White Mode';
    } else {
        body.style.backgroundColor = '#f0f0f0';
        body.style.color = '#000000';
        button.style.backgroundColor = '#ffe100';
        button.style.color = '#000000';
        button.textContent = 'Dark Mode';
    }
});