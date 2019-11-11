// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:
// Функция для вывода на экран информации об автомобиле;
// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

let car = {
    make: 'Mitsubishi',
    model: 'Lancer',
    year: 2019,
    averageSpeed: 80,

    print: function () {
        console.log(this.make, this.model, this.year, this.averageSpeed);
    },

    time: function (distance) {
        let time, restTime;
        time = distance / this.averageSpeed;
        restTime = Math.floor(time/4);
        time += restTime;
        return time;
    }
};

car.print();
console.log(car.time(400));