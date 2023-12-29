'use client'
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { Button,TextField } from '@mui/material';
import { collection, updateDoc,doc, query, where,getDocs } from 'firebase/firestore';
import { useFormik } from 'formik';
import { GiMagicPalm } from 'react-icons/gi';
import { db } from '@/mysettings/firebase.settings';
import ActivityIndicator from '../activity-indicator';
import Customdialog from './CustomDialog';

export function EditAbout() {
    const {data:session} = useSession();
    const [ showActivityIndicator,setShowActivityIndicator ] = useState(false);
    const [openLikeDialog, setOpenLikeDialog] = React.useState(false);
    const handleCloseLikeDialog = () => setOpenLikeDialog(false);

    // create post to firestore
    const handleCreatePost = async () => {
        setShowActivityIndicator(true);
        try {
            const usersRef = query(collection(db,'users'),where("email",'==',session.user.email));
            const userSnapShot = await getDocs(usersRef);
            const userId = userSnapShot.docs[0].id;

            await updateDoc(doc(db,'users',userId),{
                compdesc:values.compdesc,
            }).then(() => {
                handleChange('');
                setShowActivityIndicator(false);
                setOpenLikeDialog(true);
                
            }).catch((e) => console.error(e));
        } catch (error) {
            
        }
    }

    const { handleBlur,handleChange,handleSubmit,values } = useFormik({
        initialValues: { compdesc:'' },
        onSubmit: values => {
            handleCreatePost();
        }
    })
    

    return (
        showActivityIndicator
        ?
        <ActivityIndicator />
        :
        <section>
            <form className="flex max-w-md my-8 flex-col border-2 border-violet-950/20 bg-white bg-violet-950/30 rounded-md shadow-md p-3 gap-4 w-full" onSubmit={handleSubmit}>
                <h3 className='text-center text-indigo-950/80 font-bold'>Update Company Description</h3>
                <div className='flex flex-row items-center gap-4'>
                    <div className='w-full flex flex-col gap-2 placeholder:text-indigo-950/80'>
                        <TextField
                        id='compdesc'
                        multiline={true}
                        className='w-full'
                        placeholder="update company description"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.compdesc}
                        />

                        {
                            values.compdesc.length > 0
                            ?
                            <Button 
                            variant='outlined'
                            className='block w-[100px]'
                            type='submit'>Update
                            </Button>
                        : null
                        }
                    </div>
                </div>
                <hr style={{color:'black',background:'black'}}/>
            </form>

            {/* Like Dialog */}
            <Customdialog 
            openProp={openLikeDialog} 
            handleCloseProp={handleCloseLikeDialog} 
            title={<span className='flex items-center'>Hey Dev <GiMagicPalm /></span>}>
                <p>Your Company Description was edited successfully!</p>
            </Customdialog>
        </section>
    )
}

export function EditAddress() {
    const {data:session} = useSession();
    const [ showActivityIndicator,setShowActivityIndicator ] = useState(false);
    const [openLikeDialog, setOpenLikeDialog] = React.useState(false);
    const handleCloseLikeDialog = () => setOpenLikeDialog(false);

    // create post to firestore
    const handleCreatePost = async () => {
        setShowActivityIndicator(true);
        try {
            const usersRef = query(collection(db,'users'),where("email",'==',session.user.email));
            const userSnapShot = await getDocs(usersRef);
            const userId = userSnapShot.docs[0].id;

            await updateDoc(doc(db,'users',userId),{
                compaddress:values.compaddress,
            }).then(() => {
                handleChange('');
                setShowActivityIndicator(false);
                setOpenLikeDialog(true);
                
            }).catch((e) => console.error(e));
        } catch (error) {
            
        }
    }

    const { handleBlur,handleChange,handleSubmit,values } = useFormik({
        initialValues: { compaddress:'' },
        onSubmit: values => {
            handleCreatePost();
        }
    })
    

    return (
        showActivityIndicator
        ?
        <ActivityIndicator />
        :
        <section>
            <form className="flex max-w-md my-8 flex-col border-2 border-violet-950/20 bg-white bg-violet-950/30 rounded-md shadow-md p-3 gap-4 w-full" onSubmit={handleSubmit}>
                <h3 className='text-center text-indigo-950/80 font-bold'>Update Company Address</h3>
                <div className='flex flex-row items-center gap-4'>
                    <div className='w-full flex flex-col gap-2 placeholder:text-indigo-950/80'>
                        <TextField
                        id='compaddress'
                        multiline={true}
                        className='w-full'
                        placeholder="edit company address"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.compaddress}
                        />

                        {
                            values.compaddress.length > 0
                            ?
                            <Button 
                            variant='outlined'
                            className='block w-[100px]'
                            type='submit'>Update
                            </Button>
                        : null
                        }
                    </div>
                </div>
                <hr style={{color:'black',background:'black'}}/>
            </form>

            {/* Like Dialog */}
            <Customdialog 
            openProp={openLikeDialog} 
            handleCloseProp={handleCloseLikeDialog} 
            title={<span className='flex items-center'>Hey Dev <GiMagicPalm /></span>}>
                <p>Your company address was edited successfully!</p>
            </Customdialog>
        </section>
    )
}

