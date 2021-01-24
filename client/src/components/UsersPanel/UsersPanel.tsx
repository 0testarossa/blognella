import { IconButton, List, ListItem, ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import React, {useState, useEffect} from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from "react-router-dom";
import { deleteUser, getUsers, UserProps } from "../../APIRequests/User";

const UsersPanel = () => {
    const [allUsers, setAllUsers] = useState([]);
    const lang = localStorage.getItem("blognellaLang");

    const fetchAllUsers = () => {
        getUsers()
        .then(({ data: { users } }: UserProps[] | any) => setAllUsers(users))
        .catch((err: Error) => console.log(err))
    }

    useEffect(() => {
        fetchAllUsers()
    }, [])

      const onUserDelete = (user:UserProps) => {
        deleteUser(user._id || "")
        .then(({ status }) => {
            if (status !== 200) {
                throw new Error('Error! User not deleted')
            }
            fetchAllUsers()
            })
            .catch((err) => console.log(err))
    }

      const getListItems = () => {
          return allUsers.map((user:UserProps) => 
          <ListItem key={user.nick}>
          <ListItemText
            primary={ <Link to={{
                pathname: `/panel/users/${user._id}`,
                state: { myId: user._id }
            }}> {user.nick} </Link> }
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete" onClick={() => onUserDelete(user)}>
              <DeleteIcon/>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        );
      }

    return (
        <>
             <List>
              {getListItems()}
            </List>

            <div>

            <Link to={"/panel/users/add"}>{lang === "en" ? "Add User" : "Dodaj użytkownika"}</Link>
            </div>
        </>
    )
}

export default UsersPanel;