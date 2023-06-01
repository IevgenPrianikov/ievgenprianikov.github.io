// Hamburger

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu__item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})


$(document).ready(function () {
    $('.slider-top').slick({
        arrows: true, // false - чтобы отключить стрелки
        dots: true, // Буллеты, по умолчанию они отключены (false)
        adaptiveHeight: true, // Автоматическая адаптивная высота слайда, слайдер будет автоматически подстраиваться по высоте под конкретный слайд (fasle default)
        slidesToShow: 1, // количество слайдов которое мы хотим одновременно показать
        slidesToScroll: 1, // указываем какое кол-во слайдов будет пролистываться за одно нажатие
        speed: 300, // скорость пролистывания слайдов (300ms default)
        easing: 'ease', //отвечает за тип анимации при смене слайда ('linear' default)
        infinite: true, // отвечает за то, будет ли слайдер бесконечным (true default)
        initialSlide: 0, // стартовый слайд (0 default)

        // АвтоПлєй
        autoplay: false, // АвтоПлэй (false default)
        autoplaySpeed: 1500, // Скорость АвтоПлея (3000 default)
        // Дополнительные параметры для АвтоПлея (пауза АвтоПлея при фокусе / ховере слайда / ховере буллетов)
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,


        draggable: true, // На ПК листание/перетаскивание слайдов мышкой (true default)
        swipe: true,  // На тачскрине листание слайдов (true default)

        waitForAnimate: true, // Клик по стрелке или по буллету срабатывает только по завершению анимации смены слайда (true default)
        centerMode: false, // первый слайд выстраивается по центру (false default)
        variableWidth: false, // включаем тогда, когда нам нужен автоматический-адаптивный слайдер (false default), хорошо работает вместе с centerMode

        rows: 1, // ряды из слайдов (по умолчанию 1)
        slidesPerRow: 1, //количество слайдов в ряду (по умолчанию 1)

        vertical: false, // Вертикальный слайдер (false default) нужно убрать флекс выравнивание в .slick-track или же добавить flex-direction: column;
        verticalSwiping: false,

        fade: false, // меняется слайдер не перелистыванием (false default)



        mobileFirst: false,

        // !!!!!!!!!!!!!!!!!!!!!!!
        // !!!!!!!!!!!!!!!!!!!!!!!
        // !!!!!!!!!!!!!!!!!!!!!!!
        // Выносим стрелки в какой-то div (За пределы слайдера)
        appendArrows: $('.external-slide__control'),
        // Выносим точки/буллеты в какой-то div (За пределы слайдера)
        // appendDots: $('.external-slide__control'),


        // Адаптив (при определённом брэйкПоинте можем изменять те или иные свойстваслайдера)
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 1,
                }
            },{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                    arrows: false,
                }
            },

        ]

    });
});


// Запускаем функцию которая добавляет navbar__fixed класс
// для фиксации НавБара при определённом разрешении экрана

// let mediaQuery = window.matchMedia('(max-width: 768px)');
// if (mediaQuery.matches) {
//     // я выполняюсь только если ширина экрана 768 или меньше

//     // Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
//     function fixedNav() {
//         const nav = document.querySelector('nav')

//         // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
//         const breakpoint = 150
//         if (window.scrollY >= breakpoint) {
//             nav.classList.add('navbar__fixed')
//         } else {
//             nav.classList.remove('navbar__fixed')
//         }
//     }
//     window.addEventListener('scroll', fixedNav)
// }



// let mediaQuery = window.matchMedia('(max-width: 1170px)');
// if (mediaQuery.matches) {
//     // я выполняюсь только если ширина экрана 768 или меньше
//     // const contactsTop = document.querySelector('contacts-top');
//     // const contactsBottom = document.querySelector('contacts-bottom');


//     function contacts() {
//         // contactsTop = contactsTop.style
//         // modal.style.display = "none";

//     }
//     window.addEventListener('scroll', contacts)
// }



// if (window.innerWidth >= 600) {

//     //выполнять
// } else {
//     //не выполнять
// }


