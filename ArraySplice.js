/**The splice() method changes the contents of an array by removing or
 *  replacing existing elements and/or adding new elements in place. */


 //returns-removed elements
 const arr=['carrot','peas','potato','brinjal','capsicum']

 console.log(arr.splice(2,3,"tomato"));//[ 'potato', 'brinjal', 'capsicum' ]
 console.log(arr);//[ 'carrot', 'peas', 'tomato' ]