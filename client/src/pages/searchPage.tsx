import React from "react";
import { withRouter } from "react-router-dom";
import SearchList from "../components/SearchComponent/SearchList";

const SearchPage = (props) => {
    return (props.location.state && props.location.state.search) ? <SearchList search={props.location.state.search}/> : <div>Nothing to search</div>
}

export default withRouter(SearchPage);