import { Button, Popover, Typography } from "@mui/material";
import { SiXdadevelopers } from 'react-icons/si';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

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
              <span className='flex items-center gap-1 text-black dark:text-[wheat]'>Add new development <SiXdadevelopers
              className='text-[#de4f0a]' /> </span>
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