import { useState } from 'react';

function App() {
  const [result, setResult] = useState('');
  const [theme, setTheme] = useState('blue');

  const handleClick = (e) => setResult(result.concat(e.target.id));
  const clear = () => setResult('');
  const del = () => setResult(result.slice(0, -1));

  const calculate = () => {
    try {
      setResult(eval(result));
    } catch (error) {
      setResult('Error!');
      setTimeout(() => {
        setResult('');
      }, 3000);
    }
  };

  const handleMouseDown = (e) => {
    e.target.style.boxShadow = 'none';
    e.target.style.position = 'relative';
    e.target.style.top = '10px';
  };
  
  const handleMouseUp = (e) => {
    e.target.style.boxShadow = ''; 
    e.target.style.top = '0px';
  };

  const setYellowPalette = () => setTheme('yellow');
  const setRedPalette = () => setTheme('red');
  const setBluePalette = () => setTheme('blue');

  return (
    <div className={`body w-full h-screen flex items-center justify-center ${theme === 'yellow' ? 'bg-yellowBody' : ''} ${theme === 'blue' ? 'bg-body' : ''} ${theme === 'red' ? 'bg-redBody' : ''}`}>
      <div className={`calculator w-[30rem] h-[44rem] ${theme === 'yellow' ? 'bg-yellowCalculatorBackground shadow-yellowCalculatorBackgroundBoxShadow' : ''} ${theme === 'blue' ? 'bg-calculatorBackground shadow-calculatorBackgroundBoxShadow' : ''} ${theme === 'red' ? 'bg-redCalculatorBackground shadow-redCalculatorBackgroundBoxShadow' : ''} shadow-[0px_15px_0px] rounded-[20px]`}>
        <div className='w-[10rem] flex gap-[15px] ml-12 mt-10'>
          <button onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onClick={setRedPalette} className='rounded-[50%] bg-red-600 shadow-[0px_6px_0px] shadow-red-800 w-[2rem] h-[2rem]'></button>
          <button onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onClick={setYellowPalette} className='rounded-[50%] bg-yellow-500 shadow-[0px_6px_0px] shadow-yellow-700 w-[2rem] h-[2rem]'></button>
          <button onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onClick={setBluePalette} className='rounded-[50%] bg-blue-500 shadow-[0px_6px_0px] shadow-blue-800 w-[2rem] h-[2rem]'></button>
        </div>
        <div className='grid grid-cols-4 grid-rows-6 w-[30rem] h-[40rem] gap-7 p-[3rem] pt-5'>
          <input 
            type='text' 
            value={result}
            disabled 
            className={`display col-span-4 ${theme === 'yellow' ? 'bg-yellowOutput shadow-yellowOutputBoxShadow text-yellowOutputText' : ''} ${theme === 'blue' ? 'bg-output shadow-outputBoxShadow text-outputText' : ''} ${theme === 'red' ? 'bg-redOutput shadow-redOutputBoxShadow text-redOutputText' : ''} shadow-[0px_10px_0px] rounded-[20px] text-right text-[1.7rem] font-bold p-5`}
          />
          <button onClick={clear} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className={`${theme === 'yellow' ? 'bg-yellowClear' : ''} ${theme === 'yellow' ? 'shadow-yellowClearBoxShadow' : ''} ${theme === 'red' ? 'bg-redClear shadow-redClearBoxShadow' : ''} clear text-white col-span-2 bg-clear shadow-[0px_10px_0px] shadow-clearBoxShadow text-[1.7rem] font-semibold rounded-[20px]`}>AC</button>
          <button onClick={del} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className={`${theme === 'yellow' ? 'bg-yellowDelete' : ''} ${theme === 'yellow' ? 'shadow-yellowDeleteBoxShadow' : ''} ${theme === 'red' ? 'bg-redDelete shadow-redDeleteBoxShadow' : ''} delete text-white bg-delete shadow-[0px_10px_0px] shadow-deleteBoxShadow text-[1.7rem] font-semibold rounded-[20px]`}>DEL</button>
          <button id='/' onClick={handleClick} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className={`${theme === 'yellow' ? 'bg-yellowOperators shadow-yellowOperatorsBoxShadow' : ''} ${theme === 'red' ? 'bg-redOperators shadow-redOperatorsBoxShadow' : ''} text-white bg-operators text-[1.7rem] font-semibold rounded-[20px] shadow-[0px_10px_0px] shadow-operatorsBoxShadow`}>÷</button>
          <button id='7' onClick={handleClick} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className={`${theme === 'yellow' ? 'bg-yellowNumber shadow-yellowNumberBoxShadow' : ''} ${theme === 'blue' ? 'bg-number shadow-numberBoxShadow' : ''} ${theme === 'red' ? 'bg-redNumber shadow-redNumberBoxShadow' : ''} numbers text-white text-[1.7rem] font-semibold rounded-[20px] shadow-[0px_10px_0px]`}>7</button>
          <button id='8' onClick={handleClick} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className={`${theme === 'yellow' ? 'bg-yellowNumber shadow-yellowNumberBoxShadow' : ''} ${theme === 'blue' ? 'bg-number shadow-numberBoxShadow' : ''} ${theme === 'red' ? 'bg-redNumber shadow-redNumberBoxShadow' : ''} numbers text-white text-[1.7rem] font-semibold rounded-[20px] shadow-[0px_10px_0px]`}>8</button>
          <button id='9' onClick={handleClick} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className={`${theme === 'yellow' ? 'bg-yellowNumber shadow-yellowNumberBoxShadow' : ''} ${theme === 'blue' ? 'bg-number shadow-numberBoxShadow' : ''} ${theme === 'red' ? 'bg-redNumber shadow-redNumberBoxShadow' : ''} numbers text-white text-[1.7rem] font-semibold rounded-[20px] shadow-[0px_10px_0px]`}>9</button>
          <button id='*' onClick={handleClick} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className={`${theme === 'yellow' ? 'bg-yellowOperators shadow-yellowOperatorsBoxShadow' : ''} ${theme === 'red' ? 'bg-redOperators shadow-redOperatorsBoxShadow' : ''} performance text-white bg-operators text-[1.7rem] font-semibold rounded-[20px] shadow-[0px_10px_0px] shadow-operatorsBoxShadow`}>*</button>
          <button id='4' onClick={handleClick} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className={`${theme === 'yellow' ? 'bg-yellowNumber shadow-yellowNumberBoxShadow' : ''} ${theme === 'blue' ? 'bg-number shadow-numberBoxShadow' : ''} ${theme === 'red' ? 'bg-redNumber shadow-redNumberBoxShadow' : ''} numbers text-white text-[1.7rem] font-semibold rounded-[20px] shadow-[0px_10px_0px]`}>4</button>
          <button id='5' onClick={handleClick} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className={`${theme === 'yellow' ? 'bg-yellowNumber shadow-yellowNumberBoxShadow' : ''} ${theme === 'blue' ? 'bg-number shadow-numberBoxShadow' : ''} ${theme === 'red' ? 'bg-redNumber shadow-redNumberBoxShadow' : ''} numbers text-white text-[1.7rem] font-semibold rounded-[20px] shadow-[0px_10px_0px]`}>5</button>
          <button id='6' onClick={handleClick} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className={`${theme === 'yellow' ? 'bg-yellowNumber shadow-yellowNumberBoxShadow' : ''} ${theme === 'blue' ? 'bg-number shadow-numberBoxShadow' : ''} ${theme === 'red' ? 'bg-redNumber shadow-redNumberBoxShadow' : ''} numbers text-white text-[1.7rem] font-semibold rounded-[20px] shadow-[0px_10px_0px]`}>6</button>
          <button id='+' onClick={handleClick} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className={`${theme === 'yellow' ? 'bg-yellowOperators shadow-yellowOperatorsBoxShadow' : ''} ${theme === 'red' ? 'bg-redOperators shadow-redOperatorsBoxShadow' : ''}  performance text-white bg-operators text-[1.7rem] font-semibold rounded-[20px] shadow-[0px_10px_0px] shadow-operatorsBoxShadow`}>+</button>
          <button id='1' onClick={handleClick} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className={`${theme === 'yellow' ? 'bg-yellowNumber shadow-yellowNumberBoxShadow' : ''} ${theme === 'blue' ? 'bg-number shadow-numberBoxShadow' : ''} ${theme === 'red' ? 'bg-redNumber shadow-redNumberBoxShadow' : ''} numbers text-white text-[1.7rem] font-semibold rounded-[20px] shadow-[0px_10px_0px]`}>1</button>
          <button id='2' onClick={handleClick} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className={`${theme === 'yellow' ? 'bg-yellowNumber shadow-yellowNumberBoxShadow' : ''} ${theme === 'blue' ? 'bg-number shadow-numberBoxShadow' : ''} ${theme === 'red' ? 'bg-redNumber shadow-redNumberBoxShadow' : ''} numbers text-white text-[1.7rem] font-semibold rounded-[20px] shadow-[0px_10px_0px]`}>2</button>
          <button id='3' onClick={handleClick} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className={`${theme === 'yellow' ? 'bg-yellowNumber shadow-yellowNumberBoxShadow' : ''} ${theme === 'blue' ? 'bg-number shadow-numberBoxShadow' : ''} ${theme === 'red' ? 'bg-redNumber shadow-redNumberBoxShadow' : ''} numbers text-white text-[1.7rem] font-semibold rounded-[20px] shadow-[0px_10px_0px]`}>3</button>
          <button id='-' onClick={handleClick} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className={`${theme === 'yellow' ? 'bg-yellowOperators shadow-yellowOperatorsBoxShadow' : ''} ${theme === 'red' ? 'bg-redOperators shadow-redOperatorsBoxShadow' : ''} performance text-white bg-operators text-[1.7rem] font-semibold rounded-[20px] shadow-[0px_10px_0px] shadow-operatorsBoxShadow`}>-</button>
          <button id='.' onClick={handleClick} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className={`${theme === 'yellow' ? 'bg-yellowOperators shadow-yellowOperatorsBoxShadow' : ''} ${theme === 'red' ? 'bg-redOperators shadow-redOperatorsBoxShadow' : ''} performance text-white bg-operators text-[1.7rem] font-semibold rounded-[20px] shadow-[0px_10px_0px] shadow-operatorsBoxShadow`}>.</button>
          <button id='0' onClick={handleClick} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className={`${theme === 'yellow' ? 'bg-yellowNumber shadow-yellowNumberBoxShadow' : ''} ${theme === 'blue' ? 'bg-number shadow-numberBoxShadow' : ''} ${theme === 'red' ? 'bg-redNumber shadow-redNumberBoxShadow' : ''} numbers text-white text-[1.7rem] font-semibold rounded-[20px] shadow-[0px_10px_0px]`}>0</button>
          <button onClick={calculate} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className={`${theme === 'yellow' ? 'bg-yellowEquals shadow-yellowEqualsBoxShadow' : ''} ${theme === 'red' ? 'bg-redEquals shadow-redEqualsBoxShadow' : ''} equal text-white col-start-[-1] col-end-[-3] bg-equals text-[1.7rem] font-semibold rounded-[20px] shadow-[0px_10px_0px] shadow-equalsBoxShadow`}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
