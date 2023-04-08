import React from 'react'
import { useAppContext } from '../context/ApplicationContext';

// type Props = {}

export default function HomeRoute(/*{ }: Props*/) {
    const context = useAppContext();

    return (
        <div className='HomeRoute'>
            <header>
                <h1>HomeRoute</h1>
            </header>
            <main>
                <pre>{context.userName}</pre>
            </main>
        </div>

    )
}