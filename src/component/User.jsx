import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
// import SERVER_URL from '../services/server_url.js'

const User = () => {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    // Define state variables using useState 
    const [user, setUser] = useState({
        avatar: '',
        first_name: '',
        last_name: '',
        employment: { title: '' },
        address: { city: '' },
        email: '',
        dob: '',
        gender: '',
    });

    // State to toggle displaying more user info 
    const [showMoreInfo, setShowMoreInfo] = useState(false);

    // Use useEffect to fetch user data on component mount 
    useEffect(() => {
        getUser();
    }, []);

    // Function to fetch user data from the API 
    const getUser = () => {
        const url =
            'https://random-data-api.com/api/v2/users?response_type=json';

        // Fetch data and update user state when data is received 
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                setUser(data);
                changeThemeColor();
            });
            
    };

    // Function to change the theme color randomly 
    const changeThemeColor = () => {
        const randomColor =
            '#' + ((Math.random() * 0xffffff) << 0)
                .toString(16).padStart(6, '0');
        document.documentElement.style.setProperty(
            '--theme-color', randomColor);
            
    };

    // Function to toggle displaying more user info 
    const toggleMoreInfo = () => {
        setShowMoreInfo(!showMoreInfo);
    };




    // //https://dummyjson.com/users

    return (
        <>
            <div className=' pt-5 ' style={{ paddingLeft: "25vw", paddingRight: "25vw" }}>
                <Container className='box bg-info rounded p-5' style={{ backgroundColor: "#" + `${randomColor}` }}>
                    <Row >

                        <Col className='text-center ' >
                            <img width={100} height={200} className='rounded' src="https://img.freepik.com/premium-photo/attractive-girl-working-office-corporation-company-dressed-elegant-clothes_616370-782.jpg" alt="" />
                            <h4 className='pt-5'>{`${user.first_name} ${user.last_name}`}</h4>
                            <h6> {user.gender} </h6>
                            <Row>
                                <Col>
                                    <h6 className='fw-bold'>Birth Date</h6>
                                    <h6>{user.date_of_birth}</h6>
                                    <h6 className='fw-bold'>Weight</h6>
                                    <h6>48</h6>
                                </Col>
                                <Col>
                                    <h6 className='fw-bold'>Age</h6>
                                    <h6>37</h6>
                                    <h6 className='fw-bold'>Height</h6>
                                    <h6>198</h6>
                                </Col>
                            </Row>
                            <Button style={{ backgroundColor: "#" + `${randomColor}` }}   onClick={getUser} className='mt-3'> Get New User</Button>


                        </Col>

                        <Col className='pt-5 text-start ps-5'>
                            <div className='pb-2'>
                                <h6 className='fw-bold'>Home Address</h6>
                                <h6>{user.address.city}</h6>
                            </div>
                            <div className='pb-2'>
                                <h6 className='fw-bold'>Mobile Phone</h6>
                                <h6>{user.phone_number}</h6>
                            </div>
                            <div className='pb-2'>
                                <h6 className='fw-bold'>Company</h6>
                                <h6>37</h6>
                            </div>
                            <div className='pb-2'>
                                <h6 className='fw-bold'>Job Title</h6>
                                <h6>{user.employment.title}</h6>
                            </div>
                            <div>
                                <h6 className='fw-bold'>Email</h6>
                                <h6>{user.email}</h6>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div >
        </>
    )
}

export default User