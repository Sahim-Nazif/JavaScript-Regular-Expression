const form=document.querySelector('.LoginForm')
const username=document.querySelector('#username')
const displayName=document.querySelector('p')

const pattern= /^[a-zA-Z0-9]{6,12}$/

form.addEventListener('submit', (e)=>{

    e.preventDefault();
    const UserName=form.username.value
    if (UserName.match(pattern)) {
        displayName.textContent='User name is valid'
    } else {
        displayName.textContent='User Name must be between 6-12 characters long'
    }
   // displayName.innerText=form.username.value 

})