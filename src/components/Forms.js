import React from 'react';
/*An input form element whose value is controlled by React in this
 way is called a “controlled component”.*/

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.returnNull = this.returnNull.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  returnNull(event) {
    console.log("returned null");
    this.setState({
      value: ""
    });  // Non Editable field
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input value="hi" onChange={this.returnNull}/>  // Non editable input, since value is already provided
        Writeable: <input value="hello" onChange={this.returnNull} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export {NameForm};