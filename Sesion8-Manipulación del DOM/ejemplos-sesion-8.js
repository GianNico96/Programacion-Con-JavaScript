//Ejemplo 1: Eventos en nodos del DOM

// var title = document.getElementById('title');

// var redButton = document.getElementById('red');
// var blueButton = document.getElementById('blue');
// var blackButton = document.getElementById('black');

// redButton.addEventListener("click", function() {
//     title.style = "color: red;";
// });

// blueButton.addEventListener("click",function(){
//     title.style = "color: blue;"
// });

// blackButton.addEventListener("click", function(){
//     title.style = "color: black;"
// });

//Ejemplo 2: 

// var title = document.getElementById('title');

// var input = document.getElementById('text');

// input.addEventListener("input", function(event) {
//     title.textContent = event.target.value;
// });

//Ejemplo 3

// window.addEventListener("keydown", function(event) {
//     if (event.key == "Enter") {
//       document.body.style.background = "lightblue";
//     }
  
//     if (event.key == "Enter" && event.ctrlKey) {
//       document.body.style.background = "orange";
//     }
//   });

//   window.addEventListener("keyup", function(event) {
//     if (event.key == "Enter") {
//       document.body.style.background = "";
//     }
//   });


//Reto 1

// var ballon = document.querySelector("p");
// var size;

// function Size(newSize) {
//   size = newSize;
//   ballon.style.fontSize = size + "px";
// }

// Size(20);

// function moveArrow(event) {
//   if (event.key == "ArrowUp") {
//     if (size > 80) {
//       ballon.textContent = "💥";
//       document.body.removeEventListener("keydown", moveArrow);
//     } else {
//       Size(size * 1.1);
//       event.preventDefault();
//     }
//   } else if (event.key == "ArrowDown") {
//     Size(size * 0.9);
//     event.preventDefault();
//   }
// }

// document.body.addEventListener("keydown", moveArrow);


//Reto 2

// var modal = document.getElementById("modal");

// var imag = document.getElementById("modal-image");


// document.getElementsByTagName('button')[0].addEventListener('click', function() {
//     modal.style.display = "block";
//     imag.src = 'https://picsum.photos/300/200';
// })
  
// document.getElementsByClassName("close")[0].addEventListener('click', function() {
//     modal.style.display = "none";
// })

//Reto 3

function createTabs(node) {

    var tabs = Array.from(node.children).map(function(node) {
    var button = document.createElement("button");
    button.textContent = node.getAttribute("data-tabname");
  
    var tab = {
        node: node,
        button: button
    };
  
    button.addEventListener("click", function() {
        return selectTab(tab)
    });
      return tab;
    });
  
    var tabList = document.createElement("div");
  
    for (var i = 0; i < tabs.length; i++) {
      tabList.appendChild(tabs[i].button);
    }
  
    node.insertBefore(tabList, node.firstChild);
  
    function selectTab(selectedTab) {
      for (var i = 0; i < tabs.length; i++) {
        var selected = tabs[i] == selectedTab;
        tabs[i].node.style.display = selected ? "" : "none";
        tabs[i].button.style.color = selected ? "red" : "";
      }
    }
  
    selectTab(tabs[0]);
  }
  
  createTabs(document.querySelector("#tab-panel"));