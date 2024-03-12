import React, { useState } from 'react';
import './Contact.scss';
import send from '../../assets/send-2-svgrepo-com.svg';
import mail from '../../assets/email-svgrepo-com.svg';
import phone from '../../assets/phone-svgrepo-com.svg';
import location from '../../assets/location-pin-alt-1-svgrepo-com.svg';
import linkedIn from '../../assets/linkedin-161-svgrepo-com.svg';
import github from '../../assets/github-142-svgrepo-com.svg';
import twitter from '../../assets/twitter-154-svgrepo-com.svg';
import contactsOrange from '../../assets/contactsOrange.svg';
import ScrollAnimation from 'react-animate-on-scroll';
import emailjs from '@emailjs/browser';
import CustomLoader from '../CustomLoader';

export const Contact = () => {

    const socialIcons = [linkedIn, github, twitter];
    const contactDetails = [
        {
            img: mail,
            desc: "srikarhasthi@gmail.com",
            href: "mailto:srikarhasthi@gmail.com"
        },
        {
            img: phone,
            desc: "+1 (514) 586-7745",
            href: "tel:+15145867745"
        },
        {
            img: location,
            desc: "Montreal, Quebec, Canada - H3H 2N9",
            href: "https://maps.app.goo.gl/JtxQg6YH6hQ9uNjf9"
        },
    ]

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
                console.log('SUCCESS!', response.status, response.text);
                // setIsLoading(false);
            },
                (err) => {
                    console.log('FAILED...', err);
                    // setIsLoading(false);
                },
            );
            setIsLoading(false);
        }, 1000);
    }

    return (
        <div className='contacts-main-container'>
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
                                return <div className='contacts-others-icon' key={id}>
                                    <img src={e} alt={e} />
                                </div>
                            })
                        }
                        <div className='contacts-bottom-icon'>
                            <img src={contactsOrange} alt='contactsIcon' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}