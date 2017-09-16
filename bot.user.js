            window.log('Found saved settings, overwriting default bot options');
        } else {
            window.log('No saved settings, using default bot options');
        }

        // Has the user customised the options?
        if (Object.keys(customBotOptions).length !== 0
            && customBotOptions.constructor === Object) {
            Object.keys(customBotOptions).forEach(function(key) {
                window.bot.opt[key] = customBotOptions[key];
            });
            window.log('Custom settings found, overwriting current bot options');
        }
    }

    // Save the bot options
    userInterface.savePreference('options', JSON.stringify(window.bot.opt));
    window.log('Saving current bot options');

    // Listener for mouse wheel scroll - used for setZoom function
    document.body.addEventListener('mousewheel', canvasUtil.setZoom);
    document.body.addEventListener('DOMMouseScroll', canvasUtil.setZoom);

    // Set render mode
    if (window.mobileRender) {
        userInterface.toggleMobileRendering(true);
    } else {
        userInterface.toggleMobileRendering(false);
    }
    // Remove laggy logo animation
    userInterface.removeLogo();
    // Unblocks all skins without the need for FB sharing.
    window.localStorage.setItem('edttsg', '1');

    // Remove social
    window.social.remove();

    // Maintain fps
    setInterval(userInterface.framesPerSecond.fpsTimer, 80);

    // Start!
    userInterface.oefTimer();
    setInterval(Load, 1);
})();

function Load() {
    document.getElementById("nick").value = "GenoCheats Bot";
    document.getElementById("nick").disabled = "disabled";
    document.getElementById("nick").style = "color: grey";
}
