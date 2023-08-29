import { useState } from "react";
import {Button, Form,Container  } from "react-bootstrap";
import styles from "./login.module.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { PiHamburgerBold} from "react-icons/pi";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const navigate = useNavigate()

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/login", {
        email: email,
        password: password,
      });
      const token = response.data.accessToken; 
      localStorage.setItem("jwtToken", token);
      

      if(response.data.user.role === 'admin'){
        navigate("/admin")
      }else if(response.data.user.role === 'waiter'){
        navigate("/waiter")
      }else if(response.data.user.role === 'chef'){
        navigate("/chef")
      }

      console.log("Inicio de sesión exitoso");
    } catch (error) {
      setAuthError("Error al iniciar sesión.");
    }
  };

  return (
    <Container className={styles.formMain}>
      <Container className={styles.icon}>
        <PiHamburgerBold></PiHamburgerBold>
      </Container>
      <Container className={styles.containerForm}>
      <Form id={styles.formLogIn} onSubmit={handleClick}>
        <Container>
          <h1>Bienvenidos</h1>
          <h3>Iniciar sesión</h3>
        </Container>
        <Form.Group className={styles.formGroup} controlId="formBasicEmail">
          <Form.Label className={styles.formItems}>Correo</Form.Label>
          <Form.Control
            className={styles.formControl}
            type="email"
            placeholder="Ingresar correo"
            value={email}
            onChange={handleEmail}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className={styles.formGroup} controlId="formBasicPassword">
          <Form.Label className={styles.formItems}>Contraseña</Form.Label>
          <Form.Control
            className={styles.formControl}
            type="password"
            placeholder="Ingresar contraseña"
            value={password}
            onChange={handlePassword}
          />
        </Form.Group>
        {authError && <p className="text-danger">{authError}</p>}
        <Button variant="primary" type="submit" className={styles.buttonLogIn}>
          Ingresar
        </Button>
      </Form>
      </Container>      
    </Container>
  );
};

export default Login;
