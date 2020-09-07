var goodUsers=[
    {id:1},
    {id:2},
    {id:3}
]

var submittedUser1=[
    {id:1},
    {id:3}
]

var submittedUser2=[
    {id:4},
    {id:0}
]

function checkUserValidity(goodUsers){
    return function allUsersValid(submittedUser){
        // use every and some
        //object to array conversion
        submittedUser= submittedUser.map(e=>e.id);
        goodUsers= goodUsers.map(e=>e.id);

        console.log(submittedUser)
        console.log(goodUsers)

        
        const checkAll = userP=>goodUsers.includes(userP)
        return submittedUser.every(checkAll)


    }
}

var testAllValid = checkUserValidity(goodUsers)

console.log(testAllValid(submittedUser2));
