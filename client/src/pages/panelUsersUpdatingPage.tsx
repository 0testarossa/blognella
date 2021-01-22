import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { getUser, UserProps } from "../APIRequests/User";
import UserPanelUpdate from "../components/UsersPanel/UserPanelUpdate";

const PanelUsersUpdatingPage = (props) => {
    const [editedUser, setEditedUser] = useState<UserProps>();

    const fetchEditedUser = () => {
        getUser(props.match.params.id)
        .then(({ data: { user } }: UserProps | any) => {
            setEditedUser(user);
        })
        .catch((err: Error) => console.log(err))
    }

    useEffect(() => {
        fetchEditedUser()
    }, [])

    return editedUser ? <UserPanelUpdate user={editedUser}/> : <></>;
}

export default withRouter(PanelUsersUpdatingPage);