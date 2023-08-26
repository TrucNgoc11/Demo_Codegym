let a = promt("Nhap so lon nhat trong khoan muon du doan")
let b = promt("Nhap so ma ban muon doan")
let x = Math.random() * a
let count = 2
if (b == x) {
    alert("Chuc mung ban da doan dung")
} else if (b < x){
    alert("So cua ban be hon, hay thu lai." + " Ban con " + count + " luot doan")
} else {
    alert("So cua ban lon hon, hay thu lai." + " Ban con " + count + " luot doan")
}
