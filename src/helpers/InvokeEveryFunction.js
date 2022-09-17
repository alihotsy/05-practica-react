import { useHandleEvents } from '../hooks/useHandleEvents';
import { validateClassName } from '../helpers/validateClassName';
import { validator } from '../helpers/validator';
import { useHookInputs } from '../hooks/useHooksInputs';

export const InvokeEveryFunction = (setAccount) =>{
    const events = useHandleEvents();
    const events1 = useHandleEvents();
    const validateClass = validateClassName(events.inputValue,'user','El usuario',4);
    const validateClass2 = validateClassName(events1.inputValue,"key",'La contraseña',8);
    const inputHook1 = useHookInputs(events.inputValue);
    const inputHook2 = useHookInputs(events1.inputValue);
    const validation = validator(inputHook1.empty,validateClass);
    const validation1 = validator(inputHook2.empty,validateClass2);
    const register = () => {
       !events.inputValue && inputHook1.setEmpty(true);
       !events1.inputValue && inputHook2.setEmpty(true);
       if(events.inputValue.length > 4 && events1.inputValue.length > 8){
           setAccount((cuenta) => [...cuenta, {user:events.inputValue,password:events1.inputValue}]);
           events.setInputValue('');
           events1.setInputValue('');
       }
    }
    return {events,
            events1,
            validateClass,
            validateClass2,
            inputHook1,
            inputHook2,
            validation,
            validation1,
            register}
}