const reda = {
    nom: 'amali',
    age: 23,
    cordinate(){
        console.log('hi, i am ' + this.nom + ' and im ' + this.age);
    }
};

const sports = ['football', 'soccer'];
// for (let sport of sports)
console.log(sports.map(tkherbi6a => 'sport: ' + tkherbi6a));
console.log(sports);

reda.cordinate();

//rest and spread operator

const r = ['e', 'd', 'a'];

const m = [...r];

console.log(m);
console.log(r);

var i = () => console.log('aisaam');
const f = (...args) => args;

console.log(f(5,4,3,2,1));

//object destructuring

const {nom, age} = reda;
console.log(nom, age);
const s = ({nom, cordinate}) => console.log(nom, cordinate);
s(reda);

//array destructuring

let [r1, r2, r3] = r;
console.log(r1, r2, r3);

//assync code is code taht doesn't execute or finish immidiately

const fetchData = argFunction => {
    setTimeout(() => argFunction('done!'), 1500);
};
setTimeout(() => {console.log('hello after timer is done!'); 
    fetchData( text => console.log(text))} , 3000);
//this snippest is a syncronous code
console.log('hey');
// in generale nodejs doesn't block your code execution until that is done , it moves immidiately to the next line to execute the syncronous code before because it recognize the callback functions and it should be executed later in the future