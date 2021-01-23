import React, {useState} from "react";
import { FormItem, LogicControls, StyledLoginForm } from "./LoginForm.styles";
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { getUsers, updateUser, UserProps } from "../../APIRequests/User";

const LoginForgetForm = (props) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

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

    const onSubmit = () => {
        getUsers()
        .then(({ data: { users } }: UserProps[] | any) => {
            const user = users.find((user) => user.login === login && user.email === email)
            if(user) {
                updateUserPassword(user)
                localStorage.setItem('blognellaId', user._id);
                props.history.push('/');
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
                    placeholder="Please type in your email here"
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
                    placeholder="Please type in your login here"
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
                    label="New Password"
                    style={{ margin: 8 }}
                    placeholder="Please type in your new password here"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(input) => setPassword(input.target.value)}
                    />
                </FormItem>
                <LogicControls>
                    <div></div>
                    <Button variant="contained" color="primary" onClick={onSubmit}>
                    Update Password
                    </Button>
                </LogicControls>
            </StyledLoginForm>
        </>
    )
}

export default withRouter(LoginForgetForm);