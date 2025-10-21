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
  infinite: false,
   responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    }
  ]
});

$('.reviewssec_mainpage_content_slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  dots: false,
  infinite: false,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    }
  ]
});
/*
$(document).ready(function() {
  // Инициализация slick для галереи с стрелками
  $('#gallery').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow: $('.gallery_arrowleft'),
  nextArrow: $('.gallery_arrowright'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });

  // Переменная для хранения текущего индекса выбранного изображения
  let currentIndex = 0;

  // Массив всех изображений галереи
  const images = $('#gallery img');

  // Обновление текущего индекса при клике на изображение
  $('#gallery').on('click', 'img', function() {
    currentIndex = images.index(this);
    var src = $(this).attr('src');
    $('#selectedImage').attr('src', src);
  });

  // Обработка кликов по стрелкам влево и вправо
  $('.gallery_arrowleft, .gallery_arrowright').on('click', function() {
    // Получить текущий индекс
    currentIndex = $('#gallery').slick('slickCurrentSlide');
    // Обновить изображение в основном окне
    const src = $(images[currentIndex]).attr('src');
    $('#selectedImage').attr('src', src);
  });
});
*/


/*--------------BURGER MENU-----------------------*/

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const close_popup = document.querySelector("#close_popup");
const sec = document.getElementsByTagName("section");

const body = document.body;
let listitembtn = document.getElementsByClassName('header_content-wrap-navmenu-list-item');



if (document.querySelector('#hamb')) {
  hamb.addEventListener("click", hambHandler);
  close_popup.addEventListener("click", hambHandler);


  function hambHandler(e) {
    e.preventDefault();
    // Переключаем стили элементов при клике
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");
  }

  for (let n = 0; n < listitembtn.length; n++) {
    listitembtn[n].addEventListener('click', function() {
       popup.classList.toggle("open");
       body.classList.toggle("noscroll");
    });
  }

}
  





/*--------------BURGER MENU-----------------------*/

const hamb2 = document.querySelector("#hamb2");
const popup2 = document.querySelector("#popup2");
const close_popup2 = document.querySelector("#close_popup2");
const sec2 = document.getElementsByTagName("section");

const body2 = document.body;
let listitembtn2 = document.getElementsByClassName('header_content-wrap-navmenu-list-item');



if (document.querySelector('#hamb2')) {
  hamb2.addEventListener("click", hambHandler);
  close_popup2.addEventListener("click", hambHandler);


  function hambHandler(e) {
    e.preventDefault();
    // Переключаем стили элементов при клике
    popup2.classList.toggle("open");
    hamb2.classList.toggle("active");
    body2.classList.toggle("noscroll");
  }

  for (let n = 0; n < listitembtn2.length; n++) {
    listitembtn2[n].addEventListener('click', function() {
       popup2.classList.toggle("open");
       body.classList.toggle("noscroll");
    });
  }

}















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







document.addEventListener('DOMContentLoaded', function() {
  if (document.querySelector('.tab_header_secondpage')) {
    const tabElements = document.querySelectorAll('.tab_header_secondpage');
    const contentElements = document.querySelectorAll('.content_projects_secondpage');

    tabElements.forEach(tabElement => {
        tabElement.addEventListener('click', function() {
            // Удаляем класс active у всех табов и скрываем все содержимое
            tabElements.forEach(t => t.classList.remove('active'));
            contentElements.forEach(contentElement => contentElement.classList.remove('active'));

            // Добавляем класс active к текущему табу и показываем соответствующее содержимое
            tabElement.classList.add('active');
            const currentTabId = tabElement.getAttribute('data-stab');
              if (document.querySelector('.tabs_header_secondpage_itempage')) {

              }
              else{
                 document.getElementById(`projects_secondpage_content-${currentTabId}`).classList.add('active');
              }
             
            
            
        });
    });
    console.log(tabElements[0]);
    // Активируем первый таб по умолчанию
    tabElements[0].click();
  }
});




