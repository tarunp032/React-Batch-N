import React, {useCallback, useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setComments} from "./store";
import Child from './Child';
import Show from './Show';

const Merge = () => {
  const dispatch = useDispatch();
  const [mergedData, setMergedData] = useState([]);

  const products = useSelector((state) => state.data.products);
  const comments = useSelector((state) => state.data.comments);

  const handleComments = useCallback(
    (commentsData) => {
      dispatch(setComments(commentsData));
    },
    [dispatch]
  );

  useEffect(() => {
    if(products.length > 0 && comments.length > 0) {
      const merged = products.map((p, i) => ({
        ...p,
        comment: comments[i] ? comments[i].body:"No Comment",
      }));
      setMergedData(merged);
    }
  },[products, comments]);

  return (
    <div>
    <h2>Merge Component</h2>
    <Child sendComments={handleComments}/>
    <Show mergedData={mergedData}/> 
    </div>
  )
}

export default Merge
