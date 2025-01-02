import React from 'react'
import TypewriterComponent from 'typewriter-effect';

interface MessagesProps {
    status: string;
    message: string;
}

const Messages: React.FC<MessagesProps> = ({ message, status }) => {
  
  if(status == "success") {
    return ( 
        <div className="success mr-top-20">
            <TypewriterComponent options={{
                strings: ["❯ " + message],
                autoStart: true,
                loop: true,
            }} />
        </div>
      )
  } else {
    return ( 
        <div className="error mr-top-20">
            <TypewriterComponent options={{
                strings: ["❯ " + message],
                autoStart: true,
                loop: true,
            }} />
        </div>
      )
  }
    
}

export default Messages;
