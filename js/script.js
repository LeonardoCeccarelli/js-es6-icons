"use strict"

// Creo array di oggetti contenente le icone

const iconArray = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    }
]

// Individuo nell'html il contenitore dove inserire le card

const cardContainer = document.getElementById("cardContainer")

// Individuo la select dove inserire dinamicamente il type dell'icona

const selectTypeIcon = document.getElementById("selectTypeIcon")

// Creo array dove inserire solo il type di ciascu oggetto

const typeIcon = []

// Tramite ciclo for inserisco le icone nell'html
for (let i = 0; i < iconArray.length; i++) {
    const singleIcon = iconArray[i];

    const { name, prefix, type, family } = singleIcon

    if (!typeIcon.includes(type)) {
        typeIcon.push(type)
    }


    let iconColor;

    switch (type) {
        case "animal":
            iconColor = "c_icon_blue"
            break;

        case "vegetable":
            iconColor = "c_icon_yellow"
            break;

        case "user":
            iconColor = "c_icon_purple"
            break;
    }

    cardContainer.innerHTML += `<li class="icon_card icon_${type}">
                                    <i class="${family} ${prefix + name} ${iconColor}"></i>
                                    <h4>${name}</h4>
                                </li>`
}

// Tramite ciclo inserisco dinamicamente le oprion dentro
// la select in base alla chiave type
for (let i = 0; i < typeIcon.length; i++) {
    const singleType = typeIcon[i];

    selectTypeIcon.innerHTML += `<option value="${singleType}">${singleType}</option>`
}

const singleCard = document.querySelectorAll(".icon_card")

console.log(singleCard);

selectTypeIcon.addEventListener("change", function () {
    const value = this.value

    console.log(value);

    for (let i = 0; i < singleCard.length; i++) {
        const card = singleCard[i];

        card.style.display = "initial"

        if (value === "all") {

        } else if (!card.classList.contains(`icon_${value}`)) {
            card.style.display = "none"
        }
    }
})