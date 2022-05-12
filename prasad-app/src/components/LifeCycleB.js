import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';

class LifeCycleB extends Component {
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
        console.log('LifeCycle B componentDidMount');
    }

  render() {
    console.log('LifeCycle B Render');
    return (
      <div>
          LifeCycle B
        <LifeCycleB></LifeCycleB>
      </div>
    )
  }
}

export default LifeCycleB