import React, {Component} from 'react';

class Todo extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <form className='form-group' onSubmit={this.props.onForcusSubmit}>
                <input className='form-control' type="text" onChange={this.props.onChangeProp}/>
                <button className='btn btn-default'>Add</button>
            </form>
        )
    }
}
export default Todo;