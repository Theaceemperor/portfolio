'use client'
import React, { Suspense, useRef } from 'react';
import Link from "next/link";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "@/settings/firebase.settings";
import { ImCart } from 'react-icons/im';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useIsVisible } from '../useIsVisible';
import { GiSpades } from 'react-icons/gi';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { FaArrowUp, FaBars, FaBlog, FaInstagram, FaMinus, FaPlus, FaXTwitter } from 'react-icons/fa6';
import { SiGmail, SiWebpack } from 'react-icons/si';
import { BsGithub, BsPersonCheck } from 'react-icons/bs';
import { IoMdContacts, IoMdStats } from 'react-icons/io';
import { TbGiftCardFilled } from 'react-icons/tb';
import { PopperPopupState } from '../modals';
import { GoCodeReview } from 'react-icons/go';
import { PiWebhooksLogoFill } from 'react-icons/pi';
import { SessionProvider, signOut, useSession } from 'next-auth/react';
import styled from '@emotion/styled';
import { FaCloudUploadAlt, FaTimes } from 'react-icons/fa';
import { Alert, AlertTitle, Autocomplete, Collapse, Rating, TextField, Typography } from '@mui/material';
import { CgLink } from 'react-icons/cg';
import ChatComponent from './ChatComponent';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { ActivityIndicator2 } from '../activity-indicator';
import { timeAgo } from '../time-ago';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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


export function Pagination ({ currentPage, totalPages, onPageChange }) {
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  
    return (
        <div className="flex justify-center my-8">
            {currentPage > 1 && (
                <button
                onClick={() => onPageChange(currentPage - 1)}
                className="mr-2 bg-black text-wheat px-4 py-2 rounded hover:bg-amber-600 hover:text-black transition duration-300"
                >
                Previous
                </button>
            )}
            {pages.map((page) => (
                <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`mx-2 ${
                    currentPage === page ? 'bg-wheat text-black' : 'bg-black text-amber-600'
                } px-4 py-2 rounded hover:bg-amber-600 hover:text-black transition duration-300`}
                >
                {page}
                </button>
            ))}
            {currentPage < totalPages && (
                <button
                onClick={() => onPageChange(currentPage + 1)}
                className="ml-2 bg-black text-wheat px-4 py-2 rounded hover:bg-amber-600 hover:text-black transition duration-300"
                >
                Next
                </button>
            )}
        </div>
    );
};

export function SubscribeBox() {
    
  const [formInput,setFormInput] = React.useState([]);
      
  const handlePostmail = async () => {
    await addDoc(collection(db,'mailing_list'), {
        body:formInput,
        joinedAt:new Date().getTime()
    }).then(() => {
        setFormInput('');
        alert('Thank you for Subscribing.');
    }).catch((error) => {
        console.error(error);
    })
};

    return (
        <div id='subscription' className='mb-4 container mx-auto'>
            <p className='mb-2 p-1 text-sm md:text-base text-gray-600 text-center'>Subscribe to our mailing list to stay updated on exciting news and our product updates.</p>
            <form className='flex flex-col sm:flex-row space-x-2 items-center justify-center'>
                <input
                id='subscribeEmail'
                name='subscribeEmail'
                placeholder='Email address'
                className='max-w-lg rounded bg-transparent px-2 py-1 text-amber-600 focus:outline-none outline-none border border-amber-600 placeholder:italic'  
                onChange={
                    (e) => setFormInput(e.target.value)
                }
                value={formInput}
                required
                />
                <button className='px-4 py-1 rounded hover:bg-amber-600 hover:text-black transition duration-300 ease-in-out' type='submit'
                onClick={() => handlePostmail}>Subsribe</button>
            </form>
        </div>
    )
}

export function ReviewsSection() {
    const ref = React.useRef();
    const isVisible1 = useIsVisible(ref);
    const [reviews,setReviews] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const postsPerPage = 6;
    const totalPages = Math.ceil(reviews.length / postsPerPage);
  
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = reviews.slice(indexOfFirstPost, indexOfLastPost);
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
  
  
    const handleGetReviews = async () => {
        const docRes = await getDocs(collection(db,'spades-reviews'));
        setReviews(docRes.docs.map(doc => {
            return {
                id:doc.id,
                data:{
                    ...doc.data()
                }
            }
        }))
    }
    handleGetReviews();

    return (
        <section ref={ref} id="reviews" className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 px-4 2xl:px-0 transition-opacity ease-linear duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
            {currentPosts.map((item) => (
                <div key={item.id} className="">
                <Suspense fallback={
                    <div className="flex items-center text-amber-600 animate-pulse">
                    Sp<GiSpades/>des
                    </div>
                }>
                    <div className="bg-white p-4 rounded-md shadow-md shadow-shadow-color overflow-hidden">
                        <h4 className="text-lg font-bold mb-2 text-amber-600">{item.data.name}</h4>

                        {/* Service/Feature Description */}
                        <p className="text-sm text-gray-600">{item.data.review}</p>
                        <small className="text-gray-600">{timeAgo(item.data.sentAt)}</small>
                        <div>
                        <Rating name="simple-controlled" value={item.data.rating} />
                        </div>
                    </div>
                </Suspense>
                </div>
            ))}
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </section>
    )
}

export function TeamMemberCard({ item }) {
    const ref = React.useRef();
    const isVisible1 = useIsVisible(ref);

    return (
        <div ref={ref} className={`bg-white p-4 rounded-md shadow-md shadow-shadow-color transition-opacity ease-linear duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"} `}>
            <Image src={item.imageUrl} alt={`${item.position} Image`} width={500} height={500} quality={80} className="w-full h-40 object-cover mb-4 rounded-md" />
            <h4 className="text-amber-600 text-lg font-bold mb-2">{item.name}</h4>
            <p className="text-gray-600">{item.position}</p>
        </div>
    )
}

