//destructure yeahhh here we go




var json = {  
    "name": {  
      "first": "Yosuke",  
      "family": process.argv[2]  
    },  
    "birth": {  
      "year": 1982,  
      "month": 12,  
      "day": process.argv[3]  
    }  
  };  
    
  // Your code here.
  
  var {name,birth}=json;
  console.log(name.family);
  console.log(birth.day);


  /* console.log(familyName);  
  console.log(birthDay); */


