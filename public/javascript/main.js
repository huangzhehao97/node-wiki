$(function() {
  //初始化高亮
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
  //菜单滚动
  var boxtop = $('.fix-menu').css('top'),
    time;

  function setMenu() {
    var top = $(window).scrollTop();
    $('.fix-menu').animate({
      'top': parseInt(boxtop) + parseInt(top) - 100
    }, 300)
  }
  setMenu();
  $(window).scroll(function() {
      clearTimeout(time);
      time = setTimeout(function() {
        setMenu();
      }, 300)
    })
    //目录滚动
  $('a[name=menu]').click(function() {
    var point = $(this).attr('data-href'),
      top = $(point).offset().top;
    $("body,html").animate({
      scrollTop: parseInt(top) - 20
    }, 300, function() {
      //console.log(1);
      setMenu();
    });
  });
  //目录展开
  $('.fix-menu .title').click(function() {
      $(this).next().slideToggle(300);
    })
    //侧目录初始化
  if (window.location.href.indexOf('/doc?') != -1) {
    var qs = location.search.split('?')[1].split('=')[1].split('/'),
      length = qs.length;
    for (var key = 0; key < length; key++) {
      $('a[title=' + decodeURI(qs[key]) + ']').parent('li').addClass(
        'active');
    }
  } else {
    $('.sidebar-menu').find('.treeview').eq(0).addClass('active');
  }

})
