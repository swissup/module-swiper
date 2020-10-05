define([
    'jquery',
    './swiper'
], function ($, Swiper) {
    'use strict';

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
        var container = options.target.container ? options.target.container : options.target;

        // Add swiper container class
        $(container, element).addClass('swiper-container');
        // Add wrapper class for slides
        $(container, element).children(options.target.wrapper).addClass('swiper-wrapper');
        // Add slide class to slides
        $(container, element).children(options.target.wrapper).children(options.target.slide).addClass('swiper-slide');

        // Initialize swiper
        new Swiper(options, $(container, element));
    };
});
