import React, { useState } from 'react'
import './Contact.scss'
import send from '../../assets/send-2-svgrepo-com.svg'
import email from '../../assets/email-svgrepo-com.svg'
import phone from '../../assets/phone-svgrepo-com.svg'
import location from '../../assets/location-pin-alt-1-svgrepo-com.svg'
import linkedIn from '../../assets/linkedin-161-svgrepo-com.svg'
import github from '../../assets/github-142-svgrepo-com.svg'
import twitter from '../../assets/twitter-154-svgrepo-com.svg'
import contactsOrange from '../../assets/contactsOrange.svg'
import ScrollAnimation from 'react-animate-on-scroll'

export const Contact = () => {

    const socialIcons = [linkedIn, github, twitter];
    const contactDetails = [
        {
            img: email,
            desc: "srikarhasthi@gmail.com"
        },
        {
            img: phone,
            desc: "+1 (514) 586-7745"
        },
        {
            img: location,
            desc: "Montreal, Quebec, Canada - H3H 2N9"
        },

    ]
    return (
        <div className='contacts-main-container'>
            <h2>Get In Touch</h2>
            <div className='contacts-sub-container'>
                <ScrollAnimation animateIn="fadeInLeft">
                    <div className='contacts-email-container'>
                        <form>
                            <div className="contacts-input-container">
                                <label htmlFor="Name" className="contacts-input-label">Name</label>
                                <input placeholder="John Doe" type="text" name="Name" className="form-input contacts-input-input" value="" />
                            </div>
                            <div className="contacts-input-container">
                                <label htmlFor="Email" className="contacts-input-label">Email</label>
                                <input placeholder="John@doe.com" type="email" name="Email" className="form-input contacts-input-input" value="" />
                            </div>
                            <div className="contacts-input-container" >
                                <label htmlFor="Message" className="contacts-input-label">Message</label>
                                <textarea placeholder="Type your message...." name="Message" className="form-message contacts-input-textarea"></textarea>
                            </div>
                            <div className="submit-btn" >
                                <button type="submit" className="contacts-input-button">
                                    <p>Send</p>
                                    <div className="submit-icon">
                                        <img src={send} />
                                    </div>
                                </button>
                            </div>
                        </form>
                    </div>
                </ScrollAnimation>
                <div className='contacts-others-container'>
                    {
                        contactDetails.map((e) => {
                            return (
                                <div className='contacts-others'>
                                    <div className='contacts-others-icon'>
                                        <img src={e.img} />
                                    </div>
                                    <p>{e.desc}</p>
                                </div>
                            )
                        })
                    }
                    <div className='contacts-others-socials'>
                        {
                            socialIcons.map((e) => {
                                return <div className='contacts-others-icon'>
                                    <img src={e} />
                                </div>
                            })
                        }
                        <div className='contacts-bottom-icon'>
                            <img src={contactsOrange} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}