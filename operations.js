var categories
var types
var details

var engage01 = new Promise(function(resolve, reject){
  var request1 = new XMLHttpRequest()
  request1.addEventListener("load", function() {
    var list = JSON.parse(request1.responseText).categories
    resolve(list)
  })
  request1.open("GET", "categories.json")
  request1.send()
})



var engage02 = new Promise(function(resolve, reject){
  var request2 = new XMLHttpRequest()
  request1.addEventListener("load", function() {
    var list = JSON.parse(request2.responseText).Types
    resolve(list)
  })
  request1.open("GET", "Types.json")
  request1.send()
})


var engage03 = new Promise(function(resolve, reject){
  var request3 = new XMLHttpRequest()
  request1.addEventListener("load", function() {
    var list = JSON.parse(request3.responseText).details
    resolve(list)
  })
  request1.open("GET", "details.json")
  request1.send()
})





var promise1 = new Promise(function(resolve, reject){
  var request1 = new XMLHttpRequest()
  request1.addEventListener("load", function() {
    var list = JSON.parse(request1.responseText).suspects
    resolve(list)// pass the info we're waiting for to the resolve
  })
  request1.open("GET", "suspects.json")
  request1.send()
})

console.log("typeof promise1", typeof promise1)

/////////////////////////////////////////////////////
///Single Promise////////////////////////////////////

promise1
  .then(
  function(val){
    suspects = val
    console.log("promise one resolved, ", suspects)
    return promise2
  })
  .then(
    function(val) {
      weapons = val
      console.log("promise two resolved, ", weapons)
      return promise3
    })
  .then(
    function(val) {
      rooms = val
      console.log("promise three resolved, ", rooms)
    })
  .then(findGuess)
  .then(function(){
    console.log("you can chain 'thens' ")
  })

var promise2 = new Promise(function(resolve, reject){
  var request2 = new XMLHttpRequest()
  request2.addEventListener("load", function() {
    var list = JSON.parse(request2.responseText).weapons
    resolve(list)
  })
  request2.open("GET", "weapons.json")
  request2.send()
})

var promise3 = new Promise(function(resolve, reject){
  var request3 = new XMLHttpRequest()
  request3.addEventListener("load", function() {
    var list = JSON.parse(request3.responseText).rooms
    resolve(list)
  })
  request3.open("GET", "rooms.json")
  request3.send()
})


/////////////////////////////////////////////////////
///All the Promises////////////////////////////////////

// Promise.all([promise1, promise2, promise3])
//   .then(function(values) {
//     suspects = values[0]
//     weapons = values[1]
//     rooms = values[2]
//     findGuess()
//   })

function findGuess(){
  var suspectGuess = suspects[returnRandom(0, 5)].name
  var weaponGuess = weapons[returnRandom(0, 5)].name
  var roomGuess = rooms[returnRandom(0, 6)].name
  console.log(`It was ${suspectGuess} in the ${roomGuess}, with the ${weaponGuess}`)
}
