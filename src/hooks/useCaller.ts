import axios, { AxiosError, AxiosHeaders, AxiosResponse } from 'axios';
import { useCallback } from 'react';

export default function useCaller<RequestData, ResponseData>(method: string, endpoint: string) {
    const caller = useCallback(async (data?: RequestData, headers?: AxiosHeaders): Promise<ResponseData> => {
        return axios.request<RequestData, AxiosResponse<ResponseData, AxiosError>>({
            method: method,
            data: data,
            headers: headers,
            url: process.env.REACT_APP_API_ROOT + endpoint
        })
            .then(response => response.data)
    }, [method, endpoint])

    return caller;
}