import $ from '../core';

$.prototype.dropdown = function () { //Создает dropdown-меню по заданной разметке
    for (let i = 0; i < this.length; i++) {
        const id = this[i].getAttribute('id');

        $(this[i]).click(() => {
            $(`[data-toggle-id="${id}"]`).fadeToggle(300);
        });
    }
};

// $('.dropdown-toggle').dropdown();