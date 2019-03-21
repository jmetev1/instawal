import React, { Component } from 'react';
import './App.css';
import Post from './Post'
import Error from './Error'
class App extends Component {
  constructor(props) {
    super(props)
    //i put my posts into an object because adding posts is faster that way.
    this.state= {
      one: {
        url: 'https://thumbs.dreamstime.com/z/zip-line-26475548.jpg',
        comment: 'Totally Coolio'
      },
      two:
        {
          url: "https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1450248078000/photosp/e41c1f0f-2ed5-4f78-b92b-9900340b5d1a/stock-photo-river-travel-adventure-walking-foot-feet-boots-hike-going-e41c1f0f-2ed5-4f78-b92b-9900340b5d1a.jpg",
          comment: 'Far From Everywhere'
        }, 
      error: false
      }
    this.urlInput = React.createRef();
    this.commentInput = React.createRef();
  }
  submit() {
    const hash = Math.floor(10*Math.random())
    const url = this.urlInput.current.value 
    const comment = this.commentInput.current.value
    const urlHash = url + hash
    const obj = {}
    this.commentInput.current.value = this.urlInput.current.value = ''

    var checkUrl = new Promise((resolve, reject) => {
      var img = new Image();
      img.onload = resolve 
      img.onerror = reject
      img.src = url 
    })
    const ifValid = value => {
      obj[urlHash] = { url, comment  }
      this.setState( obj)
      this.setState({ error: false })
    }
    const notValid = value => this.setState({error: true})
    checkUrl.then(ifValid, notValid)
  }

  render() {
    return (
      <div className="App">
        <div className="feed">
          <div className="inputs">
            <h2 className='message'>Please try an invalid url</h2>
            <div className='row' >
              <input ref={this.urlInput} placeholder="Enter URL" className="input" 
                defaultValue='https://thumbs.dreamstime.com/z/zip-line-26475548.jpg'
              />
            </div>
            <div className='row'>
              <input placeholder="Title" ref={this.commentInput} className="input" />
              <input value="New Post" type="submit" onClick={this.submit.bind(this)} />
            </div>
            {
              this.state.error && 
            <Error />}
          </div>
          {Object.keys(this.state).reduceRight((acc, key) => {
            if (key !== "error") acc.push(<Post key={key} {...this.state[key]} />)
            return acc
          }, [])}
        </div>
      </div>
    );
  }
}

export default App;
