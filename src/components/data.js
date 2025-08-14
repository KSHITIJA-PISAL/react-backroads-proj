import tour1 from '../images/tour-1.jpeg'
import tour2 from '../images/tour-1.jpeg'
import tour3 from '../images/tour-1.jpeg'
import tour4 from '../images/tour-1.jpeg'

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 1, href: '#about', text: 'about' },
  { id: 1, href: '#services', text: 'services' },
  { id: 1, href: '#tours', text: 'tours' },
]

export const pageIcons = [
  { id: 1, href: 'https://www.twitter.com', className: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', className: 'fab fa-twitter' },
  { id: 3, href: 'https://www.twitter.com', className: 'fab fa-squarespace' },
]

export const servicesData = [
  {
    id: 1,
    iClassName: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 2,
    iClassName: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 3,
    iClassName: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
]

export const toursData = [
  {
    id: 1,
    img: tour1,
    tourDate: 'august 26th, 2020',
    title: 'Tibet Adventure',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    country: 'china',
    no_of_days: '6 days',
    price: 'from $2100',
  },
  {
    id: 2,
    img: tour2,
    tourDate: 'october 1th, 2020',
    title: 'best of java',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    country: 'indonesia',
    no_of_days: '11 days',
    price: 'from $1400',
  },
  {
    id: 3,
    img: tour3,
    tourDate: 'september 15th, 2020',
    title: 'explore hong kong',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    country: 'hong kong',
    no_of_days: '8 days',
    price: 'from $5000',
  },
  {
    id: 4,
    img: tour4,
    tourDate: 'december 5th, 2019',
    title: 'kenya highlights',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    country: 'kenya',
    no_of_days: '20 days',
    price: 'from $3300',
  },
]
