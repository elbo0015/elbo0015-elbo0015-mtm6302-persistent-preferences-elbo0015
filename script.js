// Select elements
const themeSelect = document.querySelector('#theme-select');
const listSelect = document.querySelector('#list-select');
const displayList = document.querySelector('#display-list');
const bodyTag = document.body;

// 1. Save to LocalStorage
function saveSettings() {
    const preferences = {
        theme: themeSelect.value,
        listStyle: listSelect.value
    };
    // LocalStorage only stores strings, so we use JSON.stringify
    localStorage.setItem('user_prefs', JSON.stringify(preferences));
    applySettings(preferences);
}

// 2. Apply classes to the UI
function applySettings(prefs) {
    bodyTag.className = prefs.theme;
    displayList.className = prefs.listStyle;
    
    // Update the dropdowns to match
    themeSelect.value = prefs.theme;
    listSelect.value = prefs.listStyle;
}

// 3. Load from LocalStorage on Startup
function loadSettings() {
    const savedData = localStorage.getItem('user_prefs');
    
    if (savedData) {
        // Turn the string back into an object
        const prefs = JSON.parse(savedData);
        applySettings(prefs);
    }
}

// Event Listeners
themeSelect.addEventListener('change', saveSettings);
listSelect.addEventListener('change', saveSettings);

// Run on page load
loadSettings();