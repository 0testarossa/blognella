import React from "react";
import { withRouter } from "react-router-dom";
import SearchList from "../components/SearchComponent/SearchList";

const SearchPage = (props) => {
    return <SearchList search={props.location.state.search}/>
}

export default withRouter(SearchPage);