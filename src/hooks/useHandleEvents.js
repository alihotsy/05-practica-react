import {useState} from 'react';
export const useHandleEvents = () =>{
    const [inputValue, setInputValue] = useState('');
    const handleInput = (e) =>{
        setInputValue(e.target.value);
    }
    const hanleSubmit = (e) =>{
        e.preventDefault();
    }
    return{
        handleInput,
        hanleSubmit,
        inputValue,
        setInputValue,
    }
}