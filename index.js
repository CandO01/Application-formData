const button = document.getElementById('submit-btn')
const form = document.getElementById('formLogin')

//floating label and focused on
const wrappers = document.querySelectorAll('.input-wrapper')
wrappers.forEach(chain=>{
  const input = chain.querySelector('input')
  const label = chain.querySelector('label')
  
  input.addEventListener('focus', (e)=>{
    e.preventDefault();
      label.classList.add('active');
  })

  input.addEventListener('blur', (e)=>{
    e.preventDefault();
    if(input.value === ''){
      label.classList.remove('active');
    }
  })
})

//form submission to an api
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  postDataFunction();
  document.getElementById('name').value = ''
  document.getElementById('surname').value = ''
  document.getElementById('email').value = ''
  document.getElementById('password').value = ''

  form.style.display = 'none'

})

//posting to an api
const display = document.getElementById('post')

const postDataFunction = ()=>{
    const inputName = document.getElementById('name').value
    const inputSurname = document.getElementById('surname').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const file = document.getElementById('file').value

    const url = 'https://webhook.site/f1792ef4-fa02-495a-b747-2710c4581187'

    const userDataObj = {
      name: inputName,
      title: inputSurname,
      email: email,
      password: password,
      file: file
    }
fetch(url, {
  method: 'POST',
  body: JSON.stringify(userDataObj),
  headers: {
    "Content-Type": "application/json"
  }
})
  .then(response=>response.text())
  .then(()=> {
    display.innerHTML = `
                         <h3> User application successful!!! <span style='color: green;'>✔</span></h3>
                         <p>First name: ${userDataObj.name}</p>
                         <p>Surname: ${userDataObj.title}</p>
                         <p>Email Address: ${userDataObj.email}</p>
                         <p>Password: ${userDataObj.password}</p>
                         <a href=${userDataObj.file} target='_blank'>Click here${userDataObj.file}</a>
                        `
    display.style.cssText = `
                           display: block;
                           
                            `
  })

  //application success disappears after 3seconds
  setTimeout(()=>{
    display.style.cssText = `
                        display: none;
                        
                        `
  }, 3000)

  //application form appearing after submission
  setTimeout(()=>{
    form.style.display = 'grid'
  }, 3000)
}

//submission form will disapper after 3 seconds


