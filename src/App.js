import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import './App.css';

const steps = [
    {
        id: '0',
        message: 'Hey!',
 
        // This calls the next id
        // i.e. id 1 in this case
        trigger: '1',
    }, {
        id: '1',
 
        // This message appears in
        // the bot chat bubble
        message: 'What is your name?',
        trigger: '2'
    }, {
        id: '2',
        // Here we want the user
        // to enter input
        user: true,
        trigger: '3',
    
    },{
        id: '3',
        message: "{previousValue}",
        trigger: '2',
    }
];
 
// Creating our own theme
const theme = {
    background: '#D5F3FE',
    headerBgColor: '#FE8714',
    headerFontSize: '20px',
    botBubbleColor: '#0F3789',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#FD5E53',
    userFontColor: 'white',
};
 
// Set some properties of the bot
const config = {
    floating: true,
};
 
function App() {
    return (
        <>
            <div className = "header">
                <h1>Erasmus+ AI-bility</h1>
            </div>

            <div>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd3lsF-i5s2oYOOMxVYCN1pO2Npy0N2njNBn6al_ffQPwI5pQ/viewform?embedded=true" width="700" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>

            <div className = "instructions">
                <h3><u>Instructions:</u></h3>
                <p>Please answer the question on the Google Form. 
                You may not use the internet or ask anyone for help. 
                If you need any help, please used the chat icon at the 
                bottom of the page to ask your questions. Thank you!</p>
            </div>
            
            <div className="App">
            <ThemeProvider theme={theme}>
                <ChatBot
 
                    // This appears as the header
                    // text for the chat bot
                    headerTitle="GeekBot"
                    steps={steps}
                    {...config}
 
                />
            </ThemeProvider>
            </div>
        </>
    );
}
 
export default App;


