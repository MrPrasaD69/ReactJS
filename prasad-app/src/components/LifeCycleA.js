import React, { Component } from 'react'

class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Prasad'
      }
      console.log('LifeCycle Constructor');
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifeCycle Constructor getDerivedStateFromProps');
        return null;
    }

    componentDidMount()
    {
        console.log('LifeCycle A componentDidMount');
    }

  render() {
    console.log('LifeCycle A Render');
    return (
      <div>LifeCycle A</div>
    )
  }
}

export default LifeCycleA