import { ContactUs, SendUs, Address } from '../Components'

export default function ContactUsContainer() {
    const submitMassage = function(e) {
        e.preventDefault()
    }
    
    return (
        <ContactUs>
            <ContactUs.Container>
                <SendUs>
                    <SendUs.Form onSubmit={submitMassage}>
                        <SendUs.Container>
                            <SendUs.Name
                                type={"text"}
                                placeholder={"NAME"} />
                            <SendUs.Email
                                type={"email"}
                                placeholder={"EMAIL"} />
                            <SendUs.Message
                                type={"text"}
                                placeholder={"MESSAGE"} />
                            <SendUs.Submit>Submit</SendUs.Submit>
                        </SendUs.Container>
                    </SendUs.Form>
                </SendUs>
                <Address>
                    <Address.Container>
                        <Address.Location>Kingdom of Saudi Arabia - Riyadh - Al Malaz</Address.Location>
                        <Address.Email>info@offices-land.com</Address.Email>
                        <Address.Phone>+966 508-622-000</Address.Phone>
                        <Address.Map />
                    </Address.Container>
                </Address>
            </ContactUs.Container>
        </ContactUs>
    )
}
