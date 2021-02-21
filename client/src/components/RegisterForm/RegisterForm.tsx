import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';
import { Button, Popover, Typography } from "@material-ui/core";
import { FormItem, LogicControls, StyledRegisterForm } from "./RegisterForm.styles";
import { createUser } from "../../APIRequests/User";
import { Link, withRouter } from "react-router-dom";
import { getUniqueValidatorMsg, getValidatorMsg } from "../validators/validatorMsg";
import userValidate from "../validators/userValidator";

const RegisterForm = (props) => {
    const [nick, setNick] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const lang = localStorage.getItem("blognellaLang");
    const [anchorEl, setAnchorEl] = useState(null);
    const [errorMsg, setErrorMsg] = useState<string[]>([])
    

    const onUserSave = (event) => {
        event.persist();
        const user = {
            nick:nick,
            login:login,
            password:password,
            email:email,
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
                    type="password"
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