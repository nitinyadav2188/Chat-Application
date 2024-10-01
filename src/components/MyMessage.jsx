const MyMessage = ({MyMessage}) =>{
if (message?.attachments?.length>0)
{
    return(
        <img       
        src={message.attachments[0].file}
        alt="message-attachement"
        className="message-image"
        style={{float:'right' }}
        />
    )
}
    return(
        <div>
            MyMessage
        </div>
    )
}

export default MyMessage;