// import react from 'react';
import './login.css';

//Fotos
import google from '../../assets/google.png';
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import { useState } from 'react';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        if(email === "diego@adapa.mx" && password === "12345"){
            alert('hola');
            console.log('Inicio de sesion correcto');
        }else{
            alert('Has hecho clic');
            console.log('El usuario o la contraseña es incorrecto');
        }
        event.preventDefault();
    }

    return (
        <section class="container">
            <section class="login-container">
                <h2>Login</h2>
                <form class="login-form" onSubmit={handleSubmit}>
                    <label class = "label">Username</label>
                    <input 
                        class = "input" 
                        placeholder ="Correo" 
                        type="email"
                        value = {email}
                        onChange = {(e) => setEmail(e.target.value)}
                    />
                    <label class = "label">Password</label>
                    <input 
                        class = "input" 
                        placeholder = "Contraseña" 
                        type="password"
                        value = {password}
                        onChange = {(p) => setPassword(p.target.value)}
                    />
                    <div class="login-pass">
                        <a href="./">Forgot your password?</a>
                    </div>
                    <button 
                        class ="button"
                        type = "submit"
                        disabled={!validateForm()}
                    >Iniciar Sesión</button>
                </form>
                <div class = "login-social-title"><p>Or sign Up Using</p></div>
                <section class = "login-social">
                    <div><img class ="login-img"src={facebook} alt="twitter"/></div>
                    <div><img class ="login-img" src={google} alt="google"/></div>
                    <div><img class ="login-img"src={twitter} alt="twitter"/></div>
                </section>
            </section>
        </section>
    );
}

export default Login;
