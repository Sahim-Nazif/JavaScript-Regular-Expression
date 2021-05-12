const form=document.querySelector('.LoginForm')
const username=document.querySelector('#username')
const displayName=document.querySelector('p')

const pattern= /^[a-zA-Z0-9]{6,12}$/
form.addEventListener('submit', (e)=>{

    e.preventDefault();
    //console.log(username.value)
    // or we can use
    const UserName=form.username.value
    if (UserName.match(pattern)) {
        console.log('passed') 
    } else {
        console.log('failed')
    }


    displayName.innerText=form.username.value
    

})