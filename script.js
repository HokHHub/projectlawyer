import { data } from './data.js'

let slider = document.querySelector('.slider')
let sliderManager = document.querySelectorAll('.slider__manage_numbers')
let buttonLeft = document.querySelector('.button__left')
let buttonRight = document.querySelector('.button__right')
let lawyers = document.querySelector('.lawyers__cards')
let images = ['url(https://media.rbcdn.ru/media/news/shutterstock1176969436.jpg)', 'url(https://qoraqalpoq.adliya.uz/upload/iblock/541/541d629eee096341c433f4da5739516c.jpg)']

let title = document.querySelector('.slider__title')
let subtitle = document.querySelector('.slider__subtitle')
let description = document.querySelector('.slider__description-text')

let inactivies = document.querySelectorAll('slider__manage_number_inactive')

let titles = ['Проводим всесторонний', 'Предлагаем полный спектр']
let subtitles = ['Юридический сервис', 'Юридических услуг']
let descriptions = ['Уже давно установлено, что при анализе дизайна и структуры читаемый текст отвлекает от концентрации. <br> Lorem Ipsum применяют, так как он дает более-менее постоянное заполнение.', 'Как выяснилось, при оценке оформления и структуры текста, читаемые фразы мешают концентрации. Поэтому <br> используют Lorem Ipsum, поскольку он обеспечивает более стандартизированное наполнение.']

let aboutButtons = document.querySelectorAll('.about__button')

let allNewsButton = document.querySelector('.useful__button')

RenderLawyers()
RenderFeedback(0, 2)
RenderUseful()

for (let index = 0; index < sliderManager.length; index++) {
    sliderManager[index].addEventListener('click', () => {
        console.log(index);
        for (let i = 0; i < sliderManager.length; i++) {
            sliderManager[i].classList.remove('slider__manage_number_inactive')
            sliderManager[i].classList.remove('slider__manage_number_active')
        }
        sliderManager[index].classList.add('slider__manage_number_active')

        if (index == 0) {
            console.log(0);
            slider.style.backgroundImage = 'url(./img/background_header.jpg)'

            title.innerText = 'Оказываем весь комплекс'
            subtitle.innerText = 'Юридических услуг'
            description.innerHTML = `Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum <br> используют потому, что тот обеспечивает более или менее стандартное заполнение.`

            slider.style.backgroundColor = 'unset';
            slider.style.backgroundBlendMode = 'multiply';

            sliderManager[0].classList.add('slider__manage_number_active')
            sliderManager[1].classList.add('slider__manage_number_inactive')
            sliderManager[2].classList.add('slider__manage_number_inactive')
        } else if (index == 1) {
            slider.style.backgroundImage = images[0]
            slider.style.backgroundColor = 'darkgray';
            slider.style.backgroundBlendMode = 'multiply';

            title.innerText = titles[0]
            subtitle.innerText = subtitles[0]
            description.innerHTML = descriptions[0]

            sliderManager[0].classList.add('slider__manage_number_inactive')
            sliderManager[1].classList.add('slider__manage_number_active')
            sliderManager[2].classList.add('slider__manage_number_inactive')
        } else {
            slider.style.backgroundImage = images[1]
            slider.style.backgroundColor = 'darkgray';
            slider.style.backgroundBlendMode = 'multiply';

            title.innerText = titles[1]
            subtitle.innerText = subtitles[1]
            description.innerHTML = descriptions[1]

            sliderManager[0].classList.add('slider__manage_number_inactive')
            sliderManager[1].classList.add('slider__manage_number_inactive')
            sliderManager[2].classList.add('slider__manage_number_active')
        }
    })

}

for (let index = 0; index < aboutButtons.length; index++) {
    aboutButtons[index].addEventListener('click', () => {
        if (index == 1) {
            let aboutIMG = document.querySelector('.about__img')
            aboutIMG.setAttribute('src', './img/sertificate.png')
            let aboutTexts = document.querySelectorAll('.about__txt')
            aboutTexts[0].innerText = 'Давно известно, что при оценке деятельности компании наличие всех необходимых сертификатов играет важную роль, обеспечивая доверие клиентов и партнеров. "ПРАВОЗАЩИТНИК" гордится тем, что обладает всеми требуемыми сертификатами, подтверждающими высокое качество её услуг и соответствие международным стандартам.'
            aboutTexts[1].innerText = 'Эти сертификаты не только укрепляют репутацию компании, но и демонстрируют её приверженность к соблюдению строгих нормативов и требований в своей отрасли. В компании "ПРАВОЗАЩИТНИК" понимают, что наличие таких документов является залогом успешного и стабильного бизнеса, позволяя компании уверенно смотреть в будущее и продолжать развиваться.'
            aboutTexts[2].innerText = 'За прошедшие годы компания получила множество сертификатов, некоторые из которых были получены по ошибке, а другие - намеренно, чтобы подтвердить свою компетентность и надёжность. В  компании "ПРАВОЗАЩИТНИК" уверены, что наличие всех необходимых документов помогает избежать недоразумений и обеспечивает прозрачность и открытость в работе.'
        } else {
            let aboutTexts = document.querySelectorAll('.about__txt')
            let aboutIMG = document.querySelector('.about__img')
            aboutIMG.setAttribute('src', './img/books.jpg')
            aboutTexts[0].innerText = 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение'
            aboutTexts[1].innerText = 'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо ненапоминают латынь. Если вам нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите какой-нибудь шутки, скрытой в середине абзаца.'
            aboutTexts[2].innerText = '>За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).'
        }
    })
}

