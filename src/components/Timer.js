import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import '../App.css';
import './Timer.css';
export default function Timer(){
    const [seconds, setSeconds] = useState('59');
    const [minutes, setMinutes] = useState('9');
    const [classModelOpen,setClassModalOpen] = useState(false);
    const [endclassModelOpen,setEndClassModalOpen] = useState(false);
    const [flag,setflag]=useState(false);
    const dropdownlist = ["Class completed", "Class interrupted/aborted", "Other reason"];
    const interuptedlist = ["Student didn't show up for the class.","Student didn't show any interest.","Student got disconnected","I got disconnected"]; 
    const handleClick = () => setflag(!flag);
    const [selected, setSelected] = useState('');
    //console.log(selected);

    function changeHandler(e){
      setSelected(e.target.value);
    }
    useEffect(() => {
        let myInterval = setInterval(() => {
          if (seconds > 0) {
              setSeconds(seconds - 1);
          }
          if (seconds === 0) {
              if (minutes === 0) {
                  clearInterval(myInterval)
              } else {
                  setMinutes(minutes - 1);
                  setSeconds(59);
              }
          } 
      }, 1000)
      return ()=> {
          clearInterval(myInterval);
        };
        
  });
    return(
        <div className="timer">
            <button onClick={()=> setClassModalOpen(true)}>Start Class</button>
            <Modal isOpen={classModelOpen} onRequestClose={()=> setClassModalOpen(false)}>
                <div className="level">
                    <p>Trial Lesson [Grade 1-3]</p>
                    <div>
                      { minutes === 0 && seconds === 0 ? null: <h2> {minutes}:{seconds < 10 ?  `${seconds}` : seconds}</h2> }
                    </div>
                    <button onClick={()=> setEndClassModalOpen(true)}>End Class</button>
                    < Modal isOpen={endclassModelOpen} onRequestClose={()=> setEndClassModalOpen(false)}>
                        <h2 onClick={ handleClick }>
                          {dropdownlist.map(list=> (<li key={list}><span>{list}</span></li>))}
                          <h6>{flag && (interuptedlist.map(list=> (<li key={list}><span>{list}</span></li>)))}</h6>
                      </h2>
                      <button onClick={() => setClassModalOpen(false)}>Cancel Class</button>
                    </Modal>
                </div>
                {/* <div>
                   <h2 onClick={ handleClick }>
                       {dropdownlist.map(list=> (<li key={list}><span>{list}</span></li>))}
                      <h6>{flag && (dropdownlist.map(list=> (<li key={list}><span>{list}</span></li>)))}</h6>
                   </h2>
                </div>
                <button onClick={() => setClassModalOpen(false)}>Cancel Class</button> */}
            </Modal>
        </div>
    )
}


