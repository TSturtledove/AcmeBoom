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
  request2.addEventListener("load", function() {
    var list = JSON.parse(request2.responseText).Types
    resolve(list)
  })
  request2.open("GET", "Types.json")
  request2.send()
})


var engage03 = new Promise(function(resolve, reject){
  var request3 = new XMLHttpRequest()
  request3.addEventListener("load", function() {
    var list = JSON.parse(request3.responseText).details
    resolve(list)
  })
  request3.open("GET", "details.json")
  request3.send()
})



Promise.all([engage01, engage02, engage03])
  .then(function(values) {
    categories = values[0]
    types = values[1]
    details = values[2]
    populate()
  })


function populate() {
  console.log(details)
  for (var prop in details[0]) {
  if( details[0].hasOwnProperty( prop ) ) {
    console.log("obj." + prop + " = " + details[0][prop].name);
  }
}
  // $("#printHere").html(`<div class=""><h4>${details[0].great_basin_sagebrush.name}`)
}
