import './App.css';
import Choice from './components/Choice';
import { useState } from 'react';
import scenarioArray from './scenario';
import choicesArray from './choices';
import deathArray from './death';
import boat from './boat.jpeg';
function App() {
  const [choiceInd, setChoiceInd] = useState(0);
  let pathInd = 0;
  const [scenarioInd, setScenarioInd] = useState(0);
  const [isVisible, setVisible] = useState("inline");
  const [deathTxt, setDeathTxt] = useState("");
  const beDamned = () => {
    
    if(choiceInd >= 2) {
      console.log("meep")
      setDeathTxt((deathArray[(choiceInd-2+pathInd)*3]));
      setVisible("none");
    }
  }
  const onClicked = (txt) => {
    beDamned();
    for(let i = 0; i<choicesArray[choiceInd].length; i++) {
      if(choicesArray[choiceInd][i] === txt) {
        pathInd = i;
      }
    }
    if (pathInd === 2) {
      setDeathTxt((deathArray[deathArray.length-1]));
      setVisible("none");
    } 
    if (choiceInd === 0) {
      if(pathInd === 0) {
        setChoiceInd(1);
        setScenarioInd(choiceInd + pathInd + 1);
      } else if (pathInd === 1) {
        setChoiceInd(5);
        setScenarioInd(4 + choiceInd + pathInd);
      }
    } else if (choiceInd === 1) {
      setChoiceInd(2 + pathInd);
      setScenarioInd(choiceInd + pathInd + 1);
    }
  }

  return (
    <div>
      <h1> GRAVE CHOICES </h1>
      <div style={{"display": isVisible==="none" ? "inline" : "none"}}>
      <div>
      </div>
          <div className="scenario">
            <p>
              {deathTxt}
            </p>
          </div>
          <h1> YOU BE DAMNED</h1>
      <img src="https://lh3.googleusercontent.com/proxy/K7A0Vj45UTKuq-xGKJo4HmMfUMmVBadQ3bHIHDwrtubRBDW_O8kEBUKo-0HLTiSqYKFoelDJwLJo1xQRdHZXQOo29zGSMGo" width="300" height="200"></img>
      </div>
      <div style={{"display": isVisible}}>
        <img width="200" src={boat}/>
        <div className="scenario">
          <p>
            {
              scenarioArray[scenarioInd]
            }
          </p>
        </div>
        <div className="choices">
          {
          choicesArray[choiceInd].map((item)=>{
            return <div key={item}> <Choice onClicked={onClicked} txt= {item} ></Choice> </div>
          })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
