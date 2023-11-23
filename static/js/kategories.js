var ddfd = document.querySelectorAll('.box li.oi span');
var bpxxx = document.querySelectorAll('li.oi');

console.log(ddfd);

var sda = {
    'Фантастика' : ['Боевая фантастика','Научная фантастика','Постапокалипсис','Космическая фантастика'],
    'Фэнтези': ['Боевое фэнтези','Историческое фэнтези','Городское фэнтези','Приключенческое фэнтези','Юмористическое фэнтези'],
    'Проза': ['Современная проза','Исторический роман','Мужской роман','Женский роман'],
    'Триллеры': ['Криминальный триллер', 'Политический триллер', 'Мистический триллер', 'Психологический триллер'],
    'Мистика/Ужасы': ['Паранормальное'],
    'Детективы': ['Исторический детектив','Криминальный детектив','Классический детектив'],
    'Разное': ['Детская литература','Приключенческий роман','Боевик','Юмор']
}


function newBlocks(names,numer) {

    let fragment = document.createDocumentFragment();

    for (let name in names) {
        let span = document.createElement('span');
        span.innerHTML = names[name];
        let li = document.createElement('li');
        li.className = 'io';
        li.append(span);
        fragment.appendChild(li); // вставить каждый LI в DocumentFragment
    }

    bpxxx[numer].after(fragment);

}

function clickText(key,numer) {
    for (let keys in sda) {
        if (keys === key) {
            console.log(sda[keys],numer);
            newBlocks(sda[keys],numer);
        }
    }
}


ddfd.forEach((element,key) => {
    element.addEventListener('click', function() {
        let io = document.querySelectorAll('li.io');
        if (io.length != 0) {      
            for (let i=0; i < io.length;i++) {
                setTimeout(function(){ 
                    io[i].remove();
                },300);
                
            }
        }
       
        // for (let i=0;i< bpxxx.length; i++) {
        //     bpxxx[i].style.display = 'none';
        // }
        setTimeout(function(){ 
            clickText(ddfd[key].innerHTML,key);
        },300);
        
        // bpxxx[key].style.display = 'flex';
      
    })
});

// xcsds[0].addEventListener('click', function (evend) {
//     blockHome.style.display = 'flex';
//     sdsd[1].style.display = 'flex';
//     names = 'register';
// })
