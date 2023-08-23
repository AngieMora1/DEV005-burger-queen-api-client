import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container';
import styles from "./formLogIn.module.css";
// import apiConfig from "../../../api/http";

const FormLogIn = ({handleClick,email,password,handleEmail,handlePassword}) => {
  
    //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   // const [submitEvent, setSubmitEvent] = useState(null);

  //   const handleEmail = (event) => {
  //     setEmail(event.target.value);
  //   };
  //   const handlePassword = (event) => {
  //     setPassword(event.target.value);
  //   };
  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     try {
  //       const response = await axios.post(`${apiConfig.baseUrl}login`, {
  //         email: email,
  //         password: password,
  //       });
  //       console.log(response, "se ingreso correctamente")
  //         const dataAccessToken = response.data.accessToken;
  //         // sessionStorage.setItem("email",email)
  //         // sessionStorage.setItem("accessToken", dataAccessToken)
  //         // sessionStorage.setItem("id", dataId)
  //         // sessionStorage.setItem("role", dataRole)
  //         localStorage.setItem("accessToken", dataAccessToken)
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

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
        <Container className={styles.header}>
    <Form id={styles.formLogIn} onSubmit={handleClick}>
        <Container className={styles.header}>
            <h1>Bienvenidos</h1>
            <h3>Inicia sesión</h3>
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
        <Button variant="primary" type="submit" className={styles.buttonLogIn}>
            Ingresar
        </Button>
    </Form>
    </Container>
    );
};

export default FormLogIn;
