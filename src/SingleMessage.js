import React from 'react';

const SingleMessage = (props) => {
  console.log("SingleMessage Props", props.singleMessageProps.allMessages)
  let starFunction = props.singleMessageProps.stateFunctions.starFunc



  let singleMessageMap = props.singleMessageProps.allMessages.map((item) => {

    let readStatus = '';
    if (item.read === true) {
      readStatus = "read"
    } else {
      readStatus = "unread"
    }

    let starStatus = 'fa fa-star-o';
    if (item.starred === true) {
      starStatus = "fa fa-star"
    }

    let devLabelVisibility = 'hide-label';
    let gschoolLabelVisibility = 'hide-label';
    let personalLabelVisibility = 'hide-label';

    if (item.labels.length === 0) {
      devLabelVisibility = 'hide-label'
      gschoolLabelVisibility = 'hide-label'
      personalLabelVisibility = 'hide-label'
    }
    for (let i = 0; i < item.labels.length; i++) {
      if (item.labels[i] === "dev") {
        devLabelVisibility = '';
      }
      if (item.labels[i] === "gschool") {
        gschoolLabelVisibility = '';
      }
      if (item.labels[i] === "personal") {
        personalLabelVisibility = '';
      }
    }

    return (
      <div className={`row message ${readStatus}`}>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" />
            </div>
            <div className="col-xs-2">
            <i className={`${starStatus}`} onClick={starFunction}></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11">
          <span className={`label label-warning ${devLabelVisibility}`}>dev</span>
          <span className={`label label-warning ${gschoolLabelVisibility}`}>gschool</span>
          <span className={`label label-warning ${personalLabelVisibility}`}>personal</span>
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
