'use client'
import React from "react";
import { Alert,AlertTitle,Collapse } from "@mui/material";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { RiAdvertisementFill } from "react-icons/ri";
import { BsPersonCheck } from "react-icons/bs";
import { FaBuysellads } from "react-icons/fa"

export function AdsNotification({children,alertTitle}) {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
      if (open == false) {
        setTimeout(() => {
          setOpen(true);
        }, 15000);
      };
      
      if (open == true) {
        setTimeout(() => {
          setOpen(false);
        }, 15000);
      };
    })
    
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div className="fixed bottom-[50vh] top-[50vh] right-1 z-20 max-w-[300px]">
            <Collapse in={open}>
                <Alert 
                icon={<FaBuysellads className="text-xl text-amber-600"/>}
                color="info"
                className=""
                >
                    <div className="flex justify-between items-center gap-8">
                        <AlertTitle>{alertTitle}</AlertTitle>
                        <AiOutlineCloseCircle 
                        onClick={handleClose}
                        className="text-xl"/>
                    </div>
                    <blockquote>
                      {children}
                    </blockquote>
                </Alert>        
            </Collapse>
        </div>
            
    )
}   

export function AdsBadge({children,alertTitle}) {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
      setInterval(() => {
        setOpen(true);
      }, 20000);
    }, [open])
    
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div className="flex items-center justify-center my-5">
            <Collapse in={open}>
                <Alert 
                icon={<RiAdvertisementFill className="text-xl text-amber-600"/>}
                color="info"
                className="max-w-[300px]"
                >
                    <div className="flex justify-between items-center gap-8">
                        <AlertTitle>{alertTitle}</AlertTitle>
                        <AiOutlineCloseCircle 
                        onClick={handleClose}
                        className="text-xl"/>
                    </div>
                    <blockquote>
                      {children}
                    </blockquote>
                </Alert>        
            </Collapse>
        </div>
            
    )
}   

export function LoginNotification({children,alertTitle}) {
  const [open, setOpen] = React.useState(true);

    setInterval(() => {
      setOpen(false);
    }, 15000);
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
      <div className="fixed bottom-[50vh] top-[50vh] right-0 z-40 w-[300px]">
          <Collapse in={open}>
              <Alert 
              icon={<BsPersonCheck className="text-xl text-[#de4f0a]"/>}
              severity="success"
              >
                  <div className="flex justify-between items-center">
                      <AlertTitle>{alertTitle}</AlertTitle>
                      <AiOutlineCloseCircle 
                      onClick={handleClose}
                      className="text-xl fixed top-0 right-0"/>
                  </div>
                  <blockquote>
                    {children}
                  </blockquote>
              </Alert>        
          </Collapse>
      </div>
          
  )
}   

export function OnLoginNotification({children,alertTitle}) {
  const [open, setOpen] = React.useState(true);

    setInterval(() => {
      setOpen(false);
    }, 15000);
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
      <div className="fixed top-12 right-0 z-30 w-[300px]">
          <Collapse in={open}>
              <Alert 
              icon={<BsPersonCheck className="text-xl text-[#de4f0a]"/>}
              severity="success"
              >
                  <div className="flex justify-between items-center">
                      <AlertTitle>{alertTitle}</AlertTitle>
                      <AiOutlineCloseCircle 
                      onClick={handleClose}
                      className="text-xl fixed top-0 right-0"/>
                  </div>
                  <blockquote>
                    {children}
                  </blockquote>
              </Alert>        
          </Collapse>
      </div>
          
  )
}   