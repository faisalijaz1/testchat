import React from "react";
import { Route } from "react-router";
import { all_routes } from "./all_routes.tsx";
import Contact from "../contact/contact.tsx";
import Group from "../group/group.tsx";
import Settings from "../settings.tsx/index.tsx";

import WebsiteSettings from "../admin/settings/websiteSettings.tsx";
import SystemSettings from "../admin/settings/systemSettings.tsx";
import LocalizationSetting from "../admin/settings/localizationSetting.tsx";
import SocialAuth from "../admin/settings/socialAuth.tsx";
import AuthenticationSettings from "../admin/settings/authenticationSettings.tsx";
import NotificationSettings from "../admin/settings/notificationSettings.tsx";
import AppearanceSettings from "../admin/settings/appearanceSettings.tsx";
import SmsSetting from "../admin/settings/smsSetting.tsx";
import Language from "../admin/settings/language.tsx";
import Gdpr from "../admin/settings/gdpr.tsx";
import BanAddress from "../admin/settings/ban-address.tsx";
import OtpSetting from "../admin/settings/otpSetting.tsx";

import Register from "../authentication/register.tsx";
import Call from "../call/call.tsx";
import AudioCall from "../audio-call/audioCall.tsx";
import VideoCall from "../video-call/videoCall.tsx";
import CallGrid from "../call-grid/callGrid.tsx";
import EmailLogin from "../authentication/emailLogin.tsx";
import EmailSettings from "../admin/settings/emailSettings.tsx";
import StorageSetting from "../admin/settings/storageSetting.tsx";

import ResetPassword from "../authentication/resetPassword.tsx";
import ResetPasswordSuccess from "../authentication/resetPasswordSuccess.tsx";
import EmptyStatus from "../status/emptyStatus.tsx";
import ViewStatus from "../status/viewStatus.tsx";
import Status from "../status/status.tsx";
import StatusOther from "../status/statusOther.jsx";
import AllChat from "../chat/all-chat.tsx";
import WebIndex from "../chat/WebIndex.tsx";
import LanguageAdmin from "../admin/settings/languageAdmin.tsx";
import LanguageApp from "../admin/settings/languageApp.tsx";
import LanguageTranslate from "../admin/settings/languageTranslate.tsx";
import ProfileSettings from "../admin/settings/profileSettings.tsx";
import PinnedChat from "../chat/pinned-chat.tsx";
import ArchiveChat from "../chat/archive-chat.tsx";
import Index from "../chat/index.tsx";
import EmailOtp from "../authentication/emailOtp.tsx";
import ForgotPassword from "../authentication/forgotPassword.tsx";
import LockScreen from "../authentication/lockScreen.tsx";
import MobileOtp from "../authentication/mobile-otp.tsx";
import PhoneLogin from "../authentication/phoneLogin.tsx";
import BlankPage from "../admin/others/blankPage.tsx";
import VectorMaps from "../admin/others/vectorMaps.tsx";
import Components from "../admin/others/components.tsx";
import AdminDashboard from "../admin/dashboard/index.tsx";
import AdminCall from "../admin/call/index.tsx";
import UsersList from "../admin/userlist/users.tsx";
import BasicInputs from "../admin/forms/basicinputs.tsx";
import Vertical from "../admin/forms/vertical.tsx";
import FormMask from "../admin/forms/formMask.tsx";
import FormValidation from "../admin/forms/formValidation.tsx";
import BasicTable from "../admin/forms/tables/basicTable.tsx";
import DataTable from "../admin/forms/tables/dataTable.tsx";
import InputGroup from "../admin/forms/inputGroup.tsx";
import BlockedUser from "../admin/userlist/blockedUser.tsx";
import ReportedUser from "../admin/userlist/reportedUser.tsx";
import InvitedUser from "../admin/userlist/invitedUser.tsx";
import AdminChat from "../admin/chat/index.tsx";
import AdminStories from "../admin/stories/index.tsx";
import HorizontalForm from "../admin/forms/horizontalForm.tsx";

const routes = all_routes;

