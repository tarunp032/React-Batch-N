import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { toggleShow} from "./store";

const Show = ({mergedData}) => {
  const dispatch = useDispatch();
  const showData = useSelector((state) => state.data.showData);


  return (
    <div>
    <h2>Show Component</h2>
    <button onClick={() => dispatch(toggleShow())}>
    {showData ? "Hide Data" : "Show Data"}
    </button>

    {showData && (
      <div>
        <h3>Top 20 Products and Comments below here!</h3>
        <ul>
          {mergedData.map((item, index) => (
            <li key={item.id || index}>
            <strong>{item.title}</strong> -> {item.comment}
            </li>
          ))}
        </ul>
      </div>
    )}
    </div>
  )
}

export default Show
