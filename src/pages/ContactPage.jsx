import ContactForm from "../components/ContactForm";

function ContactPage() {
    return (
        <article className="contact-page">
            <section>
                <h1>Contact Us</h1>
                <p>Thanks for visiting the Briggs Family Home Development, LLC website. We take care of your entire house: roof repairs, siding installation and remodels. To learn more about our services, please use the form on this page to contact us or call us at <a href="tel:+18663010155" className="link">(866) 301-0155</a> or <a href="tel:+12628540155" className="link">(262) 854-0155</a>.</p>
            </section>
            <section>
                <ContactForm />
                <div className="locations-container">
                    <h2>Locations</h2>
                    <div className="location">
                        <h3>Briggs Family Home Development, LLC</h3>
                        <p>Waukensha, WI</p>
                    </div>
                    <div className="location">
                        <h3>Corporate Office</h3>
                        <p>2717 Grandview Blvd</p>
                        <p>Ste 201</p>
                        <p>Waukensha, WI 53188</p>
                    </div>
                    <div className="location">
                        <h3>Fitchburg Office</h3>
                        <p>2809 Fish Hatchery Rd</p>
                        <p>Ste 202</p>
                        <p>Fitchburg, IA 53713</p>
                    </div>
                </div>
            </section>
        </article>
    )
}

export default ContactPage;