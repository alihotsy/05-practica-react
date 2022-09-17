import React, {useState} from 'react'
import { Form } from './components/Form';
import { Usuarios } from './components/Usuarios';
import './index.css';
export const Principal = () => {
    const [account, setAccount] = useState([]);
    return (
        <div className="form">
            <Usuarios account={account}/>
            <Form setAccount={setAccount}/>
        </div>
    )
}
