
const name = 'John';
const {log} = console;
$('h2').eq(0).html(`Это предложение именно для вас, ${name}!`);

// $('h2').eq(2).click(function() {
//     $(this).toggleClass('text-color-primary');
// });

// function handler () {
//     console.log('Click');
// }

// $('h2').on('click', handler);
// $('h1').click(() => {
//     $('h2').off('click', handler);
//     console.log('Off');
// });


$('h1').click(function() {
    $(this).fadeOut(1000);
    setTimeout(() => {
        $(this).fadeToggle(1000);
    }, 2000);
});

