import { Button, MenuItem, Select, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { updateUser } from "../../APIRequests/User";

const allUsersRoles = ["loggedUser", "admin"];

const UserPanelUpdate = (props) => {
    const [nick, setNick] = useState(props.user.nick);
    const [login, setLogin] = useState(props.user.login);
    const [password, setPassword] = useState(props.user.password);
    const [role, setRole] = useState(props.user.role);
    const [email, setEmail] = useState(props.user.email);

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
            defaultValue={nick}
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
            defaultValue={login}
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
            placeholder="Please type in your email here"
            fullWidth
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
            defaultValue={email}
            onChange={(input) => setEmail(input.target.value)}
        />

        <Button variant="contained" color="primary" onClick={onUserSave}>
            Save User
        </Button>
        </>
    )
}

export default UserPanelUpdate;