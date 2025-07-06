"use strict";

import * as burger from './burger.js'

function updateActiveListItem(index) {
	document.querySelectorAll(".features__item-btn").forEach(function (item) {
		item.style.color = "#765AB1";
	});

	const activeItem = document.querySelectorAll(".features__item-btn")[index];
	activeItem.style.color = "#FFFFFF";
}

const swiperHome = new Swiper(".home__swiper", {
	slidesPerView: "auto",
	spaceBetween: 15,
	centerSlides: true,
});

const swiperAdvantages = new Swiper(".advantages__swiper", {
	loop: false,
	slidesPerView: "auto",
	spaceBetween: 30,
	initialSlide: 0,
	centerSlides: true,

	breakpoints: {
		320: {
			spaceBetween: 10,
		},

		576: {
			spaceBetween: 30,
		},

		920: {
			spaceBetween: 30,
		},
	},
	pagination: {
		el: ".swiper-pagination",
		type: "progressbar",
	},
});

const swiperFeatures = new Swiper(".features__swiper", {
	loop: true,
	effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: "auto",
	direction: "vertical",
	spaceBetween: 30,
	speed: 1200,

	breakpoints: {
		320: {
			direction: "horizontal",
		},

		480: {
			direction: "horizontal",
		},

		920: {
			direction: "vertical",
		},
	},

	autoplay: {
		delay: 50000,
	},
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 500,
		modifier: 1,
		slideShadows: false,
	},
	navigation: {
		nextEl: ".features__swiper-button-next",
		prevEl: ".features__swiper-button-prev",
	},
	on: {
		init: function () {
			updateActiveListItem(this.realIndex);
		},
		slideChange: function () {
			updateActiveListItem(this.realIndex);
		},
	},
});

document.querySelectorAll(".features__item").forEach((item, index) => {
	item.addEventListener("click", () => {
		swiperFeatures.slideToLoop(index);
	});
});

function show(value) {
	document.querySelector(".text-box").value = value;
}
