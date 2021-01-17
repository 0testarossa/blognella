import React, {useState} from "react";
import { FormItem, LogicControls, StyledLoginForm } from "./LoginForm.styles";
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";

const LoginForm = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = () => {
        console.log(login);
        console.log(password);
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
                    <div>Zapomniales hasla?</div>
                    <Button variant="contained" color="primary" onClick={onSubmit}>
                    Login
                    </Button>
                </LogicControls>
            </StyledLoginForm>
        </>
    )
}

export default LoginForm;