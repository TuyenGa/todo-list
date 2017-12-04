import React,{Component} from 'react';

class UserList extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let renderUserItems = this.props.data.map((user, index) => {
          return(
              <li key={index} className="list-group-item"  onClick={() => this.props.onForClick(index)}>
                  <strong>{user}</strong>
              </li>
          )
        });

        return(
            <ul className="list-group">
                {
                    renderUserItems
                }
            </ul>
        )
    }

}
export default UserList;
