import { ChatEngine } from 'react-chat-engine';

import './App.css';

const App=()=>{
    return (
        <ChatEngine
            height="100vh"
            projectID="
457fb8fc-0ffa-476e-bbdd-f42aa6ea778c"   //project ki id chatengine.io se
            userName="nitin3647"    //user name of the user
            userSecret="21882188"  //user ka password hoga
        />
    );
}

export default App;