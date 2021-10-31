import $ from '../core';

$.prototype.setAttr = function (name, value) { //Устанавливает атрибут name с заданным значением value. Если передан 1 аргумент - ничего не возвращает
    for (let i = 0; i < this.length; i++) {
        if (!value) {
            return this;
        }
        this[i].setAttribute(name, value);
    }

    return this;
};

$.prototype.removeAttr = function (name) { //Удаляет атрибут name
    for (let i = 0; i < this.length; i++) {
        this[i].removeAttribute(name);
    }

    return this;
};