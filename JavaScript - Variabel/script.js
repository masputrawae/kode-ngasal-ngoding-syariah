// Ini Adalah Komentar, Akan Diabaikan "Tidak Dieksekusi"

// 1. Var

var namaPakaiVar = "John Pakai var";
console.log(namaPakaiVar);

namaPakaiVar = "John Pakai var -> Bisa Diubah";
console.log(namaPakaiVar);

// kelakukan dari var
var x = 10
{
	var x = 20
	console.log(x)
}
console.log(x)

// Output
// 20
// 20

// 2. Let
let namaPakaiLet = "John Pakai let";
console.log(namaPakaiLet);

// kelakukan dari let
let y = 10
{
	let y = 20
	console.log(y)
}
console.log(y)

// Output
// 20
// 10

namaPakaiLet = "John Pakai let -> Juga Bisa Diubah";
console.log(namaPakaiLet)

// 3. Const
const namaPakaiConst = "John Pakai const !Tidak Bisa Dirubah"
console.log(namaPakaiConst)

// namaPakaiConst = "John Pakai const -> Tidak Bisa Diubah"
// console.log(namaPakaiConst) Error: Assignment to constant variable.

// 4. Kasus khusus tanpa keyword akan jadi var
z = 10; // Ini otomatis jadi global variable (seolah var z = 10 di global scope)
{
	z = 20;
}
console.log(z);