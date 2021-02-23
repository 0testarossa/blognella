import React, {useState} from "react";
import { FormItem, LogicControls, StyledLoginForm } from "./LoginForm.styles";
import TextField from '@material-ui/core/TextField';
import { Button, Popover, Typography } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import { getUsers, UserProps } from "../../APIRequests/User";
import { getValidatorMsg } from "../validators/validatorMsg";
import userLoginValidate from "../fieldValidators/userLoginValidator";
import userPasswordValidate from "../fieldValidators/userPasswordValidator";
import { StyledErrorMessage } from "../fieldValidators/fieldValidators.styles";

const LoginForm = (props) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const lang = localStorage.getItem("blognellaLang");
    const [anchorEl, setAnchorEl] = useState(null);
    const [errorMsg, setErrorMsg] = useState<string[]>([])
    const [errors, setErrors] = useState({login: "", password: ""});
    const [touched, setTouched] = useState<any>({});

    const onSubmit = (event) => {
        event.persist();
        getUsers()
        .then(({ data: { users } }: UserProps[] | any) => {
            const user = users.find((user) => user.login === login && user.password === password)
            if(user) {
                localStorage.setItem('blognellaId', user._id);
                props.history.push('/');
            } else {
                setErrorMsg([lang === "en" ? "Invalid login or password" : "Nieprawidłowy login lub hasło"])
                setAnchorEl(event.target);
            }
        })
        .catch((err: Error) => console.log(err))
    }

    const onInputLogin = (value:string) => {
    touched.login && userLoginValidate({login: value.trim()}, lang).then((data) => {setErrors({...errors, login: data})});
    }

    const onBlurLogin = (value:string) => {
    userLoginValidate({login: value.trim()}, lang).then((data) => {setErrors({...errors, login: data}); setTouched({...touched, login: true})});
    }
    
    const onInputPassword = (value:string) => {
    touched.password && userPasswordValidate({password: value.trim()}, lang).then((data) => {setErrors({...errors, password: data})});
    }

    const onBlurPassword = (value:string) => {
    userPasswordValidate({password: value.trim()}, lang).then((data) => {setErrors({...errors, password: data}); setTouched({...touched, password: true})});
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
                    onInput={(input:any) => onInputLogin(input.target.value)}
                    onBlur={(input:any) => onBlurLogin(input.target.value)}
                    />
                </FormItem>
                <StyledErrorMessage>{errors.login}</StyledErrorMessage>
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
                    type="password"
                    onChange={(input) => setPassword(input.target.value)}
                    onInput={(input:any) => onInputPassword(input.target.value)}
                    onBlur={(input:any) => onBlurPassword(input.target.value)}
                    />
                </FormItem>
                <StyledErrorMessage>{errors.password}</StyledErrorMessage>
                <LogicControls>
                    <div>{lang === "en" ? "Forgot password? Click " : "Zapomniałes hasła? Kliknij "}<Link to={"/login/forget"}>{lang === "en" ? "here" : "tutaj"}</Link></div>
                    <Button variant="contained" color="primary" onClick={onSubmit}>
                        {lang === "en" ? "Login" : "Zaloguj"}
                    </Button>
                    <Popover
                    id={Boolean(anchorEl) ? 'simple-popover' : undefined}
                    open={Boolean(anchorEl)}
                    anchorEl={anchorEl}
                    onClose={() => setAnchorEl(null)}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                    }}
                    >
                        <Typography>{getValidatorMsg(errorMsg)}</Typography>
                    </Popover>
                </LogicControls>
            </StyledLoginForm>
        </>
    )
}

export default withRouter(LoginForm);