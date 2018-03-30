import React from 'react';

const SingleMessage = (props) => {
  console.log("SingleMessage Props", props.singleMessageProps.allMessages)
  let singleMessageMap = props.singleMessageProps.allMessages.map((item) => {
    return (

      <div class="row message read">
        <div class="col-xs-1">
          <div class="row">
            <div class="col-xs-2">
              <input type="checkbox" />
            </div>
            <div class="col-xs-2">
              <i class="star fa fa-star"></i>
            </div>
          </div>
        </div>
        <div class="col-xs-11">
          <span class="label label-warning">dev</span>
          <span class="label label-warning">gschool</span>
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
