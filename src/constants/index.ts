import { Address, Email } from "@/icons";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import { Phone } from "lucide-react";

export const HEADER_URLS = [
    {
        label: "Home",
        link: "/",
    },
    {
        label: "About Us",
        link: "/about-us",
    },
    {
        label: "View Catalog",
        link: "/product-catalog",
    },
    {
        label: "Contact Us",
        link: "/contact-us",
    },
];

export const QUICK_LINKS = [
    {
        label: "Home",
        link: "/",
    },
    {
        label: "About Us",
        link: "/about-us",
    },
    {
        label: "View Catalog",
        link: "/product-catalog",
    },
];

export const CONTACT_DATA = {
    EMAIL: "veetgold@example.com",
    PHONE_NUMBER: `+${WHATSAPP_NUMBER}`,
    ADDRESS: [
        "Veetgold Plaza Abia gate, Trade fair complex, Lagos, Nigeria",
        "A5/44 Kano plaza, Trade fair Complex, Lagos, Nigeria",
        "D20/29 Abia plaza, Trade fair complex, Lagos, Nigeria",
    ],
    INSTAGRAM: "https://www.instagram.com/veetgoldofficialpage?igsh=MWo0eHJqZGQyamlmMQ==",
    FACEBOOK: "https://facebook.com/veetgold",
}

export const FOOTER_LINKS = {
    "QUICK LINKS": QUICK_LINKS,
    "CONTACT": CONTACT_DATA,
}

export const CONTACT_PAGE_DETAILS = [
    {
        Icon: Address,
        title: "Our Locations",
        description: CONTACT_DATA.ADDRESS
    },
    {
        Icon: Phone,
        title: "Phone Number",
        description: "08033831759"
    },
    {
        Icon: Email,
        title: "Email Address",
        description: "veetgoldofficial@gmail.com"
    },
]
