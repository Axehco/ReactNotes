import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {

  search = () => {
    // console.log(this.keyWordElement.value)

    // 常规解构赋值
    // const {value} = this.keyWordElement
    // console.log(value)

    // 连起来写解构赋值
    // const {keyWordElement} = this
    // const {value} = keyWordElement
    // console.log(value)

    // 精简版：同时改名字
    const { keyWordElement: { value: keyword } } = this
    // console.log(keyword)
    // 发送请求前，通知App更新状态
    this.props.updateAppState({ isFirst: false, isLoading: true })
    axios.get(`http://localhost:3000/api1/search/users?q=${keyword}`).then(
      res => {
        this.props.updateAppState({ isLoading: false, users: res.data.items })
      },
      err => {
        // console.log(err)
        this.props.updateAppState({ isLoading: false, err: err.message })
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