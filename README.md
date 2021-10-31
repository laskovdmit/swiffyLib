# swiffyLib - Небольшая библиотека для упрощения работы.
## Установка
Скопировать файлы `script.js` и `style.js` из папки `dist` в свой проект. Подключить данные файлы в *.html перед вставкой собственных скриптов и стилей.

## Использование
```javascript
$(selector)
```
Возвращает все элементы, полученные по селектору `selector`, в виде псевдомассива данных элементов и значения `length` (которое содержит количетсво элементов в псевдомассиве). После вызова, позволяет использовать все возможности данной библиотекки.

## Возможности
1) `$(selector).hide()` - Устанавливает inline стиль display полученных элементов в "none";
2) `$(selector).show()` - Устанавливает inline стиль display полученных элементов в "";
3) `$(selector).toggle()` - Переключает inline стиль display полученных элементов в "none" или обратно в "";
4) `$(selector).addClass(...classNames)` - Добавляет к полученным элементам 1 и более классов, переданных в ...classNames через запятую;
5) `$(selector).removeClass(...classNames)` - Удаляет у полученных элементов 1 и более классов, переданных в ...classNames через запятую;
6) `$(selector).toggleClass(className)` - Переключает класс className у полученных элементов;
7) `$(selector).on(eventName, callback)` - Навешивает обработчик события eventName с колбэком callback на все полученные элементы;
8) `$(selector).off(eventName, callback)` - Удаляет обработчик события eventName с колбэком callback у всех полученных элементов;
9) `$(selector).click(callback)` - Навешивает обработчик события 'click' с колбэком callback на все полученные элементы;;
10) `$(selector).setAttr(name, value)` - Устанавливает атрибут name с заданным значением value для всех полученныех элементов. Если передан только 1 аргумент - атрибут не устанавливается;
11) `$(selector).removeAttr(name)` - Удаляет атрибут name у всех полученных элементов;
12) `$(selector).html(contnet)` - Заменяет html-содержимое элемента тем, что передано в content. Если content не передан - возвращает html-содержимое элемента;
13) `$(selector).eq(i)` - Возвращает элемент с порядковым номером i, среди полученных элементов;
14) `$(selector).index()` - Возвращает текущий порядковый номер элемента относительно своего родителя;
15) `$(selector).find(anotherSelector)` - Возвращает все дочерние элементы по селектору anotherSelector;
16) `$(selector).closest(anotherSelector)` - Возвращает ближайший родительский элемент по заданному селектору anotherSelector;
17) `$(selector).siblings()` - Возвращает всех соседей относительно родителя, кроме полученного элемента;
18) `$(selector).fadeIn(dur, display, fin)` - Устанавливает анимацию плавного появления для всех полученных элементов в течение dur секунд, изменяя значение display на заданное во 2-м аргументе (по умолчанию "block"). 3-м аргументом можно передать функцию fin, которая выполнится после окончания анимации;
19) `$(selector).fadeOut(dur, fin)` - Устанавливает анимацию плавного исчезновения для всех полученных элементов в течение dur секунд. 2-м аргументом можно передать функцию fin, которая выполнится после окончания анимации;
20) `$(selector).fadeToggle(dur, display, fin)` - Переключает анимацию плавного появления или исчезновения для всех полученных элементов в течение dur секунд, изменяя значение display при появлении на заданное во 2-м аргументе (по умолчанию "block"). 3-м аргументом можно передать функцию fin, которая выполнится после окончания анимации.
