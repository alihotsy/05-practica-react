export const validator = (empties,validateClasses) =>{
    if(empties){
        return[
            `${validateClasses[0]} error_icon`,
            `${validateClasses[1]} error`,
        ]
    } else{
        return[
            `${validateClasses[0]}`,
            `${validateClasses[1]}`,
        ]
    }
}