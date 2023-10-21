
import { FaCloudUploadAlt } from 'react-icons/fa';
import { Button } from '@mui/material';
import styled from '@emotion/styled';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

export function FileUpload1({text,bgColor,selectedFile}) {

    return (
        <Button component="label" variant="contained" startIcon={<FaCloudUploadAlt className='text-[#de4f0a]'/>}
        style={{
            background: 'black', color: '#de4f0a'
        }}>
        {text}
            <VisuallyHiddenInput type="file" accept='image/*' onChange={selectedFile}/>
        </Button>
    )
}