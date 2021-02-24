
let filterArray = [2,3,4,5,6,7,8,10]
const findObject = [
    {name: "Jay", age: 34}, 
    {name: "John", age: 20}, 
    {name: "Mary", age: 45}
  ]

let mapArray = [1,2,3,4]
let doubleArray = mapArray.map(function(number) {
    if (number < 2) {
        return number
    } else {
        return number * 2
    }
})
let z = mapArray.map(number => {
    if (number < 2) {
        return number
    } else {
        return number * 2
    }
})
console.log('Z', z)
console.log('DOUBLE ARRAY', doubleArray)
let filteredArray = filterArray.filter(function(number) {
    return number % 2 === 0
})
console.log('FILTER ARRAY', filteredArray)

let x = filterArray.filter(number => number % 2 === 0)
console.log('X', x)

let nameFinder = findObject.find(({name}) => name === 'Jay')
console.log('NAME FINDER', nameFinder)
let y = findObject.find(function({name}) {
    return name === 'Jay'
})
console.log('Y', y)

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const content = document.getElementById("content");
const btnSubmit = document.getElementById("btnSubmit");
const userContentButton = document.getElementById("showUserContent");
const userContentDiv = document.getElementById("userContent");

function removeElement(element) {
  element.parentElement.remove();
}

userContentButton.addEventListener("click", function () {
  // posts.map((post) => {
  //     let postContent = `
  //     <h3>Title: ${post.title}</h3>
  //     <ul>
  //         <li>Content: ${post.body}</li>
  //     </ul>
  //     `

  //     userContentDiv.insertAdjacentHTML('beforeend', postContent)
  // })
  for (let i = 0; i < posts.length; i++) {
    let post = posts[i];
    let postContent = `
         <h3>Title: ${post.title}</h3>
         <ul>
             <li>Content: ${post.body}</li>
         </ul>
         `;

    userContentDiv.insertAdjacentHTML("beforeend", postContent);
  }
});

btnSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  let fName = firstName.value;
  let lName = lastName.value;
  firstName.value = "";
  lastName.value = "";
  let nameMarkup = `<h3>
    Hello ${fName}, ${lName}.
    <button onClick={removeElement(this)}>Remove</button>
    </h3>`;
  content.insertAdjacentHTML("beforeend", nameMarkup);
  // let heading = document.createElement('h3')
  // heading.innerHTML = `Hello ${fName}, ${lName}.`
  // content.appendChild(heading)
});
