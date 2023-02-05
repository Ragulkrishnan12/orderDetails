import React from "react";
import "./Todo.css";

class Todo extends React.Component {
  render() {
    return (
      <div className="container ">
        <div>
          <h4>Todo-APP-LIST :</h4>
          <hr />
          <div>
            <ul className="just">
              <div className="just flex">
                <li>work1</li>
                <button>ADD</button>
                <button>delete</button>
              </div>
              <hr />
              <div className="just flex">
                <li>work2</li>
                <button>ADD</button>
                <button>delete</button>
              </div>
              <hr />
              <div className="just flex">
                <li>work3</li>
                <button>ADD</button>
                <button>delete</button>
              </div>
              <hr />
              <div className="just flex">
                <li>work4</li>
                <button>ADD</button>
                <button>delete</button>
              </div>
              <hr />
            </ul>
          </div>
          <div>
            <h5>WORK ADDEDED LIST:</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
