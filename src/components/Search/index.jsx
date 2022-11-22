import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import axios from 'axios';
class Search extends Component {

  search = () => {
    const { keyWordElement: { value: keyword } } = this
    console.log(keyword)
    // 发送请求前，通知App更新状态
    PubSub.publish('getStateMsg', {isFirst: false, isLoading: true})
    axios.get(`http://localhost:3000/api1/search/users?q=${keyword}`).then(
      res => {
        // this.props.updateAppState({ isLoading: false, users: res.data.items })
        PubSub.publish('getStateMsg', {isLoading: false, users: res.data.items})
      },
      err => {
        // this.props.updateAppState({ isLoading: false, err: err.message })
        PubSub.publish('getStateMsg', {isLoading: false, err: err.message})
      }
    )
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索GitHub用户</h3>
        <div>
          <input ref={c => this.keyWordElement = c} type="text" placeholder="关键字搜索" />&nbsp;
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    );
  }
}

export default Search;