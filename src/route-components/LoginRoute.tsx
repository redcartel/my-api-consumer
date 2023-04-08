import React, { useState } from 'react'
import { useAppContext } from '../context/ApplicationContext';
import './LoginRoute.scss'

// type Props = {}

export default function LoginRoute(/*{ }: Props*/) {
    const context = useAppContext();

    const [value, setValue] = useState('')

    return (
        <div className='LoginRoute'>
            <header>
                <h1>Login</h1>
            </header>
            <main>
                <form onSubmit={e => {
                    e.preventDefault();
                    context.setUserName!(value)
                    return false;
                }}>
                    <label htmlFor='user name'>Value</label>
                    <input name='user name' value={value} onChange={e => setValue(e.target.value)} placeholder='username' />
                    <button type='submit'>submit</button>
                </form>
                <pre>Logged in as {context.userName}</pre>
            </main>
        </div>
    )
}