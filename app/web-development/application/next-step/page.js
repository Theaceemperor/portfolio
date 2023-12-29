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
import { db } from '@/setting/firebase.settings';
import { addDoc, collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import ActivityIndicator from '@/app/components/activity-indicator';
import { OnLoginNotification } from '@/app/components/alert';
import Link from 'next/link';
import { WebCategories } from '@/app/components/client/ReusableComponents';

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

const names = [
  'Home',
  'About',
  'Services',
  'Portfolio',
  'Contact',
  'Careers',
  'Login',
  'Sign up',
  'Dashboard',
  'Blog',
  'Events',
  'Product page',
  'Gallery',
  'Privacy',
  'Checkout',
  'Custom',
];

const majorComponents = [ 'Layout', 'Footer', 'Navigation Bar', 'Call to action', 'Header', 'About col', 'Login form', 'Sign-up form', 'profile', 'meta data', 'dashboard/screen', ];

const minorComponents = [ 'sub header', 'Service rows', 'Product display', 'blog card', 'reviews col', 'comment section', 'button', 'subscription box', 'Ads box', 'Dialog box', 'Notification Badge', 'Activity Indicator', 'swiper', 'countdown timer', 'styled div', 'contact col', 'input-col', 'switch div', 'History field', 'Pop-up module', 'Options selector', ];

const backendService = [ 'Hosting(free)', 'Hosting(premium)', 'Web Analytics', 'Database(basic)', 'Database(premium)', 'Validation', 'Authentication', 'Session Management', 'Web content write up', ];

const devSupport = [ 'Security Updates', 'Bug fixes', 'Web Management', 'Third party bug bounty', 'Pentesting', 'Web performance update' ];

const complementaryService = [ 'Search engine optimization(SEO)', 'Advertisement & Promotion', 'Advanced web crawling', 'Social media management', ];

const options = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15'];

const managementPeriod = [ '30 days','60 days','90 days','120 days','150 days','180 days','210 days','240 days','270 days','300 days','330 days','360 days','custom', ];

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
    const [selectBackendServices, setSelectBackendServices] = React.useState([]);
    const [selectDevSupport, setSelectDevSupport] = React.useState([]);
    const [selectComplementaryServices, setSelectComplementaryServices] = React.useState([]);
    const [selectMinorComponents, setSelectMinorComponents] = React.useState([]);
    const [selectMajorComponents, setSelectMajorComponents] = React.useState([]);
    const [selectMainPages, setSelectMainPages] = React.useState([]);

    const handleSelectComplementaryServices = (event) => {
        const {
        target: { value },
        } = event;
        setSelectComplementaryServices(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleSelectMainPages = (event) => {
        const {
        target: { value },
        } = event;
        setSelectMainPages(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
        );
    };
   
    const handleSelectMinorComponents = (event) => {
        const {
        target: { value },
        } = event;
        setSelectMinorComponents(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleSelectMajorComponents = (event) => {
        const {
        target: { value },
        } = event;
        setSelectMajorComponents(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleSelectBackendServices = (event) => {
        const {
        target: { value },
        } = event;
        setSelectBackendServices(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleSelectDevSupport = (event) => {
        const {
        target: { value },
        } = event;
        setSelectDevSupport(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
        );
    };

    const [showActivityIndicator,setShowActivityIndicator] = React.useState(false);
    const [ showAlertDialog,setShowAlertDialog ] = React.useState(false);
    const [value, setValue] = React.useState(options[0]);
    const [Managementvalue, setManagementValue] = React.useState(managementPeriod[0]);

    const handleCloseAlertDialog = () => {
        setShowAlertDialog(false);
    }

    const handleCreateUser = async () => {
        setShowActivityIndicator(true);
        const q = query(collection(db,'users'),where('password','==',values.password));
        const onSnapShot = await getDocs(q);
        if (onSnapShot.empty) {
            router.push('/web-development');
        }
        const userDataId = onSnapShot.docs[0].id

        await updateDoc(doc(db,'users',userDataId),{
            mainPages:selectMainPages,
            subPages:value,
            brandColors:values.brandColors,
            majorComponents:selectMajorComponents,
            minorComponents:selectMinorComponents,
            backendService:selectBackendServices,
            devSupport:selectDevSupport,
            complementaryService:selectComplementaryServices,
            customDomain:values.customDomain,
            customEmail:values.customEmail,
            managementPeriod:Managementvalue,
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
        initialValues: { mainPages: selectMainPages, subPages: value, brandColors: '', majorComponents: selectMajorComponents, minorComponents: selectMinorComponents, backendServices: selectBackendServices, devSupport: selectDevSupport, complementaryServ: selectComplementaryServices, managementPeriod: '', customEmail: '', customDomain: '', password: '', giftcardCode: '' },
        onSubmit: values => {
           handleCreateUser();
        },
        validationSchema:validationRules
    })

    return (
        showActivityIndicator
        ?
        <ActivityIndicator />
        :
        <>
            <div className="w-full flex flex-col items-center justify-center px-1 my-5">
                <h1 className="text-center">WEB DEVELOPMENT APPLICATION</h1>
                <h3 className="text-center py-2 text-lg underline underline-offset-2 font-bold text-amber-600">STEP 2</h3>
                <form className="p-2 md:p-5 lg:p-5 flex flex-col gap-5 bg-[wheat] rounded-lg shadow-lg shadow-black/70"
                onSubmit={handleSubmit}>
                    <h3 className="text-gray-800 text-center font-bold text-lg">FILL AND SUBMIT TO PROCEED</h3>
                    <div className="flex flex-col lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 gap-5 align-middle">
                        <div>
                            <FormControl sx={{ m: 1, width: 300 }}>
                                <InputLabel id="demo-multiple-chip-label">Main Pages</InputLabel>
                                <Select
                                labelId="demo-multiple-chip-label"
                                id="demo-multiple-chip"
                                multiple
                                value={selectMainPages}
                                onChange={handleSelectMainPages}
                                input={<OutlinedInput id="select-multiple-chip" label="MainPages" />}
                                renderValue={(selected) => (
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} />
                                    ))}
                                    </Box>
                                )}
                                MenuProps={MenuProps}
                                >
                                {names.map((name) => (
                                    <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStyles(name, selectMainPages, theme)}
                                    >
                                    {name}
                                    </MenuItem>
                                ))}
                                </Select>
                            </FormControl>
                        </div>
                        <WebCategories
                        value={value} 
                        onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                          label={"Select Sub Pages"}
                          options={options}
                        />
                    </div>
                    
                    <div className="flex flex-col lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 gap-5 w-full">
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
                            <FormControl sx={{ m: 1, width: 300 }}>
                                <InputLabel id="demo-multiple-chip-label">Select Main Components</InputLabel>
                                <Select
                                labelId="demo-multiple-chip-label"
                                id="demo-multiple-chip"
                                multiple
                                value={selectMajorComponents}
                                onChange={handleSelectMajorComponents}
                                input={<OutlinedInput id="select-multiple-chip" label="Major Components" required />}
                                renderValue={(selected) => (
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} />
                                    ))}
                                    </Box>
                                )}
                                MenuProps={MenuProps}
                                >
                                {majorComponents.map((name) => (
                                    <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStyles(name, selectMajorComponents, theme)}
                                    >
                                    {name}
                                    </MenuItem>
                                ))}
                                </Select>
                            </FormControl>
                        </div>
                        
                        <div>
                            <FormControl sx={{ m: 1, width: 300 }}>
                                <InputLabel id="demo-multiple-chip-label">Select reuseable Components</InputLabel>
                                <Select
                                labelId="demo-multiple-chip-label"
                                id="demo-multiple-chip"
                                multiple
                                value={selectMinorComponents}
                                onChange={handleSelectMinorComponents}
                                input={<OutlinedInput id="select-multiple-chip" label="Minor Components" required />}
                                renderValue={(selected) => (
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} />
                                    ))}
                                    </Box>
                                )}
                                MenuProps={MenuProps}
                                >
                                {minorComponents.map((name) => (
                                    <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStyles(name, selectMinorComponents, theme)}
                                    >
                                    {name}
                                    </MenuItem>
                                ))}
                                </Select>
                            </FormControl>
                        </div>
                        
                        <div>
                            <FormControl sx={{ m: 1, width: 300 }}>
                                <InputLabel id="demo-multiple-chip-label">Select Backend Services</InputLabel>
                                <Select
                                labelId="demo-multiple-chip-label"
                                id="demo-multiple-chip"
                                multiple
                                value={selectBackendServices}
                                onChange={handleSelectBackendServices}
                                input={<OutlinedInput id="select-multiple-chip" label="Backend Services" />}
                                renderValue={(selected) => (
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} />
                                    ))}
                                    </Box>
                                )}
                                MenuProps={MenuProps}
                                >
                                {backendService.map((name) => (
                                    <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStyles(name, selectBackendServices, theme)}
                                    >
                                    {name}
                                    </MenuItem>
                                ))}
                                </Select>
                            </FormControl>
                        </div>
    
                        <div>
                            <FormControl sx={{ m: 1, width: 300 }}>
                                <InputLabel id="demo-multiple-chip-label">Select Dev support</InputLabel>
                                <Select
                                labelId="demo-multiple-chip-label"
                                id="demo-multiple-chip"
                                multiple
                                value={selectDevSupport}
                                onChange={handleSelectDevSupport}
                                input={<OutlinedInput id="select-multiple-chip" label="Dev support" />}
                                renderValue={(selected) => (
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} />
                                    ))}
                                    </Box>
                                )}
                                MenuProps={MenuProps}
                                >
                                {devSupport.map((name) => (
                                    <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStyles(name, selectDevSupport, theme)}
                                    >
                                    {name}
                                    </MenuItem>
                                ))}
                                </Select>
                            </FormControl>
                        </div>

                        <div>
                            <FormControl sx={{ m: 1, width: 300 }}>
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

                        <WebCategories
                        value={Managementvalue} 
                        onChange={(event, newValue) => {
                            setManagementValue(newValue);
                          }}
                          label={"Select Web management period"}
                          options={managementPeriod}
                        />
                    
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
                        
                        <blockquote className='flex flex-row gap-5 items-center justify-center'>
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
        