function Notification({message}:{message:string}) {
  return (
    <div className='notification-container'>
       <div id="toastBox">
            <div className="toast">  {message}</div>
        </div>
    </div>
  )
}

export default Notification
