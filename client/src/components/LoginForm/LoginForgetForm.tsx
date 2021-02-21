import React, {useState} from "react";
import { FormItem, LogicControls, StyledLoginForm } from "./LoginForm.styles";
import TextField from '@material-ui/core/TextField';
import { Button, Popover, Typography } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { getUsers, updateUser, UserProps } from "../../APIRequests/User";
import { getValidatorMsg } from "../validators/validatorMsg";

const LoginForgetForm = (props) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const lang = localStorage.getItem("blognellaLang");
    const [anchorEl, setAnchorEl] = useState(null);
    const [errorMsg, setErrorMsg] = useState<string[]>([])

    const updateUserPassword = (user) => {
        const updatedSser = {
            _id: user._id,
            nick: user.nick,
            login: user.login,
            password: password,
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
            if(user) {
                updateUserPassword(user)
                localStorage.setItem('blognellaId', user._id);
                props.history.push('/');
            } else {
                setErrorMsg([lang === "en" ? "Invalid login or email" : "Nieprawidłowy login lub email"])
                setAnchorEl(event.target);
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
                    />
                </FormItem>
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