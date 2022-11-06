console.log('ON works')

const formLogin= document.getElementById("form-login")
const formAuth= document.getElementById("form-auth")
const indicador= document.getElementById("indicador")

const loginJS = document.querySelector('#login')
const authJS = document.querySelector('#auth')


loginJS.onclick = () =>{
    formAuth.style.transform="translateX(300px)"
    formLogin.style.transform="translateX(300px)"
    indicador.style.transform="translateX(-50px)"
}

authJS.onclick = () =>{
    formAuth.style.transform="translateX(0px)"
    formLogin.style.transform="translateX(0px)"
    indicador.style.transform="translateX(50px)"
}