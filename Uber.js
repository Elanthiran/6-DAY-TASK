//4.write a class to calculate the Uber price

class UberPrice {

    static PER_KILOMETER_RATE = 15;
    static BASE_FARE = 50;
    static PER_MINUTE_RATE = 0.5;

constructor(distance=15, duration=45) {

this.distance = distance;

this.duration = duration;

}

calculateFare() {

const distanceFare = this.distance * UberPrice.PER_KILOMETER_RATE;

const timeAmount = this.duration * UberPrice.PER_MINUTE_RATE;

const totalAmount = UberPrice.BASE_FARE + distanceFare + timeAmount;

return totalAmount;

}

getDistance() {

return this.distance;

}

setDistance(distance) {

this.distance = distance;

}

getDuration() {

return this.duration;

}

setDuration(duration) {

this.duration = duration;

}

toString() {

return `UberPrice[distance=${this.distance.toFixed(2)} kilometer, duration=${this.duration} minutes]`;

}

}

const Uberprice1 = new UberPrice();

console.log(Uberprice1.toString());

const amount = Uberprice1.calculateFare();

console.log(`Total Amount RS :${amount.toFixed(2)}`);