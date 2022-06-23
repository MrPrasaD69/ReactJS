import React,{Component} from 'react';

class FetchClass extends Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    componentDidMount(){
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