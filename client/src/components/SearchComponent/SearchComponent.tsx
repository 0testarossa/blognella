import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";

const SearchComponent = (props) => {
    const [searchValue, setSearchValue] = useState("");
    const lang = localStorage.getItem("blognellaLang");

    const onSearch = () => {
        props.history.push({
            pathname: '/search',
            state: { search: searchValue }
          })
    }

    return (
        <>
            <TextField
                    id="standard-full-width"
                    label={lang === "en" ? "Search" : "Wyszukaj"}
                    style={{ margin: 8 }}
                    placeholder={lang === "en" ? "Please type in tag or title here" : "Proszę wpisz etykietę lub tytuł"}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(input) => setSearchValue(input.target.value)}
            />
            <Button variant="contained" color="primary" onClick={onSearch}>
                {lang === "en" ? "Search" : "Wyszukaj"}
            </Button>
        </>
    ) 
}

export default withRouter(SearchComponent);