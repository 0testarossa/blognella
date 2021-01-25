import { Button, MenuItem, Select, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { createUser } from "../../APIRequests/User";
import { StyledPanel } from "./UserPanel.styles";

const allUsersRoles = ["loggedUser", "admin"];

const UserPanelAdd = (props) => {
    const [nick, setNick] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");
    const lang = localStorage.getItem("blognellaLang");

    const handleUserRole = (event) => {
        setRole(event.target.value);
    };

    const onUserSave = () => {
        const user = {
            nick: nick,
            login: login,
            password: password,
            role: role,
            email: email,
        }
        createUser(user);
        props.history.push("/panel/users");
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
        </StyledPanel>
    )
}

export default withRouter(UserPanelAdd);