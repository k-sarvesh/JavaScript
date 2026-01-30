// localStorage = browser chya ander data store karaycha asel tar localStorage use karto ani jr browser band kela tar hi delete nahi honar

// localStorage mdhe fakt strings ch data store hoto baki nahi 
// use JSON to convert other datatypes to string and vice versa


// how to store = setItem 
// how to fetch data = getItem
// how to remove data = removeItem
// how to update data = setItem (same method as store)
// how to clear all data = clear()

// SessionStorage = temporary store karto data ani jr tab band kela tar data delete honar
// how to store = setItem 
// how to fetch data = getItem
// how to remove data = removeItem
// how to update data = setItem (same method as store)
// how to clear all data = clear()


//cookies = small files store karto data jr browser band kela tar hi delete nahi honar pan localStorage peksha kami data store karto


const mq = window.matchMedia('(prefers-color-scheme: dark)');
const bt = document.querySelector('button');

function applyTheme(theme) {
    document.body.classList.toggle('dark', theme === 'dark');
}

function initTheme() {
    const saved = localStorage.getItem('theme');
    if (saved) {
        applyTheme(saved);
    } else {
        applyTheme(mq.matches ? 'dark' : 'light');
    }
}

initTheme();

bt.addEventListener('click', function () {
    const newTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
});

mq.addEventListener('change', function () {
    if (!localStorage.getItem('theme')) {
        applyTheme(mq.matches ? 'dark' : 'light');
    }
});
