// for ( let i = 1; i < 6; i++){
//     console.log(`A szám ${i}`);
// }

// const nevek = ["Pisti", "Jani", "Csenge"];

// nevek.forEach((n) => {
//     console.log(n);
// });

// const szures = nevek.filter((n) => n.length > 4 && n.length < 10);

// console.log(szures);

// const kereses = nevek.find((n) => n.length > 4);

// console.log(kereses);

const szemelyek = [
    {nev: "Levente", kor: 25 },
    {nev: "Laci", kor: 16 },
];

const szures = szemelyek.filter((sz) => sz.kor  >= 18);

szures.forEach((sz) => {
    console.log(sz.nev);
});