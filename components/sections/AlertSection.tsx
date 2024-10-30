'use client'

import { XIcon } from "lucide-react";
import React, { useState } from "react";

type AlertSectionProps = {};

const AlertSection = (props: AlertSectionProps) => {
  const [showAlert, setShowAlert] = useState(true)

  if(showAlert){

    return (
      <div className=" bg-primary font-medium text-primary-foreground flex justify-center gap-3 p-2 rounded-md relative">
        <p> We&apos;ve raised a $23.5m Series led by Redpoint Ventures!</p>
        <a href="" className=" underline">
          Read More
        </a>
  
        <button onClick={() => setShowAlert(false)} className=" p-1 absolute right-2 top-auto bottom-auto group">
          <XIcon className=" transition-all duration-200 w-4 h-4 group-hover:scale-125" />
        </button>
      </div>
    );
  }else{
    return null
  }
};

export default AlertSection;
