"use strict";var e=document.querySelector(".burger"),t=document.querySelector(".header__nav-mobile"),i=document.querySelector(".header__nav-mobile__wrapper");function o(e){document.querySelectorAll(".features__item-btn").forEach((function(e){e.style.color="#765AB1"})),document.querySelectorAll(".features__item-btn")[e].style.color="#FFFFFF"}document.querySelector(".menu-button-container").addEventListener("click",(function(e){e.stopPropagation()})),e.addEventListener("click",(function(){i.classList.toggle("header__nav-mobile__wrapper--active"),t.classList.toggle("header__nav-mobile--active"),i.classList.contains("header__nav-mobile__wrapper--active")?e.style.position="fixed":e.style.position=""}));new Swiper(".home__swiper",{slidesPerView:"auto",spaceBetween:15,centerSlides:!0}),new Swiper(".advantages__swiper",{loop:!1,slidesPerView:"auto",spaceBetween:30,initialSlide:0,centerSlides:!0,breakpoints:{320:{spaceBetween:10},576:{spaceBetween:30},920:{spaceBetween:30}},pagination:{el:".swiper-pagination",type:"progressbar"}});var n=new Swiper(".features__swiper",{loop:!0,effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",direction:"vertical",spaceBetween:30,speed:1200,breakpoints:{320:{direction:"horizontal"},480:{direction:"horizontal"},920:{direction:"vertical"}},autoplay:{delay:5e4},coverflowEffect:{rotate:0,stretch:0,depth:500,modifier:1,slideShadows:!1},navigation:{nextEl:".features__swiper-button-next",prevEl:".features__swiper-button-prev"},on:{init:function(){o(this.realIndex)},slideChange:function(){o(this.realIndex)}}});document.querySelectorAll(".features__item").forEach((function(e,t){e.addEventListener("click",(function(){n.slideToLoop(t)}))}));var r=document.querySelector(".dropdown"),a=document.querySelector(".dropdown--mobile");r.onclick=function(){r.classList.toggle("active")},a.onclick=function(){a.classList.toggle("active")};