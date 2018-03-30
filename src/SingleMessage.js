import React from 'react';

const SingleMessage = (props) => {
  console.log("SingleMessage Props", props.singleMessageProps.allMessages)

  let singleMessageMap = props.singleMessageProps.allMessages.map((item) => {
    let readStatus;
    if (item.read == true) {
      readStatus = "read"
    } else {
      readStatus = "unread"
    }
    return (
      <div className={`row message ${readStatus}`}>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" />
            </div>
            <div className="col-xs-2">
              <i className="star fa fa-star"></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11">
          <span className="label label-warning">dev</span>
          <span className="label label-warning">gschool</span>
          <a href="#">
            {item.subject}
          </a>
        </div>
      </div>
    )
  })
  return (
    <div>
      {singleMessageMap}
    </div>
  )
}

export default SingleMessage;
