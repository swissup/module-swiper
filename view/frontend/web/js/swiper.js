define([
    'jquery',
    '../lib/swiper',
    'Magento_Ui/js/modal/modal' // 2.3.3: create 'jquery-ui-modules/widget' dependency
], function ($, Swiper) {
    'use strict';

    $.widget('swissup.swiper', {
        /**
         * @private
         */
        _create: function () {
            // Adjust swiper size when slide is loaded lazy.
            if (this.options.lazy) {
                this.options.on = $.extend({}, this.options.on, {
                    lazyImageReady: this.updateSwiper.bind(this)
                });
            }

            new Swiper(this.element, this.options);
        },

        /**
         * Update swiper
         */
        updateSwiper: function () {
            var swiper = this.element.get(0).swiper;

            if (swiper) {
                swiper.update();
            }
        }
    });

    return $.swissup.swiper;
});
