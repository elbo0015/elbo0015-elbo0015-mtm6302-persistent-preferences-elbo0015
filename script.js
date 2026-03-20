// 1. Array of at least 5 items to be added dynamically
const myData = ["Web Development", "JavaScript Logic", "CSS Grid Layouts", "API Integration", "Local Storage Mastery"];

// 2. Select DOM Elements
const themeDropdown = document.querySelector('#theme-select');
const styleDropdown = document.querySelector('#style-select');
const displayList = document.querySelector('#dynamic-list');
const pageBody = document.body;

// 3. Function to render the list dynamically
const buildList = () => {
    // We use .map to create an array of <li> strings and .join to make it one block of HTML
    displayList.innerHTML = myData.map(item => `<li>${item}</li>`).join('');
};

// 4. Persistence Functions (LocalStorage)
const saveToBrowser = () => {
    const userSettings = {
        theme: themeDropdown.value,
        listStyle: styleDropdown.value
    };
    // LocalStorage only stores strings, so we use JSON.stringify
    localStorage.setItem('mtm6302_settings', JSON.stringify(userSettings));
};

const loadFromBrowser = () => {
    const savedJSON = localStorage.getItem('mtm6302_settings');
    
    if (savedJSON) {
        // Turn the string back into a JavaScript Object
        const prefs = JSON.parse(savedJSON);
        
        // Update the dropdowns to match saved values
        themeDropdown.value = prefs.theme;
        styleDropdown.value = prefs.listStyle;
        
        // Apply the classes immediately
        updateUI(prefs.theme, prefs.listStyle);
    }
};

const updateUI = (themeClass, listClass) => {
    pageBody.className = themeClass;
    displayList.className = listClass;
};

// 5. Event Listeners (Requirement: No inline events)
themeDropdown.addEventListener('change', () => {
    updateUI(themeDropdown.value, styleDropdown.value);
    saveToBrowser();
});

styleDropdown.addEventListener('change', () => {
    updateUI(themeDropdown.value, styleDropdown.value);
    saveToBrowser();
});

// Initialize the page
buildList();
loadFromBrowser();