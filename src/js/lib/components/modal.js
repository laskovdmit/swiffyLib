import $ from '../core';

$.prototype.getScroll = function() { //Получает ширину полосы прокрутки
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY ='scroll';
    div.style.visibility = 'hidden';
    
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
};

$.prototype.modal = function(created) { //Если модальное окно создано вручную, то передавать аргумент created не нужно, т.к. модальное окно удалиться.
// Навешивает обработчик события на кнопку, полученную через $(), которая должна иметь атрибут data-target со значением id модального окна (например [data-target="#exampleModal"]).
// Вызываемое модальное окно должно иметь id, которое записано в data-target кнопки (в данном случае id="exampleModal").
// Модальное окно будет закрываться по клику на подложку или на элементы с атрибутом data-close.
    let scroll = this.getScroll();

    for (let i = 0; i < this.length; i++) {
        const target = this[i].getAttribute('data-target');
        $(this[i]).click((e) => {
            e.preventDefault();

            $(target).fadeIn(500);
            document.body.style.marginRight = `${scroll}px`;
            document.body.style.overflow = 'hidden';
        });
        
        const closeElements = document.querySelectorAll(`${target} [data-close]`);

        closeElements.forEach(item => {
            $(item).click(() => {
                $(target).fadeOut(500);
                document.body.style.marginRight = '0px';
                document.body.style.overflow = '';

                if (created) {
                    document.querySelector(target).remove();
                }
            });
        });

        $('.modal').click((e) => {
            if (e.target.classList.contains('modal')) {
                $(target).fadeOut(500);
                document.body.style.marginRight = '0px';
                document.body.style.overflow = '';

                if (created) {
                    document.querySelector(target).remove();
                }
            }
        });
    }
};

// $('[data-toggle="modal"]').modal();

$.prototype.createModal = function ({text, btns} = {}) {
    for (let i = 0; i < this.length; i++) {
        let modal = document.createElement('div');
        modal.classList.add('modal');
        modal.setAttribute('id', this[i].getAttribute('data-target').slice(1));

        const buttons = [];
        for (let j = 0; j < btns.count; j++) {
            let btn = document.createElement('button');
            btn.classList.add('btn', ...btns.settings[j][1]);
            btn.textContent = btns.settings[j][0];

            if (btns.settings[j][2]) {
                btn.setAttribute('data-close', 'true');
            }

            if (btns.settings[j][3] && typeof(btns.settings[j][3] === 'function')) {
                btn.addEventListener('click', btns.settings[j][3]);
            }

            buttons.push(btn);
        }

        modal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-content">
                    <button class="close" data-close>
                        <span>&times;</span>    
                    </button>
                    <div class="modal-header">
                        <div class="modal-title">
                            ${text.title}
                        </div>
                    </div>
                    <div class="modal-body">
                        ${text.body}
                    </div>
                    <div class="modal-footer">
                       
                    </div>
                </div>
            </div>
        `;

        modal.querySelector('.modal-footer').append(...buttons);
        document.body.appendChild(modal);

        $(this[i]).modal(true);
        $(this[i].getAttribute('data-target')).fadeIn(500);
    }
};