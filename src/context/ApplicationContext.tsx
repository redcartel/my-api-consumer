import React, { Dispatch, ReactElement, SetStateAction, useContext, useMemo, useState } from 'react'
import { createContext } from 'react'

export interface ContextType {
    userName?: string,
    setUserName?: Dispatch<SetStateAction<string>>
}

const AppContext = createContext<ContextType>({});

export const useAppContext = () => useContext(AppContext)

interface ApplicationContextProps {
    children: ReactElement
}

export default function ApplicationContext({ children }: ApplicationContextProps) {
    const [userName, setUserName] = useState('logged out');

    const context: ContextType = useMemo(() => ({
        userName,
        setUserName
    }), [userName, setUserName]);

    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    )
}