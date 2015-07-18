
var arrayWithElements = new Array();

function clickListener(x) {
  var clickedElement;
    //var tags = document.getElementById(id);

  if(x === null) {
    clickedElement = event.srcElement;
  } else {
    clickedElement = x.target.id;
  }

  arrayWithElements.push(clickedElement);

    //alert(arrayWithElements);

  var clickID = [];
  var idCounter = [];

  function organizeArray(arr){
    var prev = null;

    arr.sort();
      for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prev ) {
          clickID.push(arr[i]);
          idCounter.push(1);

        } else {
          idCounter[idCounter.length - 1]++;
        }

        prev = arr[i];
    }

    return [clickID, idCounter];
  }

  organizeArray(arrayWithElements);
  alert(clickID + " - " + idCounter);
}

document.onclick = clickListener

