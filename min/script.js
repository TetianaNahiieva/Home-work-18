//Об’єкти



/* Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного бака, середня витрата палива на 100 км., водії), і наступні функції для роботи з цим об'єктом:
Висновок на екран з інформацією про автомобіль.
Додавання водія, який має право керувати автомобілем.
Заправка автомобіля.
Підрахунок необхідного часу для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину, а також потрібно перевіряти чи має право водій керувати даним автомобілем (ім'я водія функція приймає другим аргументом). Також потрібно перевірити чи вистачить палива, для здійснення цієї поїздки, якщо палива не вистачить потрібно вивести повідомлення, про це і запропонувати заправити автомобіль.*/

function Car(
    manufacturer,
    model,
    year,
    averageSpeed,
    capacitift,
    consumption,
    drivers
  ) {
    this.Manufacturer = manufacturer;
    this.Model = model;
    this.Year = year;
    this.AverageSpeed = averageSpeed;
    this.Capaciti = capacitift;
    this.Consumption = consumption;
    this.Drivers = drivers;
  }
  
  function calculateTimeAndFuel(distance, myCarArgument) {
    let hoursOnTheRoad = distance / myCarArgument.AverageSpeed;
    let avarageFuelConsumption = (distance * myCarArgument.Capaciti) / 100;
  
    if (hoursOnTheRoad < 4) {
      alert("Rest is not needed!");
    } else if (hoursOnTheRoad > 4) {
      let x = hoursOnTheRoad + Math.trunc((hoursOnTheRoad - 1) / 4);
      alert(`Your journey will take ${x} hours`);
    }
    if (avarageFuelConsumption < 25) {
      alert("You have enough flue");
    } else if (avarageFuelConsumption > 25) {
      alert("Time to fill up!");
    }
    let checkTheDriver = prompt("Name", "");
    if (checkTheDriver == "Tetiana") {
      alert("Allowed!");
    } else {
      alert("Forbidden!");
    }
  }
  
  function displayCar(car) {
    document.body.innerHTML = `<div>Manufacturer: ${car.Manufacturer}<br>
    Model: ${car.Model}<br>
    Year: ${car.Year}<br>
    AverageSpeed: ${car.AverageSpeed}<br>
    Capaciti: ${car.Capaciti}<br>
    Consumption: ${car.Consumption}<br>
    Drivers: ${car.Drivers}</div>`;
  }
  
  let myCar = new Car("Renoult", "Logan", 2016, 50, 30, 8, "Tetiana");
  displayCar(myCar);
  
  let distance = prompt("Enter distance", "");
  
  calculateTimeAndFuel(distance, myCar);
  