import { all_routes } from "../../../feature-module/router/all_routes.tsx";

const routes = all_routes

export const  adminSidebar = [
    {
      tittle: 'Main Menu',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Dashboard',
          hasSubRoute: false,
          showSubRoute: false,
          boxIcon: 'bx bx-category',
          route: routes.adminDashboard
        },
        {
          menuValue: 'Users',
          hasSubRoute: true,
          showSubRoute: false,
          boxIcon: 'bx bx-user',
          routeOne: routes.usersList,
          routeTwo: routes.blockUser,
          routeThree: routes.reportUser,
          routeFour: routes.inviteUser,
          subMenus: [
            {
              menuValue: 'Users List',
              route: routes.usersList,
            },
            {
              menuValue: 'Blocked Users',
              route: routes.blockUser,
            },
            {
              menuValue: 'Reported Users',
              route: routes.reportUser,
            },
            {
              menuValue: 'Invited Users',
              route: routes.inviteUser,
            },
          ],
        },
        {
          menuValue: 'Chat',
          hasSubRoute: false,
          showSubRoute: false,
          boxIcon: 'bx bx-message-square-detail',
          route: routes.adminChat,
        },
        {
          menuValue: 'Calls',
          hasSubRoute: false,
          showSubRoute: false,
          boxIcon: 'bx bx-phone',
          route: routes.adminCall,
        },
        {
          menuValue: 'Stories',
          hasSubRoute: false,
          showSubRoute: false,
          boxIcon: 'bx bx-stop-circle',
          route: routes.stories,
        },
      ],
    },
    {
      tittle: 'Settings',
      showAsTab: false,
      separateRoute: false,

      menu: [
        {
          menuValue: 'Settings',
          hasSubRoute: true,
          showSubRoute: false,
          icon: 'fa-columns',
          boxIcon: 'bx bx-cog',
          routeOne: routes.profileSettings,
          routeTwo: routes.websiteSettings,
          routeThree: routes.systemSettings,
          routeFour: routes.notificationSettings,
          routeFive: routes.localization,
          routeSix: routes.appearanceSettings,
          routeSeven: routes.socialAuth,
          routeEight: routes.emailSettings,
          routeNine: routes.smsSettings,
          routeTen: routes.otpSettings,
          routeEleven: routes.storageSetting,
          routeTwelve: routes.banAddress,
          routeThirteen: routes.gdpr,
          routeFourteen: routes.language,
          subMenus: [
            {
              menuValue: 'Profile Setting',
              route: routes.profileSettings,
            },
            {
              menuValue: 'Website Setting',
              route: routes.websiteSettings,
            },
            {
              menuValue: 'System Setting',
              route: routes.systemSettings,
            },
            {
              menuValue: 'Notification',
              route: routes.notificationSettings,
            },
            {
              menuValue: 'Localization',
              route: routes.localization,
            },
            {
              menuValue: 'Appearance',
              route: routes.appearanceSettings,
            },
            {
              menuValue: 'Social Authentication',
              route: routes.socialAuth,
            },
            {
              menuValue: 'Email Setting',
              route: routes.emailSettings,
            },
            {
              menuValue: 'SMS Setting',
              route: routes.smsSettings,
            },
            {
              menuValue: 'OTP Setting',
              route: routes.otpSettings,
            },
            {
              menuValue: 'Authentication',
              route: routes.authenticationSettings,
            },
            {
              menuValue: 'Storage',
              route: routes.storageSetting,
            },
            {
              menuValue: 'Ban IP Address',
              route: routes.banAddress,
            },
            {
              menuValue: 'GDPR (Cookies)',
              route: routes.gdpr,
            },
            {
              menuValue: 'Language',
              route: routes.language,
            },
          ],
        },
      ],
    },

    {
      tittle: 'Others',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Blank Page',
          hasSubRoute: false,
          showSubRoute: false,
          boxIcon: 'bx bx-category',
          route: routes.blankPage
        },
       
        {
          menuValue: 'Vector Maps',
          hasSubRoute: false,
          showSubRoute: false,
          boxIcon: 'bx bx-message-square-detail',
          route: routes.vectorMaps,
        },
        {
          menuValue: 'Components',
          hasSubRoute: false,
          showSubRoute: false,
          boxIcon: 'bx bx-phone',
          route: routes.components,
        },
        {
          menuValue: 'Forms',
          hasSubRoute: true,
          showSubRoute: false,
          boxIcon: 'bx bx-user',
           routeOne: routes.basicInputs,
          routeTwo: routes.inputGroup,
          routeThree: routes.verticalForm,
          routeFour: routes.formMask,
          routeFive: routes.formValidation,
          routeSix: routes.formMask,
          subMenus: [
            {
              menuValue: 'Basic Inputs',
              route: routes.basicInputs,
            },
            {
              menuValue: 'Input Groups',
              route: routes.inputGroup,
            },
            {
              menuValue: 'Horizontal Form',
              route: routes.horizontalForm,
            },
            {
              menuValue: 'Vertical Form',
              route: routes.verticalForm,
            },
            {
              menuValue: 'Form Mask',
              route: routes.formMask,
            },
            {
              menuValue: 'Form Validation',
              route: routes.formValidation,
            },
          ],
        },

        {
          menuValue: 'Tables',
          hasSubRoute: true,
          showSubRoute: false,
          boxIcon: 'bx bx-user',
          routeOne: routes.basicTable,
          routeTwo: routes.dataTable,
          
          subMenus: [
            {
              menuValue: 'Basic Tables',
              route: routes.basicTable,
            },
            {
              menuValue: 'Data Tables',
              route: routes.dataTable,
            },
          
          ],
        },
        {
          menuValue: 'Multi Level',
          hasSubRoute: true,
          showSubRoute: false,
          boxIcon: 'bx bx-user',
          subMenus: [
            {
              menuValue: 'Level 1',
              route: routes.usersList,
            },
            {
              menuValue: 'Level 2',
              route: routes.blockUser,
            },
          
          ],
        }

      ],
    },
  ];