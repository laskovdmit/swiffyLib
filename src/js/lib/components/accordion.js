import $ from '../core';

$.prototype.accordion = function (headActive = 'accordion-head--active', contentActive = 'accordion-content--active', paddings = 40) { 
// Создает функционал аккордиона получая на вход его заголовки через $().
// Можно передать параметры в следующем порядке: класс активности заголовка headActive (по умолчанию 'accordion-head--active'), класс активности контента под заголовком contentActive (по умолчанию 'accordion-content--active'), размер внутренних отступов для контента со всех сторон (по умолчанию 40).
// В разметке, контент должен следовать сразу после своего заголовка как nextElementSibling. Затем следует очередная пара заголовок-контент и т.д.
    for (let i = 0; i < this.length; i++) {
        $(this[i]).click(() => {
            $(this[i]).toggleClass(headActive);
            $(this[i].nextElementSibling).toggleClass(contentActive);

            if (this[i].classList.contains(headActive)) {
                this[i].nextElementSibling.style.maxHeight = this[i].nextElementSibling.scrollHeight + paddings + 'px';
            } else {
                this[i].nextElementSibling.style.maxHeight = '0px';
            }
        });
    }
};

// $('.accordion-head').accordion();