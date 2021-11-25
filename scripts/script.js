function test () {

let imya = prompt('Add your name')
document.getElementById('imya').textContent = "Имя: " + imya


let familiya = prompt('Add your surname')
document.getElementById('familiya').textContent = "Фамилия: " + familiya

let vozrast = prompt('Add your age')
document.getElementById('vozrast').textContent = "Возраст: " + vozrast

let birthday = prompt('Add your dirthday date')
document.getElementById('birthday').textContent = "Дата рождения: " + birthday

let specialty = prompt('Add your specialty')
document.getElementById('specialty').textContent = "Моя специальность: " + specialty

let about = prompt('Add something about yourself')
document.getElementById('about').textContent = "О себе: " + about

}
alert("Hello World")

// function test(name, age) {
//     alert("Hi, my name is " + name + ". I'm " + age + " y.o.")
//     console.log("Function is done")
// }