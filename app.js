// forEach, Map, Filter 12.1.1

function doubleValues(arr){
let newArr=[];
arr.forEach(function(val){
newArr.push( val*2);
return newArr;}
)
console.log(newArr);
}

function onlyEvenValues(arr){
    let newArr=[];
arr.forEach( function(val) {
    if (val % 2 === 0) {
        newArr.push(val)
    };
    return newArr;
}
)
console.log(newArr);
}

function showFirstAndLast(arr){
    let newArr = [];
    arr.forEach(function(val){
        newArr.push(val[0] + val[val.length-1]);
    return newArr;
    })
    console.log(newArr);
}

function vowelCount(str){
    let newArr=str.split("");
    let obj={};
    newArr.forEach(function(char){
    if (char== 'a'){
        obj.a =0;
        obj.a++;
    } else if (char==='e'){
        obj.e=0;
        obj.e++;
    }
    else if (char== 'i'){
        obj.i =0;
        obj.i++;
    } else if (char=== 'o'){
        obj.o=0;
        obj.o++;
    }
    else if  (char ==='u'){
        obj.u=0;
        obj.u++;
    } }
) 
return obj; 
}

function doubleValuesWithMap(arr){
     return arr.map(function(value){
    return value*2;
  });
}

function valTimesIndex(arr){
    return arr.map(function(val,ind){
        return val*ind;
    })
}

function extractKey(arr, key){
    return arr.map(function(val) {
        return val[key];
      });
}

function extractFullName(arr) {
    return arr.map(function(val) {
      return val.first + " " + val.last;
    });
  }

  function filterByValue(arr,key){
  return arr.filter( function(val){
    return val[key]; 
}) 
  }

  function find(arr, searchValue) {
    return arr.filter(function(val) {
      return val === searchValue;
    })[0];
  }
  
  function findInObj(arr, key, searchValue) {
    return arr.filter(function(val) {
      return val[key] === searchValue;
    })[0];
  }
  
  function removeVowels(str) {
    const vowels = "aeiou";
    return str
      .toLowerCase()
      .split("")
      .filter(function(val) {
        return vowels.indexOf(val) === -1;
      })
      .join("");
  }
  
  function doubleOddNumbers(arr) {
    return arr
      .filter(function(val) {
        return val % 2 !== 0;
      })
      .map(function(val) {
        return val * 2;
      });
    }