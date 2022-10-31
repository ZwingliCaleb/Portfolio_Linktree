import React from 'react'
import LinkButtons from './components/LinkButtons'

function App() {
  return (
    <div>
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
