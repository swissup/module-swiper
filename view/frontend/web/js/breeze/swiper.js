/* global breeze Swiper */
(function () {
    'use strict';

    var navigationHtml = '<div class="swiper-button-prev swiper-button-black"></div>' +
                         '<div class="swiper-button-next swiper-button-black"></div>';

    breeze.widget('swiper', {
        component: 'Swissup_Swiper/js/swiper',

        /** [create description] */
        create: function () {
            var target, container;

            // swiper-wrapper implementation
            if (this.options.target) {
                target = this.options.target.container ?
                    this.options.target.container : this.options.target;

                container = $(target, this.element).addClass('swiper-container');
                container.children(this.options.target.wrapper)
                    .addClass('swiper-wrapper')
                    .children(this.options.target.slide)
                    .addClass('swiper-slide');

                container.append(navigationHtml);

                this.element = container;
                this.options = $.extend({
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                }, this.options);
            }

            // Adjust swiper size when slide is loaded lazy.
            if (this.options.lazy) {
                this.options.on = $.extend({}, this.options.on, {
                    lazyImageReady: this.updateSwiper.bind(this)
                });
            }

            new Swiper(this.element, this.options);
        },

        /** [updateSwiper description] */
        updateSwiper: function () {
            var swiper = this.element.get(0).swiper;

            if (swiper) {
                swiper.update();
            }
        }
    });
})();
