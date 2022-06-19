// GENERAL STUFF 
const errorMsg = document.querySelector('.errormsg')
const form = document.querySelector('form')
const imgError = document.querySelectorAll('img')
      imgError.forEach(element => {
            element.style.visibility ="hidden"
      });

 // FIRSTNAME 
const firstName = document.getElementById('firstname')
const error1Img = document.querySelector('.error1img')
const firstNameError = document.getElementById('firstnameerror')

// LASTNAME
const lastName = document.getElementById('lastname')
const error2Img = document.querySelector('.error2img')
const lastNameError = document.getElementById('lastnameerror')
const inputWidth = document.querySelectorAll('.input--width')

// EMAIL ADDRESS
const mail = document.getElementById('mail')
const placeHolderMail = document.getElementById('mail::placeholder')
const error3Img = document.querySelector('.error3img')
const mailError = document.getElementById('emailerror')
const regexMail = new RegExp(/^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/)

// PASSWORD 
const password = document.getElementById('password')
const error4Img = document.querySelector('.error4img')
const passwordError = document.getElementById('passworderror')



form.addEventListener('submit',(e) => {
     e.preventDefault()
  


       if(firstName.value === "") {
             firstNameError.textContent = "First Name cannot be empty"
             error1Img.style.visibility = "visible"
       }   

       else {
         firstNameError.textContent = ""
         error1Img.style.visibility = "hidden"
       }

      
       if(lastName.value === "") {
         lastNameError.textContent = "Last Name cannot be empty"
         error2Img.style.visibility = "visible"
      }

      else {
          lastNameError.textContent = ""
          error2Img.style.visibility = "hidden"
        }


        if(mail.value === "" || !regexMail.test(mail.value)) {
            mailError.textContent = "Looks like this is not an email"
            error3Img.style.visibility = "visible"
            mail.classList.add('placeholdercolor')
            mail.placeholder = "email@example/com"
            
         }


   
         else {
            mail.classList.remove('placeholdercolor')
             mailError.textContent = ""
             error3Img.style.visibility = "hidden"
           }
          
           if(password.value === "") {
            passwordError.textContent = "Password cannot be empty"
            error4Img.style.visibility = "visible"
           }

           else {
            passwordError.textContent = ""
            error4Img.style.visibility = "hidden"
           }
       

})