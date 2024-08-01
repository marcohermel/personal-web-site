import { IExperienceItemProps } from "./interfaces";
import ntLogo from './assets/images/companies-logos/nt-consult-logo.jpg'
import ctzLogo from './assets/images/companies-logos/ctz-logo.jpg'
import stefaniniLogo from './assets/images/companies-logos/stefanini-logo.jpg'
import southLogo from './assets/images/companies-logos/south-system-logo.jpg'
import acLogo from './assets/images/companies-logos/avenue-code-logo.jpg'

export const MOBILE_LIMIT_WIDTH = 1024;

export const ABOUT_ME = "I'm Marco Hermel, a seasoned software developer with a flair for fun and a passion for clean code. With a decade of experience under my belt, I've honed my skills as a full-stack in .NET for 5 years, while also weaving magic on the frontend with React for 5 years. Agile methodologies, especially Scrum, are my secret sauce for project success, as I thrive in collaborative environments where knowledge exchange is key. When I'm not coding, you'll find me exploring the world, hitting the open road, or kicking it on the soccer field. Let's embark on an epic coding adventure together – join me and let's create something extraordinary!"


export const CONTACTS = {
    linkedIn: { text: 'marco-hermel', link: 'https://www.linkedin.com/in/marco-hermel/' },
    instagram: { text: '@marco_dev', link: 'https://www.instagram.com/marco_dev/' },
    github: { text: 'https://github.com/marcohermel/', link: 'https://github.com/marcohermel/' },
    email: { text: 'mf.hermel@gmail.com', link: '' },
}

export const COLOR = {
    WHITE: '#FFFFFF',
    PRIMARY: '#1C4C41',
    SECONDARY: '#D9D9D9',
    BLACK: '#000000'
}

export const experiences: IExperienceItemProps[] = [
    {
        companyName: 'NT Consult',
        monthYear: 'Nov 2011',
        image: ntLogo,
        url: 'https://www.linkedin.com/company/ntconsult/'
    },
    {
        companyName: 'CTZ',
        monthYear: 'Nov 2013',
        image: ctzLogo,
        url: ''
    },
    {
        companyName: 'Stefanini',
        monthYear: 'Jan 2019',
        image: stefaniniLogo,
        url: 'https://www.linkedin.com/company/stefanini-brasil/'
    },
    {
        companyName: 'South System',
        monthYear: 'Out 2019',
        image: southLogo,
        url: 'https://www.linkedin.com/company/south-system/'
    },
    {
        companyName: 'Avenue Code',
        monthYear: 'Dec 2021',
        image: acLogo,
        url: 'https://www.linkedin.com/company/avenuecode/'
    },
]
