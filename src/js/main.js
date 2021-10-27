import './lib/lib';

$('button').click(function() {
    $('div').eq(1).toggleClass('active');
});

$('div').click(function() {
    console.log($(this).index());
});

// console.log($('div').eq(2).find('.more'));
// console.log($('.some').closest('.findme'));
// console.log($('.findme').siblings());

$('button').click(function() {
    $(this).fadeOut(1000);

    setTimeout(() => {
        $(this).fadeIn(1000);
    }, 2000);
});