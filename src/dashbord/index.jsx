import React from 'react' 
import './index.css'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'zhangtian',
      age: '9999',
      money: '83492323',
      checkBackGround:  '1',
      title: [
        {key: '1', value: '首页'},
        {key: '2', value: '商城'},
        {key: '3', value: '支付'}
      ]
    }
  }
  /**
   * 动态渲染dom
   */
  titleBack() {
    return this.state.title.map(val => {
      return (
        <div className="title-single" key={val.key} style={this.caleTitle(val)}>
          <span onClick={this.titleClick}>{val.value}</span>
        </div>
      )
    })
  }
  /**
   * 事件
   */
  caleTitle(val) {
    // if (val.key === this.state.checkBackGround) return {'backgroundColor' : 'red'}
    // return {}
  }
  titleClick = () => {
    this.setState((state, props) => ({
      title: [
        {key: '1', value: '111'},
        {key: '2', value: '222'},
        {key: '3', value: '333'}
      ]
    }))
  }

  render () {
    return (
      <div className="dashbord">
        <div className="title">
          {this.titleBack()}
        </div>
      </div>
    )
  }
}
export default Dashboard
