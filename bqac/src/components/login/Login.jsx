import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import styles from "./login.module.css";
import { useState } from "react";
import axios from "axios";
import apiConfig from "../../api/http";
// import { Redirect } from 'react-router-dom'; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${apiConfig.baseUrl}login`, {
        email: email,
        password: password,
      });
      if(response.data.user.role==='admin'){
        console.log('entrada admin')
        // return <Redirect to="/admin" />;
      } else {
        console.log('no entro')
      }
      // const token = response.data.accessToken;
      // console.log("Inicio de sesión exitoso");
      // console.log(response.data)
      // localStorage.setItem("jwtToken", token);
      // if(response.data.user.role==='admin'){
        
      //   console.log(response.data)
      //   return redirect("/admin")
      // }

      

      //       console.log(response, "se ingreso correctamente")
      //         const dataAccessToken = response.data.accessToken;
      //         // sessionStorage.setItem("email",email)
      //         // sessionStorage.setItem("accessToken", dataAccessToken)
      //         // sessionStorage.setItem("id", dataId)
      //         // sessionStorage.setItem("role", dataRole)
      //         localStorage.setItem("accessToken", dataAccessToken)
    } catch (error) {
      console.log(error)
      setAuthError("Contraseña incorrecta.");
    }
  };

  //   // const handleClick = (e) => {
  //   //   setSubmitEvent(e.preventDefault());
  //   // }
  //   // const authentication = axios.post('http://localhost:8080/login',{
  //   //     email: email,
  //   //     password: password
  //   // })
  //   // .then((response) => {
  //   //   console.log(response, 'se ingreso correctamente')
  //   // })
  //   // .catch((error) => {
  //   //   console.log(error);
  //   // })

  //   // const authentication = async () => {
  //   //   try {
  //   //     const response = await axios.post(`${apiConfig.baseUrl}login`, {
  //   //       email: email,
  //   //       password: password,
  //   //     });
  //   //     console.log(response)

  //   //   // if(response){
  //   //   //   console.log('se ingreso correctamente')
  //   //   // }else{
  //   //   //   console.log('credenciales incorrectas')}
  //   //   } catch (error) {
  //   //     console.log(error);
  //   //   }
  //   // };

  return (
    <Container className={styles.formMain}>
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
  );
};

export default Login;
