for (let i=10; i>=0; i--) {

    console.log(i);
}


for (let i=100; i>=80; i--) {

    console.log(i);



}


console.log("");
console.log("");
console.log("");
//100-80 er majhe 5 dara bivajjo sob gular sum ber koro!!!!!!!!!!
var total = 0;

for (let i=100; i>=80; i--) {

   if(i % 5 ===0)
   {

        total = total+ i;
        console.log(i, total);

   }
    
}

console.log(total);