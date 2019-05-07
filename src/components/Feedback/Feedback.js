import React from 'react'
import TextArea from "carbon-components-react/lib/components/TextArea";
import Button from "carbon-components-react/lib/components/Button";
import InlineNotification from "carbon-components-react/lib/components/Notification";

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

    /* TODO Toggling disabled doesn't work */
    if (this.state.body !== '') {
      document.querySelector('button[type=submit]').removeAttribute('disabled');
    }

    else {
      document.querySelector('button[type=submit]').disabled = true;
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.sendToServer()
  }


  sendToServer() {
    var showSuccess = (response) => {
      document.querySelector('.success.hidden').classList.remove('hidden');
    };

    var showError = (error) => {
      document.querySelector('.error.hidden').classList.remove('hidden');
    };

    var url = '/issue';
    // var url = 'https://api.github.ibm.com/repos/ai-sandbox/feedback/issues';

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(this.state), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => { console.log(response.body) })
    .catch((error) => { showError(error) });
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

        <Button disabled type="submit" >
          Submit
        </Button>

        <InlineNotification
          kind="success"
          title="Success"
          subtitle="We got it. Thanks!"
          className="success hidden"/>

        <InlineNotification
          kind="error"
          title="Uh oh"
          subtitle="There was a server issue. Try again later."
          className="error hidden"/>
      </form>
    )
  }
}

export default Feedback
