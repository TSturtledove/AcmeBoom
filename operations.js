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
  // console.log(details)
  for(var t=0; t<details.length; t++){
    for (var prop in details[t]) {
      if( details[t].hasOwnProperty( prop ) ) {
        var info = details[t][prop]
        //This line shows only shrubs
        if(info.type_id === 0 || info.type_id === 1 || info.type_id === 2){
          //finds the correct Type
          var kind = info.type_id
          //finds the correct category
          var catNum = types[kind].category_id
          var list
          list += `<div class="standDiv"><h4>${categories[catNum].name} ${types[kind].name}</h4>
                                <h3>${info.name}</h3>
                                <p>${info.description}</p>
                                </div>`
          $("#printHere").html(list)

          // $("#printHere").html(`<div class=""><h4>${categories[catNum].name} ${types[kind].name}</h4>
          //                       <h3>${info.name}</h3>
          //                       <p>${info.description}</p>
          //                       </div>`)
          console.log("does this work " + prop + " = " + info.name + "and it's also a " + types[kind].name + "in the " + categories[catNum].name + " category" );
          console.log(info.type_id);
        }
      }
    }
  // $("#printHere").html(`<div class=""><h4>${details[0].great_basin_sagebrush.name}`)
  }
}
