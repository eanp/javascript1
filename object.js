const data = {
    name : 'budi',
    old : 21,
    address: {
        city: 'jakarta timur',
        district: 'cililitan'
    },
    tambah: function(num1,num2){
        return num1+num2
    }
}

const {name,old,address:{city,district},tambah} = data 

console.log(city,district)

console.log(tambah(3,6))