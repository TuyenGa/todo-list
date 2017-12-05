import React,{Component} from 'react';

class TodoList extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let renderListItem = this.props.todolist.map((user,index) =>{
            return (
                <li
                    className='list-group-item'
                    key={index}
                    onClick={() => this.props.onClickSubmit(index)}
                >
                    {user}
                </li>
            )
        });
        return(
            <ul className="list-group">
                {renderListItem}
            </ul>
        )
    }
}
export default TodoList;