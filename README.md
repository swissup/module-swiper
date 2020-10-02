# Swiper

Swiper - is the free and most modern mobile touch slider with hardware accelerated transitions and amazing native behavior.

And it is as Magento 2 JS Widget.

# Installation

```bash
cd <magento_root>
composer require swissup/module-swiper
bin/magento setup:upgrade
```

# Example

Below you can find simple HTML markup to get Swiper slider at Magento 2 frontend:

```html
<div class="swiper-container" data-mage-init='{"Swissup_Swiper/js/swiper" : {"lazy": true, "slidesPerView": 6, "freeMode": true, "loop": true, "autoplay": {"delay": 2500, "disableOnInteraction": false}, "navigation": {"nextEl": ".swiper-button-next", "prevEl": ".swiper-button-prev"}, "breakpoints": {"768": {"slidesPerView": 4}, "600": {"slidesPerView": 3}, "480": {"slidesPerView": 2}}}}'>
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <div class="swiper-lazy-preloader"></div>
            <a href="#"><img class="swiper-lazy" data-src="{{media url=&quot;wysiwyg/brands/ancestry.png&quot;}}" alt="" width="200" height="78"/></a>
        </div>
        <div class="swiper-slide">
            <div class="swiper-lazy-preloader"></div>
            <a href="#"><img class="swiper-lazy" data-src="{{media url=&quot;wysiwyg/brands/expedia.png&quot;}}" alt="" width="200" height="78"/></a>
        </div>
        <div class="swiper-slide">
            <div class="swiper-lazy-preloader"></div>
            <a href="#"><img class="swiper-lazy" data-src="{{media url=&quot;wysiwyg/brands/skyscnr.png&quot;}}" alt="" width="200" height="78"/></a>
        </div>
        <div class="swiper-slide">
            <div class="swiper-lazy-preloader"></div>
            <a href="#"><img class="swiper-lazy" data-src="{{media url=&quot;wysiwyg/brands/twtr.png&quot;}}" alt="" width="200" height="78"/></a>
        </div>
        <div class="swiper-slide">
            <div class="swiper-lazy-preloader"></div>
            <a href="#"><img class="swiper-lazy" data-src="{{media url=&quot;wysiwyg/brands/uber.png&quot;}}" alt="" width="200" height="78"/></a>
        </div>
        <div class="swiper-slide">
            <div class="swiper-lazy-preloader"></div>
            <a href="#"><img class="swiper-lazy" data-src="{{media url=&quot;wysiwyg/brands/viber.png&quot;}}" alt="" width="200" height="78"/></a>
        </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
</div>
```

More details about options you can find at [Swiper API](https://swiperjs.com/api/).
