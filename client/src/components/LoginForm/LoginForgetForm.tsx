import React, {useState} from "react";
import { FormItem, LogicControls, StyledLoginForm } from "./LoginForm.styles";
import TextField from '@material-ui/core/TextField';
import { Button, Popover, Typography } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { getUsers, updateUser, UserProps } from "../../APIRequests/User";
import { getValidatorMsg } from "../validators/validatorMsg";
import userLoginValidate from "../fieldValidators/userLoginValidator";
import userPasswordValidate from "../fieldValidators/userPasswordValidator";
import userEmailValidate from "../fieldValidators/userEmailValidator";
import { StyledErrorMessage } from "../fieldValidators/fieldValidators.styles";

const LoginForgetForm = (props) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const lang = localStorage.getItem("blognellaLang");
    const [anchorEl, setAnchorEl] = useState(null);
    const [errorMsg, setErrorMsg] = useState<string[]>([])
    const [errors, setErrors] = useState({nick: "", login: "", password: "", email: ""});
    const [touched, setTouched] = useState<any>({});

    const updateUserPassword = (user) => {
        const updatedSser = {
            _id: user._id,
            nick: user.nick,
            login: user.login,
            password: password.trim(),
            role: user.role,
            email: user.email,
        }
        updateUser(updatedSser);
    }

    const onSubmit = (event) => {
        event.persist();
        getUsers()
        .then(({ data: { users } }: UserProps[] | any) => {
            const user = users.find((user) => user.login === login && user.email === email)
            if(user && errors.password === "") {
                updateUserPassword(user)
                localStorage.setItem('blognellaId', user._id);
                props.history.push('/');
            } else {
                setErrorMsg([lang === "en" ? "Invalid data" : "Niepoprawne dane"])
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

    const onInputEmail = (value:string) => {
    touched.email && userEmailValidate({email: value.trim()}, lang).then((data) => {setErrors({...errors, email: data})});
    }

    const onBlurEmail = (value:string) => {
    userEmailValidate({email: value.trim()}, lang).then((data) => {setErrors({...errors, email: data}); setTouched({...touched, email: true})});
    }

    return (
        <>
            <StyledLoginForm>
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
                    label={lang === "en" ? "New Password" : "Nowe hasło"}
                    style={{ margin: 8 }}
                    placeholder={lang === "en" ? "Please type in your new password here" : "Proszę wpisz swoje nowe hasło"}
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
                    <div></div>
                    <Button variant="contained" color="primary" onClick={onSubmit}>
                        {lang === "en" ? "Update Password" : "Aktualizuj Hasło"}
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

export default withRouter(LoginForgetForm);