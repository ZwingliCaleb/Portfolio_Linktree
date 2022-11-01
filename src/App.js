import React from 'react'
import DisplayPic from './components/DisplayPic';
import LinkButtons from './components/LinkButtons'
import TextBanner from './components/TextBanner';
import picture from './CALEB.jpg'

function App() {
  return (
    <div style={{
       textAlign: 'center',
       alignItems: 'center',
       justifyContent: 'center'
      }}>
    <div style={{
      alignItems: 'center',
      display: 'flex'
    }}>   
     <DisplayPic
      picture={picture}
    />
    </div>  
    <TextBanner
     title="Caleb Zwingli"
     /> 
    <LinkButtons
     name="Twitter Link"
     link="https://twitter.com/ZwingliCaleb"
     />
    <LinkButtons
     name="Zuri Team"
     link="https://training.zuri.team"
     />
    <LinkButtons
     name="Zuri Books"
     link="https://books.zuri.team"
     /> 
    <LinkButtons
     name="Python Books"
     link="https://books.zuri.team"
     /> 
    <LinkButtons
     name="Background Check for coders"
     link="https://background.zuri.team"
     /> 
    <LinkButtons
     name="Design Books"
     link="https://books.zuri.team/design-rules"
     />  
    </div>
  );
}

export default App;
