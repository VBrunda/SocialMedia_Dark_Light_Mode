const STORAGE_KEY = 'user-color-mode';

const toggleBtn = document.getElementById('toggleBtn');

function getLocalStorageMode(){
   return localStorage.getItem(STORAGE_KEY);
}

function getPreferredMode(){
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function loadOrUpdateMode(){
    let mode = getLocalStorageMode() || getPreferredMode();
    if(mode == 'light') toggleBtn.click();
}

function setMode(mode){
    localStorage.setItem(STORAGE_KEY, mode);
    document.body.classList = mode;
    toggleBtn.click();
}

function toggleMode(){
    toggleBtn.checked ? setMode('light') : setMode('dark');
}

loadOrUpdateMode();

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    event.matches ? setMode('dark') : setMode('light');
})