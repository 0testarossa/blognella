import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";
import { FormItem, LogicControls, StyledRegisterForm } from "./RegisterForm.styles";
import { createUser } from "../../APIRequests/User";
import { Link } from "react-router-dom";

const RegisterForm = () => {
    const [nick, setNick] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const onUserSave = () => {
        console.log(nick);
        console.log(login);
        console.log(password);
        console.log(email);
        const user = {
            nick:nick,
            login:login,
            password:password,
            email:email,
            role:"loggedUser"
        }
        createUser(user)
        .then(({ status, data }) => {
            console.log("zwrotna data");
            console.log(data);
            if (status !== 201) {
              throw new Error('Error! User not saved')
            }
            // setTodos(data.todos)
          })
          .catch((err) => console.log(err))
    }

    return (
        <>
            <StyledRegisterForm>
                <FormItem>
                    <TextField
                    id="standard-full-width"
                    label="Nick"
                    style={{ margin: 8 }}
                    placeholder="Please type in your nickname here"
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
                <LogicControls>
                    <Link to={"/login"}>Home</Link>
                    <div>Have already account? Login</div>
                    <Button variant="contained" color="primary" onClick={onUserSave}>
                    Register
                    </Button>
                </LogicControls>
            </StyledRegisterForm>
        </>
    )
}

export default RegisterForm;