document.addEventListener('DOMContentLoaded', function() {
  if (document.querySelector('.tabs_header_secondpage_itempage')) {
    const tabElements2 = document.querySelectorAll('.tab_header_portfolio_item');
    const contentElements2 = document.querySelectorAll('.content_itempage');

    tabElements2.forEach(tabElementm => {
        tabElementm.addEventListener('click', function() {
            // Удаляем класс active у всех табов и скрываем все содержимое
            tabElements2.forEach(m => m.classList.remove('active'));
            contentElements2.forEach(contentElementm => contentElementm.classList.remove('active'));

            // Добавляем класс active к текущему табу и показываем соответствующее содержимое
            tabElementm.classList.add('active');
            const currentTabIdm = tabElementm.getAttribute('data-mtab');
            document.getElementById(`content_itempage-${currentTabIdm}`).classList.add('active');
        });
    });
    console.log(tabElements2[0]);
    // Активируем первый таб по умолчанию
    tabElements2[0].click();
  }
});









/*-------------ТАБ-МЕНЮ УСЛУГИ-------------*/

let p_bold = document.getElementsByClassName('questions-list-item-title-p');
let listitem = document.getElementsByClassName('questions-list-item');
let wrapinfo = document.getElementsByClassName('questions-list-item-wrapinfo');
let itemimage = document.getElementsByClassName('questions-list-item-title_image');

let imgnoac = document.getElementsByClassName('questions-list-item-btnwrap-imgnoactive');

for (let i = 0; i < listitem.length; i++) {
  listitem[i].addEventListener('click', function() {
    
    wrapinfo[i].classList.toggle("questions-list-item-wrapinfo_js");
     if ($('.questions-list-item-btnwrap-imgnoactive').length) {
      imgnoac[i].classList.toggle("plus_act");
     }
    
     if ($('.questions-list-item-title-p').length) {
      p_bold[i].classList.toggle("questions-list-item-title-p_js");
    }
    
  });
}



document.addEventListener("DOMContentLoaded", function() {
  if ($('.close_fixed_menu').length) {
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
  }
    

    
   
});









document.querySelectorAll('.custom-select-wrapper').forEach(wrapper => {
    const select = wrapper.querySelector('select');
    const customSelect = wrapper.querySelector('.custom-select');
    const optionsContainer = wrapper.querySelector('.custom-options');

    // Заполняем кастомные опции
    Array.from(select.options).forEach(option => {
      const divOption = document.createElement('div');
      divOption.classList.add('custom-option');
      divOption.textContent = option.textContent;
      divOption.dataset.value = option.value;
      // Для disabled и selected
      if(option.disabled){
        divOption.style.color = '#999';
        divOption.style.cursor = 'default';
      }
      if(option.selected && !option.disabled){
        divOption.classList.add('selected');
        customSelect.textContent = option.textContent;
      }
      optionsContainer.appendChild(divOption);
    });

    // Клик по кастомному селекту — переключаем видимость списка
    customSelect.addEventListener('click', () => {
      const isActive = customSelect.classList.contains('active');
      closeAllSelects();
      if(!isActive){
        customSelect.classList.add('active');
      }
    });

    // Клик по опциям
    optionsContainer.addEventListener('click', e => {
      const target = e.target;
      if(!target.classList.contains('custom-option') || target.style.cursor === 'default') return;

      // Снимаем выделения
      optionsContainer.querySelectorAll('.custom-option').forEach(opt => opt.classList.remove('selected'));
      target.classList.add('selected');

      // Меняем текст и value в нативном select
      customSelect.textContent = target.textContent;
      select.value = target.dataset.value;
      select.dispatchEvent(new Event('change')); // для любых подписчиков

      customSelect.classList.remove('active');
    });

    // Закрыть все селекты при клике вне
    document.addEventListener('click', (e) => {
      if(!wrapper.contains(e.target)){
        customSelect.classList.remove('active');
      }
    });

    // Функция закрыть все селекты, кроме текущего (если нужно)
    function closeAllSelects() {
      document.querySelectorAll('.custom-select.active').forEach(elem => {
        elem.classList.remove('active');
      });
    }
  });









 $(document).ready(function(){ 
   if ($('#parent').length) {
  $('#parent').masonry({
// указываем элемент-контейнер в котором расположены блоки для динамической верстки
    itemSelector: '.item',
// указываем класс элемента являющегося блоком в нашей сетке
          singleMode: true,
// true - если у вас все блоки одинаковой ширины
    isResizable: true,
// перестраивает блоки при изменении размеров окна
    isAnimated: true,
    gutter: 28,
// анимируем перестроение блоков
          animationOptions: { 
        queue: false, 
        duration: 500 
    }
// опции анимации - очередь и продолжительность анимации
  }); 
}
  });









 const galleryItems = document.querySelectorAll('.gallery_item');
  const mainImage = document.getElementById('mainImage');
  const prevBtn = document.getElementsByClassName('gallery_arrowleft')[0];
  const nextBtn = document.getElementsByClassName('gallery_arrowright')[0];

  let currentIndex = 0;

  // Изначально показываем первую картинку в основном окне
  /*mainImage.src = `img/project_item_secondsec_content_container_leftpart_slider_item_${currentIndex + 1}.png`;
*/
  // Функция для обновления основного изображения
  function updateMainImage(index) {
    mainImage.src = `img/project_item_secondsec_content_container_leftpart_slider_item_${index + 1}.png`;
  }

  // Обновление рамки активной миниатюры
  function updateActiveThumbnail(index) {
    galleryItems.forEach((item, i) => {
      if (i === index) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }
if (prevBtn) {
  // Обработка клика по миниатюре
  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      currentIndex = index;
      updateMainImage(currentIndex);
      updateActiveThumbnail(currentIndex);
    });
  });

  // Обработка кнопки "влево"
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    updateMainImage(currentIndex);
    updateActiveThumbnail(currentIndex);
  });

  // Обработка кнопки "вправо"
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    updateMainImage(currentIndex);
    updateActiveThumbnail(currentIndex);
  });


}













