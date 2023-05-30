import React from "react";
import { NativeBaseProvider } from "native-base";
import LandingPage from './Front/Landingpage/landingPage';

export default function App() {
  return ( 
  <NativeBaseProvider>    
    <LandingPage/>
  </NativeBaseProvider>   
  );
}