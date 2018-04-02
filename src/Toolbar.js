import React from 'react';

const Toolbar = (props) => {

  let markReadFunction = props.stateFunctions.markReadFunc
  let markUnreadFunction = props.stateFunctions.markUnreadFunc
  let deleteFunction = props.stateFunctions.deleteFunc
  let applyLabelFunction = props.stateFunctions.applyLabelFunc
  let removeLabelFunction = props.stateFunctions.removeLabelFunc

  return (
    <div className="row toolbar">
      <div className="col-md-12">

        <button className="btn btn-default">
          <i className="fa fa-square-o"></i>
        </button>

        <button className="btn btn-default" onClick={markReadFunction} disabled="">
          Mark As Read
        </button>

        <button className="btn btn-default" onClick={markUnreadFunction} disabled="">
          Mark As Unread
        </button>

        <select className="form-control label-select" onChange={applyLabelFunction} disabled="">
          <option>Apply label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <select className="form-control label-select" onChange={removeLabelFunction} disabled="">
          <option>Remove label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <button className="btn btn-default" onClick={deleteFunction} disabled="">
          <i className="fa fa-trash-o"></i>
        </button>
      </div>
    </div>
  )
}

export default Toolbar;
