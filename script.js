const data = [
{title:"Breaking Bad",img:"https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg"},
{title:"Stranger Things",img:"https://image.tmdb.org/t/p/w500/rlrRI2b6mO2g9hX3W2X7xJgQ.jpg"},
{title:"Wednesday",img:"https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg"},
{title:"Money Heist",img:"https://image.tmdb.org/t/p/w500/reemg9YQ4rFh1Qh9.jpg"},
{title:"Dark",img:"https://image.tmdb.org/t/p/w500/7h3T0V2.jpg"},
{title:"The Witcher",img:"https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQ.jpg"},
{title:"Interstellar",img:"https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqoNM.jpg"},
{title:"Inception",img:"https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg"},
{title:"The Batman",img:"https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg"},
{title:"Avengers",img:"https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg"},
{title:"Joker",img:"https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"},
{title:"Peaky Blinders",img:"https://image.tmdb.org/t/p/w500/bGZn5RVzMMXju4ev7xbl1aLdXqq.jpg"},
{title:"The Boys",img:"https://image.tmdb.org/t/p/w500/7Ns6tO3aYjppI5bF.jpg"},
{title:"Squid Game",img:"https://image.tmdb.org/t/p/w500/dBOrm.jpg"},
{title:"Vikings",img:"https://image.tmdb.org/t/p/w500/bQLrHIRNEkE3PdIWQrZHynQZazu.jpg"},
{title:"Narcos",img:"https://image.tmdb.org/t/p/w500/rTmal9fDbwh5F0waol2hq35U4ah.jpg"},
{title:"Top Gun Maverick",img:"https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg"},
{title:"Fast & Furious",img:"https://image.tmdb.org/t/p/w500/q0R4crx2SehcEEQEkYObKTdeDZU.jpg"},
{title:"Titanic",img:"https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg"},
{title:"Avatar",img:"https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg"},
{title:"John Wick",img:"https://image.tmdb.org/t/p/w500/5EufsDwXdY2CVttYOk2WtYhgKpa.jpg"}
];

const grid = document.getElementById("grid");
const modal = document.getElementById("modal");
const mimg = document.getElementById("mimg");
const mtitle = document.getElementById("mtitle");
const favBtn = document.getElementById("favBtn");
const closeBtn = document.getElementById("close");

let selected = null;

function render(list){
grid.innerHTML="";
list.forEach((m,i)=>{
grid.innerHTML += `
<div class="card" onclick="openModal(${i})">
<img src="${m.img}">
<h3>${m.title}</h3>
</div>`;
});
}

function openModal(i){
selected = data[i];
mimg.src = selected.img;
mtitle.textContent = selected.title;
modal.style.display="flex";
}

closeBtn.onclick = () => modal.style.display="none";

function getFavs(){
return JSON.parse(localStorage.getItem("favs") || "[]");
}

function saveFavs(f){
localStorage.setItem("favs", JSON.stringify(f));
}

favBtn.onclick = () => {
let favs = getFavs();
if(!favs.includes(selected.title)){
favs.push(selected.title);
saveFavs(favs);
alert("Dodato u favorite!");
}
};

document.getElementById("search").addEventListener("input", e=>{
const val = e.target.value.toLowerCase();
render(data.filter(m => m.title.toLowerCase().includes(val)));
});

render(data);
