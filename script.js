let n1 = [10,20,30]
let n2 = [10,22,33,44,55]
let n3 = [...n1,...n2]
let n4 = [n3]
console.log(n4)

let colocado = 2;
switch(colocado){
    case 1: 
        console.log("1 lugar")
        break
    case 3:
        console.log("3 lugar")
        break
    default:
        console.log("nenhuma condicao bateu")
        break
}

for(let i = 0; i < 20; i++){
    console.log(i)
}

let caique = 0

for (let i = 0; i < 20;i++){
    console.log("caique tem " + caique + " anos")
    caique++
}