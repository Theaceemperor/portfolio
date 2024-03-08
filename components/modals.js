import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import PopupState, { bindPopover, bindTrigger, bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import Popover from '@mui/material/Popover';
import { MdUnsubscribe } from "react-icons/md";
import { SiXdadevelopers } from 'react-icons/si';

export function SubscribePop({children}) { (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <MdUnsubscribe className='text-xl text-amber-600' {...bindTrigger(popupState)} />
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <section className='p-2'>{children}</section>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

export function DevPop() {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button 
          {...bindTrigger(popupState)}
          style={{
            display: 'flex', gap: 1, alignItems: 'center', justifyContent: 'center'
          }}
          >
            <span className='flex items-center gap-1 font-bold text-md text-amber-600'>Add new development <SiXdadevelopers
            className='text-amber-600' /> </span>
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography sx={{ p: 2 }} style={{background:'inherit'}}>
              <span>Feature not activated, checkback later!</span>
            </Typography>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

export function PopperPopupState({children,buttonText}) {
  return (
    <PopupState variant="popper" popupId="demo-popup-popper">
      {(popupState) => (
        <div>
          <Button variant="contained" {...bindToggle(popupState)}
          //className='bg-black text-[wheat] hover:bg-amber-600 hover:text-black'
          style={{
            background: 'black', color: 'wheat',
          }}>
            {buttonText}
          </Button>
          <Popper {...bindPopper(popupState)} transition className='z-40'>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper className='bg-white/90 overflow-y-scroll h-[100vh]'>
                  {children}
                </Paper>
              </Fade>
            )}
          </Popper>
        </div>
      )}
    </PopupState>
  );
}