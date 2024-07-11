import './ContactFormStyle.css';

const ContactForm = () => {
    return (
        <div className='form-container'>
            <h1>Send a Message to Us !</h1>
            <form >
                <input placeholder='Name' type="text" />
                <input placeholder='Email' type="text" />
                <textarea placeholder='Message' rows='4'type="text" /> 

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;
