 //there qre still some transition bugs are left...
var curPage = 1;
var scrolling = true;
var viewscroll = false;
var animationTime = 0.5;
var tl = new TimelineMax({ repeat: 0 });
var scrollIn = $('.scroll-indicator');
var scrollIn2 = $('.scroll');
var close = $('.close');
for (var i = 2; i <= 4; i++) {
  for (var j = 1; j <= 5; j++) {
    tl.set($('.child-left-' + i + '>.left' + j), { x: '+=100%' });
    tl.set($('.child-right-' + i + '>.right' + j), { x: '-=100%' });
  }
}
tl.set(close, {
  scaleX: 0,
  transformOrigin: 'center' });

function navigateDown() {
  if (scrolling && !viewscroll) {
    console.log('ww');
    scrolling = false;
    var _tl = new TimelineMax({ repeat: 0 });
    for (var _i = 1; _i <= 5; _i++) {
      if (_i === 1 || _i === 5) {
        _tl.to([
        $('.child-left-' + curPage + '>.left' + _i),
        $('.child-left-' + (curPage + 1) + '>.left' + _i)],
        animationTime, {
          x: '-=100%',
          ease: Power3.easeInOut },
        .3).to([
        $('.child-right-' + curPage + '>.right' + _i),
        $('.child-right-' + (curPage + 1) + '>.right' + _i)],
        animationTime, {
          x: '+=100%',
          ease: Power3.easeInOut },
        .3);
      } else if (_i === 3) {
        _tl.to([
        $('.child-left-' + curPage + '>.left' + _i),
        $('.child-left-' + (curPage + 1) + '>.left' + _i)],
        animationTime, {
          x: '-=100%',
          ease: Power3.easeInOut },
        .15).to([
        $('.child-right-' + curPage + '>.right' + _i),
        $('.child-right-' + (curPage + 1) + '>.right' + _i)],
        animationTime, {
          x: '+=100%',
          ease: Power3.easeInOut },
        .15);
      } else {
        _tl.to([
        $('.child-left-' + curPage + '>.left' + _i),
        $('.child-left-' + (curPage + 1) + '>.left' + _i)],
        animationTime, {
          x: '-=100%',
          ease: Power3.easeInOut },
        .25).to([
        $('.child-right-' + curPage + '>.right' + _i),
        $('.child-right-' + (curPage + 1) + '>.right' + _i)],
        animationTime, {
          x: '+=100%',
          ease: Power3.easeInOut },
        .25);
      }
    }
    curPage++;
    if (curPage == 3) {
      scrollIn.addClass('opa');
      scrollIn2.addClass('opa');
    } else if (curPage != 3) {
      scrollIn.removeClass('opa');
      scrollIn2.removeClass('opa');
    }

    setTimeout(function () {
      scrolling = true;
    }, 100);
  }
}

function navigateUp() {
  if (scrolling && !viewscroll) {
    scrolling = false;
    var _tl2 = new TimelineMax({ repeat: 0 });
    for (var _i2 = 1; _i2 <= 5; _i2++) {
      if (_i2 === 1 || _i2 === 5) {
        _tl2.to([
        $('.child-left-' + curPage + '>.left' + _i2),
        $('.child-left-' + (curPage - 1) + '>.left' + _i2)],
        animationTime, {
          x: '+=100%',
          ease: Power3.easeInOut },
        .4).to([
        $('.child-right-' + curPage + '>.right' + _i2),
        $('.child-right-' + (curPage - 1) + '>.right' + _i2)],
        animationTime, {
          x: '-=100%',
          ease: Power3.easeInOut },
        .4);
      } else if (_i2 === 3) {
        _tl2.to([
        $('.child-left-' + curPage + '>.left' + _i2),
        $('.child-left-' + (curPage - 1) + '>.left' + _i2)],
        animationTime, {
          x: '+=100%',
          ease: Power3.easeInOut },
        .11).to([
        $('.child-right-' + curPage + '>.right' + _i2),
        $('.child-right-' + (curPage - 1) + '>.right' + _i2)],
        animationTime, {
          x: '-=100%',
          ease: Power3.easeInOut },
        .11);
      } else {
        _tl2.to([
        $('.child-left-' + curPage + '>.left' + _i2),
        $('.child-left-' + (curPage - 1) + '>.left' + _i2)],
        animationTime, {
          x: '+=100%',
          ease: Power3.easeInOut },
        .25).to([
        $('.child-right-' + curPage + '>.right' + _i2),
        $('.child-right-' + (curPage - 1) + '>.right' + _i2)],
        animationTime, {
          x: '-=100%',
          ease: Power3.easeInOut },
        .25);
      }
    }
    curPage--;
    if (curPage == 3) {
      scrollIn.addClass('opa');
      scrollIn2.addClass('opa');
    } else if (curPage != 3) {
      scrollIn.removeClass('opa');
      scrollIn2.removeClass('opa');
    }

    setTimeout(function () {
      scrolling = true;
    }, 2000);
  }
}

$(document).on("mousewheel DOMMouseScroll", function (e) {
  if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
    if (curPage === 1)
    return;
    navigateUp();
  } else {
    if (curPage === 3)
    return;
    navigateDown();
  }
});

close.click(function () {

  scrolling = true;
  viewscroll = false;
  if (curPage <= 3) {
    scrollIn.removeClass('opa');
    scrollIn2.removeClass('opa');
  }
});