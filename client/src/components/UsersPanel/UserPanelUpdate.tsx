import { Button, MenuItem, Select, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { updateUser } from "../../APIRequests/User";

const allUsersRoles = ["loggedUser", "admin"];

const UserPanelUpdate = (props) => {
    const [nick, setNick] = useState(props.user.nick);
    const [login, setLogin] = useState(props.user.login);
    const [password, setPassword] = useState(props.user.password);
    const [role, setRole] = useState(props.user.role);
    const [email, setEmail] = useState(props.user.email);
    const lang = localStorage.getItem("blognellaLang");

    const handleUserRole = (event) => {
        setRole(event.target.value);
    };

    const onUserSave = () => {
        const user = {
            _id: props.user._id,
            nick: nick,
            login: login,
            password: password,
            role: role,
            email: email,
        }
        updateUser(user);
        props.history.push("/panel/users");
    }

    const getUsersRoles = () => {
        return allUsersRoles.map((role) => <MenuItem key={role} value={role}>{role}</MenuItem>)
    }

    return (
        <>
        <TextField
            label="Nick"
            style={{ margin: 8 }}
            placeholder={lang === "en" ? "Please type in your nickname here" : "Proszę wpisz nick"}
            fullWidth
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
            defaultValue={nick}
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
            defaultValue={login}
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
            defaultValue={password}
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
            defaultValue={email}
            onChange={(input) => setEmail(input.target.value)}
        />

        <Button variant="contained" color="primary" onClick={onUserSave}>
            {lang === "en" ? "Save User" : "Zapisz Użytkownika"}
        </Button>
        </>
    )
}

export default withRouter(UserPanelUpdate);