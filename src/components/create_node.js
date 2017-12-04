import React,{Component} from 'react';
import ReactDOM from 'react-dom';


class CreateNode extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <form onSubmit={this.props.onForSubmit} className="form-group">
                <input  className="form-control" type="text" onChange={this.props.onForcus} />
                <button className="btn btn-primary">add</button>
            </form>
        )
    }




}

export default CreateNode;
