const numbers = [65, 44,100,"yosua","",null,90,true,false,undefined,12,0];
const newArr = numbers.map((item,index)=> item && !isNaN(item) && typeof(item) == 'number' ? `angka urutan ke ${index+1} adalah bilangan truthy ${item} dan sebuah angka` : `angka urutan ke ${index+1} adalah bilangan falsy atau bukan sebuah bilangan ${item}`)


console.log(newArr)