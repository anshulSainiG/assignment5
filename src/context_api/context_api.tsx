import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import { StyleSheet } from 'react-native';

// Define the types for your component's props and state
type ContextProps={
  children: ReactNode;
}

type ContextState= {
  name: string;
  phoneno: string;
  passwordd: string;
  otpPassword:string;
  dialCode:string;
  
  setName:Dispatch<SetStateAction<string>>;
  setPhoneno:Dispatch<SetStateAction<string>>;
  setPassword:Dispatch<SetStateAction<string>>;
  setOtpPassword:Dispatch<SetStateAction<string>>;
  setDialCode:Dispatch<SetStateAction<string>>;
}

// Create a context
export const createCox = createContext<ContextState>({
    name:"",
    phoneno:"",
    passwordd:"",
    otpPassword:"",
    dialCode:"",
    setName:() => {},
  setPhoneno:()=>{},
  setPassword:()=>{},
  setOtpPassword:()=>{},
  setDialCode:()=>{},
});

export default function Context({ children }: ContextProps) {
  const [name, setName] = useState<string>('');
  const [phoneno, setPhoneno] = useState<string>('');
  const [passwordd, setPassword] = useState<string>('');
  const [otpPassword, setOtpPassword] = useState<string>('');
  const [dialCode, setDialCode] = useState<string>('+1')

  const value: ContextState = {
    name,
    phoneno,
    passwordd,
    dialCode,
    setName,
  setPhoneno,
  setPassword,
  otpPassword,
  setOtpPassword,
  setDialCode,
  };

  return (
    <createCox.Provider value={value}>
      {children}
    </createCox.Provider>
  );
}

const styles = StyleSheet.create({
  // Define your styles here
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


