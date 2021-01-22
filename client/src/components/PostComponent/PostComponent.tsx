import React, { useState } from "react";
import DatePicker from 'react-date-picker';

const PostComponent = (props) => {
    const [value, onChange] = useState<any>(new Date());
    // const date = new Date('2018-05-18T04:00:00Z').toLocaleString();
    // const date = new Date(props.post.date).toUTCString();

    // const customoldData = new Date('2021-01-19T21:41:19.169Z').toDateString()
    // const customnewData = new Date('2021-02-19T21:41:19.169Z').toDateString()
    // console.log("old");
    // console.log(customoldData);
    // console.log("new");
    // console.log(customnewData);
    // const actualDate = new Date().toDateString()

    // console.log(customoldData > customnewData); //true
    // console.log(customoldData > actualDate)

    const date = new Date(props.post.date).toDateString();

    const getTags = () => {
        return props.post.tags.map((tag) => <span key={tag}>{tag}</span>)
    }

    console.log(date);
    console.log("calendar")
    console.log(value.toDateString());
    return (
        <>
         <DatePicker
        onChange={onChange}
        value={value}
      />
        <div>{date}</div>
        <div dangerouslySetInnerHTML={{ __html: props.post.content[0].text }} />
        <div><span>Tagi: </span>{getTags()}</div>
        </>
    )
}

export default PostComponent;