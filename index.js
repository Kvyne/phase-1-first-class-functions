//takes a callback function as an argument
function receivesAFunction(callback){
// call the callback function
    callback()
}

function returnsANamedFunction(){
//return a named function
    return function nameFunction(){
        
    }
}
function returnsAnAnonymousFunction(){
//return an anonymous function
    return function(){

    }
}