import React, {useState} from "react";
import { FormItem, LogicControls, StyledLoginForm } from "./LoginForm.styles";
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import { getUsers, UserProps } from "../../APIRequests/User";

const LoginForm = (props) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const lang = localStorage.getItem("blognellaLang");

    const onSubmit = () => {
        getUsers()
        .then(({ data: { users } }: UserProps[] | any) => {
            const user = users.find((user) => user.login === login && user.password === password)
            if(user) {
                localStorage.setItem('blognellaId', user._id);
                props.history.push('/');
            }
        })
        .catch((err: Error) => console.log(err))
    }

    return (
        <>
            <StyledLoginForm>
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
                <LogicControls>
                    <div>{lang === "en" ? "Forgot password? Click " : "Zapomniałes hasła? Kliknij "}<Link to={"/login/forget"}>{lang === "en" ? "here" : "tutaj"}</Link></div>
                    <Button variant="contained" color="primary" onClick={onSubmit}>
                        {lang === "en" ? "Login" : "Zaloguj"}
                    </Button>
                </LogicControls>
            </StyledLoginForm>
        </>
    )
}

export default withRouter(LoginForm);