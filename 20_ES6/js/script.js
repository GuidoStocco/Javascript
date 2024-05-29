// Filter
// método de array para filtrar dados baseados em alguma condição que estabelecemos

const arr = [1,2,3,4,5];

const highArr = arr.filter((n) => {
    if(n >= 3){
        return n;
    }
});

console.log(highArr);
//

const users = [
    {nome:"guido", avalible:true},
    {nome:"pedro", avalible:false},
    {nome:"joao", avalible:false},
    {nome:"ravena", avalible:true},
];

const usersAvalible = users.filter((user) =>{
    return user.avalible;
});
//negação false usando !
const notUsersAvalible = users.filter((user) =>{
    return !user.avalible;
});


console.log(usersAvalible)
console.log(notUsersAvalible)