export function ServiceCard({ item }) {
    const ref = React.useRef();
    const isVisible1 = useIsVisible(ref);

    return (
        <div ref={ref} className={`bg-white p-4 rounded-md shadow-md shadow-shadow-color transition-opacity ease-linear duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"} `}>
            <h4 className="text-lg font-bold mb-2 text-amber-600">{item.title}</h4>

            {/* Service/Feature Description */}
            <p className="text-sm text-gray-600">{item.description}</p>
        </div>
    )
}

export function WriteReview() {
    const ref = React.useRef();
    const isVisible1 = useIsVisible(ref);
    const [formInput,setFormInput] = React.useState('');
    const [formName,setFormName] = React.useState('');
    const [value, setValue] = React.useState(3);
    const [showalert, setShowalert] = React.useState(false);
    const [showActivityIndicator, setShowActivityIndicator] = React.useState(false);

    const handleAddReview = async () => {
        setShowActivityIndicator(true);
        await addDoc(collection(db,'spades-reviews'), {
            name:formName,
            review:formInput,
            rating:value,
            sentAt:new Date().getTime()
        })
        .then(() => {
                setFormInput('');
                setFormName('');
                setShowActivityIndicator(false);
                setShowalert(true);
        }).catch((e) => console.error(e));
    }

    return (
        showActivityIndicator
        ?
        <ActivityIndicator2 />
        :
        <div>
            <div className="mt-8 flex flex-col gap-2 items-center justify-center">
                <h3>Write a review</h3>
                <form ref={ref} className={`bg-wheat flex flex-col gap-2 rounded-lg items-center justify-center p-4 sm:w-auto sm:max-w-lg w-[90%] transition-opacity ease-linear duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
                    <div className="flex flex-col lg:flex-row md:flex-row w-full gap-5">
                        <TextField 
                        variant="filled"
                        label={"Your name"}
                        onChange={(text) => setFormName(text.target.value)}
                        value={formName}
                        />
                        <TextField 
                        variant="filled"
                        label={"Your review"}
                        multiline={true}
                        value={formInput}
                        onChange={(text) => setFormInput(text.target.value)}
                        />
                    </div>
                    <Typography component="legend">Rate us</Typography>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                            setValue(newValue);
                            }}
                        />
                    <Button 
                    color="warning"
                    onClick={() => handleAddReview()}>Post</Button>
                </form>
            </div>
            {
                showalert
                ?
                <Notification alertTitle={'Review Sent'}>
                    Thank you for your review!
                </Notification>
                :
                null
            }
        </div>
    )
}

export function Notification({children,alertTitle}) {
    const [open, setOpen] = React.useState(true);
  
      setInterval(() => {
        setOpen(false);
      }, 15000);
    
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
        <div className="fixed top-16 right-0 z-20 max-w-sm w-[300px]">
            <Collapse in={open}>
                <Alert 
                icon={<BsPersonCheck className="text-xl text-amber-600"/>}
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

export function FAQ({ question, answer }) {
    const ref = React.useRef();
    const isVisible1 = useIsVisible(ref);
    const [open,setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div ref={ref} className={`px-4 py-2 shadow shadow-shadow-color rounded min-w-full max-w-md transition-opacity ease-linear duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
            <span className="flex flex-row gap-4 font-semibold text-lg"> 
                {question}
                {
                    open
                    ?
                    <button className="focus:outline-none" onClick={handleClose}><FaMinus /></button>
                    :
                    <button className="focus:outline-none" onClick={handleOpen}><FaPlus /></button>
                }
            </span>
            {
                open
                ?
                <blockquote className="flex flex-col gap-1 mt-1">
                    <hr className="border-light-blue mx-2 sm:mx-4" />
                    <p className='text-gray-600'>{answer}</p>
                </blockquote>
                :
                null
            }
        </div>
    )
}

export function SectionHeader({ headerText,headerLink,style }) {

    return (
        <h3 className={`text-xl sm:text-2xl font-bold mb-4 text-center`}><Link href={headerLink} className={`flex items-center hover:text-amber-600 ${style}`}>{headerText}<CgLink /></Link></h3>
    )
}

export function ProjectSubHeader({ backgroundImage, pageTitle }) {
    const subheaderStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
    }

    return (
        <header style={subheaderStyle}>
            <div className='w-full h-full bg-black/30 flex items-center justify-center'>
                <h2 className='text-4xl font-bold text-center'>{pageTitle}</h2>
            </div>
        </header>
    )
}

