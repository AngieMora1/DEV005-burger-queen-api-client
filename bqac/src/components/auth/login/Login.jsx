import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
import styles from "./login.module.css";
import axios from "axios";
import apiConfig from "../../../api/http";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitEvent, setSubmitEvent] = useState(null);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleClick = (e) => {
    setSubmitEvent(e.preventDefault());
  }
  const authentication = axios.post('http://localhost:8080/login',{
      email: email,
      password: password
  })
  .then((response) => {
    console.log(response, 'se ingreso correctamente')
  })
  .catch((error) => {
    console.log(error);
  })

  // const authentication = async () => {
  //   try {
  //     const response = await axios.post(`${apiConfig.baseUrl}login`, {
  //       email: email,
  //       password: password,
  //     });
  //   if(response.ok){
  //     console.log('se ingreso correctamente')
  //   }else{
  //     console.log('credenciales incorrectas')}
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    authentication;

  },[]);

  return (

    <Form 
      className={styles.body} 
      onSubmit={handleClick}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={handleEmail}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
          type="password" 
          placeholder="Password"
          value={password}
          onChange={handlePassword}
        />
      </Form.Group>
      <Button 
      variant="primary" 
      type="submit"
      >
        Submit
      </Button>
    </Form>
  );
};

export default Login;

