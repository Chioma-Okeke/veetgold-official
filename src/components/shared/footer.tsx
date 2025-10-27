import React from 'react'
import Logo from './logo'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { FOOTER_LINKS } from '@/constants'
import Link from 'next/link'
import { Call, InstagramIcon, Mail02 } from '@/icons'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nigeriaPhoneRegex = /^(?:\+234|234|0)[789][01]\d{8}$/;

function Footer() {
  return (
    <footer className='py-10 px-4 lg:px-32'>
      <div className='w-full mas-w-[1170px] space-y-10 lg:flex gap-40'>
        <div>
          <Logo variant='colored' />
        </div>
        <div className='hidden lg:flex lg:justify-between flex-1'>
          {Object.entries(FOOTER_LINKS).map(([title, data]) => {
            return (
              <div className='space-y-6' key={title}>
                <h4 className='font-semibold text-[22px]'>{title}</h4>
                <div>
                  {
                    Array.isArray(data) ? (
                      <ul className='flex flex-col gap-4'>
                        {data.map((link, index) => (
                          <Link href={link.link} key={index} className='text-xl font-light hover:text-primary transition-colors duration-300 ease-in-out'>{link.label}</Link>
                        ))}
                      </ul>
                    ) : (
                      <div className='space-y-6'>
                        {Object.values(data).slice(0, 2).map((value, index) => {
                          return (
                            <div key={index} className='flex items-end gap-2'>
                              {nigeriaPhoneRegex.test(value as string) && <Call className="#1D1F2C size-5" />}
                              {emailRegex.test(value as string) && <Mail02 className="#1D1F2C size-5" />}
                              <p className='text-xl'>{value}</p>
                            </div>
                          )
                        })}

                        <div>
                          <div className='rounded-full p-1 size-10 bg-[#E9E9EA] flex items-center justify-center transition ease-in-out duration-300 hover:bg-[#FADF80] cursor-pointer'>
                            <InstagramIcon className="#1D1F2C size-6" />
                          </div>
                        </div>
                      </div>
                    )
                  }
                </div>
              </div>
            )
          })}
        </div>
        <div className='space-y-6 lg:hidden'>
          <MobileFooterLinks />
          <div className='rounded-full p-1 size-10 bg-[#E9E9EA] flex items-center justify-center transition ease-in-out duration-300 hover:bg-[#FADF80] cursor-pointer'>
            <InstagramIcon className="#1D1F2C size-6" />
          </div>
        </div>
      </div>
      <div className='max-lg:mt-3'>
        Interested in bulk or wholesale orders?{" "}
        <Link
          href="https://wa.me/+16027407962?text=Hello%20Veetgold,%20I'm%20interested%20in%20bulk%20orders."
          target="_blank"
          className="text-green-600 font-medium hover:underline"
        >
          Chat with us on WhatsApp
        </Link>
      </div>
    </footer>
  )
}

export default Footer

const MobileFooterLinks = () => {
  return (
    <Accordion type="multiple">
      {Object.entries(FOOTER_LINKS).map(([title, data]) => {
        return (
          <AccordionItem key={title} value={title} className='border-b-0'>
            <AccordionTrigger>
              <h4 className='font-semibold text-lg'>{title}</h4>
            </AccordionTrigger>
            <AccordionContent>
              {
                Array.isArray(data) ? (
                  <ul className='flex flex-col gap-3'>
                    {data.map((link, index) => (
                      <Link href={link.link} key={index} className='font-light'>{link.label}</Link>
                    ))}
                  </ul>
                ) : (
                  <div className='space-y-3'>
                    {Object.values(data).slice(0, 2).map((value, index) => {
                      return (
                        <div key={index} className='flex items-end gap-3'>
                          {nigeriaPhoneRegex.test(value as string) && <Call className="#1D1F2C size-5" />}
                          {emailRegex.test(value as string) && <Mail02 className="#1D1F2C size-5" />}
                          <p>{value}</p>
                        </div>
                      )
                    })}
                  </div>
                )
              }
            </AccordionContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}