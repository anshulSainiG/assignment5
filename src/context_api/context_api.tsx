import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

type ContextProps = {
  children: ReactNode;
}

type ContextState = {
  name: string;
  phoneNo: string;
  passwordd: string;
  otpPassword: string;
  dialCode: string;

  setName: Dispatch<SetStateAction<string>>;
  setPhoneNo: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  setOtpPassword: Dispatch<SetStateAction<string>>;
  setDialCode: Dispatch<SetStateAction<string>>;
}

export const OnBoardingContext = createContext<ContextState>({
  name: "",
  phoneNo: "",
  passwordd: "",
  otpPassword: "",
  dialCode: "",
  setName: () => { },
  setPhoneNo: () => { },
  setPassword: () => { },
  setOtpPassword: () => { },
  setDialCode: () => { },
});

export default function Context({ children }: ContextProps) {
  const [name, setName] = useState<string>('');
  const [phoneNo, setPhoneNo] = useState<string>('');
  const [passwordd, setPassword] = useState<string>('');
  const [otpPassword, setOtpPassword] = useState<string>('');
  const [dialCode, setDialCode] = useState<string>('+1')

  const value: ContextState = {
    name,
    phoneNo,
    passwordd,
    dialCode,
    setName,
    setPhoneNo,
    setPassword,
    otpPassword,
    setOtpPassword,
    setDialCode,
  };

  return (
    <OnBoardingContext.Provider value={value}>
      {children}
    </OnBoardingContext.Provider>
  );
}




