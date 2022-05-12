import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:false
      }
    }
  render() 
    {
        return(
            this.state.isLoggedIn ? //ternary operator approach
            <div>Welcome Prasad</div> : <div>Welcome Guest</div>
        )

        // let message; //ELEMENT VARIABLE APPROACH
        // if(this.state.isLoggedIn)
        // {
        //     message=<div>Welcome Prasad</div>
        // }
        // else
        // {
        //     message=<div>Welcome Guest</div>
        // }
        // return(
        //     <div>{message}</div>
        // )

    //   if(this.state.isLoggedIn)
    //   {
    //     return(
    //         <div>
    //             <h3>Welcome Prasad</h3>
    //       </div>
    //     )
    //   }
    //     else
    //     {
    //       return(
    //         <div>
    //             <h3>Welcome Guest</h3>
    //       </div>
    //       )
    //     }
    }
}

export default UserGreeting