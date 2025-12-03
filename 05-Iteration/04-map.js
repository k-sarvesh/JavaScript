// mapp

const map = new Map();

map.set('In',"India");
map.set('USA',"United States of America");
map.set('Py',"Python");
map.set('Js',"JavaScript");

console.log(map)

for(const [key,val] of map){
    console.log(key);
    console.log(val);
}


const mynum = [1,2,3,4,5,6,7,8,9,10];

const add10 = mynum.map((num) => num+10);
console.log(add10);
