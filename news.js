import {data} from './data.js'

function RenderUseful() {
    let useful = document.querySelector('.useful__allcards')

    for (let index = 0; index < data[2].length; index++) {
        let card = document.createElement('article')
        card.classList.add('useful__card')
        card.classList.add('card')
        card.innerHTML = `<div class="useful__card_hover"></div>
                    <div class="useful__card_eye-hover">
                        <img class="useful__card_eye" src="./img/icons/20px/show.svg" alt="">
                    </div>

                    <div>
                        <span class="border_tr_useful"></span>
                        <span class="border_tl_useful"></span>
                        <span class="border_br_useful"></span>
                        <span class="border_bl_useful"></span>
                    </div>

                    <img class="useful__card_img" src="${data[2][index].img}" alt="">
                    <p class="useful__card_title useful__card_title_hover">${data[2][index].title}</p>
                    <time datetime="2023-04-24" class="useful__card_date">${data[2][index].date}</time>
                    <p class="useful__card_description">${data[2][index].text}</p>`

        useful.appendChild(card)
    }
}

RenderUseful()

let backHome = document.querySelector('.useful__button')
backHome.addEventListener('click', () => {
    window.location.href = 'index.html';
})