export function EditPhone() {
    const {data:session} = useSession();
    const [ showActivityIndicator,setShowActivityIndicator ] = useState(false);
    const [openLikeDialog, setOpenLikeDialog] = React.useState(false);
    const handleCloseLikeDialog = () => setOpenLikeDialog(false);

    // create post to firestore
    const handleCreatePost = async () => {
        setShowActivityIndicator(true);
        try {
            const usersRef = query(collection(db,'users'),where("email",'==',session.user.email));
            const userSnapShot = await getDocs(usersRef);
            const userId = userSnapShot.docs[0].id;

            await updateDoc(doc(db,'users',userId),{
                phone:values.phone,
            }).then(() => {
                handleChange('');
                setShowActivityIndicator(false);
                setOpenLikeDialog(true);
                
            }).catch((e) => console.error(e));
        } catch (error) {
            
        }
    }

    const { handleBlur,handleChange,handleSubmit,values } = useFormik({
        initialValues: { phone:'' },
        onSubmit: values => {
            handleCreatePost();
        }
    })
    

    return (
        showActivityIndicator
        ?
        <ActivityIndicator />
        :
        <section>
            <form className="flex max-w-md my-8 flex-col border-2 border-violet-950/20 bg-white bg-violet-950/30 rounded-md shadow-md p-3 gap-4 w-full" onSubmit={handleSubmit}>
                <h3 className='text-center text-indigo-950/80 font-bold'>Update phone number</h3>
                <div className='flex flex-row items-center gap-4'>
                    <div className='w-full flex flex-col gap-2 placeholder:text-indigo-950/80'>
                        <TextField
                        id='phone'
                        type='tel'
                        className='w-full'
                        placeholder="edit phone number..."
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                        />

                        {
                            values.phone.length > 0
                            ?
                            <Button 
                            variant='outlined'
                            className='block w-[100px]'
                            type='submit'>Update
                            </Button>
                        : null
                        }
                    </div>
                </div>
                <hr style={{color:'black',background:'black'}}/>
            </form>

            {/* Like Dialog */}
            <Customdialog 
            openProp={openLikeDialog} 
            handleCloseProp={handleCloseLikeDialog} 
            title={<span className='flex items-center'>Hey Dev <GiMagicPalm /></span>}>
                <p>Your phone number was edited successfully!</p>
            </Customdialog>
        </section>
    )
}

