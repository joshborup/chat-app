import React, { Component } from 'react';
import Message from './Message';

export default class MessageContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            id:0
        }

        
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
      }
      
      componentDidMount() {
        this.scrollToBottom();
        
      }
      
      componentDidUpdate() {
        this.scrollToBottom();
      }

   
    render() {
        
        let messages = this.props.messages.map((e, i) => {
            if(this.props.username == e.name){
                return 
                <Message 
                    key={i}
                    name={e.name}
                    message={e.message}
                    picture={e.picture}
                    timestamp={e.timestamp}
                    username={true}
                />
            }else {
            return <Message 
                    key={i}
                    name={e.name}
                    message={e.message}
                    picture={e.picture}
                    timestamp={e.timestamp}
                />}
        }) 

        return (
            <div onKeyPress={this.props.enter} className='messaging-container'>
                <div className='messages'>
                    {messages}
                    <div className='spacer' ref={messagesEnd => this.messagesEnd = messagesEnd}></div>   
                </div>

                <div className='message-input-container'>
                    <input name='message' onChange={(e) => this.props.changeHandler(e.target.name, e.target.value)} value={this.props.message} />
                    <button onClick={this.props.submitMessage}>submit</button>
                </div>
            </div>
        );
    }
}