function toKebabCase(str) {                           
    return str.split(" ").join("-").toLowerCase()     
}

function adicionarLi(monster) {                       
    const liElement = document.createElement("li")
    liElement.id = toKebabCase(monster.nome)
    liElement.textContent = `Nome: ${monster.nome} | Elemento: ${monster.element} | Pontos de Vida: ${monster.health} | Habilidades: ${monster.habilities}` 

    document.getElementById("monsterList").appendChild(liElement)

    if (monster.element.value === 'Fogo') {
        fireMonsterImg = document.createElement("img") 
        fireMonsterImg.src = "Images/fire_monster.webp"
        fireMonsterImg.alt = "Monstro de Fogo"

        document.getElementById("monsterList").appendChild(liElement)
        document.getElementById(liElement.id).appendChild(fireMonsterImg)
    }
}

const form = document.getElementById("registerMonster");

form.addEventListener("submit", function (evento) {  
    evento.preventDefault();       
    const monster = {}
    monster.nome = document.getElementById("monsterName").value;
    monster.element = document.getElementById("monsterElement").value;
    monster.health = document.getElementById("monsterHealth").value; 
    monster.habilities = document.getElementById("monsterHabilities").value;  

    adicionarLi(monster)     

    evento.target.reset()  
})
