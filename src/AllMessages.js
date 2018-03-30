import React from 'react';
import SingleMessage from './SingleMessage';

const AllMessages = (props) => {
  console.log("AllMessages Props", props.allMessages)
  return (
    <div>
      <SingleMessage singleMessageProps = {props}/>
    </div>
  )
}

export default AllMessages;
