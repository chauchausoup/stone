
    function checkUsersValid(goodUsers) {
       
        return function allUsersValid(submittedUsers) {
     

          // SOLUTION GOES HERE
          

          return submittedUsers.every(userP=>goodUsers.some(userC=>userP.id===userC.id))
  


        };
      }
      
      module.exports = checkUsersValid


      //array some
      //array every
