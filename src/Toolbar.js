import React from 'react';

const Toolbar = () => {
  return (
    <div className="row toolbar">
      <div className="col-md-12">

        <button className="btn btn-default">
          <i className="fa fa-square-o"></i>
        </button>

        <button className="btn btn-default" disabled="">
          Mark As Read
        </button>

        <button className="btn btn-default" disabled="">
          Mark As Unread
        </button>

        <select className="form-control label-select" disabled="">
          <option>Apply label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <select className="form-control label-select" disabled="">
          <option>Remove label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <button className="btn btn-default" disabled="">
          <i className="fa fa-trash-o"></i>
        </button>
      </div>
    </div>
  )
}

export default Toolbar;
