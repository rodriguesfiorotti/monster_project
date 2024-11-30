function toKebabCase(str) {                           
    return str.split(" ").join("-").toLowerCase();    
}

function imgMonsterConfig(element, src, alt) {
    const monsterInfo = document.createElement("div");
    monsterInfo.classList.add("monster-info");  // Adicionando a classe para controlar a imagem
    const MonsterImg = document.createElement("img");
    MonsterImg.src = src;
    MonsterImg.alt = alt;
    monsterInfo.appendChild(MonsterImg);
    document.getElementById('monsterList').appendChild(monsterInfo);
}

function adicionarLi(monster) {                       
    const liElement = document.createElement("li");
    liElement.id = toKebabCase(monster.nome);
    liElement.textContent = `Nome: ${monster.nome} | Elemento: ${monster.element} | Pontos de Vida: ${monster.health} | Habilidades: ${monster.habilities}`; 

    // Adicionando o monstro na lista
    document.getElementById("monsterList").appendChild(liElement);

    switch (monster.element) {
        case 'Fogo':
            imgMonsterConfig(monster.element, "Images/fire_monster.webp", "Monstro de Fogo");
            break;
        case 'Água':
            imgMonsterConfig(monster.element, "Images/water_monster.webp", "Monstro de Água");
            break;
        case 'Terra':
            imgMonsterConfig(monster.element, "Images/earth_monster.webp", "Monstro de Terra");
            break;
        case 'Ar':
            imgMonsterConfig(monster.element, "Images/air_monster.webp", "Monstro de Ar");
            break;
        default:
            break;
    }
}

const form = document.getElementById("registerMonster");

form.addEventListener("submit", function (evento) {  
    evento.preventDefault();       
    const monster = {};
    monster.nome = document.getElementById("monsterName").value;
    monster.element = document.getElementById("monsterElement").value;
    monster.health = document.getElementById("monsterHealth").value; 
    monster.habilities = document.getElementById("monsterHabilities").value;  

    adicionarLi(monster);

    evento.target.reset();  
});
