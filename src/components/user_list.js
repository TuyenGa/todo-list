import React,{Component} from 'react';
import UserListItem from './user_list_item';
const users = [
                {name: 'lucas' , email:'vuongquangtuyendz@gmail.com'},
                {name: 'Tuyen' , email: 'Tuyenga@gmail.com'}
            ];
class UserList extends Component{
    constructor(props){
        super(props);
        this.state = {
            users : users
        };

    }

    render(){
        let renderUserItems = this.state.users.map((user, index) => (
                        <UserListItem deleteHandler={name => this.deleteUser(name)} key={index} name={user.name} email={user.email}/>
                    ));

        return(
            <ul >
                {
                    renderUserItems
                }
            </ul>
        )
    }

    deleteUser(name){
        let newUsers = this.state.users.filter(user => user.name !== name )
        this.setState({users:newUsers})
    }
}
export default UserList;