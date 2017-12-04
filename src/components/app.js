import React , {Component} from 'react';
import UserList from './user_list';
import CreateNode from './create_node';


class App extends Component {
    render(){
        return (
            <div className="row">
                <CreateNode getProps={event =>this.getPropsCreateNode(event)}  />
                <UserList data={this.getPropsCreateNode()} />

            </div>
        )
    }
    getPropsCreateNode(event){
        console.log(event);
    }


}


export default App;