import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6"

export const navbarLinks = [
    {   id: 1,
        title: "Inicio",
        href: "/"
    },
    {
        id: 2,
        title: "Hombre",
        href: "/man"
    },
    {
        id: 3,
        title: "Mujer",
        href: "/woman"
    }
]

export const socialLinks = [
    {
        id: 1,
        title: "Facebook",
        href: "https://www.facebook.com",
        icon: <FaFacebookF/>
    },
    {
        id: 2,
        title: "Instagram",
        href: "https://www.instagram.com",
        icon: <FaInstagram/>
    },
    {
        id: 3,
        title: "Twitter",
        href: "https://www.twitter.com",
        icon: <FaTwitter/>
    }
]