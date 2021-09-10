// ? Task:


// Solution 1
const allImg = document.querySelectorAll('.left-panel img')
const maxImg = document.querySelector('.right-panel img');
const select = document.querySelector('select');
const allLang = ['en', 'ru', 'ua'];

allImg.forEach(i => (i.onmouseenter = (e) => (maxImg.src = e.target.src)));

select.addEventListener('change',()=> changeURLLang());

// перенаправить на url с указанием языка
const changeURLLang = () => {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

const changeLang = () => {
    let hash = window.location.hash;
    hash = hash.substr(1);
    console.log(hash);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    select.value = hash;
    document.querySelector('title').innerHTML = langArr['unit'][hash];
    // document.querySelector('.lng-chip').innerHTML = langArr['chip'][hash];
    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }

    }
}

changeLang();

// ! Explanation: 
