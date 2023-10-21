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
              <h1 className='flex items-center text-[wheat] gap-1'>Add new development <SiXdadevelopers
              className='text-[#de4f0a]' /> </h1>
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