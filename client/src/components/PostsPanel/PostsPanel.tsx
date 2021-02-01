import React, {useState, useEffect} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import TextField from '@material-ui/core/TextField';
import { Button, Chip, Input, makeStyles, MenuItem, Popover, Select, Typography, useTheme } from '@material-ui/core';
import { createContent, deleteContent } from '../../APIRequests/Content';
import { getTags, TagProps } from '../../APIRequests/Tag';
import { createPost } from '../../APIRequests/Post';
import DatePicker from 'react-date-picker';
import { getUser, UserProps } from '../../APIRequests/User';
import { withRouter } from 'react-router-dom';
import { StyledPanel } from './PostsPanel.styles';
import { getUniqueValidatorMsg, getValidatorMsg } from '../validators/validatorMsg';
import postValidate from '../validators/postValidator';

const useStyles = makeStyles(() => ({
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
  }));
  
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  
  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

const PostsPanel = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const [data, setData] = useState('<p>...</p>');
    const [title, setTitle] = useState("");
    const [tags, setTags] = useState([]);
    const [contentId, setContentId] = useState(undefined)
    const [allTags, setAllTags] = useState([])
    const [date, setDate] = useState<any>(new Date());
    const [user, setUser] = useState("");
    const lang = localStorage.getItem("blognellaLang");
    const [anchorEl, setAnchorEl] = useState(null);
    const [errorMsg, setErrorMsg] = useState<string[]>([])


    const handleEditorChange = (e) => {
        setData(e.target.getContent());
    }

    const onContentSave = (event) => {
        event.persist();
        const content = {
            text: data,
            title: props.contentTitle
        }
        // const createdContent = createContent(content)
        createContent(content)
        .then(({ status, data }) => {
                if (status !== 201) {
                  throw new Error('Error! Content not saved')
                }
                setContentId(data.content._id);
                setAnchorEl(event.target);
              })
    }

    useEffect(() => {
        if(contentId){
            onPostSave()
            setContentId(undefined)
        }
    }, [contentId])

    const fetchAllTags = () => {
    getTags()
    .then(({ data: { tags } }: TagProps[] | any) => setAllTags(tags.map(tag=> tag.name)))
    .catch((err: Error) => console.log(err))
    }

    const fetchUser = () => {
      const userId = localStorage.getItem('blognellaId');
      if(userId) {
        getUser(userId)
        .then(({ data: { user } }: UserProps | any) => {
            setUser(user.nick);
        })
        .catch((err: Error) => console.log(err))
      }
      
    }

    useEffect(() => {
        fetchAllTags();
        fetchUser();
    },[])

    const onPostSave = () => {
        const post = {
            date: date.toISOString(),
            tags: tags,
            title: title,
            content: contentId,
            user: user
        }
        postValidate(post, lang)
        .then((data) => {
            if(data.length > 0) {
                setErrorMsg(data);
                deleteContent(contentId || "")
            } else {
                createPost(post)
                .then(({data, status}: any) => {
                    if(status !== 403 && status !== 409 && status !== 500) {
                        props.history.push("/panel/posts");
                    }
                    else if(status === 403) {
                        setErrorMsg(getUniqueValidatorMsg(data, lang))
                        deleteContent(contentId || "")
                    } else if(status === 409){
                        setErrorMsg([lang === "en" ? "Only one post of type 'About' is allowed" : "Tylko jeden wpis typu 'O mnie' jest dozwolony"])
                        deleteContent(contentId || "")
                    } else {
                      setErrorMsg([lang === "en" ? "There are server problems" : "Wystąpiły problemy z serwerem"])
                      deleteContent(contentId || "")
                  }
                });
            }
        });
    }

    const handleChange = (event) => {
        setTags(event.target.value);
        };

    return (
        <StyledPanel>
         <TextField
                    id="standard-full-width"
                    label={lang === "en" ? "Title" : "Tytuł"}
                    style={{ margin: 8 }}
                    placeholder={lang === "en" ? "Please type in your post title here" : "Proszę wpisz tytuł wpisu"}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(input) => setTitle(input.target.value)}
         />

        <Editor
        initialValue={data}
        init={{
          plugins: 'link image code',
          toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
        }}
        onChange={(e) => handleEditorChange(e)}
      />

          <TextField
                    id="standard-full-width"
                    label="Nick"
                    style={{ margin: 8 }}
                    placeholder={lang === "en" ? "Please type in your nick here" : "Proszę wpisz nick"}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={user}
                    onChange={(input) => setUser(input.target.value)}
         />

        <div>{lang === "en" ? "Date of publication" : "Data publikacji"}</div>
        <DatePicker
            onChange={(val:any) => setDate(val)}
            value={date}
        />

        <div>{lang === "en" ? "Add tags to post" : "Dodaj etykiety do wpisu"}</div>
        <Select
          labelId="demo-mutiple-chip-label"
          multiple
          value={tags}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected:any) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {allTags.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, tags, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>

        <div></div>
        <Button variant="contained" color="primary" onClick={onContentSave}>
                    {lang === "en" ? "Save Post" : "Zapisz Wpis"}
         </Button>
         <Popover
                id={Boolean(anchorEl) ? 'simple-popover' : undefined}
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={() => {setAnchorEl(null); setErrorMsg([]);}}
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
      </StyledPanel>


    )
}

export default withRouter(PostsPanel);