// document.addEventListener("DOMContentLoaded", function () {
//    here()
// });

// function here() {
//     document.getElementsById( "text" )
//    .innerHTML = "This is really cool!";
// }

document.addEventListener( "DOMContentLoaded", function () {
    updateDOM()
  } );
  
  
  function updateDOM() {
    document.getElementById( "text" )
      .innerHTML = "This is really cool!";
  }