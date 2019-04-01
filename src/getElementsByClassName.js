// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var array  = [];
  // var body = document.body;
  var includesClass = function(elem){
    if (elem.classList && elem.classList.contains(className)){
      array.push(elem);
    }
    if (elem.hasChildNodes()){
      for (var i = 0; i < elem.childNodes.length; i++){
        includesClass(elem.childNodes[i]);
      }
    }
}
    includesClass(document.body);
    return array;
  };
