---
title: 5 tips to improve the performance of your website
date: "2019-03-06"
layout: post
draft: false
featured: true
tags:
  - performance
image: ./images/improve-pagespeed/improve-pagespeed.jpg
---

A good website is functional, targeted and looks good on every device. Does your website meet all these requirements? Great, but don't forget that the loading time can still be crucial for a good user experience.

> **40% immediately leaves your website if the loading time exceeds 3 seconds and 79% of the visitors who are dissatisfied with the performance of the website, say they are less inclined to buy again on this website .**

The above figures were published in a <a target="_blank" href="https://www.thinkwithgoogle.com/marketing-resources/experience-design/mobile-page-speed-load-time/"> Google blog post in 2016 </a> and clearly state why the loading time of your website is so important.

## Why optimize the performance of your website?

More than half of the average website traffic nowadays happens on mobile device, and therefore on a slower internet connection. "Heavy" websites are loaded even slower this way.

Knowing that 40% of the visitors leave your website immediately if it is not loaded within 3 seconds, it is very likely that you have lost a lot of customers if your website is not optimized.

In addition, Google will also reward fast websites by displaying them higher in search results.

A fast website has the following advantages:

- increased ease of use (especially on smartphones)
- higher visibility in search engines (such as Google)
- Fewer visitors who drop out, and therefore a higher conversion

## How do I test the speed of a website?

! [devices-alegria] (// images.ctfassets.net/laawkh2e48v0/6knBvkOs9dzBQqiX09bUC5/bbe7c2cfb22234ad76af96720ee51d2e/devices-alegria.png)
To see how things are going with the loading time of your website, you can use various tools. We list the best for you:

- <a href="https://developers.google.com/speed/pagespeed/insights/" target="_blank"> Pagespeed Insights </a>: a tool from Google and probably the quickest way to get your load time. Enter a website and immediately get a performance score, as well as points for improvement.
- <a href="https://developers.google.com/web/tools/lighthouse/" target="_blank"> Google Lighthouse </a>: the slightly more advanced variant of Pagespeed Insights that, in addition to a performance score also checks if your site is a "Progressive Web App", follows the recommended "Best Practices" and is sufficiently user-friendly. You'll also receive a detailed listing with areas for improvement. In addition, the tool makes it very useful to simulate a slow 3G connection so that each test is representative. Read <a target="_blank" href="https://developers.google.com/web/tools/lighthouse/#devtools"> here </a> how to do a Lighthouse test via Chrome DevTools.
- <a target="_blank" href="https://www.webpagetest.org/"> Webpage Test </a>: provides the most options for testing your website. For example, you can set the server location from which you want to test, request detailed graphs ...

**Important: ** The loading time of a website is highly dependent on the type of connection. Opening a webpage on your smartphone via a 3G connection will therefore take longer than when you are connected to the network via a cable at home. That is why we recommend that you always simulate a 3G network during a test, as well as doing all tests through the browser's incognito window (so that your plugins have no influence on the test).

## Our tips

In most cases, the following adjustments can have a major impact on the loading time:

- ** Optimize your images**
  Do not make your images larger than necessary and use a tool such as <a href="https://imageoptim.com" target="_blank"> ImageoOptim </a> or <a target="_blank" href="https://squoosh.app/">Squoosh</a> to make the files as light as possible.
  In addition, it may be a good idea to see which images have real added value to your website and to delete unnecessary images. For example, carousels and sliders at the top of your webpage are a no-brainer to remove, since they have a very poor conversion.
- ** Host fonts yourself**
  Eliminate requests to Google Fonts and put them on the same server as your website. By applying this technique, you can sometimes gain full seconds of the loading time.
- **Use "_lazy loading_"**
  Lazy loading is a technique where images only load when they are actually needed. This can be very useful if you have a page with many visuals. As you scroll down further, your images will load. Sometimes you will see a short "animation" when the image is loading. However, this is not disturbing and gives you the opportunity to make the page interactive faster. For the implementation you can use different libraries, plugins ... depending on which platform you use for your website.
- **Reduce "render blocking scripts"**
  The same applies here: delete what is not necessary. View how many Javascript and CSS files are being loaded and reduce or eliminate theme if possible. Javascript files can also be loaded asynchronously, for example.
- **Optimize the server response time**
  See if the response time of your hosting provider is not too slow. Different providers such as <a target="_blank" href="https://www.cloudflare.com/cdn/">Cloudflare </a> can also offer your files from a _Content Delivery Network_ or **CDN**, so that the distance between the server and end user is shortened.

Also view the website <a href="https://speedchecklist.com" target="_blank"> speedchecklist.com </a> for a handy list of things you can view to optimize.