export function EditName() {
    const {data:session} = useSession();
    const [ showActivityIndicator,setShowActivityIndicator ] = useState(false);
    const [openLikeDialog, setOpenLikeDialog] = React.useState(false);
    const handleCloseLikeDialog = () => setOpenLikeDialog(false);

    // create post to firestore
    const handleCreatePost = async () => {
        setShowActivityIndicator(true);
        try {
            const usersRef = query(collection(db,'users'),where("email",'==',session.user.email));
            const userSnapShot = await getDocs(usersRef);
            const userId = userSnapShot.docs[0].id;

            await updateDoc(doc(db,'users',userId),{
                name:values.name,
            }).then(() => {
                handleChange('');
                setShowActivityIndicator(false);
                setOpenLikeDialog(true);
                
            }).catch((e) => console.error(e));
        } catch (error) {
            
        }
    }

    const { handleBlur,handleChange,handleSubmit,values } = useFormik({
        initialValues: { name:'' },
        onSubmit: values => {
            handleCreatePost();
        }
    })
    

    return (
        showActivityIndicator
        ?
        <ActivityIndicator />
        :
        <section>
            <form className="flex max-w-md my-8 flex-col border-2 border-violet-950/20 bg-white bg-violet-950/30 rounded-md shadow-md p-3 gap-4 w-full" onSubmit={handleSubmit}>
                <h3 className='text-center text-indigo-950/80 font-bold'>Edit Display Name</h3>
                <div className='flex flex-row items-center gap-4'>
                    <div className='w-full flex flex-col gap-2 placeholder:text-indigo-950/80'>
                        <TextField
                        id='name'
                        className='w-full'
                        placeholder="edit display name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        />

                        {
                            values.name.length > 0
                            ?
                            <Button 
                            variant='outlined'
                            className='block w-[100px]'
                            type='submit'>Update
                            </Button>
                        : null
                        }
                    </div>
                </div>
                <hr style={{color:'black',background:'black'}}/>
            </form>

            {/* Like Dialog */}
            <Customdialog 
            openProp={openLikeDialog} 
            handleCloseProp={handleCloseLikeDialog} 
            title={<span className='flex items-center'>Hey Dev <GiMagicPalm /></span>}>
                <p>Your Name was edited successfully!</p>
            </Customdialog>
        </section>
    )
}

export function EditPassword() {
    const {data:session} = useSession();
    const [ showActivityIndicator,setShowActivityIndicator ] = useState(false);
    const [openLikeDialog, setOpenLikeDialog] = React.useState(false);
    const handleCloseLikeDialog = () => setOpenLikeDialog(false);

    // create post to firestore
    const handleCreatePost = async () => {
        setShowActivityIndicator(true);
        try {
            const usersRef = query(collection(db,'users'),where("email",'==',session.user.email));
            const userSnapShot = await getDocs(usersRef);
            const userId = userSnapShot.docs[0].id;

            await updateDoc(doc(db,'users',userId),{
                password:values.password,
            }).then(() => {
                setShowActivityIndicator(false);
                setOpenLikeDialog(true);
                
            }).catch((e) => console.error(e));
        } catch (error) {
            
        }
    }

    const { handleBlur,handleChange,handleSubmit,values } = useFormik({
        initialValues: { password:'' },
        onSubmit: values => {
            handleCreatePost();
            values('');
        }
    })
    

    return (
        showActivityIndicator
        ?
        <ActivityIndicator />
        :
        <section>
            <form className="flex max-w-md my-8 flex-col border-2 border-violet-950/20 bg-white bg-violet-950/30 rounded-md shadow-md p-3 gap-4 w-full" onSubmit={handleSubmit}>
                <h3 className='text-center text-indigo-950/80 font-bold'>Change Login Password</h3>
                <div className='flex flex-row items-center gap-4'>
                    <div className='w-full flex flex-col gap-2 placeholder:text-indigo-950/80'>
                        <TextField
                        id='password'
                        type='password'
                        className='w-full'
                        placeholder="change login password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        />

                        {
                            values.password.length > 0
                            ?
                            <Button 
                            variant='outlined'
                            className='block w-[100px]'
                            type='submit'>Update
                            </Button>
                        : null
                        }
                    </div>
                </div>
                <hr style={{color:'black',background:'black'}}/>
            </form>

            {/* Like Dialog */}
            <Customdialog 
            openProp={openLikeDialog} 
            handleCloseProp={handleCloseLikeDialog} 
            title={<span className='flex items-center'>Hey Dev <GiMagicPalm /></span>}>
                <p>Your Password was updated successfully!</p>
            </Customdialog>
        </section>
    )
}

