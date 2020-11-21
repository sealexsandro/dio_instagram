window.onload = function () {
    let div_smartphone = document.getElementById('smartphone');

    for (let index = 0; index < 5; index++) {
        let img = document.createElement("img");
        img.src = `./img/tela_slide0${index + 1}.jpg`;
        img.classList.add('img_slides');
        img.id = index;
        div_smartphone.appendChild(img);
    }
    let i = 0;
    document.getElementById(i).style.display = 'block';
    setInterval(function () {
        if (i > 0) {
            document.getElementById(i).classList.add('img_efeitos');
            document.getElementById(i-1).style.display = 'none';
            if (i >= 4) {
                i = 0;
                document.getElementById(i).classList.remove('img_efeitos');
            }
        }
        document.getElementById(i).style.display = 'block';
        i++;
    }, 5000);

}