const perhitungan = {
    output: function(action, data){
        return `hasil ${action} adalah ${data}`
    }
    ,
    perkalian: function(num1,num2){
        let total =  num1*num2
        let bagi = this.pembagian(num1,num2)
        console.log(this.output('pembagian',bagi))
        let kali =  this.output('perkalian',total)
        
    },
    pembagian: function(num1,num2){
         return Math.floor(num1/num2)
    },
    pertambahan: function(num1,num2){
         return Math.floor(num1+num2)
    },
    pengurangan: function(num1,num2){
         return Math.floor(num1-num2)
    },
}

// const {perkalian} = perhitungan

console.log(perhitungan.perkalian(20,4))


var data = "jualbeli"

var databaru = data
