import React, { Component } from 'react';
import PubSub from 'pubsub-js';
// import axios from 'axios';
class Search extends Component {

  search = async () => {
    const { keyWordElement: { value: keyword } } = this
    console.log(keyword)
    // 发送请求前，通知App更新状态
    PubSub.publish('getStateMsg', {isFirst: false, isLoading: true})
    
    /* axios.get(`http://localhost:3000/api1/search/users?q=${keyword}`).then(
      res => {
        // this.props.updateAppState({ isLoading: false, users: res.data.items })
        PubSub.publish('getStateMsg', {isLoading: false, users: res.data.items})
      },
      err => {
        // this.props.updateAppState({ isLoading: false, err: err.message })
        PubSub.publish('getStateMsg', {isLoading: false, err: err.message})
      }
    ) */

    /* fetch(`/api1/search/users2?q=${keyword}`).then(
      res => {
        console.log('联系服务器成功了')
        // .then所指定的成功的回调有返回值，返回一个Promise 后面再继续处理
        return res.json()
      },
      // err => {
      //   console.log('联系服务器失败了', err)
      //   return new Promise()  // 中断Promise链 不然返回的是undefined，默认就会继续走下去。
      // }
    ).then(
      res => {
        console.log('获取数据成功了', res)
      },
      // err => {
      //   console.log('获取数据失败了', err)
      // }
    ).catch(
      err => console.log(err)
    ) */

    /* fetch(`/api1/search/users2?q=${keyword}`).then(
      res => {
        console.log('联系服务器成功了')
        // .then所指定的成功的回调有返回值，返回一个Promise 后面再继续处理
        return res.json()
      },
    ).then(
      res => { console.log('获取数据成功了', res) },
    ).catch(
      err => console.log('请求出错', err)
    ) */

    try {
      const res = await fetch(`/api1/search/users2?q=${keyword}`)
      const data = await res.json()
      PubSub.publish('getStateMsg', {isLoading: false, users: data.items})
    } catch (err) {
      console.log('请求出错', err)
      PubSub.publish('getStateMsg', {isLoading: false, err: err.message})
    }
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