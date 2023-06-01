function mostRepetitiveCh(str){
    const words=str.split("").reduce((acc,curr)=>{
     if(acc[curr]){
     acc[curr]=++acc[curr]
     }
     else{
     acc[curr]=1
     }
     return acc;
    },{})
   
    return words;
   
   }
   console.log(mostRepetitiveCh("The cleaver fox jumps over the lazy dog")); 
   console.log(mostRepetitiveCh("You only live once"));