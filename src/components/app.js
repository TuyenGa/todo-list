import React , {Component} from 'react';
import UserList from './user_list';
import CreateNode from './create_node';


class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        todo:'',
        data: []
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);

    }
    handleSubmit(e){
      e.preventDefault();
      let newList = this.state.data;
      newList.unshift(this.state.todo);
      this.setState({
        data: newList,
        todo: ''
      });

    }
    handleChange(e){
      this.setState({
        todo: e.target.value || 'unknow'
      });

    }
    handleClick(index){
      let newList = this.state.data.filter((item,i) => {
        return i !== index;
      })
      this.setState({
        data: newList
      });
    }
    render(){
        return (
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <CreateNode onForSubmit={this.handleSubmit} onForcus={e => this.handleChange(e)} />
                <UserList data={this.state.data} onForClick={name => this.handleClick(name)} />
            </div>
          </div>
        )
    }


}


export default App;
