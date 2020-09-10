function countWords(inputWords) {
    // SOLUTION GOES HERE
    
     
      var mapper=inputWords.reduce((ob,currentValue)=>{
        if(currentValue in ob){
          ob[currentValue]++;
        }else{
          ob[currentValue]=1;
        }
        return ob;
      },{})

  return mapper;
  }
  
console.log(countWords(['apple','banana','box','cow','apple']));
//countWords(['apple','banana','box','cow','apple']);



