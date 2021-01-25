import { IconButton, List, ListItem, ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import React, {useState, useEffect} from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import { Link, withRouter } from "react-router-dom";
import { deleteUser, getUsers, UserProps } from "../../APIRequests/User";

const UsersPanel = (props) => {
    const [allUsers, setAllUsers] = useState([]);
    const lang = localStorage.getItem("blognellaLang");
    const [actualAdminNick, setActualAdminNick] = useState("");
    
    
    const getBlognellaUser = () => {
        if(allUsers.length > 0) {
            const blognellaUser = localStorage.getItem("blognellaId");
            const actualAdmin:any = allUsers.find((user:any) => user._id === blognellaUser);
            if(actualAdmin) {
                setActualAdminNick(actualAdmin.nick || "");
            }
        }
    }

    const fetchAllUsers = () => {
        getUsers()
        .then(({ data: { users } }: UserProps[] | any) => setAllUsers(users))
        .catch((err: Error) => console.log(err))
    }

    useEffect(() => {
        getBlognellaUser()
    }, [allUsers])

    useEffect(() => {
        fetchAllUsers()
    }, [props])

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
            {user.nick !== actualAdminNick ? 
            <IconButton edge="end" aria-label="delete" onClick={() => onUserDelete(user)}>
              <DeleteIcon/>
            </IconButton>
            : <div/>}
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

export default withRouter(UsersPanel);