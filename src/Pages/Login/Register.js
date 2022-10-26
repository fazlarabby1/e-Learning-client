import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { useState } from 'react';

const Register = () => {
    const {createUSer} = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleRegistration = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)
        
        createUSer(email, password)
        .then(result =>{
            const user = result.user;
            // console.log(user)
            setError('');
            form.reset();
        })
        .catch(error => setError(error));
    }

    return (
        <div className='container py-5'>
            <Card className='w-75 mx-auto shadow'>
                <Card.Body>
                    <Card.Title className='text-center fs-4 text-info'>Please Register</Card.Title>
                    <Form onSubmit={handleRegistration} className='mx-auto'>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control name='name' type="text" placeholder="Enter Your Name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control name='photo' type="text" placeholder="Enter Your Photo URL" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex flex-column" controlId="formBasicCheckbox">
                            {error && <span className='text-danger fs-5 mb-2'>{error.message}</span>}
                            <span className='fs-5'>Already have an account? Please <Link to='/login'>Log In</Link></span>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label={<>Accept <Link to='/terms'>Terms & Conditions</Link></>} />
                        </Form.Group>
                        <Button className='px-4' variant="primary" type="submit">
                            Register
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Register;