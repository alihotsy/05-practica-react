export const validateClassName = (inputValue,value,text,num) => {
    if(inputValue.length>=1 && inputValue.length<=num){
        return[ 
            `icon fas fa-${value} error_icon`,
            'error',
            <p><i className="warning fas fa-exclamation-triangle"></i>{`${text} debe ser mayor a ${num} caracteres`}</p>
        ]
    } else{
        return[
            `icon fas fa-${value}`,
            '',
            null
        ]
    }
}