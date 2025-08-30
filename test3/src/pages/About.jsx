import React from "react";
import {useSelector} from 'react-redux'

const About = () => {
    const count = useSelector((state) => state.counter.value)
  return <div>It's my about section</div>;
};

export default About;
