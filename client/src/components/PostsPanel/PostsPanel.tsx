import React, {useState, useEffect} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import TextField from '@material-ui/core/TextField';
import { Button, Chip, Input, makeStyles, MenuItem, Select, useTheme } from '@material-ui/core';
import { createContent } from '../../APIRequests/Content';
import { getTags, TagProps } from '../../APIRequests/Tag';
import { createPost } from '../../APIRequests/Post';

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
    const [data, setData] = useState('<p>React is really <em>nice</em>!</p>');
    const [title, setTitle] = useState("");
    const [tags, setTags] = useState([]);
    const [contentId, setContentId] = useState(undefined)
    const [allTags, setAllTags] = useState([])


    const handleEditorChange = (e) => {
        setData(e.target.getContent());
    }

    const onContentSave = () => {
        const content = {
            text: data,
            title: props.contentTitle
        }
        // const createdContent = createContent(content)
        createContent(content)
        .then(({ status, data }) => {
                if (status !== 201) {
                  throw new Error('Error! Todo not saved')
                }
                setContentId(data.content._id);
              })
        // return createdContent;
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

    useEffect(() => {
        fetchAllTags();
    },[])

    const onPostSave = () => {
        const post = {
            date: new Date(),
            tags: tags,
            title: title,
            content: contentId,
        }
        createPost(post);
    }

    // const allTags = [
    //     'tag1','tag2','tag3'
    //   ];

    const handleChange = (event) => {
        setTags(event.target.value);
        };

    return (
        <>
         <TextField
                    id="standard-full-width"
                    label="Title"
                    style={{ margin: 8 }}
                    placeholder="Please type in your login here"
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



        <div>Add tags to post</div>
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
                    Save Post
         </Button>
      </>


    )
}

export default PostsPanel