let girilensayilar=[];
let ciftSayilar=[];
let tekSayilar=[];



for(i=0;i<10; i++){
    let girilensayi = Number(prompt("Lütfen sayi giriniz"));
    girilensayilar.push(girilensayi);
    

}
console.log(girilensayilar);


for(sayi of girilensayilar){
    if(sayi%2===0){
        ciftSayilar.push(sayi);
    }
    else{
        tekSayilar.push(sayi);
    }
}
 console.log(ciftSayilar);
 console.log(tekSayilar);