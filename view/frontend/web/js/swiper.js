define([
    'jquery',
    '../lib/swiper',
    'mage/translate',
    'Magento_Ui/js/modal/modal' // 2.3.3: create 'jquery-ui-modules/widget' dependency
], function ($, Swiper, $t) {
    'use strict';

    var skipId = 1;

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

            if ($(this.element).find('a,button').length) {
                this.addSkipLink();
            }
        },

        /**
         * Update swiper
         */
        updateSwiper: function () {
            var swiper = this.element.get(0).swiper;

            if (swiper) {
                swiper.update();
            }
        },

        addSkipLink: function () {
            var skipTpl = `<a href="#swiper-${skipId}-end" class="action skip">${$t('Skip carousel')}</a>`,
                anchorTpl = `<span id="swiper-${skipId}-end" class="anchor skip"></span>`;

            skipId++;
            $(this.element).prepend(skipTpl);
            $(this.element).append(anchorTpl);
        }
    });

    return $.swissup.swiper;
});
