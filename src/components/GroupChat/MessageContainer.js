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

                if(e.name == this.props.name){

                return <Message 
                            key={i}
                            name={e.name}
                            message={e.message}
                            picture={e.picture}
                            timestamp={e.timestamp}
                            self={true}
                            color={e.color}
                            border={{borderRightColor: e.color}}
                        />
                } else {

                    return <Message 
                            key={i}
                            name={e.name}
                            message={e.message}
                            picture={e.picture}
                            timestamp={e.timestamp}
                            self={false}
                            color={e.color}
                            border={{borderLeftColor: e.color}}
                        />

                }
        }) 

        return (
            <div onKeyPress={this.props.enter} className='messaging-container'>
                <div className='messages'>
                    {messages}
                    <div className='spacer' ref={messagesEnd => this.messagesEnd = messagesEnd}></div>   
                </div>

                <div className='message-input-container'>
                    <textarea name='message' onChange={(e) => this.props.changeHandler(e.target.name, e.target.value)} value={this.props.message} />
                    <button onClick={this.props.submitMessage}>submit</button>
                </div>
            </div>
        );
    }
}