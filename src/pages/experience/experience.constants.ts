import { IExperienceItemProps } from "./experience.interface";
import ntLogo from '../../assets/images/companies-logos/nt-consult-logo.jpg'
import ctzLogo from '../../assets/images/companies-logos/ctz-logo.jpg'
import stefaniniLogo from '../../assets/images/companies-logos/stefanini-logo.jpg'
import southLogo from '../../assets/images/companies-logos/south-system-logo.jpg'
import acLogo from '../../assets/images/companies-logos/avenue-code-logo.jpg'

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
