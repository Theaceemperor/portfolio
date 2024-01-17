'use client'
import React, { useRef } from 'react';
import Link from "next/link";
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
import { FaBlog, FaMinus, FaPlus, FaXTwitter } from 'react-icons/fa6';
import { SiGmail, SiWebpack } from 'react-icons/si';
import { BsGithub, BsPersonCheck } from 'react-icons/bs';
import { IoMdContacts, IoMdStats } from 'react-icons/io';
import { TbGiftCardFilled } from 'react-icons/tb';
import { PopperPopupState } from '../modals';
import { GoCodeReview } from 'react-icons/go';
import { PiWebhooksLogoFill } from 'react-icons/pi';
import { SessionProvider } from 'next-auth/react';
import styled from '@emotion/styled';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { Alert, AlertTitle, Autocomplete, Collapse, Rating, TextField, Typography } from '@mui/material';
import { CgLink } from 'react-icons/cg';
import ChatComponent from './ChatComponent';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { db } from '@/settings/firebase.settings';
import { ActivityIndicator2 } from '../activity-indicator';

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
            <span className="flex flex-row gap-4 font-bold text-lg"> 
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
        <h3 className={`text-3xl font-bold mb-8 text-center`}><Link href={headerLink} className={`flex items-center hover:text-amber-600 ${style}`}>{headerText}<CgLink /></Link></h3>
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
        <div ref={ref} className={`bg-white rounded-md p-2 shadow-lg dark:shadow-amber-600 dark:shadow-md overflow-hidden transition-opacity ease-linear duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
            <Image src={imageUrl} alt={`${title} Image`} width={500} height={500} quality={100} className='rounded-md mb-4 object-cover w-full h-auto' />
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
        <div className="flex my-5 items-center justify-center">
            <Link 
            href={"/web-development/dashboard"}
            className={`text-md flex items-center gap-1 px-2 text-amber-600 text-center ${color}`}>
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
        <Link href="/"><i className="text-amber-600 flex items-center gap-0.5">
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
        <footer ref={ref} id="footer" className={`mx-1 my-5 rounded shadow transition-opacity ease-linear duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
          <div className="flex flex-col sm:grid sm:grid-cols-3 sm:text-center gap-5 p-5 text-xs">
            <ul className="flex flex-col gap-1">
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
              <li><Link href={'/spades/pricing'} className="hover:underline underline-offset-2 decoration-amber-600">How our pricing works</Link></li>
              <li><Link href={'/contact'} className="hover:underline underline-offset-2 decoration-amber-600">Get a template</Link></li>
              <li><Link href={'#'} className="hover:underline underline-offset-2 decoration-amber-600">Docs</Link></li>
              <li>
                <blockquote className="flex flex-row gap-5 mt-1 sm:items-center sm:justify-center">
                  <Link href={'https://twitter.com/@spadeshub'} className="hover:underline underline-offset-2 decoration-amber-600 flex items-center justify-center"><FaXTwitter className="text-2xl text-amber-600 rounded-full text-center" /></Link>
                  <Link href={'https://github.com/Theaceemperor/portfolio'} className="hover:underline underline-offset-2 decoration-amber-600 flex items-center justify-center"><BsGithub className="text-amber-600 text-2xl border-x-2 border-black rounded-full text-center" /></Link>
                  <Link href={'mailto:spadesinstitute.empire@gmail.com'} className="hover:underline underline-offset-2 decoration-amber-600 flex items-center justify-center"><SiGmail className="text-amber-600 text-2xl text-center" /></Link>
                  <Link href={'https://nexvault.vercel.app'}><Image priority src={'/nexvault_icon.ICO'} alt='NexVault' width={500} height={500} className='w-6 h-6 bg-amber-600 rounded-full' /></Link>
                </blockquote>
              </li>
            </ul>
            <ul className="flex flex-col gap-1">
              <li><Link href={'https://twitter.com/@spadeshub'} className="hover:underline underline-offset-2 decoration-amber-600">Dev support</Link></li>
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
        <section id="cta" ref={ref} className={`my-10 flex flex-col gap-3 items-center justify-center transition-opacity ease-linear duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
          <div className="bg-[url('/img/cta.png')] h-56 w-[90%] sm:max-w-md bg-center bg-cover shadow-md dark:shadow-amber-600 shadow-black rounded-md flex justify-center items-end py-1">
            <article className="flex flex-row gap-5">
              <Link href={'mailto:spadesinstitute.empire@gmail.com'}>
                <SiGmail
              className="rounded-full border-2 text-[wheat] font-bold border-amber-600 animate-bounce text-3xl p-1"
              />
              </Link>
              <Link href={'https://wa.me/message/LLABQR53DPNME1'}>
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
          <ChatComponent />
        </nav>
    )
}

export function SubNav() {
  const pathName = usePathname();

    return (
      <section>
        <div id="sub-header" className="flex items-center justify-center">
          <nav className="fixed top-2 z-40 text-amber-600 bg-black/80 py-2 px-5 rounded-md">
            <ul className='flex items-center justify-between gap-3 sm:gap-5 font-semibold'>
              <li><Link href={'/projects'} className={pathName === '/projects' ? 'text-wheat font-bold' : `hover:underline decoration-amber-600 underline-offset-4 ease-in-out duration-300`}>Products</Link></li>
              <li><Link href={'/about'} className={pathName === '/about' ? 'text-wheat font-bold' : `hover:underline decoration-amber-600 underline-offset-4 ease-in-out duration-300`}>About Us</Link></li>
              <li><Link href={'/contact'} className={pathName === '/contact' ? 'text-wheat font-bold' : `hover:underline decoration-amber-600 underline-offset-4 ease-in-out duration-300`}>Contact</Link></li>
              <li><Link href={'/web-development'} className={pathName === '/web-development' ? 'text-wheat font-bold flex items-center' : 'flex items-center'}><GiSpades /></Link></li>
            </ul>
          </nav>
        </div>
        <ChatComponent />
      </section>
    )
}

export function BaseLayout({ children }) {
    return (
      <>
        <SubNav />
        <SubHeader />
        <main>
          {children}
        </main>
        <RowCta />
        <SpadesSubFooter />
      </>
    )
}

export function WebDevLayout({ children }) {
    return (
      <SessionProvider >
        <BaseLayout>
            {children}
        </BaseLayout>
      </SessionProvider>
    )
  }

export function HeaderText({customBorder}) {
    const ref = React.useRef();
    const isVisible1 = useIsVisible(ref);

    return (
        <header className={`border-y-2 border-[#252324] dark:border-amber-600 p-2 ${customBorder} font-serif`}>
          <h1 ref={ref} className={`text-4xl sm:text-9xl text-amber-600 flex items-center transition-opacity ease-linear duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>SP<GiSpades />DES</h1>
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