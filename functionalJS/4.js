
    function getShortMessages(messages) {
        // SOLUTION GOES HERE

        //messages is an array of objects


          return messages.filter(value=> value.message.length<50 ).map(e=>e.message)

          
      }
      
      module.exports = getShortMessages


  