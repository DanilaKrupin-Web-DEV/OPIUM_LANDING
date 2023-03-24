document.addEventListener("DOMContentLoaded", function(){
  document.getElementById('burger').addEventListener('click', function(){
    document.querySelector('.header').classList.toggle('open');
  });
  document.querySelector('.header__basic-button').addEventListener('click', function(){
    document.querySelector('.body').classList.toggle('close-form');
  });
  document.querySelector('.form__close-btn').addEventListener('click', function(){
    document.querySelector('.body').classList.toggle('close-form');
  });
  
})

// обработка формы валидации

function validation(form) {

  function removeError(input) {
      const parent = input.parentNode;

      if (parent.classList.contains('error')) {
          parent.querySelector('.error-label').remove()
          parent.classList.remove('error')
      }
  }

  function createError(input, text) {
      const parent = input.parentNode;
      const errorLabel = document.createElement('label')

      errorLabel.classList.add('error-label')
      errorLabel.textContent = text

      parent.classList.add('error')

      parent.append(errorLabel)
  }


  let result = true;

  const allInputs = form.querySelectorAll('input');

  for (const input of allInputs) {

      removeError(input)

      if (input.dataset.maxLength) {
          if (input.value.length > input.dataset.maxLength) {
              removeError(input)
              createError(input, `Максимальное кол-во цифр: ${input.dataset.maxLength}`)
              result = false
          }
      }

      if (input.dataset.minLength) {
        if (input.value.length < input.dataset.minLength) {
            removeError(input)
            createError(input, `Минимальное кол-во цифр: ${input.dataset.minLength}`)
            result = false
        }
    }

      if (input.dataset.minLength) {
          if (input.value.length < input.dataset.maxLength) {
              removeError(input)
              createError(input, `Минимальное кол-во символов: ${input.dataset.minLength}`)
              result = false
          }
      }

      if (input.dataset.required == "true") {
          if (input.value == "") {
              removeError(input)
              createError(input, 'Поле не заполнено!')
              result = false
          }
      }

  }

  return result
}


document.getElementById('add-form').addEventListener('submit', function(event) {
  event.preventDefault()

  if (validation(this) == true) {
      alert('Форма успешно отправлена! Мы свяжимся с вами в ближайшее время!')
  }

})


// ИЗМЕНЕНИЕ HEADER ПРИ СКРОЛЛЕ 
 
window.addEventListener('scroll', function(){
  if(window.pageYOffset > 100 ) {
    document.querySelector('.header__top_wrapper').style.borderBottom="1px solid var(--main-color)",
    document.querySelector('.header__top_wrapper').style.background="var(--back-color)",
    document.querySelector('.nav').style.backdropFilter= "none",
    document.querySelector('.nav').style.background= "none";
    
  }else {
    document.querySelector('.header__top_wrapper').style.background="none",
    document.querySelector('.header__top_wrapper').style.borderBottom="none",
    document.querySelector('.nav').style.backdropFilter= "blur(30px)",
    document.querySelector('.nav').style.background= "rgba(0, 0, 0, 0.35)";
  }

  if(window.innerWidth <= 996  ){
    document.querySelector('.nav').style.backdropFilter= "blur(30px)",
    document.querySelector('.nav').style.background= "rgba(0, 0, 0, 1.35)";
  }
});


// НАСТРОЙКА КНОПКИ ПОСМОТРЕТЬ БОЛЬШЕ 

document.querySelector(".programs__view-more").addEventListener('click', function(){
  document.querySelector(".programs__item--three").style.display = "block",
  document.querySelector(".programs__item--four").style.display = "block",
  document.querySelector(".programs__item--five").style.display = "block",
  document.querySelector(".programs__item--six").style.display = "block",
  document.querySelector(".programs__view-more").style.display = "none";
})

document.querySelector(".masters__view-more").addEventListener('click', function(){
  document.querySelector(".masters__item-wrapper-four").style.display = "block",
  document.querySelector(".masters__item-wrapper-five").style.display = "block",
  document.querySelector(".masters__item-wrapper-six").style.display = "block",
  document.querySelector(".masters__view-more").style.display = "none";
})


// НАСТРОЙКА КНОПКИ ВЕРНУТЬСЯ В НАЧАЛО

window.addEventListener('scroll', function(){
  if(window.pageYOffset > 500 ){
    document.querySelector(".button_up").style.display = "block";   
  }else{
    document.querySelector(".button_up").style.display = "none";
  }
});

window.addEventListener('scroll', function(){
  if(window.pageYOffset > 600 ){

    document.querySelector(".button_up").style.opacity = "1";
    
  }else{
    document.querySelector(".button_up").style.opacity = "0";
  }
});


 
 
//  настройка slick slider//  настройка slick slider//  настройка slick slider//  настройка slick slider
 
 $('.reviews__slider').slick({    
  dots: true,
  infinite: true,
  arrows : false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 996,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 586,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

 



