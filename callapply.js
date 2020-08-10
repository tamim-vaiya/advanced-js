const normalPerson = {
  firstName : 'Rahim',
  lastName : 'Uddin',
  salary : 15000,
  getFullName : function(){
    console.log(this.firstName, this.lastName);
  },
  chargeBill : function(amount, tips, taxes){
    this.salary = this.salary - amount - tips - taxes;
    return this.salary;
  }
}

const heroPerson = {
  firstName : 'Hero',
  lastName : 'Balam',
  salary : 25000
}

const friendlyPerson = {
  firstName : 'Hero',
  lastName : 'Golam',
  salary : 20000
}

//bind
const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(2000);
heroChargeBill(2000);
heroChargeBill(2000);
console.log(heroPerson.salary);

const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
friendlyChargeBill(1500);
console.log(friendlyPerson.salary);

//call
normalPerson.chargeBill.call(heroPerson,  900, 100, 10);
normalPerson.chargeBill.call(heroPerson, 3000, 300 , 30);
console.log(heroPerson.salary);

normalPerson.chargeBill.call(friendlyPerson, 5000, 500, 50);
console.log(friendlyPerson.salary);

//apply
normalPerson.chargeBill.apply(heroPerson, [3000, 300, 30]);
console.log(heroPerson.salary);
