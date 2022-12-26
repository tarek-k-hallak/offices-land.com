import { useState } from 'react'
import { ContactUs, SendUs, Address } from '../Components'

export default function ContactUsContainer() {
    const [contactUsData, setContectUsData] = useState({
        name: '',
        phone: '',
        country: {},
        email: '',
        message: '',
    })

    const submitMassage = function (e) {
        e.preventDefault()
        console.log(contactUsData)
    }

    const onChangeForm = function (e, name, phoneValue, phoneCountry, phoneFormattedValue) {
        if (name != "phone") {
            const { value } = e.target
            setContectUsData({
                ...contactUsData,
                [name]: value
            })
        } else {
            setContectUsData({
                ...contactUsData,
                phone: phoneValue,
                country: phoneCountry,
            })
        }
    }

    return (
        <ContactUs>
            <ContactUs.Container>
                <SendUs>
                    <SendUs.Form onSubmit={submitMassage}>
                        <SendUs.Container>
                            <SendUs.Name
                                type={"text"}
                                label={"Name"}
                                value={contactUsData.name}
                                onChange={onChangeForm} />
                            <SendUs.Phone
                                type={"phone"}
                                label={"Phone"}
                                value={contactUsData.phone}
                                onChange={onChangeForm} />
                            <SendUs.Email
                                type={"email"}
                                label={"Email"}
                                value={contactUsData.email}
                                onChange={onChangeForm} />
                            <SendUs.Message
                                type={"text"}
                                label={"Message"}
                                value={contactUsData.message}
                                onChange={onChangeForm} />
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
