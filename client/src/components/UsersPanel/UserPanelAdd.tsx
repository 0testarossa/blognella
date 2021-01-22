import { Button, MenuItem, Select, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { createUser } from "../../APIRequests/User";

const allUsersRoles = ["loggedUser", "admin"];

const UserPanelAdd = () => {
    const [nick, setNick] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");

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
    }

    const getUsersRoles = () => {
        return allUsersRoles.map((role) => <MenuItem key={role} value={role}>{role}</MenuItem>)
    }

    return (
        <>
        <TextField
            label="Nick"
            style={{ margin: 8 }}
            placeholder="Please type in your nick here"
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
            placeholder="Please type in your login here"
            fullWidth
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
            onChange={(input) => setLogin(input.target.value)}
        />
        <TextField
            label="Password"
            style={{ margin: 8 }}
            placeholder="Please type in your password here"
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
            placeholder="Please type in your email here"
            fullWidth
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
            onChange={(input) => setEmail(input.target.value)}
        />

        <Button variant="contained" color="primary" onClick={onUserSave}>
            Save User
        </Button>
        </>
    )
}

export default UserPanelAdd;