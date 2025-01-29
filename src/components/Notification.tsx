import React from 'react'

function Notification({message}:{message:string}) {
  return (
    <div className='notifivation-container'>
       <div id="toastBox">
            <div className="toast">  {message}</div>
        </div>
    </div>
  )
}

export default Notification
