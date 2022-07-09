import {
  mdiAccountCircle, mdiAlertCircle, mdiChatProcessingOutline, mdiDesktopMac, mdiLock, mdiSquareEditOutline,
  mdiTable, mdiTelevisionGuide
} from '@mdi/js'

export default [
  'General',
  [
    {
      to: '/dashboard',
      icon: mdiDesktopMac,
      label: 'Dashboard'
    },
    {
      to: '/chat',
      icon: mdiChatProcessingOutline,
      label: 'Chat'
    }
  ],
  'Examples',
  [
    {
      to: '/tables',
      label: 'Tables',
      icon: mdiTable
    },
    {
      to: '/forms',
      label: 'Forms',
      icon: mdiSquareEditOutline
    },
    {
      to: '/ui',
      label: 'UI',
      icon: mdiTelevisionGuide
    },
    // {
    //   to: '/responsive',
    //   label: 'Responsive',
    //   icon: mdiResponsive
    // },
    // {
    //   to: '/',
    //   label: 'Styles',
    //   icon: mdiPalette
    // },
    {
      to: '/profile',
      label: 'Profile',
      icon: mdiAccountCircle
    },
    {
      to: '/login',
      label: 'Login',
      icon: mdiLock
    },
    {
      to: '/error',
      label: 'Error',
      icon: mdiAlertCircle
    },
    // {
    //   label: 'Dropdown',
    //   icon: mdiViewList,
    //   menu: [
    //     {
    //       label: 'Item One'
    //     },
    //     {
    //       label: 'Item Two'
    //     }
    //   ]
    // }
  ]
]
