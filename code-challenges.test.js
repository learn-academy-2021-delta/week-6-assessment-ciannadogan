// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

var people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]

describe("function occupation", () => {
  it("takes in an array of objects and returns an array with a string about each person with each name capitalized", () => {
    expect(occupation(people)).toEqual(
      ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
    )
  })
})

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]


// b) Create the function that makes the test pass.

//create function called occupation that takes in an array 
//create an empty array
//iterate using .map() 
//split array
//reassign each name to itself capitalized
//return sentences


const occupation = (otherArray) => {
  return otherArray.map(object => {
    let namesArray = object.name.split(" ")
    let uppercaseName = namesArray.map(name => {
  return name[0].toUpperCase() + name.substring(1)
  })
    return uppercaseName.join(" ") + " is " + object.occupation + "."
  })
}

//Got green


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

describe("function divByThree", () => {
  it("takes in an array and return array of only remainders of numbers divided by three", () => {
    expect(divByThree(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(divByThree(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

//Got red


// b) Create the function that makes the test pass.

//create a function that takes in an array
//create an empty array
//iterate using for loop
//if type of array at index strictly equals number 
//logical operator AND whatsLeft push array at index divisible by 3
//return whatsLeft

const divByThree = (array) => {
  let whatsLeft = []
  for(let i = 0; i < array.length; i++){
    typeof array[i] === 'number' && whatsLeft.push(array[i]%3)
  }
  return whatsLeft
}

//Got green


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe("function cubePlusSum", () => {
  it("takes in an array of numbers and returns the sum of all numbers cubed", () => {
    expect(cubePlusSum(cubeAndSum1)).toEqual(99)
    expect(cubePlusSum(cubeAndSum2)).toEqual(1125)
  })
})

//Got red

// b) Create the function that makes the test pass.

//create function that takes in an array
//create sum variable
//iterate with for loop
//add each cubed variable to the sum variable

const cubePlusSum = (array) => {
   let sum = 0 
   for(let i = 0; i<array.length; i++){
    sum += array[i]**3
  }
    return sum
}

//Got green
