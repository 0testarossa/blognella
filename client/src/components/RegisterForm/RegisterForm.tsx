import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";
import { FormItem, LogicControls, StyledRegisterForm } from "./RegisterForm.styles";
import { createUser } from "../../APIRequests/User";
import { Link, withRouter } from "react-router-dom";

const RegisterForm = (props) => {
    const [nick, setNick] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const lang = localStorage.getItem("blognellaLang");
    

    const onUserSave = () => {
        console.log(nick);
        console.log(login);
        console.log(password);
        console.log(email);
        const user = {
            nick:nick,
            login:login,
            password:password,
            email:email,
            role:"loggedUser"
        }
        createUser(user)
        .then(({ status, data }) => {
            console.log("zwrotna data");
            console.log(data);
            if (status !== 201) {
              throw new Error('Error! User not saved')
            }
            // setTodos(data.todos)
          })
          .catch((err) => console.log(err))
        props.history.push("/");
    }

    return (
        <>  
            <StyledRegisterForm>
                <FormItem>
                    <TextField
                    id="standard-full-width"
                    label="Nick"
                    style={{ margin: 8 }}
                    placeholder={lang === "en" ? "Please type in your nickname here" : "Proszę wpisz nick"}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(input) => setNick(input.target.value)}
                    />
                </FormItem>
                <FormItem>
                    <TextField
                    id="standard-full-width"
                    label="Login"
                    style={{ margin: 8 }}
                    placeholder={lang === "en" ? "Please type in your login here" : "Proszę wpisz swój login"}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(input) => setLogin(input.target.value)}
                    />
                </FormItem>
                <FormItem>
                <TextField
                    id="standard-full-width"
                    label={lang === "en" ? "Password" : "Hasło"}
                    style={{ margin: 8 }}
                    placeholder={lang === "en" ? "Please type in your password here" : "Proszę wpisz swoje hasło"}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(input) => setPassword(input.target.value)}
                    />
                </FormItem>
                <FormItem>
                <TextField
                    id="standard-full-width"
                    label="Email"
                    style={{ margin: 8 }}
                    placeholder={lang === "en" ? "Please type in your email here" : "Proszę wpisz swój email"}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(input) => setEmail(input.target.value)}
                    />
                </FormItem>
                <LogicControls>
                    <div>{lang === "en" ? "Have already account? " : "Masz już konto?"}
                    <Link to={"/login"}>{lang === "en" ? "Login" : "Zaloguj się"}</Link>
                    </div>
                    <Button variant="contained" color="primary" onClick={onUserSave}>
                        {lang === "en" ? "Register" : "Zarejestruj się"}
                    </Button>
                </LogicControls>
            </StyledRegisterForm>
        </>
    )
}

export default withRouter(RegisterForm);