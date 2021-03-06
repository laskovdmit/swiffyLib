import $ from '../core';

$.prototype.html = function(content) { //Возваращает или изменяет html содержимое элемента 
    for (let i = 0; i < this.length; i++) {
        if (content) {
            this[i].innerHTML = content;
        } else {
            return this[i].innerHTML;
        }
    }

    return this;
};

$.prototype.eq = function(i) { //Возвращает элемент с порядковым номером i
    const swap = this[i];
    const objLength = Object.keys(this).length;

    for (let i = 0; i < objLength.length; i++) {
        delete this[i];
    }

    this[0] = swap;
    this.length = 1;

    return this;
};

$.prototype.index = function() { //Возвращает текущий порядковый номер относительно своего родителя
    const parent = this[0].parentNode;
    const childs = [...parent.children];

    const findMyIndex = (item) => {
        return item == this[0];
    };

    return childs.findIndex(findMyIndex);
};

$.prototype.find = function(selector) { //Возвращает дочерние элементы по заданному селектору, которые нашел у родителей
    let numberOfItems = 0;
    let counter = 0;

    const copyObj = Object.assign({}, this);

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].querySelectorAll(selector);
        if (arr.length == 0) {
            continue;
        }

        for (let j = 0; j < arr.length; j++) {
            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length;
    }
    
    this.length = numberOfItems;

    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];
    }

    return this;
};

$.prototype.closest = function (selector) { //Возвращает ближайший родительский элемент по заданному селектору. Если не найден - возвращает пустой $()
    let counter = 0;

    for (let i = 0; i < this.length; i++) {
        if (this[i].closest(selector)) {
            this[i] = this[i].closest(selector);
            counter++;
        } else {
            delete this[i];
        }
    }

    const objLength = Object.keys(this).length;
    for (; counter < objLength; counter++) {
        delete this[counter];
    }

    return this;
};

$.prototype.siblings = function () { //Возвращает всех соседей относительно родительского элемента, кроме себя
    let numberOfItems = 0;
    let counter = 0;

    const copyObj = Object.assign({}, this);

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].parentNode.children;

        for (let j = 0; j < arr.length; j++) {
            if (copyObj[i] === arr[j]) {
                continue;
            }

            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length - 1;
    }
    
    this.length = numberOfItems;

    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];
    }

    return this;
};