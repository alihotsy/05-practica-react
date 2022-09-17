import React from 'react';
import { InvokeEveryFunction } from '../helpers/InvokeEveryFunction';

export const Form = ({setAccount}) => {
    const {events,
           events1,
           validateClass,
           validateClass2,
           inputHook1,
           inputHook2,
           validation,
           validation1,
           register} = InvokeEveryFunction(setAccount);
    return (
        <form onSubmit={events.hanleSubmit} action="" id="formulario" className="formulario">
            <h1 className="title__login">Login</h1>
            <div className="flex">
                <div className="form__campos">
                    <i className={validation[0]}></i>
                    <label htmlFor="">Usuario</label>
                    <input id='user' className={validation[1]} onChange={events.handleInput} value={events.inputValue} type="text" autoComplete="off"/>
                    {validateClass[2]}
                    {inputHook1.empty && <p><i className="warning fas fa-exclamation-triangle"></i>El campo no debe estar vacío</p>}
                </div>
                <div className="form__campos">
                    <i className={validation1[0]}></i>
                    <label htmlFor="">Contraseña</label>
                    <input id='password' className={validation1[1]} onChange={events1.handleInput} value={events1.inputValue} type="password"/>
                    {validateClass2[2]}
                    {inputHook2.empty && <p><i className="warning fas fa-exclamation-triangle"></i>El campo no debe estar vacío</p>} 
                </div>
                <button onClick={register}>Registrar</button>
            </div>
        </form>
    )
}
