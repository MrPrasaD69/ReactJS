import React,{Component} from 'react';

class FetchClass extends Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    //With lifecycle method.
    // componentDidMount(){
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //     .then((res)=>res.json())
    //     .then(datalist => {
    //         this.setState({data:datalist});
    //     })
    // }

    //With a button click.
    GetData=()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>res.json())
        .then(datalist => {
            this.setState({data:datalist});
        })
    }

    render(){
        return(
            <div>
                <p>Hi</p>
                <button onClick={this.GetData}>Get DATA</button>
                {
                    this.state.data.map((newdata)=>{
                        return(
                            <div key={newdata.id}>
                                <p>{newdata.title}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default FetchClass;