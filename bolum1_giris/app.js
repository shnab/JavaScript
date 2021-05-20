// ** Konsolda mesaj vermek için console.log() fonksiyonu kullanılır.
console.log("Hello javascript");
console.log("Javascript javadan kolay bir dildir..");
console.error("Bu bir hatadır.");
console.warn("Bu bir uyarıdır");

// alert("Dikkat"); // ? Ekrana pop-up mesaj çıkarır.

// ** ======================= DEĞİŞKEN TANIMLAMA ======================

//**  -----  VAR -----
// ? var keyword ile değişken tanımlanabilir.
// ? Ancak, modern JS var keyword'unun kullanımı azaldı.
//? Çünkü, var global değişken gibi düşünülebilir.
// ? Günümüzde programcılar global değişken gerekmedikçe VAR tercih etmemektedir.

var pi = 3.14;
console.log(pi);
console.log(typeof pi); // ? Number

pi = "3";
console.log(pi);
console.log(typeof pi); // ? String

pi = true;
console.log(pi);
console.log(typeof pi); // ? Boolean

// ** değişken tanımlama keyword'u kullanılmasa da değişken tanımlanmış oluyor.
isim = "Ahmet";
console.log(isim);
console.log(typeof isim); // ? String

isim = 4;
console.log(isim);
console.log(typeof isim); // ? Number

//**  -----  CONST -----
// ? const ve let Modern JS ile gelmiş yeni değişken tanımlama keyword'leridir.
// ! CONST: Sadece başlangıçta değer atılabilir.
// ! Sonradan değeri değiştirilemez (non-primitive'ler hariç).

// const piSayisi = 3.14;

// console.log(piSayisi);

// piSayisi = 3; // ! Hata const değişkene sonradan değer atılamaz.
// console.log(piSayisi); // ! Hata const değişkene sonradan değer atılamaz.

//**      ----LET -----
// ? Eğerki değişkenimzin değerinin değişmesi gerekiyor ise const kullanamayız. Bunun yerine LET kullanabiliriz.

//!  LET block scope bir degiskendir
//!  VAR ise global scope bir tanimlamadir
//* Block scope : sadece tanimli oldudu alanda gecerlidir.Eger if icinde yazdiysak sadece orda gecerli.
let fiyat;
console.log(fiyat);
fiyat = 5.5;
console.log(fiyat); //5.5
console.log(typeof fiyat); //number

let dil = "Java";
dil = "script";
console.log(dil);

let isim1 = "Mustafa"; //Cift tirnak
let isim2 = "Ahmet"; //tek tirnak ==>'Ahmet';
let isim3 = `Alican`; //BackThick
console.log(isim3);

const dil1 = null; //JavaScript te null bir object
console.log(dil1);
console.log(typeof dil1);

const sucuk = 40;
const sakiz = 2;
const kola = 5;
let toplamFiyat = sucuk + sakiz + kola;
toplamFiyat++;
toplamFiyat += 50;

//!Birden fazla degiskenin degerini yazdrimak icin virgul (,) kullanilir
console.log(toplamFiyat, kola); //? 98, 5
console.log("Toplam :" + toplamFiyat); //? Toplam :98

//! + oparatoru String concatination de yapar
const ad = "can";
const soyAd = "canan";
console.log(ad + soyAd);
console.log(ad + " " + soyAd);

const x = 5,
  y = "5";
console.log(x + y); //55

//     *===BACKTICK (``) ===
const adim = "mesut";
const yas = "55";

console.log("Benim adim " + adim + " " + "yasim " + yas + " dir");
console.log(`Benim adim ${adim}, yasim ${yas} dir.`); //Benim adim mesut,yasim 55 dir

//* Cikarma isareti kullanimi
const yil = 2021;
const dogumTarihi = 1980;
const yaş = yil - dogumTarihi;
console.log("YAŞ:" + yaş);
console.log("YAŞ:" + yil - dogumTarihi); // !Hata --> Nan --> Not a number
console.log("YAŞ:" + (yil - dogumTarihi)); //burada parantez icine almak gerekir. yoksa NaN hatasi veriyor
console.log(`Yas: ${yil - dogumTarihi}`); //*Template Literal ile Yas: 41

//* US ALMA **
const taban = 2;
const us = 3;
const sonuc = taban ** us;
console.log(sonuc);

//* MOD ALMA
// ?Java SCriptte int olmadigi icin sayilari yuvarlamak gerekiyor.Math.floor -- Math.round -- Math.ceil  ile yuvarlama
const sayi = 123;
const birler = sayi % 10;
console.log(birler); //3
const onlar = (sayi / 10) % 10;
console.log("onlar basamagi " + Math.floor(onlar)); // 2 asagi yuvarlar
console.log("onlar basamagi " + Math.round(onlar)); // 2 hangi tam sayiya yakinsa ona yuvarlar
console.log("onlar basamagi " + Math.ceil(onlar)); // 3yukari yuvarlar

const yuzler = sayi / 100; // Math.floor((sayi / 100) % 10);
console.log("yuzler basamgi :" + Math.floor(yuzler)); //yuzler basamgi :1

console.log(
  `Sayi : ${sayi} => Birler Basamagi ${birler}, Onlar Basamagi ${Math.floor(
    onlar
  )}, Yuzler Basamagi ${Math.floor(yuzler)}`
);

// * KARSILASTIRMA OPERATORLERI == // ===
//3 lu kullanildiginda hem veri tipi hem de icerik kontrolu yapilir.
//< ve > buyuk/kucuk karsilastirma yaparken === kullanilamaz
const sayi1 = 100;
const sayi2 = "100";

console.log(typeof sayi1, typeof sayi2); //number string

console.log(sayi1 == sayi2); //true
console.log(sayi1 === sayi2); //false

console.log(sayi1 !== 100); //false
console.log(sayi1 != "100"); //false
console.log(sayi1 !== "100"); //true

console.log(sayi1 > 100); //false
console.log(sayi1 > "99"); //true

console.log(sayi1 >= 100); //true
console.log(sayi1 > "101"); //false

//* MANTIKSAL OPERATORLER
//! 0, null, undefined ve NaN (ve ve &&) ile isleme girdiginde kendine döndürüyor
let s2 = true;
let s3 = true;
console.log(s2 && true); // true
console.log(s2 && s3); // true
console.log(s2 && s3 && false); //FALSE

s3 = false;
//?burada true gordugu anda TRUE dondurur
console.log(s2 || s3 || false); // true

s3 = null;
//?NULL && isleminde ustun geliyor.
console.log(s2 && s3); // null
console.log(s3 && s2); //null
console.log(s2 || s3); // true
console.log(s3 || s2); //true

let s4 = true;
let s5 = true;
let s6 = undefined;
console.log(s4 && s5 && s6); //undefined

let s7 = true;
let s8 = null;
let s9 = undefined;
console.log(s7 && s8 && s9); //null

//* TERNARY

//?prompt ekrana default olarak string kabul ediyor.
//?buraya +prompt  koyarsak deger numbera cevrilir
//const age = +prompt("yasinizi giriniz");
const name1 = prompt("adinizi giriniz");
const age = Number(prompt("yasinizi giriniz"));
console.log("yasiniz :" + age);
console.log(typeof age);

age >= 18
  ? console.log(`${name1} ehliyet alabilir `)
  : console.log(`${name1} ehliyet alamaz `);

const result =
  age >= 18 ? `${name1} ehliyet alabilir ` : `${name1} ehliyet alamaz `;
console.log(result);
