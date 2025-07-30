document.addEventListener('DOMContentLoaded', () => {
    const p1  = document.querySelector('#inflate');
    const boom = document.querySelector('#boom');

    window.addEventListener('keyup', inflaterHandler);

    function inflaterHandler(event){
        let currentSizeP1 = window.getComputedStyle(p1).fontSize;
        let size = parseFloat(currentSizeP1);

        size += 10;
        p1.style.fontSize = size + "px";
        console.log(`p size: ${p1.style.fontSize}`);

        if(size > 300){
            p1.textContent = "💥";
            playBoomSound();
            window.removeEventListener('keyup', inflaterHandler);
            resetGame();
        }

    }
    function playBoomSound(){
        boom.currentTime = 0;

        boom.play()
            .then(() => {
                console.log("sounds play successfully!");
            }).catch(error => {
                console.error("Error playing soung:", error);
            });
    }

    function resetGame(){
        const button = document.createElement('button');

        button.classList.add('reset');
        button.textContent = "Reset";
        button.style.backgroundColor = "blue";
        button.style.color = "white";
        button.style.fontSize = "20px";
        button.style.fontWeight = "bold";
        button.style.padding = "5px 10px";
        button.style.marginBottom = "150px";
        document.body.appendChild(button);

        button.addEventListener('click', event => {
            event.preventDefault();

            p1.textContent = "🎈";
            p1.style.fontSize = "22px";
            window.addEventListener('keyup', inflaterHandler);
            button.remove();
        });
    }

    /*
    window.addEventListener('keydown', event => {
        event.preventDefault();
        let currentSizeP1 = window.getComputedStyle(p1).fontSize;
        let size = parseFloat(currentSizeP1);

        size -= 10;
        p1.style.fontSize = size + "px";
        console.log(`p size: ${p1.style.fontSize}`);
    });
    */
});



