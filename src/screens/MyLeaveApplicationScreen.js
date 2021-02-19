import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import FixedNavbar from '../components/FixedNavbar';
import Header from '../components/Header';
import MyLeave from '../components/MyLeave';

const MyLeaveApplicationScreen = ({ history }) => {
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {

        if(!userInfo) {
            history.push('/')
        } 
    }, [dispatch, history, userInfo])

  return (
    <>     
    	<Row className='ml-4 mr-4 py-4 profilescreen-wrapper'>
				<Col md={3} className='d-none d-md-block'>
          <FixedNavbar />
        </Col>
        <Col className='col-xs-12 col-md-8'>
          <Header />
					<h1 className='page-header'>MY LEAVE</h1>
					<hr />
					<div className='myleave-wrapper'>
            <MyLeave />
					</div>
      	</Col>
      </Row>
    </>
  )
}

export default MyLeaveApplicationScreen;