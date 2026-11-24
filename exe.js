const categories = ["Papeterie", "Accessoires", "Sacs"];
const boutique = {
nom: "Stock & Fournitures",
ville: "Youssoufia",
ouverte: true
};
const produits = [
{ id: 101, nom: "Cahier", categorie: "Papeterie",
prix: 20, stock: 5 },
{ id: 102, nom: "Stylo", categorie: "Papeterie",
prix: 10, stock: 0 },
{ id: 103, nom: "Trousse", categorie: "Accessoires",
prix: 35, stock: 3 },
{ id: 104, nom: "Sac", categorie: "Sacs",
prix: 120, stock: 2 },
{ id: 105, nom: "Classeur", categorie: "Papeterie",
prix: 30, stock: 4 }
];
//challenge 1
console.log(categories[1])
console.log(categories.length)
categories.push("Classement")
categories[1]="Bureau"
categories.pop()
console.log(categories)
//challenge 2
console.log(boutique.nom)
console.log(boutique.ville)
boutique.devise="MAD"
boutique.ouverte=false
console.log(boutique)
if(boutique.ouverte===false){
    console.log("fermee")
}
//challenge 3
let coper=[]
for(let i=0;i<produits.length;i++){
    coper.push({...produits[i]})
}
console.log(coper)
for(let produit of produits){
    console.log(`le nom ${produit.nom} est stocker ${produit.stock}`)
}
let stylo=coper.find(el=>
    el.nom==="Stylo"
)
if(stylo){
    stylo.stock=6
}

let gomme={
    id:106,

    nom:"Gomme",
    categories:"Papeterie",
    prix:5,
    stock:8
}
coper.splice(1,0,gomme)
let elementSuprimer=coper.findIndex(el=>el.id===104)
coper.splice(elementSuprimer,1)
console.log(coper)
// challenge 4
let produitSup=coper.filter(el=>{
    return el.stock>0
})
console.log(produitSup)
let duxiemFilter=coper.filter(el=>{
    return el.categorie==="Papeterie" && el.stock>0
})
console.log(duxiemFilter)
//challenge 5
let noms=coper.map(el=>el.nom)
console.log(noms)
let duxiemMap=coper.map(el=>`${el.nom}-${el.prix} DH`)
console.log(duxiemMap)
//challenge 6
let prix=coper.map(el=>el.prix)
console.log(prix)
let prixTotal=prix.reduce((acc,ele)=>{
    return acc+ele
},0)
console.log(`prex total est ${prixTotal}`)
let secondeReduce=coper.reduce((acc,ele)=>{
   return acc+(ele.stock*ele.prix)
},0)
console.log(secondeReduce)
//chalenge 7
let trouve=coper.find(el=>el.id===103)
if(trouve){
    trouve.id=999
}
console.log(coper.findIndex(el=>el.id===103 ))
console.log(coper.findIndex(el=>el.id===999))
//challenge 8
let some=coper.some(el=>el.stock>0)
console.log(some)
//challenge 9
let evryePrix=coper.every(el=>el.prix>0)
console.log(evryePrix)
let everyStock=coper.every(el=>el.stock>0)
console.log(everyStock)
//chalenge 10
let filterProduit=coper.filter(el=>el.categorie==="Papeterie")
console.log(filterProduit)
let mapNoms=filterProduit.map(el=>el.nom)
console.log(mapNoms)
let nombreTotale=filterProduit.reduce((acc,ele)=>{
   return acc+ele.prix*ele.stock
},0)
console.log(nombreTotale)