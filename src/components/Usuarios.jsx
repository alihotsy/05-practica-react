import React from 'react'

export const Usuarios = ({account}) => {
    // const users = [{user:'Nathan04',password:'158596'},{user:'Terry15',password:'15963'}];
    return (
        <div className="users">
            <h1 className="title__users">Usuarios</h1>
            <div className="users__passwords">
                <h3 className="title__grande">Usuario</h3>
                <h3 className="title__grande">Password</h3>
            </div>
                {
                 account.map(({user,password},i) => (
                   <div className="users__passwords" key={i}>
                     <h3 className="registers" key={user}>{user}</h3>
                     <h3 className="registers" key={password}>{password}</h3>
                   </div> 
                      
                    ))
                }
            
            
        </div>
    )
}
