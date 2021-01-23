import React, {useState} from "react";
import { FormItem, LogicControls, StyledLoginForm } from "./LoginForm.styles";
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import { getUsers, UserProps } from "../../APIRequests/User";

const LoginForm = (props) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = () => {
        getUsers()
        .then(({ data: { users } }: UserProps[] | any) => {
            const user = users.find((user) => user.login === login && user.password === password)
            if(user) {
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
                </FormItem>
                <LogicControls>
                    <div>Zapomniales hasla? Kliknij <Link to={"/login/forget"}>Tutaj</Link></div>
                    <Button variant="contained" color="primary" onClick={onSubmit}>
                    Login
                    </Button>
                </LogicControls>
            </StyledLoginForm>
        </>
    )
}

export default withRouter(LoginForm);