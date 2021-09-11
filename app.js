// ? Task:


// Solution 1
const allImg = document.querySelectorAll('.left-panel img')
const maxImg = document.querySelector('.right-panel img');
const select = document.querySelector('select');
const allLang = ['en', 'ru', 'ua'];

allImg.forEach(i => (i.onmouseenter = e => maxImg.src = e.target.src));

select.addEventListener('change',()=> changeURLLang());

const changeURLLang = () => {
    location.href = `${window.location.pathname}#${select.value}`;
    location.reload();
}

const changeLang = () => {
    let hash = window.location.hash.substr(1);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en';
         location.reload();
    }
    select.value = hash;
  
    for (let key in langArr) {
        let elem = document.querySelector(`.lng-${key}`);
        elem.innerHTML = elem && langArr[key][hash];
    }
}

changeLang();

// ! Explanation: 
