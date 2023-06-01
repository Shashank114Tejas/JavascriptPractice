const obj = {
    _name:"tejas"
}

console.log(obj._name);

/**Technically, external code is able to access the name directly by using user._name. 
 * But there is a widely known convention that properties starting with an underscore "_" are internal 
 * and should not be touched from outside the object. */

const getset = {
    

    get getname() {
        return "tejas";
    },  
}

console.log(getset.getname);
getset.getname = "pete"
console.log(getset.getname);



//using closure we can also make properties only readable.
function createReadOnlyObj() {
    const name = "shashank"
    function getname() {
        return name;
    }
    return getname;
}

let x = createReadOnlyObj();

console.log(x());

//All of these approaches ensure that the property cannot be modified once it is set, making it effectively read-only.