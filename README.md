# lenka91.github.io

## Project for Esri R&D Center Zurich

I was asked to write a small web application for Esri R&D Center Zurich in order to prove a very basic development skills.

This web application consists of 5 files:
* `index.html` where is all the html
* `myapp.css` where is a custom CSS that applies generally to the web app
* `desktop-tablet-optim.css` where is CSS optimization for large desktop width and tablet width (iPad or iPad Pro), including the landscape mode
* `mobile-optim.css` where is CSS optimization for mobile phones, including the landscape mode
* `app.js` where is the application logic, writen in jQuery

I decided to create separated CSS files for optimization in order to make the `myapp.css` code more clear and transparent.

Also, the web application is using Bootstrap and its 12-column grid. I decided to use Bootstrap as I have already an experience with it, but application simple as this could be easily developed even without this framework. Because of Bootstrap in CSS there are some `!important`, that I am aware that are not the best practice. However they are sometimes needed to be used, in order to create a custom UI.

According to `app.js` file, it is pretty simple. For future character of application it can be improved (in order to have a functional left/right arrows and a list of thumbnail photos).