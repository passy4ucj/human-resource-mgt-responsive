import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import PasswordScreen from './screens/PasswordScreen';
import StaffListScreen from './screens/StaffListScreen';
import StaffCreateScreen from './screens/StaffCreateScreen';
import StaffEditScreen from './screens/StaffEditScreen';
import HomeScreen from './screens/HomeScreen';
import RoleEditScreen from './screens/RoleEditScreen';
import ProfileScreen from './screens/ProfileScreen';
import NextOfKinScreen from './screens/NextOfKinScreen';
import EducationScreen from './screens/EducationScreen';
import HrHomeScreen from './screens/HrHomeScreen';
import AdminProfileScreen from './screens/AdminProfileScreen';
import AdminNextOfKinScreen from './screens/AdminNextOfKinScreen';
import AdminEducationScreen from './screens/AdminEducationScreen';
import MyLeaveApplicationScreen from './screens/MyLeaveApplicationScreen';

function App() {
  return (
    <Router>
    <main className="">
      <Route path='/home' component={HomeScreen} />
      <Route path='/profile' component={ProfileScreen} />
      <Route path='/nextofkin' component={NextOfKinScreen} />
      <Route path='/education' component={EducationScreen} />
      <Route path='/dashboard' component={DashboardScreen} />
      <Route path='/myleave' component={MyLeaveApplicationScreen} />
      <Route path='/updatepassword' component={PasswordScreen} />
      <Route path='/admin/userlist' component={StaffListScreen} exact/>
      <Route path='/admin/userlist/search/:keyword' component={StaffListScreen} />
      <Route path='/admin/userlist/page/:pageNumber' component={StaffListScreen} />
      <Route path='/admin/userlist/search/:keyword/page/:pageNumber' component={StaffListScreen} />
      <Route path='/admin/register' component={StaffCreateScreen} />
      <Route path='/admin/home/:id' component={HrHomeScreen} />
      <Route path='/admin/profile/:id/edit' component={AdminProfileScreen} />
      <Route path='/admin/nextofkin/:id/edit' component={AdminNextOfKinScreen} />
      <Route path='/admin/education/:id/edit' component={AdminEducationScreen} />
      <Route path='/admin/user/:id/edit' component={StaffEditScreen} exact/>
      <Route path='/admin/user/:id/role' component={RoleEditScreen} />
      <Route path='/' component={LoginScreen} exact />
    </main>
    </Router>
  );
}

export default App;
