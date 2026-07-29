import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Emprunt',
    iconName: 'layout-dashboard',
    route: '/Emprunt',
  },
  {
    navCap: 'Ui Components',
  },
  {
    displayName: 'Livre',
    iconName: 'rosette',
    route: '/Livre',
  },
  {
    displayName: 'Abonnement',
    iconName: 'layout-dashboard',
    route: '/Abonnement',
  },
  {
    displayName: 'Stock',
    iconName: 'layout-dashboard',
    route: '/Stock',
  },
  {
    displayName: 'Reservation',
    iconName: 'layout-dashboard',
    route: '/Reservation',
  },
  {
    navCap: 'Auth',
  },
  {
    displayName: 'Login',
    iconName: 'lock',
    route: '/authentication/login',
  },
  {
    displayName: 'Register',
    iconName: 'user-plus',
    route: '/authentication/register',
  },
  {
    navCap: 'Extra',
  },
  {
    displayName: 'Icons',
    iconName: 'mood-smile',
    route: '/extra/icons',
  },
  {
    displayName: 'Sample Page',
    iconName: 'aperture',
    route: '/extra/sample-page',
  },
];
