import React,{Component} from 'react';
import ReactDOM from 'react-dom';


class CreateNode extends Component{
    constructor(props){
        super(props);
        this.state = {name: '', email:''}
    }
    render() {
        return (
            <form onSubmit={event => this.submitNode(event)}>
                <input type="text" onChange={name => this.onInputChangeName(name)}/>
                <input type="email" onChange={email => this.onInputChangeEmail(email)}/>
                <button>add</button>
            </form>
        )
    }
    onInputChangeName(name){
        this.setState({name});
    }
    onInputChangeEmail(email){
        this.setState({email});
    }
    submitNode(event){
        event.preventDefault();
        let obj = {name: this.state.name, email:this.state.email};
        this.props.getProps(obj)
    }


}

export default CreateNode;