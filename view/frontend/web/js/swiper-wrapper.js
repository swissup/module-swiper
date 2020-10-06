define([
    'jquery',
    './swiper'
], function ($, Swiper) {
    'use strict';

    var navigationHtml = '<div class="swiper-button-prev swiper-button-black"></div>' +
                         '<div class="swiper-button-next swiper-button-black"></div>';

    /**
     * Allows to wrap any content into
     *
     * <div data-mage-init='{"Swissup_Swiper/js/swiper-wrapper": {"target": ".product-items", ...}}'>
     *     {{widget type="Swissup\Highlight\Block\ProductList\All" template="product/widget/content/grid.phtml"}}
     * </div>
     *
     * Swiper will be created on child `target` element with all received options.
     * `target` can be an object target = {'container': '.selector1', 'wrapper': '.selector2', 'slide': 'selector3'}
     *
     * This wrapper is usefull, when you'd like to create slider on a
     * dynamically generated content (product listings, etc), and there is no
     * possibility to add `data-mage-init` property to slides parent element.
     *
     * @param  {Object} options
     * @param  {Element} element
     */
    return function (options, element) {
        var container,
            wrapper,
            target;

        // Add swiper container class
        target = options.target.container ? options.target.container : options.target;
        container = $(target, element).addClass('swiper-container');
        // Add wrapper class for slides
        wrapper = container.children(options.target.wrapper).addClass('swiper-wrapper');
        // Add slide class to slides
        wrapper.children(options.target.slide).addClass('swiper-slide');

        // Add navigation buttons
        container.append(navigationHtml);

        // Initialize swiper
        new Swiper(
            $.extend({
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            }, options),
            container
        );
    };
});
