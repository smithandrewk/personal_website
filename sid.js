    // init controller
    var controller = new ScrollMagic.Controller();

    // build scenes
    new ScrollMagic.Scene({
            duration: '80%',
            triggerElement: ".about-title",
            triggerHook: 0
        })
        .setPin('.about-title')
        .addTo(controller);