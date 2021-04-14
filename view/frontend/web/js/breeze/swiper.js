/* global breeze Swiper */
(function () {
    'use strict';

    breeze.widget('swiper', {
        /** [create description] */
        create: function () {
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

    $(document).on('breeze:mount:Swissup_Swiper/js/swiper', function (event, data) {
        $(data.el).swiper(data.settings);
    });
})();
