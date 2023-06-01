const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];

  /**
   * Even if objects have properties of different data types,
   *  the sort() method can be used to sort the array.
    The solution is to write a compare function to compare the property values:
   */

    const sorted=(a,b)=>(a.year-b.year)
    console.log(cars.sort(sorted));