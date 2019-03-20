import React, { Component } from 'react';
import './App.css';

const Post = ({url, comment}) => (
  <div className='post' >
    <div className='comment'>{comment}</div>
    <img src={url} className='image' alt="logo" />
  </div>
)
class App extends Component {
  constructor(props) {
    super(props)
    this.state= {
      one: {
          url: 'https://thumbs.dreamstime.com/z/zip-line-26475548.jpg',
          comment: 'Totally Cool'
        },
      two:
        {
          url: "https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1450248078000/photosp/e41c1f0f-2ed5-4f78-b92b-9900340b5d1a/stock-photo-river-travel-adventure-walking-foot-feet-boots-hike-going-e41c1f0f-2ed5-4f78-b92b-9900340b5d1a.jpg",
          comment: 'Far From Everywhere'
        }
    }
    this.urlInput = React.createRef();
    this.commentInput = React.createRef();
  }
  submit() {
    const key = Math.floor(1000*Math.random()).toString()
    const obj = {}
    obj[key] = { url: this.urlInput.current.value, comment: this.commentInput.current.value }
    this.setState(obj)
    this.commentInput.current.value = this.urlInput.current.value = ''
  }
  render() {
    return (
      <div className="App">
        <div className="feed">
          <div className="inputs">
            <div className='row' >
              <input ref={this.urlInput} placeholder="Enter URL" className="input" />
            </div>
            <div className='row'>
              <input placeholder="Title" ref={this.commentInput} className="input" />
              <input value="New Post" type="submit" onClick={this.submit.bind(this)} />
            </div>
          </div>
          {Object.keys(this.state).map(key => <Post key={key} {...this.state[key]} />)}
        </div>
      </div>
    );
  }
}

export default App;
