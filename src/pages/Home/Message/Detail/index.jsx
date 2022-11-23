import React, { Component } from 'react';

const DetailData = [
  { id: '01', content: '你好，中国' },
  { id: '02', content: '你好，世界' },
  { id: '03', content: '你好，未来的自己' }
]

class Detail extends Component {
  render() {
    // console.log(this.props);
    const {id, title} = this.props.match.params
    const findResult = DetailData.find((detailObj) => {
      return detailObj.id === id
    })

    return (
      <div>
        <li>id: {id}</li>
        <li>title: {title}</li>
        <li>content: {findResult.content}</li>
      </div>
    );
  }
}

export default Detail;