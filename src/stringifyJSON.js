// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var arr = [];

  if(obj === null){
  	return 'null' ;
  }
  if (typeof obj === "string"){
    return '"'+ obj + '"';
  }
  if (typeof obj === 'number'){
  	return '' + obj;
  }
  if (typeof obj === 'boolean'){
    return "" + obj;
  }
  if (Array.isArray(obj)){
    for (var i = 0; i < obj.length; i++){
      arr.push(stringifyJSON(obj[i]));
    }
    return '[' + arr + ']';
  }
  if (typeof obj === 'object'){
    var arr2 = [];
    if(Object.keys(obj).length === 0){
      return '{}';
    }
    for (var key in obj){
    	if (obj[key] === undefined){
    		return '{}';
    	}
      arr2.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    return '{' + arr2 + '}';
  }
};