buttonRight.addEventListener('click', () => {
    for (let index = 0; index < sliderManager.length; index++) {
        if (sliderManager[index].classList.contains('slider__manage_number_active')) {
            if (index == sliderManager.length - 1) {
                slider.style.backgroundImage = 'url(./img/background_header.jpg)'

                title.innerText = 'Оказываем весь комплекс'
                subtitle.innerText = 'Юридических услуг'
                description.innerHTML = `Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum <br> используют потому, что тот обеспечивает более или менее стандартное заполнение.`

                slider.style.backgroundColor = 'unset';
                slider.style.backgroundBlendMode = 'multiply';
                sliderManager[index].classList.remove('slider__manage_number_active')
                sliderManager[index].classList.add('slider__manage_number_inactive')
                sliderManager[0].classList.remove('slider__manage_number_inactive')
                sliderManager[0].classList.add('slider__manage_number_active')

            } else {
                slider.style.backgroundImage = images[index]
                slider.style.backgroundColor = 'darkgray';
                slider.style.backgroundBlendMode = 'multiply';
                sliderManager[index].classList.remove('slider__manage_number_active')
                sliderManager[index].classList.add('slider__manage_number_inactive')

                title.innerText = titles[index]
                subtitle.innerText = subtitles[index]
                description.innerHTML = descriptions[index]

                sliderManager[index + 1].classList.remove('slider__manage_number_inactive')
                sliderManager[index + 1].classList.add('slider__manage_number_active')
            }
            break
        }
    }
})

buttonLeft.addEventListener('click', () => {
    for (let index = sliderManager.length - 1; index >= 0; index--) {
        // if (index == 2) {
        //     slider.style.backgroundImage = 'url(./img/background_header.jpg)'
        // }
        if (sliderManager[index].classList.contains('slider__manage_number_active')) {
            // console.log(sliderManager.length - 1);


            if (index == 0) {
                sliderManager[index].classList.remove('slider__manage_number_active')
                sliderManager[index].classList.add('slider__manage_number_inactive')
                sliderManager[sliderManager.length - 1].classList.remove('slider__manage_number_inactive')
                sliderManager[sliderManager.length - 1].classList.add('slider__manage_number_active')
                slider.style.backgroundImage = images[0]
                title.innerText = titles[0]
                subtitle.innerText = subtitles[0]
                description.innerHTML = descriptions[0]
                slider.style.backgroundBlendMode = 'multiply';
                slider.style.backgroundColor = 'darkgray';
            } else {
                slider.style.backgroundImage = images[index - 1]
                title.innerText = titles[index - 1]
                subtitle.innerText = subtitles[index - 1]
                description.innerHTML = descriptions[index - 1]
                sliderManager[index].classList.remove('slider__manage_number_active')
                sliderManager[index].classList.add('slider__manage_number_inactive')
                sliderManager[index - 1].classList.remove('slider__manage_number_inactive')
                sliderManager[index - 1].classList.add('slider__manage_number_active')
                slider.style.backgroundBlendMode = 'multiply';
                slider.style.backgroundColor = 'darkgray';
            }
            if (sliderManager[0].classList.contains('slider__manage_number_active')) {
                slider.style.backgroundImage = 'url(./img/background_header.jpg)'
                slider.style.backgroundColor = 'unset';
                title.innerText = 'Оказываем весь комплекс'
                subtitle.innerText = 'Юридических услуг'
                description.innerHTML = `Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum <br> используют потому, что тот обеспечивает более или менее стандартное заполнение.`
            }
            break
        }
    }
})

let feedbackSlider = document.querySelectorAll('.feedback__slider_arrow')

