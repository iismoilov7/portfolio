import React from 'react'

interface LoadingProps {
  
}

const Loading: React.FC<LoadingProps> = ({}) => {
  return ( 
    <div className="loading animate__animated">
      <div className="loading__icon"></div>
    </div>
  )
}

export default Loading;
