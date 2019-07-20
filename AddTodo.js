import React from 'react';

class AddTodo extends React.Component {
    state = {
        title : ""
    }

    onChange = (e) => this.setState({[e.target.name] : e.target.value});
    onSubmit = (e) => {
      e.preventDefault();
      if(this.state.title !== '')
      this.props.toadd(this.state.title);
      // console.log(this.state.title);
      this.setState( {title: ''} );
    }
    render(){
        return(
                <form className=" container input-group mx-auto m-3" onSubmit ={this.onSubmit} >
                <input 
                name = "title"
                className="form-control" 
                type="text" 
                value = {this.state.title}
                onChange = {this.onChange}
                ></input>
                <div className="input-group-append">
                  <button 
                  type="submit"
                  value="submit"
                  className="btn btn-primary"
                  >ADD TASK</button>
                </div>
                
                </form>
                )
    }
}

export default AddTodo;