// const contactsTop = document.getElementById('contacts-top');
// const contactsBottom = document.getElementsByClassName('contacts-bottom');
// if (window.screen.width <= 1024) {
//     // Resolution is 1024x768 or above
//     contactsTop.style.display = "none";
//     contactsBottom.style.display = "block";
// }




// tabs
function tabs(headerSelector, tabSelector, contentSelector, activeClass, display = 'flex') {
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector)
    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none'
        });
        tab.forEach(item => {
            item.classList.remove(activeClass)
        });
    }
    function showTabContent(i = 0) {
        content[i].style.display = display
        tab[i].classList.add(activeClass)
    }
    hideTabContent()
    showTabContent()
    header.addEventListener('click', e => {
        const target = e.target
        if (target.classList.contains(tabSelector.replace(/\./, '')) ||
            target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent()
                    showTabContent(i)
                }
            });
        }
    })
}

// ПЕРВЫЙ аргумент - класс всего нашего хедера табов.
// ВТОРОЙ аргумент - классконкретного элемента, при клике на который будет переключатся таб.
// ТРЕТИЙ аргумент - класс того блока, который будет переключаться.
// ЧЕТВЕРТЫЙ аргумент - класс активности, который будет добавляться для таба, который сейчас активен

tabs('.tabs__header', '.tabs__header-item', '.tabs__content-item', 'tab-active')




$(document).ready(function () {
    $('.slider').slick({
        arrows: true, // false - чтобы отключить стрелки
        dots: false, // Буллеты, по умолчанию они отключены (false)
        adaptiveHeight: true, // Автоматическая адаптивная высота слайда, слайдер будет автоматически подстраиваться по высоте под конкретный слайд (fasle default)
        slidesToShow: 1, // количество слайдов которое мы хотим одновременно показать
        slidesToScroll: 1, // указываем какое кол-во слайдов будет пролистываться за одно нажатие
        speed: 300, // скорость пролистывания слайдов (300ms default)
        easing: 'ease', //отвечает за тип анимации при смене слайда ('linear' default)
        infinite: true, // отвечает за то, будет ли слайдер бесконечным (true default)
        initialSlide: 0, // стартовый слайд (0 default)

        // АвтоПлєй
        autoplay: false, // АвтоПлэй (false default)
        autoplaySpeed: 1500, // Скорость АвтоПлея (3000 default)
        // Дополнительные параметры для АвтоПлея (пауза АвтоПлея при фокусе / ховере слайда / ховере буллетов)
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,


        draggable: true, // На ПК листание/перетаскивание слайдов мышкой (true default)
        swipe: true,  // На тачскрине листание слайдов (true default)

        waitForAnimate: true, // Клик по стрелке или по буллету срабатывает только по завершению анимации смены слайда (true default)
        centerMode: true, // первый слайд выстраивается по центру (false default)
        variableWidth: false, // включаем тогда, когда нам нужен автоматический-адаптивный слайдер (false default), хорошо работает вместе с centerMode

        rows: 1, // ряды из слайдов (по умолчанию 1)
        slidesPerRow: 1, //количество слайдов в ряду (по умолчанию 1)

        vertical: false, // Вертикальный слайдер (false default) нужно убрать флекс выравнивание в .slick-track или же добавить flex-direction: column;
        verticalSwiping: false,

        fade: false, // меняется слайдер не перелистыванием (false default)



        mobileFirst: false,

        // !!!!!!!!!!!!!!!!!!!!!!!
        // !!!!!!!!!!!!!!!!!!!!!!!
        // !!!!!!!!!!!!!!!!!!!!!!!
        // Выносим стрелки в какой-то div (За пределы слайдера)
        // appendArrows: $('.external__arrows'),
        // Выносим точки/буллеты в какой-то div (За пределы слайдера)
        // appendDots: $('.external__dots'),


        // Адаптив (при определённом брэйкПоинте можем изменять те или иные свойстваслайдера)
        // responsive: [
        //     {
        //         breakpoint: 1400,
        //         settings: {
        //             slidesToShow: 1,
        //         }
        //     },{
        //         breakpoint: 1000,
        //         settings: {
        //             slidesToShow: 1,
        //             dots: false,
        //         }
        //     },

        // ]

    });
});
