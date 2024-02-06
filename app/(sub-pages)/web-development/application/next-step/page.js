'use client'
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Button, TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { db } from '@/settings/firebase.settings';
import { collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import ActivityIndicator from '@/app/components/activity-indicator';
import { OnLoginNotification } from '@/app/components/alert';
import Link from 'next/link';

const validationRules = yup.object().shape({
    customEmail:yup.string().required('this is a required field'),
    customDomain:yup.string().required('this is a required field'),
    brandColors:yup.string().required('this is a required field'),
    password:yup.string().required('Please enter password used in previous step!'),
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const complementaryService = [ 'Search engine optimization(SEO)', 'Security Updates', 'Advanced web crawling', 'Web Management', 'Pentesting', 'Premium Web Hosting', 'Web Analytics', 'Premium Database', 'Web Content Write Up' ];

function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  
export default function Page() {
    const router = useRouter();
    const theme = useTheme();
    const [selectComplementaryServices, setSelectComplementaryServices] = React.useState([]);
    const [showActivityIndicator,setShowActivityIndicator] = React.useState(false);
    const [ showAlertDialog,setShowAlertDialog ] = React.useState(false);

    const handleSelectComplementaryServices = (event) => {
        const {
        target: { value },
        } = event;
        setSelectComplementaryServices(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleUpdateUser = async () => {
        setShowActivityIndicator(true);
        const q = query(collection(db,'users'),where('password','==',values.password));
        const onSnapShot = await getDocs(q);
        if (onSnapShot.empty) {
            router.push('/web-development');
        }
        const userDataId = onSnapShot.docs[0].id

        await updateDoc(doc(db,'users',userDataId),{
            brandColors:values.brandColors,
            complementaryService:selectComplementaryServices,
            customDomain:values.customDomain,
            customEmail:values.customEmail,
            featuresreq:NaN,
            features_completed:0,
            managementtime: null,   
            discountCode:values.giftcardCode,
        }).then(() => {
            setShowAlertDialog(true);
            router.push('/web-development');
            setShowActivityIndicator(false);
        })
    }

    const {handleBlur, handleSubmit, handleChange, errors, touched, values} = useFormik({
        initialValues: { brandColors: '', complementaryServ: selectComplementaryServices, customEmail: '', customDomain: '', password: '', giftcardCode: '' },
        onSubmit: values => {
           handleUpdateUser();
        },
        validationSchema:validationRules
    })

    return (
        showActivityIndicator
        ?
        <ActivityIndicator />
        :
        <>
            <div className="mt-8 px-2">
                <h1 className="text-center">WEB DEVELOPMENT APPLICATION</h1>
                <h3 className="text-center mt-2 text-lg underline underline-offset-2 font-bold text-amber-600">STEP 2</h3>
                <form className="p-2 sm:p-4 flex flex-col space-y-4 bg-wheat rounded-lg shadow-lg shadow-black/70"
                onSubmit={handleSubmit}>
                    <h3 className="text-gray-800 text-center font-bold text-lg mb-4">FILL AND SUBMIT TO PROCEED</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                        <TextField 
                        required
                        id="brandColors" 
                        label="Brand Colors" 
                        variant="filled" 
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.brandColors} 
                        />
                        {errors.brandColors && touched.brandColors
                        ? <span className="text-red-500">{errors.brandColors}</span> : null}

                        <div>
                            <FormControl sx={{ width: '100%' }}>
                                <InputLabel id="demo-multiple-chip-label">Select complementary services</InputLabel>
                                <Select
                                labelId="demo-multiple-chip-label"
                                id="demo-multiple-chip"
                                multiple
                                value={selectComplementaryServices}
                                onChange={handleSelectComplementaryServices}
                                input={<OutlinedInput id="select-multiple-chip" label="Complementary service" />}
                                renderValue={(selected) => (
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} />
                                    ))}
                                    </Box>
                                )}
                                MenuProps={MenuProps}
                                >
                                {complementaryService.map((name) => (
                                    <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStyles(name, selectComplementaryServices, theme)}
                                    >
                                    {name}
                                    </MenuItem>
                                ))}
                                </Select>
                            </FormControl>
                        </div>

                        <TextField
                        id="customEmail" 
                        label="Preferred custom email"
                        type='email' 
                        variant="filled"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.customEmail} 
                        />
                        {errors.customEmail && touched.customEmail
                        ? <span className="text-red-500">{errors.customEmail}</span> : null}
    
                        <TextField 
                        required
                        id="customDomain" 
                        label="Preferred custom domain" 
                        variant="filled"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.customDomain} 
                        />
                        {errors.customDomain && touched.customDomain
                        ? <span className="text-red-500">{errors.customDomain}</span> : null}
                        

                        <TextField 
                        required
                        id="password" 
                        label="Password" 
                        variant="filled" 
                        type="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password} 
                        />
                        {errors.password && touched.password
                        ? <span className="text-red-500">{errors.password}</span> : null}
    
                        <TextField
                        id="giftcardCode" 
                        label="Giftcard Code" 
                        variant="filled"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.giftcardCode} 
                        />
                        
                        <blockquote className='flex flex-row gap-4 items-center justify-center'>
                            <label><Link href={'/spades/terms'} className='text-black hover:underline hover:text-amber-600'>Agree to T & C</Link></label>
                            <input 
                            type='checkbox'
                            required
                            />
                        </blockquote>
                    </div>
                    
                    <Button 
                    color='warning'
                    type="submit">Proceed</Button>
                </form>
            </div>
            {
                showAlertDialog
                ?
                <OnLoginNotification alertTitle={'Sign up successfull'}>
                    <span>Sign up successfull, proceed to login!</span>
                </OnLoginNotification>
                :
                null
            }
        </>
    )
}
        