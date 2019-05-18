import React from 'react';
import { TextArea, Button, InlineNotification } from 'carbon-components-react';

class Feedback extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: this.props.issueTitle,
      body: '',
      labels: this.props.labels
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendToServer = this.sendToServer.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState(Object.assign({}, this.state, {body: e.target.value}));
  }

  handleSubmit(e) {
    e.preventDefault()
    this.sendToServer()
  }


  sendToServer() {
    var url = 'http:/localhost:6003/api/0.1/issue';

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(this.state), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => { console.log(response.body) })
    .catch((error) => { console.log(error)});
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextArea
          labelText="Leave your feedback"
          helperText="What questions do you have after reading this material?"
          className="feedback"
          placeholder="How do you get so awesome?!"
          onChange={this.handleChange}/>

        <Button type="submit" >
          Submit
        </Button>
      </form>
    )
  }
}

export default Feedback;