const titleItems = document.querySelectorAll('.content_itempage_technologies_mainplan_list_item_title_list_item');
const imageMetkaItems = document.querySelectorAll('.content_itempage_technologies_mainplan_list_item_image_metka');

titleItems.forEach((titleItem, index) => {
  const correspondingMetka = document.querySelectorAll('.content_itempage_technologies_mainplan_list_item_image_metka')[index];

  if (correspondingMetka) {
    // Наведение мыши
    titleItem.addEventListener('mouseenter', () => {
      // Меняем фон и цвет текста (как ранее)
      titleItem.style.backgroundColor = 'red';
      const headers = titleItem.querySelectorAll('h4, p');
      headers.forEach(header => {
        header.style.color = '#FFFFFF';
      });
      
      // Добавляем opacity: 1 к <p> внутри correspondingMetka
      const pInsideMetka = correspondingMetka.querySelector('p');
      const svgInsideMetka = correspondingMetka.querySelectorAll('svg > circle');
      if (pInsideMetka) {
        pInsideMetka.style.opacity = '1';
        for (var i = 0; i < 3; i++) {
          svgInsideMetka[i].style.stroke = '#FFFFFF';
        }
        
      }
    });

    // Уход мыши
    titleItem.addEventListener('mouseleave', () => {
      // Возвращаем фон и цвет текста
      titleItem.style.backgroundColor = '';
      const headers = titleItem.querySelectorAll('h4, p');
      headers.forEach(header => {
        header.style.color = '';
      });
      
      // Убираем opacity: 1 у <p>
      const pInsideMetka = correspondingMetka.querySelector('p');
      const svgInsideMetka = correspondingMetka.querySelectorAll('svg > circle');
      if (pInsideMetka) {
        pInsideMetka.style.opacity = '0';
        for (var i = 0; i < 3; i++) {
          svgInsideMetka[i].style.stroke = '#17181D';
        }
      }
    });
  }

      imageMetkaItems.forEach((metkaItem, index) => {
        // Проверяем, есть ли соответствующий элемент в втором списке
        if (titleItems[index]) {
          // Обработчик для наведения мыши
          metkaItem.addEventListener('mouseenter', () => {
            titleItems[index].style.backgroundColor = 'red';
            const headerst = titleItems[index].querySelectorAll('h4, p');
            
              headerst.forEach(header => {
                header.style.color = '#FFFFFF';
              });
          });
          metkaItem.addEventListener('mouseleave', () => {
            // Можно вернуть исходный цвет или оставить красный
            titleItems[index].style.backgroundColor = '';
            const headerst = titleItems[index].querySelectorAll('h4, p');
            
              headerst.forEach(header => {
                header.style.color = '';
              });
          });
        }
      });
});