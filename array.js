const talentawal = ['bayu','revo']
const talentbaru = ['basri', ...talentawal, 'dynno']

console.log(talentbaru)

// let basri = talentbaru[0]
let [basri,bayu,revo,dynno] = talentbaru
console.log(basri,bayu,revo,dynno)