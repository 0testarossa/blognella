import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';
import { Button, Popover, Typography } from "@material-ui/core";
import { FormItem, LogicControls, StyledRegisterForm } from "./RegisterForm.styles";
import { createUser } from "../../APIRequests/User";
import { Link, withRouter } from "react-router-dom";
import { getUniqueValidatorMsg, getValidatorMsg } from "../validators/validatorMsg";
import userValidate from "../validators/userValidator";
import userNickValidate from "../fieldValidators/userNickValidator";
import userLoginValidate from "../fieldValidators/userLoginValidator";
import userPasswordValidate from "../fieldValidators/userPasswordValidator";
import userEmailValidate from "../fieldValidators/userEmailValidator";
import { StyledErrorMessage } from "../fieldValidators/fieldValidators.styles";

const RegisterForm = (props) => {
    const [nick, setNick] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const lang = localStorage.getItem("blognellaLang");
    const [anchorEl, setAnchorEl] = useState(null);
    const [errorMsg, setErrorMsg] = useState<string[]>([])
    const [errors, setErrors] = useState({nick: "", login: "", password: "", email: ""});
    const [touched, setTouched] = useState<any>({});
    

    const onUserSave = (event) => {
        event.persist();
        const user = {
            nick:nick.trim(),
            login:login.trim(),
            password:password.trim(),
            email:email.trim(),
            role:"loggedUser"
        }
        userValidate(user, lang)
        .then((data) => {
            if(data.length > 0) {
                setErrorMsg(data);
                setAnchorEl(event.target);
            } else {
                createUser(user)
                .then(({data, status}: any) => {
                    if(status !== 403 && status !== 500) {
                        props.history.push("/");
                    }
                    else if(status === 403) {
                        setErrorMsg(getUniqueValidatorMsg(data, lang))
                        setAnchorEl(event.target);
                    } else {
                        setErrorMsg([lang === "en" ? "There are server problems" : "Wystąpiły problemy z serwerem"])
                        setAnchorEl(event.target);
                    }
                });
            }
        });
    }

    const onInputNick = (value:string) => {
        touched.nick && userNickValidate({nick: value.trim()}, lang).then((data) => {setErrors({...errors, nick: data})});
    }

    const onBlurNick = (value:string) => {
    userNickValidate({nick: value.trim()}, lang).then((data) => {setErrors({...errors, nick: data}); setTouched({...touched, nick: true})});
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

    const onInputEmail = (value:string) => {
    touched.email && userEmailValidate({email: value.trim()}, lang).then((data) => {setErrors({...errors, email: data})});
    }

    const onBlurEmail = (value:string) => {
    userEmailValidate({email: value.trim()}, lang).then((data) => {setErrors({...errors, email: data}); setTouched({...touched, email: true})});
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
                    onInput={(input:any) => onInputNick(input.target.value)}
                    onBlur={(input:any) => onBlurNick(input.target.value)}
                    />
                </FormItem>
                <StyledErrorMessage>{errors.nick}</StyledErrorMessage>
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
                    onInput={(input:any) => onInputEmail(input.target.value)}
                    onBlur={(input:any) => onBlurEmail(input.target.value)}
                    />
                </FormItem>
                <StyledErrorMessage>{errors.email}</StyledErrorMessage>
                <LogicControls>
                    <div>{lang === "en" ? "Have already account? " : "Masz już konto? "}
                    <Link to={"/login"}>{lang === "en" ? "Login" : "Zaloguj się"}</Link>
                    </div>
                    <Button variant="contained" color="primary" onClick={onUserSave}>
                        {lang === "en" ? "Register" : "Zarejestruj się"}
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
            </StyledRegisterForm>
        </>
    )
}

export default withRouter(RegisterForm);