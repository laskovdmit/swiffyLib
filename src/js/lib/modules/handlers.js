import $ from '../core';

$.prototype.on = function(eventName, callback) { //Навешивает обработчик события eventName с колбэком callback
    if (!eventName || !callback) {
        return this;
    }

    for (let i = 0; i < this.length; i++) {
        this[i].addEventListener(eventName, callback);
    }

    return this;
};

$.prototype.off = function(eventName, callback) {  //Удаляет обработчик события eventName с колбэком callback
    if (!eventName || !callback) {
        return this;
    }

    for (let i = 0; i < this.length; i++) {
        this[i].removeEventListener(eventName, callback);
    }

    return this;
};

$.prototype.click = function(handler) { //Навешивает обработчик события 'click' с колбэком handler
    for (let i = 0; i < this.length; i++) {
        if (handler) {
            this[i].addEventListener('click', handler);
        } else {
            this[i].click();
        }
    }

    return this;
};