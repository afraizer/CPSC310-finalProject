function checkboxCheck() {
  var checkbox = document.getElementById(shipBox);
  console.log(checkbox);
  var vis = "none";
  if (checkbox.checked) {
    vis = "block";
  }
  document.getElementById("shippingAddress").style.display = vis;
}

function startFunction() {

  console.log("in the function");


  //document.getElementById("resturantName1").innerHTML =
  //console.log(document.getElementById("resturantName").value);

  console.log(document.getElementById("resturantName"));

//  var resturantName = document.write(document.getElementById("resturantName")).value;
//  var rating = document.write(document.getElementById("rating")).value;
//  var description = document.write(document.getElementById("description")).value;

//  document.getElementById("resturantName1").innerHTML = resturantName;
}

function openForm() {
  document.getElementById("reviewForm").style.display = "block";
}

function closeForm() {
  document.getElementById("reviewForm").style.display = "none";
}
