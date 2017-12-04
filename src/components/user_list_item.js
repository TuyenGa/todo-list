import React , {Component} from 'react';


class UserListItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <li>
                <strong>{this.props.name}</strong> , <em>{this.props.email}</em>
                <button onClick={event => this.handleClick(event)}>Delete</button>
            </li>
        )
    }
    handleClick(event){
        this.props.deleteHandler(this.props.name);
    }
}

export default UserListItem;