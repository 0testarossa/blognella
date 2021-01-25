import { IconButton, List, ListItem, ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import React, {useState, useEffect} from "react";
import { createTag, deleteTag, getTags, TagProps } from "../../APIRequests/Tag";
import DeleteIcon from '@material-ui/icons/Delete';
import { withRouter } from "react-router-dom";
import { StyledTagsPanel } from "./TagsPanel.styled";

const TagsPanel = (props) => {
    const [tag, setTag] = useState("");
    const [allTags, setAllTags] = useState([]);
    const lang = localStorage.getItem("blognellaLang");

    const fetchAllTags = () => {
        getTags()
        .then(({ data: { tags } }: TagProps[] | any) => setAllTags(tags))
        .catch((err: Error) => console.log(err))
    }

    const onTagSave = () => {
        createTag({name: tag})
        // .then(({ status, data }) => {
        .then(({ status }) => {
                if (status !== 201) {
                  throw new Error('Error! Tag not saved')
                }
                fetchAllTags();
        })
        props.history.push("/panel/tags");
    }

    useEffect(() => {
        fetchAllTags()
    }, [])

      const onTagDelete = (tag:TagProps) => {
        deleteTag(tag._id || "")
        .then(({ status }) => {
            if (status !== 200) {
                throw new Error('Error! Tag not deleted')
            }
            fetchAllTags()
            })
            .catch((err) => console.log(err))
    }

      const getListItems = () => {
          return allTags.map((tag:TagProps) => 
          <ListItem key={tag.name}>
          <ListItemText
            primary={tag.name}
          />
          <ListItemSecondaryAction>
            <IconButton style={{color: "white"}} edge="end" aria-label="delete" onClick={() => onTagDelete(tag)}>
              <DeleteIcon/>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        );
      }



    return (
        <StyledTagsPanel>
             <List>
              {getListItems()}
            </List>

            <div>
            <TextField
            label={lang === "en" ? "Tag" : "Etykieta"}
            style={{ margin: 8}}
            placeholder={lang === "en" ? "Please type in your tag here" : "Proszę wpisz etykietę"}
            fullWidth
            margin="normal"
            InputLabelProps={{
                shrink: true,
            }}
            onChange={(input) => setTag(input.target.value)}
            />
            <Button variant="contained" color="primary" onClick={onTagSave}>
                    {lang === "en" ? "Add Tag" : "Dodaj etykietę"}
            </Button>
            </div>
        </StyledTagsPanel>
    )
}

export default withRouter(TagsPanel);