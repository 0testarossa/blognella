import { IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, Popover, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import React, {useState, useEffect} from "react";
import { createTag, deleteTag, getTags, TagProps } from "../../APIRequests/Tag";
import DeleteIcon from '@material-ui/icons/Delete';
import { withRouter } from "react-router-dom";
import { StyledTagsPanel } from "./TagsPanel.styled";
import { getUniqueValidatorMsg, getValidatorMsg } from "../validators/validatorMsg";
import tagValidate from "../validators/tagValidator";
import tagNameValidate from "../fieldValidators/tagNameValidator";
import { StyledErrorMessage } from "../fieldValidators/fieldValidators.styles";

const TagsPanel = (props) => {
    const [tag, setTag] = useState("");
    const [allTags, setAllTags] = useState([]);
    const lang = localStorage.getItem("blognellaLang");
    const [anchorEl, setAnchorEl] = useState(null);
    const [errorMsg, setErrorMsg] = useState<string[]>([])
    const [errors, setErrors] = useState({name: ""});
    const [touched, setTouched] = useState<any>({});

    const fetchAllTags = () => {
        getTags()
        .then(({ data: { tags } }: TagProps[] | any) => setAllTags(tags))
        .catch((err: Error) => console.log(err))
    }

    const onTagSave = (event) => {
        event.persist();
        tagValidate({name: tag.trim()}, lang)
        .then((data) => {
            if(data.length > 0) {
                setErrorMsg(data);
                setAnchorEl(event.target);
            } else {
                createTag({name: tag})
                .then(({data, status}: any) => {
                    if(status !== 403 && status !== 500) {
                        fetchAllTags();
                        props.history.push("/panel/tags");
                    }
                    else if(status === 403) {
                        setErrorMsg(getUniqueValidatorMsg(data, lang))
                        setAnchorEl(event.target);
                    } else {
                        setErrorMsg([lang === "en" ? "There are server problems" : "Wystąpiły problemy z serwerem"])
                        setAnchorEl(event.target);
                    }
                });
            }
        });
        // createTag({name: tag})
        // .then(({ status }) => {
        //         if (status !== 201) {
        //           throw new Error('Error! Tag not saved')
        //         }
        //         fetchAllTags();
        // })
        // props.history.push("/panel/tags");
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

    const onInputName = (value:string) => {
    touched.name && tagNameValidate({name: value.trim()}, lang).then((data) => {setErrors({...errors, name: data})});
    }

    const onBlurName = (value:string) => {
        tagNameValidate({name: value.trim()}, lang).then((data) => {setErrors({...errors, name: data}); setTouched({...touched, name: true})});
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
            onInput={(input:any) => onInputName(input.target.value)}
            onBlur={(input:any) => onBlurName(input.target.value)}
            />
            <StyledErrorMessage>{errors.name}</StyledErrorMessage>

            <Button variant="contained" color="primary" onClick={onTagSave}>
                    {lang === "en" ? "Add Tag" : "Dodaj etykietę"}
            </Button>
            <Popover
                id={Boolean(anchorEl) ? 'simple-popover' : undefined}
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
                }}
            >
                <Typography>{getValidatorMsg(errorMsg)}</Typography>
            </Popover>
            </div>
        </StyledTagsPanel>
    )
}

export default withRouter(TagsPanel);