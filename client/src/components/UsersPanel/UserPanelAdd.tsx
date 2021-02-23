import { Button, MenuItem, Popover, Select, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { createUser } from "../../APIRequests/User";
import { StyledErrorMessage } from "../fieldValidators/fieldValidators.styles";
import userEmailValidate from "../fieldValidators/userEmailValidator";
import userLoginValidate from "../fieldValidators/userLoginValidator";
import userNickValidate from "../fieldValidators/userNickValidator";
import userPasswordValidate from "../fieldValidators/userPasswordValidator";
import userValidate from "../validators/userValidator";
import { getUniqueValidatorMsg, getValidatorMsg } from "../validators/validatorMsg";
import { StyledPanel } from "./UserPanel.styles";

const allUsersRoles = ["loggedUser", "admin"];

const UserPanelAdd = (props) => {
    const [nick, setNick] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");
    const lang = localStorage.getItem("blognellaLang");
    const [anchorEl, setAnchorEl] = useState(null);
    const [errorMsg, setErrorMsg] = useState<string[]>([])
    const [errors, setErrors] = useState({nick: "", login: "", password: "", email: ""});
    const [touched, setTouched] = useState<any>({});

    const handleUserRole = (event) => {
        setRole(event.target.value);
    };
    const onUserSave = (event) => {
        event.persist();
        const user = {
            nick: nick.trim(),
            login: login.trim(),
            password: password.trim(),
            role: role,
            email: email.trim(),
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
                        props.history.push("/panel/users");
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

    const getUsersRoles = () => {
        return allUsersRoles.map((role) => <MenuItem key={role} value={role}>{role}</MenuItem>)
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
        <StyledPanel>
            <TextField
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
            <StyledErrorMessage>{errors.nick}</StyledErrorMessage>
            <TextField
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
            <StyledErrorMessage>{errors.login}</StyledErrorMessage>
            <TextField
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
            <StyledErrorMessage>{errors.password}</StyledErrorMessage>
            <Select
            value={role}
            onChange={handleUserRole}
            >
                {getUsersRoles()}
            </Select>

            <div></div>
            <TextField
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
            <StyledErrorMessage>{errors.email}</StyledErrorMessage>

            <Button variant="contained" color="primary" onClick={onUserSave}>
                {lang === "en" ? "Save User" : "Zapisz Użytkownika"}
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
        </StyledPanel>
    )
}

export default withRouter(UserPanelAdd);