import $ from '../core';

$.prototype.addClass = function(...classNames) { //Добавляет 1 и более классов, переданных в ...classNames через запятую
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        }

        this[i].classList.add(...classNames);
    }

    return this;
}; 

$.prototype.removeClass = function(...classNames) { //Удаляет 1 и более классов, переданных в ...classNames через запятую
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        }

        this[i].classList.remove(...classNames);
    }

    return this;
};

$.prototype.toggleClass = function(className) { //Тогглит класс className
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        }
        
        this[i].classList.toggle(className);
    }

    return this;
};