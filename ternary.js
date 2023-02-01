let angka1 = 20
let angka2 = 25
let angka3 = 30

// condition ? true : false
angka1 <= angka2 ? console.log(`${angka1} lebih kecil sama dengan ${angka2}`) : console.log(`${angka1} tidak lebih kecil sama dengan ${angka2}`)

// condition && true
angka1 <= angka2 && console.log(`${angka1} lebih kecil sama dengan ${angka2}`) 

// 
// if(){
//     if(){

//     } else {

//     }
// } else {

// }

angka1 <= angka2 ? angka1 <= angka3 ? console.log(`${angka1} lebih kecil sama dengan ${angka2} dan ${angka3}`) : console.log(`${angka1} lebih kecil sama dengan ${angka2} namun lebih kecil dari ${angka3}`)  : console.log(`${angka1} tidak lebih kecil sama dengan ${angka2}`)