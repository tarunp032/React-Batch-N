import React, {useEffect} from "react";

const Child = ({sendComments}) => {
  useEffect(() => {
    const fetchComments = async() => {
      const res = await fetch("https://dummyjson.com/comments");
      const data = await res.json();
      sendComments(data.comments.slice(0, 20));
    };
    fetchComments();
  },[sendComments]);

  return <h3>Child Component (fetching comments...)</h3>;
};

export default Child;