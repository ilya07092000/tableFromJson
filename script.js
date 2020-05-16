let usersTable = document.querySelector('table');

async function init() {
	let res = await fetch('http://my-json-server.typicode.com/ilya07092000/demo/users')
	let dbCheck = document.querySelector('.db__container');
	if (res.ok) {
		peoples = await res.json()
		dbCheck.classList.add('active__db')
		dbCheck.innerHTML = '<p>DB is active</p>'
		createTable(peoples)
	} else {
		dbCheck.classList.add('inactive__db')
		dbCheck.innerHTML = '<p>DB is inactive</p>'
		peoples = localPeoples
		createTable(localPeoples)
	}

	let input = document.querySelector('#text');
	input.addEventListener('keyup', sortDueToValue);
	// Сортировка таблицы по значению из INPUT
	function sortDueToValue() {
		let text = input.value;
		text = text.toLowerCase()
		let newPeoplesarr = [];
		let arrFromObj = '';
		let current = '';
		for (let i = 0; i < peoples.length; i++) {
			arrFromObj = Object.entries(peoples[i]).map(([key, value]) => [key, value])
			let currentItem = [];
			arrFromObj.forEach((item, index) => {
				current = item[1].toString().toLowerCase()
				currentItem.push(current)
			})
			currentItem = currentItem.join(',');
			if (currentItem.includes(text)) {
				newPeoplesarr.push(peoples[i])
				removeTable()
				createTable(newPeoplesarr)
			}
			else if (text == '') {
				removeTable()
				createTable(peoples)
			}
		}
	}
}
init()

function createTable(p) {
	p.forEach(person => {
		let tr = document.createElement('tr');
		tr.classList.add('newColumns')
		tr.innerHTML = `
        <td>${person.firstname}</td>
        <td>${person.lastname}</td>
        <td>${person.phonenumber}</td>
        <td>${person.email}</td>
        <td>${person.birthday_contact}</td>
        <td>${person.company}</td>
        `
		usersTable.append(tr);
	})
}

// Сортировка от меньшего к большему по дате рождения
function sortMore() {
	peoples.sort((a, b) => a.birthday_contact > b.birthday_contact ? 1 : -1);
	removeTable()
	createTable(peoples)
}
// Сортировка от большего к меньшему по дате рождения
function sortLess() {
	peoples.sort((a, b) => a.birthday_contact > b.birthday_contact ? -1 : 1);
	removeTable()
	createTable(peoples)
}

function removeTable() {
	let tableCols = document.querySelectorAll('.newColumns');
	for (let i = 0; i < tableCols.length; i++) {
		tableCols[i].remove()
	}
}

document.querySelector('.up__arrow').addEventListener('click', sortMore);
document.querySelector('.down__arrow').addEventListener('click', sortLess);

let localPeoples = [
	{
		"firstname": "Виктор",
		"lastname": "Петров",
		"email": "vitya@test.com",
		"phonenumber": "456456",
		"birthday_contact": "1981-03-03",
		"company": "Company 1"
	},
	{
		"firstname": "Вася",
		"lastname": "Пупкин",
		"email": "vasya@test.com",
		"phonenumber": "2345254",
		"birthday_contact": "2004-10-20",
		"company": "Company 2"
	},
	{
		"firstname": "Дима",
		"lastname": "Коршунов",
		"email": "dima@test.com",
		"phonenumber": "456747",
		"birthday_contact": "1991-07-16",
		"company": "Company 3"
	},
	{
		"firstname": "Сан",
		"lastname": "Саныч",
		"email": "sanya@test.com",
		"phonenumber": "143545578",
		"birthday_contact": "1998-07-03",
		"company": "Company 4"
	},
	{
		"firstname": "Никодим",
		"lastname": "Ярославович",
		"email": "nikodim@test.com",
		"phonenumber": "786989768",
		"birthday_contact": "2000-07-03",
		"company": "Company 4"
	},
	{
		"firstname": "Ленар",
		"lastname": "Васильевич",
		"email": "lenar@test.com",
		"phonenumber": "456346312",
		"birthday_contact": "2000-08-03",
		"company": "Company 4"
	},
	{
		"firstname": "Закир",
		"lastname": "Данилович",
		"email": "zakir@test.com",
		"phonenumber": "423434245",
		"birthday_contact": "2000-09-09",
		"company": "Company 4"
	},
	{
		"firstname": "Платон",
		"lastname": "Викторович",
		"email": "platon@test.com",
		"phonenumber": "4654676547",
		"birthday_contact": "2000-21-04",
		"company": "Company 4"
	},
	{
		"firstname": "Остап",
		"lastname": "Ярославович",
		"email": "ostap@test.com",
		"phonenumber": "342535",
		"birthday_contact": "1872-11-04",
		"company": "Company 4"
	},
	{
		"firstname": "Данил",
		"lastname": "Мамонов",
		"email": "danil@test.com",
		"phonenumber": "214414",
		"birthday_contact": "1867-11-04",
		"company": "Company 1"
	},
	{
		"firstname": "Владислав",
		"lastname": "Черный",
		"email": "vladislas-Black@test.com",
		"phonenumber": "67868",
		"birthday_contact": "1998-12-12",
		"company": "Company 1"
	},
	{
		"firstname": "Льюис",
		"lastname": "Дэ́видсон  ",
		"email": "luis-devidson@test.com",
		"phonenumber": "32424123",
		"birthday_contact": "2000-07-04",
		"company": "Company 1"
	},
	{
		"firstname": "Александр",
		"lastname": "Фомин",
		"email": "aleksFomin@test.com",
		"phonenumber": "23424",
		"birthday_contact": "1992-05-04",
		"company": "Company 1"
	}
]






