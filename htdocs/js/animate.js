//accordion menu
(function(){
    var panelBtn = document.getElementById('panel-btn'),
        panelItems = document.getElementsByClassName('panel-items'),
        panelBtnIcon = document.getElementById('panel-btn-icon'),
        panel = document.getElementById('panel');

    panelBtn.onclick = function toggleStyle(){
        panel.classList.toggle("close");
        panelBtnIcon.classList.toggle("close");
        for(i=0; i < panelItems.length; i++){
            panelItems[i].classList.toggle("close");
        }
        return false;
    }
})();

//smooth scroll
$(function(){
  $('a[href^=#]').click(function(){
    var speed = 800;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

//fade-in animation
$(function(){
  $('.scroll-effect').css("opacity","0");
  $(window).scroll(function (){
    $('.scroll-effect').each(function(){
      var Pos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > Pos - windowHeight + 30){
        $(this).animate({
          "opacity": "1",
        }, 1000);
      }
    });
  });
});

