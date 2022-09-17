window.addEventListener('load', (event) => {

    const slider = document.getElementById("checkbox");

    slider.addEventListener('click', (event) => {

        var price_elements = document.querySelectorAll("h3");

        for (i=0; i<price_elements.length;i++){
            price_elements[i].classList.toggle('hide');
        }
    });
});