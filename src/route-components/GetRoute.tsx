import React, { useEffect, useState } from 'react'
import useCaller from '../hooks/useCaller'

// type Props = {}
interface APIResponse {
    name: string,
    description: string,
    version: string
}

export default function GetRoute(/*{ }: Props*/) {
    const caller = useCaller<undefined, APIResponse>('get', '/')
    const [data, setData] = useState<APIResponse>()

    useEffect(() => {
        caller().then((data) => setData(data))
    }, [caller])

    return (
        <div className='GetRoute'>
            <header>
                <h1>GetRoute</h1>
            </header>
            <main>
                <pre>{JSON.stringify(data, null, 4)}</pre>
            </main>
        </div>
    )
}