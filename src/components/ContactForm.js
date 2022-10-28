import React, { useState } from 'react'

const ContactForm = () => {

    const [contactForm, setContactForm] = useState({name: '', email: '', comment: ''})
    const [formErrors, setFormErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const validate = (values) => {
        const errors = {}
        const regex_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if(!values.name)
            errors.name = "You must enter a name"

        if(!values.email)
            errors.email = "You must enter an e-mail adresss"
        else if(!regex_email.test(values.email))    
            errors.email = "You must enter a valid e-mail adresss (eg. name@domain.com)"

        if(!values.comment)
            errors.comment = "You must enter a comment"
        else if(values.comment.length < 10)    
            errors.comment = "Your comment must be longer than ten characters"

        if(Object.keys(errors).length === 0)
            setSubmitted(true)
        else
            setSubmitted(false)

        return errors;
    }

    const handleChange = (e) => {
        const {id, value} = e.target
        setContactForm({...contactForm, [id]: value})
        console.log(contactForm)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(contactForm))
    }

  return (
    <section className="contactus">
        <div className="container">
            {   
                submitted ?
                (
                    <div className='thankyou'>
                        <p>Thank you for your comment!</p>
                    </div>
                )
                :
                (
                    <>
                        <span>Come in Contact with Us</span>
                        <div>
                            <form id='commentForm' onSubmit={handleSubmit} noValidate>
                                <div className="user">
                                    <div className="username">
                                        <input id="name" type="text" placeholder="Your Name" value={contactForm.name} onChange={handleChange} />
                                        <span className="errorMessage">{formErrors.name}</span> 
                                    </div>
                                    <div className="useremail">
                                        <input id="email"  type="text" placeholder="Your Mail" value={contactForm.email} onChange={handleChange} />
                                        <span className="errorMessage">{formErrors.email}</span> 
                                    </div>
                                </div>
                                <div className="commentbox">
                                    <textarea id="comment"  type="text" placeholder="Comments" value={contactForm.comment} onChange={handleChange} />
                                    <div className="errorMessage">{formErrors.comment}</div>
                                </div>
                                <div>
                                    <button className="button-red" type="submit"><span>Post Comments</span></button>                        
                                </div> 
                            </form>
                        </div>
                    </>
                )
            }
        </div>
    </section>
  )
}

export default ContactForm