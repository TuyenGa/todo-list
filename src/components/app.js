import React, {Component} from 'react';
import Todo from '../container/todo';
import TodoList from '../container/todo_list';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            todo : '',
            todolist : []
        };

    }

    handleSubmit(e){
        e.preventDefault();
        let newList = this.state.todolist;
        newList.unshift(this.state.todo);
        this.setState({
            todolist: newList,
            todo: ''
        });
    }

    onChangeSubmit(e){
        e.preventDefault();
        this.setState({
            todo: e.target.value
        });

    }

    onClickSubmit(index){
        let newList = this.state.todolist.filter((user,id) =>{

            return id !== index;
        });
        this.setState({
            todolist : newList
        })
    }
    render(){
        return (
            <div className="row">
                <Todo onForcusSubmit={event => this.handleSubmit(event)} onChangeProp={event => this.onChangeSubmit(event)}/>
                <TodoList todolist={this.state.todolist} onClickSubmit={(index) =>this.onClickSubmit(index)}/>
            </div>
        )
    }
}
export default App;