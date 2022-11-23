import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom'
import Detail from './Detail'

class Message extends Component {
  state = {
    messageArr: [
      { id: "01", title: '消息1' },
      { id: "02", title: '消息2' },
      { id: "03", title: '消息3' }
    ]
  }

  render() {
    const { messageArr } = this.state
    return (
      <div>
        <ul>
          {
            messageArr.map((megObj) => {
              return (
                <li key={megObj.id}>
                  {/* 向路由组件传递params参数 */}
                  {/* <Link to={`/home/message/detail/${megObj.id}/${megObj.title}`}>{megObj.title}</Link> */}


                  {/* 向路由组件传递search参数 */}
                  <Link to={`/home/message/detail/?id=${megObj.id}&title=${megObj.title}`}>{megObj.title}</Link>
                </li>
              )
            })
          }
        </ul>
        <hr />
        {/* 声明接收params参数 */}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail}/> */}

        {/* search参数无需声明接收，正常注册路由即可 */}
        <Route path="/home/message/detail" component={Detail}/>
      </div>
    );
  }
}

export default Message;