export const publicRoutes = [
  {
    path: routes.index,
    element: <Index />,
    route: Route,
  },
  {
    path: routes.contact,
    element: <Contact />,
    route: Route,
  },
  {
    path: routes.group,
    element: <Group />,
    route: Route,
  },
  {
    path: routes.settings,
    element: <Settings />,
    route: Route,
  },
  {
    path: routes.emptyStatus,
    element: <EmptyStatus />,
    route: Route,
  },
//   {
//     path: routes.call,
//     element: <Call />,
//     route: Route,
//   },
  {
    path: routes.register,
    element: <Register />,
    route: Route,
  },
//   {
//     path: routes.audioCall,
//     element: <AudioCall />,
//     route: Route,
//   },
//   {
//     path: routes.videoCall,
//     element: <VideoCall />,
//     route: Route,
//   },
//   {
//     path: routes.callGrid,
//     element: <CallGrid />,
//     route: Route,
//   },
  {
    path: routes.emailLogin,
    element: <EmailLogin />,
    route: Route,
  },
  {
    path: routes.resetPassword,
    element: <ResetPassword />,
    route: Route,
  },
  {
    path: routes.resetPasswordSuccess,
    element: <ResetPasswordSuccess />,
    route: Route,
  },
  {
    path: routes.viewStatus,
    element: <ViewStatus />,
    route: Route,
  },
  {
    path: routes.status,
    element: <Status />,
    route: Route,
  },
  {
    path: routes.statusOther,
    element: <StatusOther />,
    route: Route,
  },
  {
    path: routes.pinnedChat,
    element: <PinnedChat />,
    route: Route,
  },
  {
    path: routes.archiveChat,
    element: <ArchiveChat />,
    route: Route,
  },
  {
    path: routes.allChat,
    element: <AllChat />,
    route: Route,
  },
  {
    path: routes.WebIndex,
    element: <WebIndex />,
    route: Route,
  },
  {
    path: routes.emailOtp,
    element: <EmailOtp />,
    route: Route,
  },
  {
    path: routes.forgotpassword,
    element: <ForgotPassword />,
    route: Route,
  },
  {
    path: routes.lockScreen,
    element: <LockScreen />,
    route: Route,
  },
  {
    path: routes.mobileOtp,
    element: <MobileOtp />,
    route: Route,
  },
  {
    path: routes.phoneLogin,
    element: <PhoneLogin />,
    route: Route,
  }
];
export const adminRoutes = [
  {
    path: routes.profileSettings,
    element: <ProfileSettings />,
    route: Route,
  },

  {
    path: routes.websiteSettings,
    element: <WebsiteSettings />,
    route: Route,
  },
  {
    path: routes.systemSettings,
    element: <SystemSettings />,
    route: Route,
  },
  {
    path: routes.localization,
    element: <LocalizationSetting />,
    route: Route,
  },
  {
    path: routes.socialAuth,
    element: <SocialAuth />,
    route: Route,
  },
  {
    path: routes.authenticationSettings,
    element: <AuthenticationSettings />,
    route: Route,
  },
  {
    path: routes.notificationSettings,
    element: <NotificationSettings />,
    route: Route,
  },
  {
    path: routes.appearanceSettings,
    element: <AppearanceSettings />,
    route: Route,
  },
  {
    path: routes.adminDashboard,
    element: <AdminDashboard />,
    route: Route,
  },
  {
    path: routes.smsSettings,
    element: <SmsSetting />,
    route: Route,
  },
  {
    path: routes.language,
    element: <Language />,
    route: Route,
  },
  {
    path: routes.gdpr,
    element: <Gdpr />,
    route: Route,
  },
  {
    path: routes.banAddress,
    element: <BanAddress />,
    route: Route,
  },
  {
    path: routes.otpSettings,
    element: <OtpSetting />,
    route: Route,
  },
  {
    path: routes.emailSettings,
    element: <EmailSettings />,
    route: Route,
  },
  {
    path: routes.stories,
    element: <AdminStories />,
    route: Route,
  },
  {
    path: routes.adminChat,
    element: <AdminChat />,
    route: Route,
  },
  {
    path: routes.adminCall,
    element: <AdminCall />,
    route: Route,
  },
  // {
  //   path: routes.storageSetting,
  //   element: <StorageSetting />,
  //   route: Route,
  // },
  {
    path: routes.languageAdmin,
    name: "languageAdmin",
    element: <LanguageAdmin />,
    route: Route,
  },
  {
    path: routes.languageApp,
    name: "languageApp",
    element: <LanguageApp />,
    route: Route,
  },
  {
    path: routes.languageTranslate,
    name: "languageTranslate",
    element: <LanguageTranslate  />,
    route: Route,
  },
  {
    path: routes.usersList,
    name: "userlist",
    element: <UsersList  />,
  },
  {
    path: routes.blankPage,
    element: <BlankPage  />,
    route: Route,
  },
  {
    path: routes.vectorMaps,
    element: <VectorMaps  />,
    route: Route,
  },
  {
    path: routes.components,
    element: <Components />,
    route: Route,
  },
  {
    path: routes.basicInputs,
    element: <BasicInputs />,
    route: Route,
  },
  {
    path: routes.verticalForm,
    element: <Vertical />,
    route: Route,
  },
  {
    path: routes.formMask,
    element: <FormMask />,
    route: Route,
  },
  {
    path: routes.formValidation,
    element: <FormValidation />,
    route: Route,
  },
  {
    path: routes.basicTable,
    element: <BasicTable />,
    route: Route,
  },
 
  {
    path: routes.dataTable,
    element: <DataTable />,
    route: Route,
  },
  {
    path: routes.inputGroup,
    element: <InputGroup />,
    route: Route,
  },
  {
    path: routes.horizontalForm,
    element: <HorizontalForm />,
    route: Route,
  },
  {
    path: routes.blockUser,
    element: <BlockedUser />,
    route: Route,
  },
  {
    path: routes.reportUser,
    element: <ReportedUser />,
    route: Route,
  },
  {
    path: routes.inviteUser,
    element: <InvitedUser />,
    route: Route,
  },
 
  

];
