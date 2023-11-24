document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}

document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}


document.addEventListener("DOMContentLoaded", function () {
    var carImg = document.querySelectorAll('.car-img-left');

    carImg.forEach(car => {
        let isMoved = false;
        car.addEventListener('click', () => {
            if (isMoved) {
                car.style.left = "-400px";
            } else {
                car.style.left = "0";
            }
            isMoved = !isMoved;
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var carImg = document.querySelectorAll('.car-img-right');

    carImg.forEach(car => {
        let isMoved = false;
        car.addEventListener('click', () => {
            if (isMoved) {
                car.style.right = "-400px";
            } else {
                car.style.right = "0";
            }
            isMoved = !isMoved;
        });
    });
});