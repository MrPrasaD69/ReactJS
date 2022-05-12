import React, {Component} from 'react';

class Welcome extends Component{
    render(){
        const {name} = this.props;
        return (
        <div className='Main-Frame'> 
            <h4>Welcome, {name}. THiS is CLASS COMPONENT</h4> 
        </div>)
        
    }
}

export default Welcome;