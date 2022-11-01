let me = {
  firstname: "Sebastian",
  age: 43,
  isMarried: true,
};

let wife = {
  firstnam: "Hanna",
  age: 42,
  isMarried: true,
};

let family = [me, wife];

let ul = document.getElementById("theList");

for (let i = 0; i < family.length; i++) {
  ul.innerHTML += "<li>" + family[i].firstname + "</li>";
}

class Person {
  constructor(firstname, age, isMarried) {
    this.firstname = firstname;
    this.age = age;
    this.isMarried = isMarried;
  }
}

let somePerson = new Person("Sebastian", 43, true);
//somePerson.firstname = "Sebastian";
// somePerson.age = 43;
// somePerson.isMarried = true;

let someOtherPerson = new Person("Hanna", 42, true);
//someOtherPerson.firstname = "Hanna";
// someOtherPerson.age = 42;
// someOtherPerson.isMarried = true;

console.log(me);
console.log(somePerson);

let secondFamily = [somePerson, someOtherPerson];
console.log(secondFamily);

let personsContainer = document.getElementById("persons");
for (let i = 0; i < secondFamily.length; i++) {
  //   personsContainer.innerHTML += secondFamily[i]; -> [object Object]

  let container = document.createElement("div"); // <div></div>
  let heading = document.createElement("h3"); // <h3></h3>
  let pTag = document.createElement("p"); // <p></p>
  let span = document.createElement("span"); // <span></span>

  container.className = "person";

  heading.className = "person__name";
  heading.innerHTML = secondFamily[i].firstname; // <h3 class="person__name">Sebastian</h3>

  pTag.className = "person__age";
  pTag.innerHTML = secondFamily[i].age; // <p class="person__age">43</p>

  span.className = "person__ismarried";
  span.innerHTML = secondFamily[i].isMarried; // <span class="person__ismarried"></span>

  container.appendChild(heading);
  container.appendChild(pTag);
  container.appendChild(span);

  personsContainer.appendChild(container);
}
