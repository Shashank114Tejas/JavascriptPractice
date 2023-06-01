    /* forEach method */
    let myArray1 = [1, 2, 3, 4];
    myArray1.forEach((element, index) => {
        myArray1[index] = element * element;
    })
    console.log(myArray1);
      
    /* map method */
    let myArray2 = [1, 2, 3, 4];
    myArray2.map((element, index) => {
        myArray2[index] = element * element;
    })
    console.log(myArray2);