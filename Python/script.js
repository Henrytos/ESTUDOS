let money = [0.05, 0.1, 0.2, 0.25, 0.5, 1, 2, 5, 10, 20, 50]
const produto = 47.2
const value = 48.2
let dinheiro = value - produto
let arr = [...(dinheiro.toString())]

arr = arr.slice(0, arr.indexOf('.') + 3)
if (arr[arr.length - 1] == 9 || arr[arr.length - 1] == 8 || arr[arr.length - 1] == 7) {
    arr[arr.length - 1] = 0
    arr[arr.length - 2] = parseFloat(arr[arr.length - 2]) + 1
}
else if (arr[arr.length - 1] == 1 || arr[arr.length - 1] == 2 || arr[arr.length - 1] == 3) {
    arr[arr.length - 1] = 0
    arr[arr.length - 2] = parseFloat(arr[arr.length - 2]) - 1
}
else {
    arr[arr.length - 1] = 5
}
arr = parseFloat(arr.join(''));
dinheiro = arr
const moneyInicial = dinheiro
let troco = ''
let i = 0
for (i; i < money.length;) {

    if (dinheiro > money[i]) {
         i++

    } else if (dinheiro < money[i]) {
        troco += money[i - 1] + ' , '
        dinheiro = dinheiro - money[i - 1]
         i = 0
    }
    else {
        troco += money[i]
        dinheiro = dinheiro - money[i]
    i = 11 
    }

}
troco = [...troco]
let afeter = troco[troco.length-1]
    troco = troco.slice(0, troco.indexOf('u'))
    troco=troco.join('')
console.log(`o troco de ${moneyInicial} é : ${troco}`)