export function Project({ title, description, imageUrl, link }) {
    const ref = React.useRef();
    const isVisible1 = useIsVisible(ref);

    return (
        <div ref={ref} className={`bg-white rounded-md p-2 shadow-lg dark:shadow-amber-600 dark:shadow overflow-hidden transition-opacity ease-linear duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
            <Image src={imageUrl} alt={`${title} Image`} width={500} height={500} quality={100} priority className='rounded-md mb-4 object-cover w-full h-auto' />
            <div>
                <h3 className='text-xl font-bold mb-2 text-amber-600'>{title}</h3>
                <p className='text-gray-600 mb-4 dark:text-gray-500'><b>Purpose/Objective:</b> {description}</p>
                {
                    link
                    ?
                    <Link href={link} className='text-amber-600 hover:underline'>Learn more</Link>
                    :
                    null
                }
            </div>
        </div>
    )
}

export function PortfolioProject({ projectId,projectImage,projectTitle,children,projectLink,overview }) {
    const ref = useRef();
    const isVisible1 = useIsVisible(ref);

    const [readMore,setReadMore] = React.useState(false);

    return (
        <div id={projectId} ref={ref} className={`max-w-sm bg-white rounded overflow-hidden shadow-lg transition-opacity ease-linear duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"} `}>
            {projectImage}
            <div className="px-6 py-4">
                <Link href={projectLink} className="font-bold text-xl mb-2 capitalize flex items-center text-amber-600">{projectTitle} <CgLink className='text-amber-600' /></Link>
                <article className="text-gray-700 text-base">{overview}</article>
                {
                    readMore
                    ?
                    <div className="text-gray-700 text-base">
                        {children}
                        <button className="text-amber-600" onClick={() => setReadMore(false)}>close</button>
                    </div>
                    :
                    <button className="text-amber-600" onClick={() => setReadMore(true)}>read more...</button>

                }
            </div>
        </div>
    )
}
  
export function WebCategories({onChange,className,options,value,label}) {
    const [inputValue, setInputValue] = React.useState('');

    return (
        <div>
        <Autocomplete
            value={value}
            className={`${className}`}
            onChange={onChange}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={options}
            sx={{ width: '100%' }}
            renderInput={(params) => <TextField {...params} label={`${label}`} required />}
        />
        </div>
    );
}

export function PaymentFileUpload({text,selectedFile}) {

    return (
        <Button component="label" variant="contained" startIcon={<FaCloudUploadAlt className='text-amber-600'/>}
        style={{
            background: 'black', color: '#de4f0a'
        }}>
        {text}
            <VisuallyHiddenInput type="file" accept='image/*' onChange={selectedFile} />
        </Button>
    )
}

export function FileUpload1({text,selectedFile}) {

    return (
        <Button component="label" variant="contained" startIcon={<FaCloudUploadAlt className='text-amber-600'/>}
        style={{
            background: 'black', color: '#de4f0a'
        }}>
        {text}
            <VisuallyHiddenInput type="file" accept='image/*' onChange={selectedFile} required />
        </Button>
    )
}

export function SpadesStats() {
    const ref = React.useRef();
    const isVisible1 = useIsVisible(ref);

    return (
        <section ref={ref} id="stats" className={`transition-opacity ease-linear duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
            <div className="px-2 flex flex-col justify-center items-center my-10 gap-5" id="stats">
                <h3 className="flex gap-1 text-lg font-bold items-center"><Link href={"/about#stats"} className="flex items-center justify-center">Our stats <IoMdStats /></Link></h3>
                <article className="text-center flex flex-col gap-3 sm:grid sm:grid-cols-2 sm:gap-5">
                    <blockquote className="w-40 flex flex-col gap-3 p-1 border-l border-amber-600 px-1 border-t rounded-md">
                        <GiSpades className="text-lg" />
                        <span>
                            <h5>Happy client's</h5>
                            <p>120+</p>
                        </span>
                    </blockquote>
                    <blockquote className="w-40 flex flex-col gap-3 p-1 sm:border-l border-amber-600 px-1 sm:border-b rounded-md border-t border-r sm:border-t-transparent sm:border-r-transparent">
                        <PiWebhooksLogoFill className="text-lg" />
                        <span>
                            <h5>Delivery rate</h5>
                            <p>100%</p>
                        </span>
                    </blockquote>
                </article>
                <article className="text-center flex flex-col gap-3 sm:grid sm:grid-cols-2 sm:gap-5">
                    <blockquote className="w-40 flex flex-col gap-3 p-1 sm:border-r sm:border-l-transparent border-l border-amber-600 px-1 border-t rounded-md">
                        <GoCodeReview className="text-lg" />
                        <span>
                            <h5>Positive reviews</h5>
                            <p>97%</p>
                        </span>
                    </blockquote>
                    <blockquote className="w-40 flex flex-col gap-3 p-1 border-r border-amber-600 px-1 sm:border-b border-t sm:border-t-transparent rounded-md">
                        <SiWebpack className="text-lg" />
                        <span>
                            <h5>Business modules</h5>
                            <p>20+</p>
                        </span>
                    </blockquote>
                </article>
            </div>
        </section>
    )
}

export function ServiceRow({ Service, serviceDescription, clickRedirect }) {

    return (
        <article className="bg-[url('/img/1.jpg')] bg-center bg-cover h-[50vh] sm:h-[80vh] w-[95%] rounded-md">
            <blockquote className="h-full w-full bg-black/30 flex items-center justify-center rounded-md">
                <aside className="hover:bg-black/50 w-full h-full text-center hover:text-amber-600 text-transparent flex justify-center items-center text-3xl flex-col gap-5 rounded-md">
                    <h1>{Service}</h1>
                    <small className="hover:text-[wheat] text-lg p-2">{serviceDescription}</small>
                    <button className="hover:transition-colors hover:border-y ease-linear border-[wheat] text-[22px]"
                    onClick={clickRedirect}>
                        Book now
                    </button>
                </aside>
            </blockquote>
        </article>
    )
}

export function H1Link({text,icon,targetLink}) {

    return (
        <div  className="w-full flex items-center justify-center my-1">
            <h1 className="px-3">
                <Link href={`${targetLink}`} className="flex gap-1 items-center">{text}{icon}</Link>
            </h1>
        </div>
    )
}

export function BlogLink() {

    return (
        <div className="w-full flex items-center justify-center my-1">
            <h1 className="px-3">
                <Link href={"https://x.com/@spadeshub"}
                className="flex items-center justify-center">
                    <FaBlog className="text-amber-600"/>log
                </Link>
            </h1>
        </div>
    )
}

export function PLink({text,icon,targetLink}) {

    return (
        <div>
            <p className="px-2">
                <Link href={`${targetLink}`} className="flex gap-1 items-center">{text}{icon}</Link>
            </p>
        </div>
    )
}

export function ButtonLink({ targetLink,text,icon }) {

    return (
        <div  className="w-full flex items-center justify-center my-1">
            <button className='px-3 py-1 bg-transparent flex gap-1 items-center' onClick={targetLink}>{text}{icon}
            </button>
        </div>
    )
} 

export function ProductPage6({name,price,stock,product,available,amount,imageSrc}) {

    return (
        <section className="flex flex-col items-center justify-center m-1">
            <div className="h-[300px] w-[300px] flex items-center flex-col shadow-md p-2 shadow-gray-600 gap-3 rounded-sm">
                <Image 
                width={920}
                height={1080}
                src={imageSrc}
                className="h-auto w-full rounded-md border-b border-amber-600 shadow-inner"
                alt="gift card"
                />
                <div className="flex justify-evenly gap-8 px-2 w-full items-center">
                    <ul>
                        <li>{name}</li>
                        <li>{price}</li>
                        <li>{stock}</li>
                    </ul>
                    <ul>
                        <li>{product}</li>
                        <li>{amount}</li>
                        <li>{available}</li>
                    </ul>
                </div>
                <ShoppingCart />
            </div>
        </section>
    )
}

export function MyGiftProducts() {

    const [ giftProducts, setGiftProducts ] = React.useState([
        { id: 1, product: 'Spades $5 gift', stock: 'In stock', amount: '$5', imagesrc: '/dollar-gift/2.png'},
        { id: 2, product: 'Spades $10 gift', stock: 'In stock', amount: '$10', imagesrc: '/dollar-gift/3.png'},
        { id: 3, product: 'Spades $15 gift', stock: 'In stock', amount: '$15', imagesrc: '/dollar-gift/4.png'},
        { id: 4, product: 'Spades $50 gift', stock: 'In stock', amount: '$50', imagesrc: '/dollar-gift/5.png'},
        { id: 5, product: 'Spades $100 gift', stock: 'In stock', amount: '$100', imagesrc: '/dollar-gift/6.png'},
        { id: 6, product: 'Spades $200 gift', stock: 'In stock', amount: '$200', imagesrc: '/dollar-gift/7.png'},
        { id: 7, product: 'Spades $500 gift', stock: 'In stock', amount: '$500', imagesrc: '/dollar-gift/8.png'},
    ])

    return (
        <main>
            <PopperPopupState buttonText={"View Available $ cards"}>
                <article className="flex flex-col lg:grid md:grid lg:grid-cols-2 md:grid-cols-2 px-1 text-black">

                    {
                        giftProducts.map((item) => (
                            <ProductPage6 key={item.id} 
                            available={"available"}
                            name={"Name"}
                            price={"Price"}
                            product={item.product}
                            stock={item.stock}
                            amount={item.amount}
                            imageSrc={item.imagesrc}
                            />
                        ))
                    }
                </article>
            </PopperPopupState>
        </main>
    )
}

export function GiftCardCheckout() {

    return (
        <section className="flex flex-col items-center justify-center my-5 gap-5 P-2 text-center">
            <h1 className="px-5 font-bold text-xl">Thank you for your purchase!</h1>
            <div>
                <Image 
                width={560}
                height={560}
                className="w-full h-auto rounded-lg"
                alt="gift-card image"
                src={"/img/bg.png"}
                />
            </div>
            <h4 className="text-sm flex items-center gap-1 px-2 border-b border-amber-600 text-center">Gift card <TbGiftCardFilled className="text-amber-600"
            /> will be sent to provided Email.</h4>
            
            <LoginQuest />
            
        </section>
    )
}

export function AffiliateLink() {
    const router = useRouter();
    const ref1 = useRef();
    const isVisible1 = useIsVisible(ref1);

    return (
        <button ref={ref1} className={`transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"} underline decoration-amber-600 underline-offset-4`}
        onClick={() => router.push('/contact')}><i>Become an affiliate here</i>
        </button>
    )
}

export function LoginQuest({color}) {

    return (
        <div className="flex items-center justify-center">
            <Link 
            href={"/web-development/dashboard"}
            className={`text-md flex items-center gap-1 text-amber-600 text-center ${color}`}>
                <i>login to dashboard</i><GiSpades />
            </Link>
        </div>
    )
}

export function SignUpQuest({color}) {

    return (
        <div>
            <Link 
            href={"/web-development/application"}
            className={`text-sm flex items-center gap-1 px-2 text-amber-600 text-center ${color}`}>
                <i>Get a website here</i><GiSpades />
            </Link>
        </div>
    )
}

export function SignUp({color}) {

    return (
        <div>
            <Link 
            href={"/web-development/application"}
            className={`text-sm flex items-center gap-1 px-2 text-amber-600 dark:text-wheat text-center ${color}`}>
                <i>Apply Here</i><GiSpades className="text-amber-600" />
            </Link>
        </div>
    )
}

export function ContactUs({text}) {

    return (
        <Link href={"/contact"} 
        className="flex items-center gap-1 text-amber-600 dark:text-wheat">
            Contact us<IoMdContacts className="text-amber-600"/> {text}
        </Link>
    )
}

export function LoginButton({onClick}) {

    return (
        <button 
        type="submit"
        style={{
            background: 'black',
            opacity: 1,
        }}
        className="bg-black/70 text-amber-600 flex items-center gap-1 px-2 py-1 rounded-md"
        onClick={onClick}
        >LogIn<GiSpades className="text-xl"/>
        </button>
    )
}

export function LoginButton2() {

    return (
        <Link 
        href={"/web-development/dashboard"}
        className="flex gap-1 items-center justify-center text-amber-600"
        >LogIn<GiSpades className="text-lg"/>
        </Link>
    )
}

export function VisitHomePage() {

    return (
        <Link href="/"><i className="text-amber-600 flex items-center justify-center gap-0.5">
            H<Image 
            className="w-[32px] h-auto rounded-full border-2 border-amber-600" 
            width={50} 
            height={32} 
            src="/img/SPADES3.png" 
            alt="O" 
            />
            mepage</i>
            
        </Link>
    )
}

export function PortfolioBtn() {

    return (
        <Link href="/web-design/portfolio"><i className="text-amber-600 flex items-center gap-0.5">
            Portf<Image 
            className="w-[32px] h-auto rounded-full border-2 border-amber-600" 
            width={50} 
            height={32} 
            src="/img/SPADES3.png" 
            alt="O" 
            />lio</i>
            
        </Link>
    )
}

export function SpadesSubFooter() {
    const ref = React.useRef();
    const isVisible1 = useIsVisible(ref);

    return (
        <footer ref={ref} id="footer" className={`mx-1 mt-8 rounded shadow transition-opacity ease-linear duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>

            <SubscribeBox />
            
            <div className="grid grid-cols-1 sm:grid-cols-3 sm:text-center gap-5 p-5 text-xs">
                <ul className="flex flex-col space-y-2">
                <li><Link href={'/'} className="hover:underline underline-offset-2 decoration-amber-600">Home</Link></li>
                <li><Link href={'/#about'} className="hover:underline underline-offset-2 decoration-amber-600">About us</Link></li>
                <li><Link href={'/about#services'} className="hover:underline underline-offset-2 decoration-amber-600">Services</Link></li>
                <li><Link href={'/projects#portfolio'} className="hover:underline underline-offset-2 decoration-amber-600">Products</Link></li>
                <li><Link href={'/gift-purchase'} className="hover:underline underline-offset-2 decoration-amber-600">Giftcards</Link></li>
                <li><Link href={'/about#reviews'} className="hover:underline underline-offset-2 decoration-amber-600">Reviews</Link></li>
                <li><Link href={'/about#faq'} className="hover:underline underline-offset-2 decoration-amber-600">FAQ</Link></li>
                <li><Link href={'/contact'} className="hover:underline underline-offset-2 decoration-amber-600">Contact</Link></li>
                </ul>
                <ul className="flex flex-col gap-1">
                <li><Link href={'/web-development'} className="hover:underline underline-offset-2 decoration-amber-600">Track your development</Link></li>
                <li><Link href={'/web-development/application'} className="hover:underline underline-offset-2 decoration-amber-600">Build a website</Link></li>
                {/* <li><Link href={'/spades/pricing'} className="hover:underline underline-offset-2 decoration-amber-600">How our pricing works</Link></li> */}
                <li><Link href={'/contact'} className="hover:underline underline-offset-2 decoration-amber-600">Get a template</Link></li>
                <li><Link href={'#'} className="hover:underline underline-offset-2 decoration-amber-600">Docs</Link></li>
                <li>
                    <blockquote className="flex flex-row gap-5 mt-1 sm:items-center sm:justify-center">
                    <Link href={'https://twitter.com/@spadeshub'} className="hover:underline underline-offset-2 decoration-amber-600 flex items-center justify-center"><FaXTwitter className="text-2xl text-amber-600 rounded-full text-center" /></Link>
                    <Link href={'https://github.com/Theaceemperor/portfolio'} className="hover:underline underline-offset-2 decoration-amber-600 flex items-center justify-center"><BsGithub className="text-amber-600 text-2xl border-x-2 border-black rounded-full text-center" /></Link>
                    <Link href={'mailto:spadesinstitute.empire@gmail.com'} className="hover:underline underline-offset-2 decoration-amber-600 flex items-center justify-center"><SiGmail className="text-amber-600 text-2xl text-center" /></Link>
                    <Link href={'https://nexvault.vercel.app'}><Image priority src={'/nexvault_icon.ICO'} alt='NexVault' width={500} height={500} className='w-6 h-6 bg-amber-600 rounded-full' /></Link>
                    <Link href={'https://instagram.com/spadeshub?igsh=YnMwZWpmdW9mNWI3'} className="hover:underline underline-offset-2 decoration-amber-600 flex items-center justify-center"><FaInstagram className="text-2xl text-amber-600 rounded-full text-center" /></Link>
                    </blockquote>
                </li>
                </ul>
                <ul className="flex flex-col gap-1">
                <li><Link href={'tel:+2349023236306'} className="hover:underline underline-offset-2 decoration-amber-600">Dev support</Link></li>
                <li><Link href={'/spades/terms'} className="hover:underline underline-offset-2 decoration-amber-600">T & C</Link></li>
                <li><Link href={'/spades/policy'} className="hover:underline underline-offset-2 decoration-amber-600">Privacy</Link></li>
                <li>2023 © spadeshub</li>
                </ul>
            </div>
        </footer>
    )
}

export function RowCta() {
    const ref = React.useRef();
    const isVisible1 = useIsVisible(ref);

    return (
        <section id="cta" ref={ref} className={`mt-8 flex flex-col gap-3 items-center justify-center transition-opacity ease-linear duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
          <div className="bg-[url('/img/cta.png')] h-52 sm:h-64 w-[90%] sm:max-w-md bg-center bg-cover shadow-md dark:shadow-amber-600 shadow-black rounded-md flex justify-center items-end py-1">
            <article className="flex flex-row gap-4">
              <Link href={'mailto:spadesinstitute.empire@gmail.com'}>
                <SiGmail
              className="rounded-full border-2 text-[wheat] font-bold border-amber-600 animate-bounce text-3xl p-1"
              />
              </Link>
              <Link href={'tel:+2349023236306'}>
                <Image 
                src={'/img/SPADES3.png'}
                alt="logo"
                width={500}
                height={500}
                className="rounded-full border-2 border-amber-600 animate-bounce w-8 h-8"
                />
              </Link>
              <Link href={'https://twitter.com/@spadeshub'}>
                <FaXTwitter
              className="rounded-full border-2 text-[wheat] font-bold border-amber-600 animate-bounce text-3xl p-1"
              />
              </Link>
              <Link href={'https://nexvault.vercel.app'} className='w-8 h-8'><Image priority src={'/nexvault_icon.ICO'} alt='NexVault' width={500} height={500} className='w-full h-auto animate-bounce bg-white border-2 border-amber-600 rounded-full' /></Link>
              <Link href={"https://instagram.com/spadeshub?igsh=YnMwZWpmdW9mNWI3"}>
                <FaInstagram
              className="rounded-full border-2 text-wheat font-bold border-amber-600 animate-bounce text-3xl p-1 bg-black"
              />
              </Link>
            </article>
          </div>
          <ContactUs />
        </section>
    )
}

export function SubHeader() {
    return (
        <div className="bg-black text-amber-600 border-y-4 border-amber-600 dark:bg-amber-600/85 dark:text-black sm:h-[60vh] lg:h-[60vh] h-[40vh] flex flex-col justify-center items-center">
            <div className="dark:p-2 dark:bg-black dark:rounded-md place-self-center">
              <HeaderText customBorder={'border-amber-600'}/>
            </div>
        </div>
    )
}

export function HomeNav() {

    return (
        <nav className='sm:relative sm:left-40'>
          <ul className='flex items-center justify-end gap-3 sm:gap-5 font-semibold'>
            <li><Link href={'/projects'} className='hover:underline decoration-amber-600 underline-offset-4 ease-in-out duration-300'>Products</Link></li>
            <li><Link href={'/about'} className='hover:underline decoration-amber-600 underline-offset-4 ease-in-out duration-300'>About Us</Link></li>
            <li><Link href={'/contact'} className='hover:underline decoration-amber-600 underline-offset-4 ease-in-out duration-300'>Contact</Link></li>
          </ul>
        </nav>
    )
}

export function SubNav() {
    const { data:session } = useSession();
    const pathName = usePathname();
    // state for scroll direction
    const [prevScrollPosition,setPrevScrollPosition] = React.useState(0);
    //state for overall navbar visibility on scroll
    const [isNavbarVisible, setNavbarVisible] = React.useState(true);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const handleLogout = async () => {
        await signOut().then(() => setIsMenuOpen(false)).catch((e) => console.error(e));
    }
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    //function to handle scroll events
    const handleScroll = () => {
        const currentScrollPosition = window.scrollY;

        if (currentScrollPosition > prevScrollPosition) {
        // scrolling down, hide the navbar
        setNavbarVisible(false);
        } else {
        //scrolling up, show the NavBar
        setNavbarVisible(true);
        }

        // update the previous scroll position
        setPrevScrollPosition(currentScrollPosition);
    };

    // effect to add and remove event listener for scroll
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPosition]);

    return (
        <>
            <div className='hidden lg:block border-none bg-black text-wheat dark:bg-wheat dark:text-black z-30 fixed top-0 bottom-0 left-0 w-64 py-8'>
                <div className='mb-4 py-2 px-4 bg-wheat dark:bg-black'><span className='flex items-center justify-center font-bold text-2xl animate-pulse text-amber-600'>SP<GiSpades className='text-3xl' />DES</span></div>
                <div className='flex flex-col space-y-2 px-4 overflow-y-scroll no-scrollbar'>
                    <Link href={'/'} className={`hover:underline decoration-amber-600 underline-offset-4 ease-in-out duration-300`}>Home</Link>
                    <Link href={'/projects'} className={pathName === '/projects' ? 'text-amber-600 font-bold' : `hover:underline decoration-amber-600 underline-offset-4 ease-in-out duration-300`}>Solutions/Products</Link>
                    <Link href={'/about'} className={pathName === '/about' ? 'text-amber-600 font-bold' : `hover:underline decoration-amber-600 underline-offset-4 ease-in-out duration-300`}>About Us</Link>
                    {session
                    ?
                    <Link href="/web-development/dashboard" className={pathName === '/web-development/dashboard' ? 'text-amber-600 font-bold' : `hover:underline decoration-amber-600 underline-offset-4 ease-in-out duration-300`}>Dashboard</Link>
                    :
                    <Link href="/web-development" className={pathName === '/web-development' ? 'text-amber-600 font-bold' : `hover:underline decoration-amber-600 underline-offset-4 ease-in-out duration-300`}>Login</Link>
                    }
                    {session
                    ?
                    <button onClick={() => signOut()} className={"block mb-2"}>Logout</button>
                    :
                    <Link href="/web-development/application" className={pathName === '/web-development/application' ? 'text-amber-600 font-bold' : `hover:underline decoration-amber-600 underline-offset-4 ease-in-out duration-300`}>Sign Up</Link>
                    }
                    <Link href="/gift-purchase" className={pathName === '/gift-purchase' ? 'text-amber-600 font-bold' : `hover:underline decoration-amber-600 underline-offset-4 ease-in-out duration-300`}>Store</Link>
                    <Link href="#subscription" className={"hover:underline decoration-amber-600 underline-offset-4 ease-in-out duration-300"}>Subscribe</Link>
                    <Link href="#" className={pathName === '/spades/pricing' ? 'text-amber-600 font-bold' : `hover:underline decoration-amber-600 underline-offset-4 ease-in-out duration-300`}>Pricing</Link>
                    <Link href="/projects#our-clients" className={"hover:underline decoration-amber-600 underline-offset-4 ease-in-out duration-300"}>Our Clients</Link>
                    <Link href="/about#faq" className={"hover:underline decoration-amber-600 underline-offset-4 ease-in-out duration-300"}>FAQ</Link>
                    <Link href="/reviews" className={pathName === '/reviews' ? 'text-amber-600 font-bold' : `hover:underline decoration-amber-600 underline-offset-4 ease-in-out duration-300`}>Reviews</Link>
                    <Link href="#" className={"hover:underline decoration-amber-600 underline-offset-4 ease-in-out duration-300"}>Blog</Link>
                    <Link href={'/contact'} className={pathName === '/contact' ? 'text-amber-600 font-bold' : `hover:underline decoration-amber-600 underline-offset-4 ease-in-out duration-300`}>Contact</Link>
                    <Link href="/spades/policy" className={pathName === '/spades/policy' ? 'text-amber-600 font-bold' : `hover:underline decoration-amber-600 underline-offset-4 ease-in-out duration-300`}>Privacy</Link>
                </div>
                <p className='mt-4 p-2 text-sm absolute bottom-0'>&copy; 2024 Spades. All rights reserved.</p>
            </div>
            <div className='lg:hidden flex items-center justify-center'>
                <nav className={`${isNavbarVisible || window.scrollY === 0 ? 'translate-y-0 top-2' : '-translate-y-full top-0'} transform transition-transform duration-300 ease-in-out fixed z-30 text-amber-600 bg-black/80 py-1 px-6 sm:px-12 rounded-md`}>
                    <div className="container mx-auto flex lg:hidden justify-between items-center">
                        <Link href="/" onClick={() => setIsMenuOpen(false)}  className={"text-xl font-bold flex items-center justify-center animate-pulse"}>SP<GiSpades className='text-2xl' />DES</Link>
                        <div className="ml-8 mt-1">
                            <button onClick={toggleMenu} className="">
                                {isMenuOpen ? <FaTimes size={24} className="font-bold" /> : <FaBars size={24} className="font-bold" />}
                            </button>
                        </div>
                        {isMenuOpen && (
                            <div className="absolute top-12 left-0 right-0 flex flex-col space-y-2 max-h-screen overflow-y-scroll p-4 bg-black/80 rounded transition duration-300 ease-linear">
                                <Link href="/" className={pathName === '/' ? "text-wheat font-semibold block" : "block hover:underline decoration-amber-600 underline-offset-4 ease-in-out duration-300"} onClick={() => setIsMenuOpen(false)}>Home</Link>
                                <Link href="/about" onClick={() => setIsMenuOpen(false)} className={pathName === '/about' ? "text-wheat font-semibold block" : "block hover:underline decoration-amber-600 underline-offset-4 ease-in-out duration-300"}>About</Link>
                                <Link href="/projects" onClick={() => setIsMenuOpen(false)} className={pathName === '/projects' ? "text-wheat font-semibold block" : "block hover:underline decoration-amber-600 underline-offset-4 ease-in-out duration-300"}>Solutions/Products</Link>
                                <Link href="/gift-purchase" onClick={() => setIsMenuOpen(false)} className={pathName === '/gift-purchase' ? "text-wheat font-semibold block" : "block hover:underline decoration-amber-600 underline-offset-4 ease-in-out duration-300"}>Store</Link>
                                {session
                                ?
                                <Link href="/web-development/dashboard" onClick={() => setIsMenuOpen(false)} className={pathName === '/web-development/dashboard' ? "text-wheat font-semibold block" : "block hover:underline decoration-amber-600 underline-offset-4 ease-in-out duration-300"}>Dashboard</Link>
                                :
                                <Link href="/web-development" onClick={() => setIsMenuOpen(false)} className={pathName === '/web-development' ? "text-wheat font-semibold block" : "block hover:underline decoration-amber-600 underline-offset-4 ease-in-out duration-300"}>Login</Link>
                                }
                                {session
                                ?
                                <button onClick={handleLogout} className={"block hover:underline decoration-amber-600 underline-offset-4 ease-in-out duration-300"}>Logout</button>
                                :
                                <Link href="/web-development/application" onClick={() => setIsMenuOpen(false)} className={pathName === '/web-development/application' ? "text-wheat font-semibold block" : "block hover:underline decoration-amber-600 underline-offset-4 ease-in-out duration-300"}>Sign Up</Link>
                                }
                                <Link href="#subscription" onClick={() => setIsMenuOpen(false)} className={"block hover:underline decoration-amber-600 underline-offset-4 ease-in-out duration-300"}>Subscribe</Link>
                                <Link href="#" onClick={() => setIsMenuOpen(false)} className={pathName === '/spades/pricing' ? "text-wheat font-semibold block" : "block hover:underline decoration-amber-600 underline-offset-4 ease-in-out duration-300"}>Pricing</Link>
                                <Link href="/projects#our-clients" onClick={() => setIsMenuOpen(false)} className={"block hover:underline decoration-amber-600 underline-offset-4 ease-in-out duration-300"}>Our Clients</Link>
                                <Link href="/about#faq" onClick={() => setIsMenuOpen(false)} className={"block hover:underline decoration-amber-600 underline-offset-4 ease-in-out duration-300"}>FAQ</Link>
                                <Link href="/reviews" onClick={() => setIsMenuOpen(false)} className={pathName === '/reviews' ? "text-wheat font-semibold block" : "block hover:underline decoration-amber-600 underline-offset-4 ease-in-out duration-300"}>Reviews</Link>
                                <Link href="#" onClick={() => setIsMenuOpen(false)} className={"block hover:underline decoration-amber-600 underline-offset-4 ease-in-out duration-300"}>Blog</Link>
                                <Link href="/contact" onClick={() => setIsMenuOpen(false)} className={pathName === '/contact' ? "text-wheat font-semibold block" : "block hover:underline decoration-amber-600 underline-offset-4 ease-in-out duration-300"}>Contact</Link>
                                <Link href="/spades/policy" onClick={() => setIsMenuOpen(false)} className={pathName === '/spades/policy' ? "text-wheat font-semibold block" : "block hover:underline decoration-amber-600 underline-offset-4 ease-in-out duration-300"}>Privacy</Link>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </>
    )
}

export function BaseLayout({ children }) {
    const [showScrollToTop, setShowScrollToTop] = React.useState(false);
  
    const handleScroll = () => {
      // Show/hide scroll-to-top button based on scroll position
      setShowScrollToTop(window.scrollY > 100);
    };
  
    const scrollToTop = () => {
      // Scroll to the top of the page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    React.useEffect(() => {
      // Add scroll event listener
      window.addEventListener('scroll', handleScroll);
  
      // Remove event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
        <SessionProvider>
            <SubNav />
            <main className='lg:absolute left-64 right-0 bottom-0 top-0 z-0'>
                {showScrollToTop
                ?
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-5 right-5 bg-black/80 p-2 rounded-full text-amber-600 hover:bg-black/50 focus:outline-none z-20"
                >
                    <FaArrowUp />
                </button>
                :
                null
                }
                <SubHeader />
                {children}
                <RowCta />
                <SpadesSubFooter />
            </main>
            <ChatComponent />
        </SessionProvider>
    )
}

export function HeaderText({customBorder}) {
    const ref = React.useRef();
    const isVisible1 = useIsVisible(ref);

    return (
        <header className={`border-y-2 border-[#252324] dark:border-amber-600 p-2 ${customBorder} font-serif`}>
          <div ref={ref} className={`text-4xl sm:text-9xl text-amber-600 flex items-center transition-opacity ease-linear duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>SP<GiSpades />DES</div>
        </header>
    )
}

export function DialogSlide({header,text,open,handleClose,buttonAction}) {

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{header}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={buttonAction}>Open</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export function ButtonField({ link1,link2,linktitle1,linktitle2 }) {

    return (
        <div className="max-h-[50px] flex text-center flex-row justify-between items-center lg:mx-5 my-5 text-sm gap-1">
            <Link href={link1} className="underline decoration-amber-600 font-bold hover:border-y hover:border-amber-600 px-2 py-1 hover:rounded-lg duration-500 hover:decoration-transparent">{linktitle1}</Link>
            <Link href={link2} className="underline decoration-amber-600 font-bold hover:border-y hover:border-amber-600 px-2 py-1 hover:rounded-lg duration-500 hover:decoration-transparent">{linktitle2}</Link>
        </div>
    )
}

export function AdminPostButton() {

    return (
        <Button 
        type="submit"
        className="bg-black text-inherit"
        >
            Update
        </Button>
    )
}

export function ShoppingCart() {

    return (
        <Link 
        href="/gift-purchase"
        className="text-md text-amber-600"
        >
            <ImCart />
        </Link>
    )
}

export function DashboardProfile({icon,header,hidden,sidetext,children,l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,r1,r2,r3,r4,r5,r6,r7,r8,r9,r10}) {

    return (
        <div className="shadow-amber-600/90 shadow-md hover:shadow-amber-600 hover:shadow-inner p-5 rounded-lg border-y-2 border-black w-[100%]">
            <h1 className={`flex items-center justify-center gap-2 font-bold text-lg ${hidden}`}>{icon}{header}</h1>
            <article className="my-5 flex flex-col gap-5">
                <p className="text-amber-600 font-bold">{sidetext}</p>
                <div className="flex flex-col items-center justify-center gap-2">
                    <ul className="text-sm flex flex-col gap-3">
                        <li className="flex flex-col">
                            <small className="font-bold">{l1}</small>
                            {r1}
                        </li>
                        <li className="flex flex-col">
                            <small className="font-bold">{l2}</small>
                            {r2}
                        </li>
                        <li className="flex flex-col">
                            <small className="font-bold">{l3}</small>
                            {r3}
                        </li>
                        <li className="flex flex-col">
                            <small className="font-bold">{l4}</small>
                            {r4}
                        </li>
                        <li className="flex flex-col">
                            <small className="font-bold">{l5}</small>
                            {r5}
                        </li>
                        <li className="flex flex-col">
                            <small className="font-bold">{l6}</small>
                            {r6}
                        </li>
                        <li className="flex flex-col">
                            <small className="font-bold">{l7}</small>
                            {r7}
                        </li>
                        <li className="flex flex-col">
                            <small className="font-bold">{l8}</small>
                            {r8}
                        </li>
                        <li className="flex flex-col">
                            <small className="font-bold">{l9}</small>
                            {r9}
                        </li>
                        <li className="flex flex-col">
                            <small className="font-bold">{l10}</small>
                            {r10}
                        </li>
                    </ul>
                    {children}
                </div>
            </article>
        </div>
    )
}