import FadeIn from 'react-fade-in'
import Header from './components/Header'
import DesktopBody from './components/DesktopBody';
import './App.css';


const { innerHeight, innerWidth } = window;

function App() {
  return (
    <div className="App">
        {

        // temporarily making this always true, forcing a desktop view    
        innerWidth >= -690 
        
        ?  
        
        //desktop site
        <FadeIn>
          <Header deviceWidth={innerWidth}/>
          <DesktopBody/>
        </FadeIn>
        
        :
        
        //mobile site
        <FadeIn>
          hello mobile user
          <Header deviceWidth={innerWidth}/>
        </FadeIn>
        
        }
    </div>
  );
}

export default App;
