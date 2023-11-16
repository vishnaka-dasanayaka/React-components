import React, { useState, useRef, useEffect } from 'react';

function Timer() {

    const Ref = useRef(null);
    const [timer, setTimer] = useState('00:00:00');
 
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }
 
    const startTimer = (e) => {
        let { total, hours, minutes, seconds }
                    = getTimeRemaining(e);
        if (total >= 0) {
 
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }
 
    const clearTimer = (e) => {
 
        setTimer('00:00:10');
 
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
 
    const getDeadTime = () => {
        let deadline = new Date();
 

        deadline.setSeconds(deadline.getSeconds() + 10);
        return deadline;
    }


    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);

    const onClickReset = () => {
        clearTimer(getDeadTime());
    }
 



  return (
    <div>
      <div className="App flex flex-col justify-center items-center">
            <h2 className='text-3xl text-red-600 font-extrabold tracking-widest'>{timer}</h2>
            <button className='w-fit hover:bg-green-900 hover:text-white bg-primary px-5 py-1 rounded-lg uppercase font-semibold' onClick={onClickReset}>Reset</button>

        </div>

    </div>
  )
}

export default Timer
