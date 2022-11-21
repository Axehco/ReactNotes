import React, { Component } from 'react';
import './index.css'

export default class Item extends Component {

  state = {mouse: false}  // 标识鼠标移入移出

  handleMouse = (flag) => {
    return () => {
      this.setState({mouse: flag})
    }
  }

  handleCheck = (id) => {
    return (event) => {
      // console.log(id, event.target.checked)
      this.props.updateTodo(id, event.target.checked)
    }
  }

  render() {
    const {id, name, done} = this.props
    return (
      <div>
        <li style={{backgroundColor:this.state.mouse ? '#ddd' : 'white'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
          <label>
            <input type="checkbox" defaultChecked={done} onChange={this.handleCheck(id)} />
            <span>{name}</span>
          </label>
          <button className="btn btn-danger" style={{ display: this.state.mouse ? 'block' : 'none'}}>删除</button>
        </li>
      </div>
    );
  }
}
