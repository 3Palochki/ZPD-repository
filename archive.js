const home = document.getElementById('home')
const archive = document.getElementById('archive')
const user = document.getElementById('user')
const uni = document.getElementById('uni')
const music = document.getElementById('music')

console.log(home,archive, music, uni)

home.addEventListener('click', () => {
    window.location = 'main.html'
});
archive.addEventListener('click', () => {
    window.location = 'archive.html'
})
music.addEventListener('click', () => {
    alert('This action will take you to exterior page.\n Do you wish to continue?')
    window.location = 'https://www.classicalarchives.com/newca/#!/allComposer'
})
user.addEventListener('click', () => {
    window.location = 'user.html'
})
uni.addEventListener('click', () => {
    window.location = 'uni.html'
})

const composers = [
    { name: "Bela Bartoks", dates: "1881 — 1945", period: "20.gs.", link: "work.html"},
    { name: "Dmitrijs Šostakovičs", dates: "1906 — 1975", period: "20.gs.", link: "work.html"},
    { name: "Albans Bergs", dates: "1885 — 1935", period: "Modernists", link: "Data base/New Viennese School/new_viennese_school_bio.html"},
    { name: "Antons Vēberns", dates: "1883 — 1945", period: "Modernists", link: "Data base/New Viennese School/new_viennese_school_bio.html"},
    { name: "Arnolds Šēnbergs", dates: "1874 — 1951", period: "Modernists", link: "Data base/New Viennese School/new_viennese_school_bio.html"},
    { name: "Rihards Štrauss", dates: "1864 — 1949", period: "Vēlīnais romantiķis", link: "Data base/Strauss/strauss_bio.html"},
    { name: "Gustavs Mālers", dates: "1860 — 1911", period: "Vēlīnais romantiķis", link: "Data base/Mahler/mahler_bio.html"},
    { name: "Igors Stravinskis", dates: "1882 — 1971", period: "20.gs.", link: "work.html" },
    { name: "Sergejs Prokofjevs", dates: "1891 — 1953", period: "20.gs.", link: "work.html" },
    { name: "Sergejs Rahmaņinovs", dates: "1873 — 1943", period: "20.gs.", link: "work.html" },
    { name: "Pēteris Čaikovskis", dates: "1840 — 1893", period: "Vēlīnais romantiķis", link: "work.html" },
    { name: "Ferencs Lists", dates: "1811 — 1886", period: "Romantiķis", link: "Data base/Lizst/lizst_bio.html" },
    { name: "Frideriks Šopēns", dates: "1810 — 1849", period: "Romantiķis", link: "Data base/Chopin/chopin_bio.html" },
    { name: "Fēlikss Mendelzsons-Bartoldi", dates: "1809 — 1847", period: "Agrīnais romantiķis", link: "work.html" },
];
console.log(composers);


composers.forEach((composer) => {

    const container = document.querySelector(".archive");
    const div = document.createElement("a");
    div.href = `${composer.link}`;
    div.setAttribute("target", "_blank");
    div.innerHTML = `<h3 style="display:flex;">${composer.name}</h3><h3 style="display:flex;padding: 0px 5px 0px 5px; font-weight: lighter;">(${composer.dates})</h3><h3 style="display:flex; font-weight: lighter;"> — ${composer.period}</h3>`;
    div.style.cssText = `width: 600px; display: flex; padding: 10px 0px 10px 20px;background-color: rgb(240,240,240); margin-bottom: 10px; flex-direction: row; border-radius: 30px; text-decoration: none; color: black;`
    div.addEventListener(`mouseover`, ()=>{
        div.style.backgroundColor = `rgb(200, 200, 200)`
    })
    div.addEventListener(`mouseleave`, ()=>{
        div.style.backgroundColor = `rgb(240, 240, 240)`
    })
    container.appendChild(div)
});