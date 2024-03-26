import React, { useState } from 'react';
import './Contact.scss';
import send from '../../assets/send-2-svgrepo-com.svg';
import contactsOrange from '../../assets/contactsOrange.svg';
import ScrollAnimation from 'react-animate-on-scroll';
import emailjs from '@emailjs/browser';
import CustomLoader from '../CustomLoader';
import { contactDetails, socialIcons } from '../../StaticData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const sendMail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        const params = {
            name: name,
            email: email,
            message: message,
        }
        setTimeout(() => {
            emailjs.send('service_gqc5ntd', 'template_kt1qtcf', params, {
                publicKey: '5K03ZA3VFjj0YZxmY',
            }).then((response) => {
                toast.success("Message Sent Successfully");
                console.log('SUCCESS!', response.status, response.text);
                // setIsLoading(false);
            },
                (err) => {
                    toast.success("Error Sending Message");
                    console.log('FAILED...', err);
                    // setIsLoading(false);
                },
            );
            setIsLoading(false);
        }, 1000);
    }

    return (
        <div className='contacts-main-container' id='contact'>
            <h2>Get In Touch</h2>
            <div className='contacts-sub-container'>
                <ScrollAnimation animateIn="fadeInLeft">
                    <div className='contacts-email-container'>
                        <form onSubmit={(e) => sendMail(e)}>
                            <div className="contacts-input-container">
                                <label htmlFor="Name" className="contacts-input-label">Name</label>
                                <input placeholder="John Doe" type="text" name="Name" className="form-input contacts-input-input" value={name} onChange={(e) => {
                                    setName(e.target.value);
                                }} required />
                            </div>
                            <div className="contacts-input-container">
                                <label htmlFor="Email" className="contacts-input-label">Email</label>
                                <input placeholder="John@doe.com" type="email" name="Email" className="form-input contacts-input-input" value={email} onChange={(e) => {
                                    setEmail(e.target.value);
                                }} required />
                            </div>
                            <div className="contacts-input-container" >
                                <label htmlFor="Message" className="contacts-input-label">Message</label>
                                <textarea placeholder="Type your message...." name="Message" className="form-message contacts-input-textarea" value={message} onChange={(e) => {
                                    setMessage(e.target.value);
                                }} required />
                            </div>
                            <div className="submit-btn" >
                                <button type="submit" className="contacts-input-button">
                                    {!isLoading &&
                                        <>
                                            <p>Send</p>
                                            <div className="submit-icon">
                                                <img src={send} alt='send' />
                                            </div>
                                        </>
                                    }
                                    {isLoading && <CustomLoader />}
                                </button>
                            </div>
                        </form>
                    </div>
                </ScrollAnimation>
                <div className='contacts-others-container'>
                    {
                        contactDetails.map((e, id) => {
                            return (
                                <div className='contacts-others' key={id}>
                                    <a className='contacts-others-icon' href={e.href} target='_blank' rel="noreferrer">
                                        <img src={e.img} alt={e.desc} />
                                    </a>
                                    <p>{e.desc}</p>
                                </div>
                            )
                        })
                    }
                    <div className='contacts-others-socials'>
                        {
                            socialIcons.map((e, id) => {
                                return <a href={e.href} target='_blank' rel="noreferrer" className='contacts-others-icon' key={id}>
                                    <img src={e.img} alt={e.img} />
                                </a>
                            })
                        }
                        <div className='contacts-bottom-icon'>
                            <img src={contactsOrange} alt='contactsIcon' />
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="bottom-right"
                hideProgressBar={true}
            />
        </div>
    )
}