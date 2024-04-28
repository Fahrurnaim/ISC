const dataDiri = {
    Name: "Naim",
    TTL: "21 November 2004",
    umur: 20,
};

//console.log(dataDiri);
//console.log(`Nama saya ${dataDiri.Name} Saya lahir pada ${dataDiri.TTL} dan berumur ${dataDiri.umur}`);

function Perkenalan(namaAwal, namaAkhir = "default") {
    console.log(`Namaku ${namaAwal} ${namaAkhir}`);
    
}
//Perkenalan("Fahrur");
//Perkenalan("Fahrur","Naim");

function finalNilai(nilai) {
    if (nilai >=90) {
        return "A";
    }
    else if (nilai >=65){
        return "B";
    }
    else {
        return "C";
    }
}

// const nilaiAkhir=finalNilai(78);
//console.log(nilaiAkhir);

const salam = (namaAwal,namaAkhir) => `halo ${namaAwal}${namaAkhir}`;
//console.log(salam("fahrur","naim"));

//function array
const angkas = [1,2,3,4,5,6,7,8,9,10]

const angkasMap = angkas.map((angka)=>angka)
//console.log(angkasMap);

const foreach = angkas.forEach((value)=>value*2)
console.log(foreach);

const angkaGenap = angkas.filter ((angka)=>angka %2==0)
console.log(angkaGenap);