for (let index = 0; index < feedbackSlider.length; index++) {
    feedbackSlider[index].addEventListener('click', () => {
        if (index == 1) {
            let feedback = document.querySelector('.feedback__cards')
            let ind = null
            let text = document.querySelectorAll('.feedback__card_text')
            for (let index = 0; index < data[1].length; index++) {
                for (let i = 0; i < text.length; i++) {
                    if (text[i].innerText == data[1][index].feedback) {

                        ind = index
                        break
                    }
                }
            }

            if (data[1][ind + 2] != undefined) {
                if (ind % 2 == 0) {
                    feedback.innerHTML = ``
                    console.log(ind, data[1][ind]);

                    RenderFeedback(ind + 2, ind + 4)
                } else {
                    if (ind % 3 == 0) {
                        console.log(ind, data[1][ind]);

                        feedback.innerHTML = ``
                        RenderFeedback(ind + 1, ind + 3)
                    } else if (ind % 5 == 0) {
                        console.log(ind, data[1][ind]);

                        feedback.innerHTML = ``
                        RenderFeedback(ind + 1, ind + 3)
                    } else {
                        console.log(ind, data[1][ind]);

                        feedback.innerHTML = ``
                        RenderFeedback(ind + 1, ind + 3)
                    }
                }
            }

        } else {
            console.log(0);

            let feedback = document.querySelector('.feedback__cards')
            let ind = null
            let text = document.querySelectorAll('.feedback__card_text')
            for (let index = 0; index < data[1].length; index++) {
                // console.log(text, data[1][index].feedback);
                console.log(text);
                for (let i = 0; i < text.length; i++) {
                    if (text[i].innerText == data[1][index].feedback) {
                        console.log(184);
                        ind = index
                        console.log(ind);

                        break
                    }
                }
            }

            if (ind % 2 == 0) {
                console.log(187);

                if (data[1][ind - 2] != undefined) {
                    console.log(data[1][ind - 2]);

                    console.log(190);
                    feedback.innerHTML = ``
                    RenderFeedback(ind - 2, ind)
                } else {
                    console.log(data[1][ind - 2], ind, data[1][ind - 2]);
                }
            } else {
                if (data[1][ind - 3] != undefined) {
                    console.log(ind, data[1][ind - 3]);

                    feedback.innerHTML = ``
                    RenderFeedback(ind - 3, ind - 1)

                } else {
                    console.log(data[1][ind - 2]);
                }
            }
        }
    })

}


function RenderLawyers() {
    for (let index = 0; index < data[0].length; index++) {
        let card = document.createElement('article')
        card.classList.add('lawyer__card')
        card.classList.add('card')
        card.innerHTML = `<div>
                            <span class="border_tr_lawyers"></span>
                            <span class="border_tl_lawyers"></span>
                            <span class="border_br_lawyers"></span>
                            <span class="border_bl_lawyers"></span>
                        </div>
    
                        <div class="card__hover">
                            <h2 class="card__name card__name_hover">${data[0][index].name}</h2>
                            <p class="card__job card__job_hover">${data[0][index].type}</p>
                            <p class="card__description_hover">Есть много вариантов Lorem Ipsum, но большинство из них имеет
                                не
                                всегда приемлемые модификации, например, юмористические вставки или слова, которые даже
                                отдалённо не напоминают латынь.</p>
                            <p class="card__seniority">${data[0][index].experience} лет юридической практики</p>
                        </div>
                        <img src="${data[0][index].img}" alt="" class="card__portrait">
                        <p class="card__name">${data[0][index].name}</p>
                        <p class="card__job">${data[0][index].type}</p>`
        lawyers.appendChild(card)
    }
}

function RenderFeedback(start, stop) {
    let feedback = document.querySelector('.feedback__cards')
    for (let index = start; index < stop; index++) {
        let card = document.createElement('article')
        card.classList.add('feedback__card')
        card.classList.add('card')
        card.innerHTML = `<div class="feedback__card_header">
                        <img class="feedback__card_img" src="${data[1][index].img}" alt="">
                        <div class="feedback__card_about">
                            <p class="feedback__card_company">${data[1][index].work}</p>
                            <p class="feedback__card_name">${data[1][index].name}</p>
                        </div>
                        <img class="feedback__card_icon" src="./img/feedback_icon.svg" alt="">
                    </div>
                    <div class="feedback__card_text-block">
                        <p class="feedback__card_text">${data[1][index].feedback}</p>
                    </div>`
        feedback.appendChild(card)
    }
}

function RenderUseful() {
    let useful = document.querySelector('.useful__cards')

    for (let index = 0; index < 3; index++) {
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

allNewsButton.addEventListener('click', () => {
    window.location.href = 'news.html';
})