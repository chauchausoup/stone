function countWords(inputWords) {
    // SOLUTION GOES HERE
    //we need to use REDUCE
    var mapper=inputWords.reduce((ob,currentValue)=>{
      if(currentValue in ob){
        ob[currentValue]++;
      }else{
        ob[currentValue]=1;
      }
      return ob;
    },{});

    return mapper;

  }
  
  module.exports = countWords;

