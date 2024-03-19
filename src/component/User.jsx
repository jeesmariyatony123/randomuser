import React, {  useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const User = () => {

    const [userDetails, setUserDetails] = useState(null);
    const [boxColor, setBoxColor] = useState('#9de3fa'); 
  
    const handleRandomUser = async () => {
        try {
          const response = await fetch('https://dummyjson.com/users'); 
          const userData = await response.json();
          const randomUserIndex = Math.floor(Math.random() * userData.users.length);
          const randomUser = userData.users[randomUserIndex];
          setUserDetails(randomUser);
          changeBoxColor();
          console.log(randomUser);
        } catch (error) {
          console.error('Error in fetching data:', error);
        }
      };
    
      const changeBoxColor = () => {
        const randomColor = RandomBackgroundColor();
        setBoxColor(randomColor);
      };
    
      const RandomBackgroundColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      };

    // //https://dummyjson.com/users

    return (
        <>
            <div className=' pt-5 ' style={{ paddingLeft: "25vw", paddingRight: "25vw" }}>
                <Container className='box  rounded p-5'  style={{ backgroundColor: boxColor}}>
                    {userDetails && (
                        <Row >
                            <Col key={userDetails.id} className='text-center ' >
                                <img width={100} height={200} className='rounded' src={userDetails.image} alt="" />
                                <h4 className='pt-5'>{`${userDetails.firstName} ${userDetails.lastName}`}</h4>
                                <h6> {userDetails.gender} </h6>
                                <Row>
                                    <Col>
                                        <h6 className='fw-bold'>Birth Date</h6>
                                        <h6>{userDetails.birthDate}</h6>
                                        <h6 className='fw-bold'>Weight</h6>
                                        <h6>{userDetails.weight}</h6>
                                    </Col>
                                    <Col>
                                        <h6 className='fw-bold'>Age</h6>
                                        <h6>{userDetails.age}</h6>
                                        <h6 className='fw-bold'>Height</h6>
                                        <h6>{userDetails.height}</h6>
                                    </Col>
                                </Row>
                            </Col>

                            <Col className='pt-5 text-start ps-5'>
                                <div className='pb-2'>
                                    <h6 className='fw-bold'>Home Address</h6>
                                    <h6>{userDetails.address.address}</h6>
                                </div>
                                <div className='pb-2'>
                                    <h6 className='fw-bold'>Mobile Phone</h6>
                                    <h6>{userDetails.phone}</h6>
                                </div>
                                <div className='pb-2'>
                                    <h6 className='fw-bold'>Company</h6>
                                    <h6>{userDetails.company.name}</h6>
                                </div>
                                <div className='pb-2'>
                                    <h6 className='fw-bold'>Job Title</h6>
                                    <h6>{userDetails.company.title}</h6>
                                </div>
                                <div>
                                    <h6 className='fw-bold'>Email</h6>
                                    <h6>{userDetails.email}</h6>
                                </div>
                            </Col>
                        </Row>
                    ) }
                </Container>
                <Button onClick={handleRandomUser} className='mt-3'> Get New User</Button>
            </div >
        </>
    )
}

export default User