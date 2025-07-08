import Image from 'next/image'
import React from 'react'
import PaddingContainer from '../shared/padding-container'
import MaxContainer from '../shared/max-container'
import ContactForm from '@/forms/contact-form'
import { Address, Email, Phone } from '@/icons'

export const contactPageDetails = [
    {
        Icon: Address,
        title: "Our Location",
        description: ""
    },
    {
        Icon: Phone,
        title: "Phone Number",
        description: "08087737997, 08033080027"
    },
    {
        Icon: Email,
        title: "Email Address",
        description: "veetgoldofficial@gmail.com"
    },
]

function ContactPageHero() {
    return (
        <section className='min-h-screen w-full relative py-24 md:py-28 lg:py-[200px]'>
            <div
                className="w-full min-h-screen overflow-hidden absolute inset-0 -z-10 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/40 after:to-transparent"
            >
                <Image
                    src="https://res.cloudinary.com/djrp3aaq9/image/upload/v1751125516/product-image-hero_svohfp.webp"
                    alt="Kojic acid cream"
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                />
            </div>  
            <PaddingContainer className='z-50 w-full'>
                <MaxContainer className='flex flex-col gap-10 md:flex-row items-center lg:justify-between'>
                    <div className='text-white w-full max-w-[474px] space-y-6'>
                        <div className='space-y-4'>
                            <h1 className="font-semibold text-3xl lg:text-5xl">Get in touch with us</h1>
                            <p className='lg:text-lg text-[#FAFAFA]/80'>Email, call or complete the form and we’ll respond immediately.</p>
                        </div>
                        <div className='w-full max-w-[389px] space-y-6'>
                            {
                                contactPageDetails.map(({title, Icon, description})=> {
                                    return (
                                        <div className='flex gap-6' key={title}>
                                            <Icon />
                                            <div className='space-y-2'>
                                                <h3 className='lg:text-xl font-semibold'>{title}</h3>
                                                <p className='text-sm lg:text-base text-[#FAFAFA]/80'>{description}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="max-w-[502px] w-full lg:mx-auto h-[505px] bg-white p-6 rounded-[12px] shadow-md ">
                        <ContactForm />
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default ContactPageHero