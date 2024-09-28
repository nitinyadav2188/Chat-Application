import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App=()=>{
    return (
        <ChatEngine
            height="100vh"
            projectID="
457fb8fc-0ffa-476e-bbdd-f42aa6ea778c"   //project ki id chatengine.io se
            userName="nitin3647"    //user name of the user
            userSecret="2188"  //user ka password hoga
            renderChatFeed={(ChatAppProps)=> <ChatFeed  {... ChatAppProps }/>}
        />
    );
}

export default App;