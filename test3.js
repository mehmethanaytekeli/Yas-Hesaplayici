function YaşHesapla(yil){
    const buSene = new Date().getFullYear();
    const yas = buSene - yil;
    if(yas<18){
        console.log("cocuk");
    }else if(yas >=18 && yas<65){
        console.log("Genç");
    }else{
        console.log("yaşlı");
    }
    return yas;
}

const benimYasim = YaşHesapla(2004);
console.log(benimYasim);