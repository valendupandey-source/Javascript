var choice = prompt("Welcome to Perrimeter Calculator. \n Please Enter your Choice. \n1.Perrimeter of Square. \n2.Perrimeter of Triangle. \n3.Perrimeter (Circumference) of Circle. \n4.Perrimeter of Kite");

if (choice == "1") {
    var s = prompt("Enter the square's side")
    var result = s * 4
    alert("The perrimeter is" + result)
}

if (choice = "2") {
    var s = prompt("Enter triangle's side")
    var result = s * 3
    alert("The perrimeter is" + result)
}

if (choice = "3") {
    var r = prompt("Enter circle's radius")
    var π = 3.14159265359
    var result = 2 * π * r
    alert("The perrimeter (circumference) is" + result)
}

if (choice = "4") {
    var a = prompt("Enter kite's one side")
    var b = prompt("Enter kite's another side")
    var result = 2 * a + 2 * b
    alert("The perrimeter is" + result)
}
