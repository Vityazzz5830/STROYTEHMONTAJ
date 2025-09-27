$('.calculatesec_mainpage_content_main_rightpart_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  dots: false,
  infinite: false,
  swipe: false,
  prevArrow: $('.calculatesec_mainpage_content_main_rightpart_slider_prev'),
  nextArrow: $('.calculatesec_mainpage_content_main_rightpart_slider_next')
});

$('.podryadchiksec_mainpage_content_list').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  dots: false,
  infinite: false
});

$('.reviewssec_mainpage_content_slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  dots: false,
  infinite: false
});

var nameInputs = document.querySelectorAll('input[data-name-input]');

$(nameInputs).on('keypress', function() {
    var that = this;

    setTimeout(function() {
        var res = /[^аА-яЯ]/g.exec(that.value);
        console.log(res);
        that.value = that.value.replace(res, '');
    }, 0);
});


window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('input[data-tel-input]'), function(input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
        this.value = new_value;
      }
      if (event.type == "blur" && this.value.length < 5) {
        this.value = "";
      }
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });
});



document.addEventListener('DOMContentLoaded', function() {
  if (document.querySelector('.tab')) {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Удаляем класс active у всех табов и скрываем все содержимое
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));

            // Добавляем класс active к текущему табу и показываем соответствующее содержимое
            tab.classList.add('active');
            const tabId = tab.getAttribute('data-tab');
            document.getElementById(`calcpricesec_mainpage_content-${tabId}`).classList.add('active');
        });
    });

    // Активируем первый таб по умолчанию
    tabs[0].click();
  }
});


/*-------------ТАБ-МЕНЮ УСЛУГИ-------------*/

let p_bold = document.getElementsByClassName('questions-list-item-title-p');
let listitem = document.getElementsByClassName('questions-list-item');
let wrapinfo = document.getElementsByClassName('questions-list-item-wrapinfo');
let itemimage = document.getElementsByClassName('questions-list-item-title_image');

let imgnoac = document.getElementsByClassName('plus');

for (let i = 0; i < listitem.length; i++) {
  listitem[i].addEventListener('click', function() {
    
    wrapinfo[i].classList.toggle("questions-list-item-wrapinfo_js");
    p_bold[i].classList.toggle("questions-list-item-title-p_js");

    
  });
}



document.addEventListener("DOMContentLoaded", function() {
    const closeButton = document.querySelector('.close_fixed_menu');
    const menuItems = document.querySelectorAll('.fixed_menu_item');
    let isMenuOpen = true;
    const closeIcon = closeButton.querySelector('.close_fixed_menu_x');
    const arrowIcon = closeButton.querySelector('.close_fixed_menu_arrow');

    arrowIcon.style.display = 'none';
    closeButton.addEventListener('click', function() {
        if (isMenuOpen) {
            // Скрыть блоки
            closeButton.style.marginRight = '20px';
            menuItems.forEach(item => item.style.display = 'none');
            


            // Изменить картинку на стрелку влево
            if (closeIcon.style.display !== 'none') {
            // Скрываем крестик, показываем стрелку
            closeIcon.style.display = 'none';
            arrowIcon.style.display = 'block';
        } else {
            // Скрываем стрелку, показываем крестик
            closeIcon.style.display = 'block';
            arrowIcon.style.display = 'none';
        }

        } else {
            // Показать блоки
            menuItems.forEach(item => item.style.display = 'flex');
            // Изменить картинку на крестик
            if (closeIcon.style.display !== 'none') {
            // Скрываем крестик, показываем стрелку
            closeIcon.style.display = 'none';
            arrowIcon.style.display = 'block';
        } else {
            // Скрываем стрелку, показываем крестик
            closeIcon.style.display = 'block';
            arrowIcon.style.display = 'none';
        }
        }
        // Переключить состояние
        isMenuOpen = !isMenuOpen;
    });
});