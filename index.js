function receivesAFunction(callback){
   return callback();
}

function returnsANamedFunction(){
   function functionToReturn(){};
   let toReturn;
   toReturn = functionToReturn;
  return toReturn;
}

function returnsAnAnonymousFunction(){

return function(){};
 
}