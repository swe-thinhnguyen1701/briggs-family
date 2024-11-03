import { useState } from "react";

function ContactForm() {
    const [phone, setPhone] = useState("");
    const [agree, setAgree] = useState(false);

    const formatPhoneNumber = (value) => {
        const cleaned = value.replace(/\D/g, "");
        const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
        if (match) {
            const formatted = [
                match[1] ? `(${match[1]})` : "",
                match[2] ? ` ${match[2]}` : "",
                match[3] ? `-${match[3]}` : "",
            ].join("").trim();
            return formatted;
        }
        return value;
    };

    const handlePhoneChange = (event) => {
        setPhone(formatPhoneNumber(event.target.value));
    };

    const handleKeyDown = (event) => {
        // Allow control keys (backspace, arrow keys) and numeric input
        if (!/[0-9]/.test(event.key) && event.key !== "Backspace" && event.key !== "ArrowLeft" && event.key !== "ArrowRight" && event.key !== "Tab") {
            event.preventDefault();
        }
    };
    return (
        <form>
            <input type="text" placeholder="First and Last Name" maxLength={50} />
            <input type="email" placeholder="Email" maxLength={50} />
            <input
                type="text"
                placeholder="Phone Number"
                maxLength={14}
                value={phone}
                onChange={handlePhoneChange}
                onKeyDown={handleKeyDown} />
            <textarea placeholder="Message" maxLength={500} rows={20} />
            <div className="input-group">
                <input 
                type="checkbox" 
                name="" 
                id="agree"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)} />
                <label htmlFor="agree">
                    By checking this box, I agree to receive emails, text messages, and phone calls, which may be recorded and/or sent using automated dialing or emailing equipment or software unless I opt-out from such communications. I also agree to the Terms of Use and Privacy Policy listed below. I understand that my consent to be contacted is not a requirement to purchase any product or service and that I can opt-out at any time. I agree to pay my mobile service provider's text messaging rates, if applicable.
                </label>
            </div>
            <button type="submit" className="btn submit-btn">Submit</button>
        </form>
    );
}

export default ContactForm;