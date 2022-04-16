if (document.querySelector(".popup")) {
    const button = document.querySelector(".button");
    const circle = document.querySelector(".circle")
    let buttonOn = false;
    

    button.addEventListener("click", () => {
        if (!buttonOn) {
            buttonOn = true;

            button.style.animation = "transformToBlue 1s ease-in-out 0s forwards"
            circle.style.animation = "moveCircleRight 1s ease-in-out 0s forwards"
            chrome.tabs.executeScript({
                file: 'appOn.js'
            })
        }
        else {
            buttonOn = false;
            button.style.animation = "transformToYellow 1s ease-in-out 0s forwards"
            circle.style.animation = "moveCircleLeft 1s ease-in-out 0s forwards"
            chrome.tabs.executeScript({
                file: 'appOff.js'
            })
        }
    })

}