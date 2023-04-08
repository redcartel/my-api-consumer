import { AxiosError } from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useCaller from '../hooks/useCaller';
import './PostRoute.scss';

// type Props = {}

type RequestData = Record<string, string>
type APIResponse = Record<string, string>

export default function PostRoute(/*{ }: Props*/) {
    const params = useParams();
    const [data, setData] = useState<RequestData>({});
    const [value, setValue] = useState('');
    const caller = useCaller<RequestData, APIResponse>('post', '/');

    const postEcho = useCallback(async (value: string) => {
        caller({ [params.key as string]: value })
            .then(setData)
            .catch((e: AxiosError) => {
                console.error(e);
            })
    }, [caller, params.key])

    return (
        <div className='PostRoute'>
            <header>
                <h1>Post Route : {params.key}</h1>
            </header>
            <main>
                <form onSubmit={e => {
                    e.preventDefault();
                    postEcho(value);
                    return false;
                }}>
                    <label htmlFor="echoValue">Value</label>
                    <input name="echoValue" value={value} onChange={e => setValue(e.target.value)} placeholder='echo value' />
                    <button type='submit'>submit</button>
                </form>
                <pre>{JSON.stringify(data, null, 4)}</pre>
            </main>
        </div>
    )
}