export function EditCustomEmail() {
    const {data:session} = useSession();
    const [ showActivityIndicator,setShowActivityIndicator ] = useState(false);
    const [openLikeDialog, setOpenLikeDialog] = React.useState(false);
    const handleCloseLikeDialog = () => setOpenLikeDialog(false);

    // create post to firestore
    const handleCreatePost = async () => {
        setShowActivityIndicator(true);
        try {
            const usersRef = query(collection(db,'users'),where("email",'==',session.user.email));
            const userSnapShot = await getDocs(usersRef);
            const userId = userSnapShot.docs[0].id;

            await updateDoc(doc(db,'users',userId),{
                customEmail:values.customEmail,
            }).then(() => {
                setShowActivityIndicator(false);
                setOpenLikeDialog(true);
                
            }).catch((e) => console.error(e));
        } catch (error) {
            
        }
    }

    const { handleBlur,handleChange,handleSubmit,values } = useFormik({
        initialValues: { customEmail:'' },
        onSubmit: values => {
            handleCreatePost();
            values('');
        }
    })
    

    return (
        showActivityIndicator
        ?
        <ActivityIndicator />
        :
        <section>
            <form className="flex max-w-md my-8 flex-col border-2 border-violet-950/20 bg-white bg-violet-950/30 rounded-md shadow-md p-3 gap-4 w-full" onSubmit={handleSubmit}>
                <h3 className='text-center text-indigo-950/80 font-bold'>Change Custom Email</h3>
                <div className='flex flex-row items-center gap-4'>
                    <div className='w-full flex flex-col gap-2 placeholder:text-indigo-950/80'>
                        <TextField
                        id='customEmail'
                        className='w-full'
                        placeholder="change custom Email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.customEmail}
                        />

                        {
                            values.customEmail.length > 0
                            ?
                            <Button 
                            variant='outlined'
                            className='block w-[100px]'
                            type='submit'>Update
                            </Button>
                        : null
                        }
                    </div>
                </div>
                <hr style={{color:'black',background:'black'}}/>
            </form>

            {/* Like Dialog */}
            <Customdialog 
            openProp={openLikeDialog} 
            handleCloseProp={handleCloseLikeDialog} 
            title={<span className='flex items-center'>Hey Dev <GiMagicPalm /></span>}>
                <p>Your Custom email was updated successfully!</p>
            </Customdialog>
        </section>
    )
}

export function EditCustomDomain() {
    const {data:session} = useSession();
    const [ showActivityIndicator,setShowActivityIndicator ] = useState(false);
    const [openLikeDialog, setOpenLikeDialog] = React.useState(false);
    const handleCloseLikeDialog = () => setOpenLikeDialog(false);

    // create post to firestore
    const handleCreatePost = async () => {
        setShowActivityIndicator(true);
        try {
            const usersRef = query(collection(db,'users'),where("email",'==',session.user.email));
            const userSnapShot = await getDocs(usersRef);
            const userId = userSnapShot.docs[0].id;

            await updateDoc(doc(db,'users',userId),{
                customDomain:values.customDomain,
            }).then(() => {
                setShowActivityIndicator(false);
                setOpenLikeDialog(true);
                
            }).catch((e) => console.error(e));
        } catch (error) {
            
        }
    }

    const { handleBlur,handleChange,handleSubmit,values } = useFormik({
        initialValues: { customDomain:'' },
        onSubmit: values => {
            handleCreatePost();
            values('');
        }
    })
    

    return (
        showActivityIndicator
        ?
        <ActivityIndicator />
        :
        <section>
            <form className="flex max-w-md my-8 flex-col border-2 border-violet-950/20 bg-white bg-violet-950/30 rounded-md shadow-md p-3 gap-4 w-full" onSubmit={handleSubmit}>
                <h3 className='text-center text-indigo-950/80 font-bold'>Change Custom Domain</h3>
                <div className='flex flex-row items-center gap-4'>
                    <div className='w-full flex flex-col gap-2 placeholder:text-indigo-950/80'>
                        <TextField
                        id='customDomain'
                        className='w-full'
                        placeholder="change custom domain"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.customDomain}
                        />

                        {
                            values.customDomain.length > 0
                            ?
                            <Button 
                            variant='outlined'
                            className='block w-[100px]'
                            type='submit'>Update
                            </Button>
                        : null
                        }
                    </div>
                </div>
                <hr style={{color:'black',background:'black'}}/>
            </form>

            {/* Like Dialog */}
            <Customdialog 
            openProp={openLikeDialog} 
            handleCloseProp={handleCloseLikeDialog} 
            title={<span className='flex items-center'>Hey Dev <GiMagicPalm /></span>}>
                <p>Your custom domain was updated successfully!</p>
            </Customdialog>
        </section>
    )
}