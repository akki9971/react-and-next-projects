
import { Container, Row, Col, Card, Form, InputGroup, Button, Spinner } from 'react-bootstrap'
import React, { useState } from 'react'
import { FaEnvelopeOpen, FaUserAlt, FaPhoneAlt } from 'react-icons/fa'
import { AiFillGithub, AiFillGoogleCircle, AiFillLock, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
// import { useRouter } from 'next/router'
// import { UserRegisterSevice } from '../../Services/AuthService'

export const RegisterForm = () => {

    // const router = useRouter()

    // states to manage whole login process
    const [loader, setLoader] = useState('init')
    const [showHide, setShowHide] = useState({
        pass:false,
        conf:false
    })
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        phone: '',
        code: '',
        password: '',
        confPassword: ''
    })
    const [invalid, setInvalid] = useState({
        full_name: null,
        email: null,
        phone: null,
        code: null,
        password: null,
        confPassword: null

    })
    const [inputError, setInputError] = useState({
        full_name: "Name must be atleast 3 characters",
        email: "Email must be a valid email address (xyz@xyz.com)",
        phone: "Mobile number must be a valid",
        password: 'Password must be atleast 6 characters',
        confPassword: 'Confirm Password did not match to Password',
        message: null
    })

    // name validator
    const nameValid = (name) => {
        const nameRegex = /^([a-zA-Z]+\s)*[a-zA-Z]+$/
        if (name.match(nameRegex)) {
            setInputError({ ...inputError, full_name: "" })
            setInvalid({ ...invalid, full_name: false })

        } else {
            setInputError({ ...inputError, full_name: "Name must be character only having single space" })
            setInvalid({ ...invalid, full_name: true })
            return
        }
    }

    // email validator 
    const emailValid = (email) => {
        const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (email.match(emailRegEx)) {
            setInputError({ ...inputError, email: "" })
            setInvalid({ ...invalid, email: false })

        } else {
            setInputError({ ...inputError, email: "Email must be a valid email address (xyz@xyz.com)" })
            setInvalid({ ...invalid, email: true })
            return
        }
    }
    // console.log(valid, formData)

    const phoneValid = (phone) => {
        if (isNaN(phone)) {
            setInputError({ ...inputError, phone: "Mobile number should be numbers only." })
            setInvalid({ ...invalid, phone: true })
        } else if (phone.match(/^[0-9]?[6789]\d{9}$/) ){
            setInputError({ ...inputError, phone: "" })
            setInvalid({ ...invalid, phone: false })
        } else {
            setInputError({ ...inputError, phone: "Mobile number must be valid with between 10 to 12 numbers" })
            setInvalid({ ...invalid, phone: true })
            return
        }
    }

    const codeValid = (code) => {
        if (code.match(/^(\+?\d{1,3}|\d{1,4})$/)){
            setInputError({ ...inputError, phone: "" })
            setInvalid({ ...invalid, phone: false })
        } else {
            setInputError({ ...inputError, phone: "Enter Valid country code" })
            setInvalid({ ...invalid, phone: true })
            return
        }
    }
    const confPassValid = (e) => {
        if (e !== formData.password) {
            setInvalid({ ...invalid, confPassword: true })
            setInputError({ ...inputError, confPassword: 'Confirm Password did not match the password' })
        } else {
            setInvalid({ ...invalid, confPassword: false })
            setInputError({ ...inputError, confPassword: '' })
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setLoader('loading')

        // blank field validation for full_name
        if (formData.full_name.length < 3 || formData.full_name.length > 40) {
            setInvalid({ ...invalid, full_name: true })
            setInputError({ ...inputError, full_name: 'Name must between 3 to 40 characters' })
            setLoader('init')
            return
        }
        // blank field validation for email
        if (formData.email.length < 1) {
            setInvalid({ ...invalid, email: true })
            setInputError({ ...inputError, email: 'Email cannot be empty' })
            setLoader('init')
            return
        }

        // blank field validation for password
        if (formData.password.length < 6) {
            setInvalid({ ...invalid, password: true })
            setInputError({ ...inputError, password: 'Password must be atleast 6 characters' })
            setLoader('init')
            return
        }

        // miss-match validation for passwords
        if (formData.password !== formData.confPassword) {
            setInvalid({ ...invalid, confPassword: true })
            setInputError({ ...inputError, confPassword: 'Passwords did not match' })
            setLoader('init')
            return
        }
        // router.push("dashboard/admin")

        setLoader('success')

    }
    return (
        <>
            <Container className='container-fluid'>
                <Card className=" shadow border-0" style={{ minWidth: '50vw' }}>
                    <Card.Header className="bg-transparent pb-4">
                        <div className="text-muted text-center mt-2 mb-3">
                            <small>Sign up with</small>
                        </div>
                        <div className="text-center">
                            <a
                                className="btn btn-primary btn-icon me-4"
                                color="default"
                                target='_blank'
                                href="https://github.com/topics/login"
                                // onClick={(e) => e.preventDefault()}
                            >
                                <span className="btn-inner--icon me-2">
                                    <AiFillGithub />
                                </span>
                                <span className="btn-inner--text">Github</span>
                            </a>
                            <a
                                className="btn btn-primary btn-icon"
                                target='_blank'
                                color="default"
                                href="https://accounts.google.com"
                                // onClick={(e) => e.preventDefault()}
                            >
                                <span className="btn-inner--icon me-2">
                                    <AiFillGoogleCircle />
                                </span>
                                <span className="btn-inner--text">Google</span>
                            </a>
                        </div>
                    </Card.Header>
                    <Card.Body className="px-lg-5 py-lg-4">
                        <div className="text-center text-muted mb-3">
                            <small>Or sign up with credentials</small>
                        </div>

                        {/* name field */}
                        <InputGroup >
                            <InputGroup.Text id="basic-addon1">
                                <FaUserAlt />
                            </InputGroup.Text>
                            <Form.Control
                                placeholder="John Smith"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                value={formData.full_name}
                                onChange={(e) => {
                                    setInputError({ ...inputError, message: null })
                                    setFormData({ ...formData, full_name: e.target.value })
                                    nameValid(e.target.value)
                                }}
                            />
                        </InputGroup>
                        {/* error message for email field */}
                        <h6 className="mb-3 text-danger" style={{ fontSize: 14 }}>{invalid.full_name ? inputError.full_name : ''}</h6>

                        {/* email field */}
                        <InputGroup >
                            <InputGroup.Text id="basic-addon1">
                                <FaEnvelopeOpen />
                            </InputGroup.Text>
                            <Form.Control
                                placeholder="john@gmail.com"
                                aria-label="email"
                                aria-describedby="basic-addon1"
                                value={formData.email}
                                onChange={(e) => {
                                    setInputError({ ...inputError, message: null })
                                    setFormData({ ...formData, email: e.target.value })
                                    emailValid(e.target.value)
                                }}
                            />
                        </InputGroup>
                        {/* error message for email field */}
                        <h6 className="mb-3 text-danger" style={{ fontSize: 14 }}>{invalid.email ? inputError.email : ''}</h6>


                        <InputGroup >
                            <InputGroup.Text id="basic-addon1">
                                <FaPhoneAlt />
                            </InputGroup.Text>
                            <InputGroup.Text className='p-0'>
                                <Form.Control
                                    placeholder="+91"
                                    aria-label="text"
                                    style={{ width: '70px',borderRadius:0, border:'none' }}
                                    aria-describedby="basic-addon1"
                                    value={formData.code}
                                    onChange={(e) => {
                                        setInputError({ ...inputError, message: null })
                                        setFormData({ ...formData, code: e.target.value })
                                        codeValid(e.target.value)
                                    }}
                                />
                            </InputGroup.Text>
                            <Form.Control
                                placeholder="9876543210"
                                aria-label="text"
                                aria-describedby="basic-addon1"
                                value={formData.phone}
                                onChange={(e) => {
                                    setInputError({ ...inputError, message: null })
                                    setFormData({ ...formData, phone: e.target.value })
                                    phoneValid(e.target.value)
                                }}
                            />
                        </InputGroup>
                        {/* error message for mobile number field */}
                        <h6 className="mb-3 text-danger" style={{ fontSize: 14 }}>{invalid.phone ? inputError.phone : ''}</h6>

                        {/* password field */}
                        <InputGroup >
                            <InputGroup.Text id="basic-addon1">
                                <AiFillLock />
                            </InputGroup.Text>
                            <Form.Control
                                placeholder="Enter Password"
                                type={showHide.pass ? 'text' : 'password'}
                                aria-label="Password"
                                aria-describedby="basic-addon1"
                                value={formData.password}
                                onChange={(e) => {
                                    setInputError({ ...inputError, message: null, password: '' })
                                    setInvalid({ ...invalid, password: null })
                                    setFormData({ ...formData, password: e.target.value })
                                }}
                            />
                            <InputGroup.Text id="basic-addon1" onClick={() => setShowHide({ ...showHide, pass: !showHide.pass })}>
                                {
                                    showHide.pass ? <AiOutlineEyeInvisible /> : <AiOutlineEye />
                                }
                            </InputGroup.Text>
                        </InputGroup>
                        {/* error message for password field */}
                        <h6 className="mb-3 text-danger" style={{ fontSize: 14 }}>{(invalid.password) ? inputError.password : ''}</h6>

                        {/* confirm password field */}
                        <InputGroup >
                            <InputGroup.Text id="basic-addon1">
                                <AiFillLock />
                            </InputGroup.Text>
                            <Form.Control
                                placeholder="Re-Enter Password "
                                aria-label="Password"
                                type={showHide.conf ? 'text' : 'password'}
                                aria-describedby="basic-addon1"
                                value={formData.confPassword}
                                onChange={(e) => {
                                    setInputError({ ...inputError, message: null })
                                    setFormData({ ...formData, confPassword: e.target.value })
                                    confPassValid(e.target.value)
                                }}
                            />
                            <InputGroup.Text id="basic-addon1" onClick={() => setShowHide({ ...showHide, conf: !showHide.conf })}>
                                {
                                    showHide.conf ? <AiOutlineEyeInvisible />  : <AiOutlineEye />
                                }
                            </InputGroup.Text>
                        </InputGroup>
                        {/* error message for password field */}
                        <h6 className="mb-3 text-danger" style={{ fontSize: 14 }}>{(invalid.confPassword) ? inputError.confPassword : ''}</h6>
                        <button className="btn btn-primary text-white w-100" onClick={submitHandler} disabled={invalid.full_name || invalid.email || invalid.password}>Register</button> 
                        {
                                loader == 'success' ? <>
                                    <hr className='mt-5'/>
                                    
                                    <h6 className="text-start">Name: {formData?.full_name}</h6>
                                    <h6 className="text-start">Email id: {formData?.email}</h6>
                                    <h6 className="text-start">Mobile number: {formData?.code} {formData?.phone}</h6>
                                    <h6 className="text-start">Password: {Array.apply(null, {length: formData?.password.length}).map(e=>"*")}</h6>

                                </> : ''
                        }
                    </Card.Body>

                </Card>

            </Container>
        </>
    )
}
