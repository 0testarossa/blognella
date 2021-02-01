import { Button, MenuItem, Popover, Select, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { createUser } from "../../APIRequests/User";
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

    const handleUserRole = (event) => {
        setRole(event.target.value);
    };
    const onUserSave = (event) => {
        event.persist();
        const user = {
            nick: nick,
            login: login,
            password: password,
            role: role,
            email: email,
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
            />
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
            />
            <TextField
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
            />

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