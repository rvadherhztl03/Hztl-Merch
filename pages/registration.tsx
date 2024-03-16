import React, { useEffect, useState } from 'react'
// import { useOcDispatch, useOcSelector } from '../ordercloud/redux/ocStore'
import { useRouter } from 'next/router'
import registrationUser from '../ordercloud/redux/ocAuth/registration'
import { useOcDispatch, useOcSelector } from '../ordercloud/redux/ocStore'
import { Tokens } from 'ordercloud-javascript-sdk'
// import { Button } from '../@/components/ui/button'

export default function registration() {
  const dispatch = useOcDispatch()
  const { isAuthenticated } = useOcSelector((s) => ({
    // isAnonymous: s.ocAuth.isAnonymous,
    isAuthenticated: s.ocAuth.isAuthenticated,
  }))
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })
  const router = useRouter()
  useEffect(() => {
    isAuthenticated && router.push('/home')
  }, [])
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    validateField(name, value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Cookie', Tokens.GetAccessToken())
    dispatch(
      registrationUser({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        username: formData.username,
      })
    )

    // Submit logic goes here
    // console.log('Form submitted with data:', formData)
    // Reset form after submission
    // setFormData({
    //   firstName: '',
    //   lastName: '',
    //   email: '',
    //   username: '',
    //   password: '',
    //   phone: '',
    //   confirmPassword: '',
    // })
    setErrors({
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      phone: '',
      confirmPassword: '',
    })
    setSubmitButtonDisabled(true)
  }

  const validateField = (fieldName, value) => {
    let error = ''
    switch (fieldName) {
      case 'firstName':
      case 'lastName':
        if (!value.trim()) {
          error = 'This field is required'
        }
        break
      case 'email':
        // eslint-disable-next-line no-case-declarations
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!value.trim()) {
          error = 'This field is required'
        } else if (!emailRegex.test(value)) {
          error = 'Invalid email address'
        }
        break
      case 'username':
        if (!value.trim()) {
          error = 'This field is required'
        }
        break
      case 'password':
        if (!value.trim()) {
          error = 'This field is required'
        }
        break
      case 'confirmPassword':
        if (!value.trim()) {
          error = 'This field is required'
        } else if (value !== formData.password) {
          error = 'Passwords do not match'
        }
        break
      default:
        break
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: error,
    }))
  }

  const isFormValid = () => {
    for (const error in errors) {
      if (errors[error]) {
        return false
      }
    }
    return true
  }

  return (
    <div className="bg-[#2f2d2e] text-white  overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 relative overflow-hidden">
          <img
            src="login.jpg"
            alt=""
            className="absolute top-0 z-0 opacity-50 object-cover h-full w-full bg-center"
          />
          <div className="w-3/4 lg:w-1/2 ps-5 py-5">
            <h1 className="text-5xl lg:text-8xl z-10 relative leading-tight">
              FIND THE HZTL MERCH THAT SUITS{' '}
              <em className="text-6xl lg:text-8xl underline"> YOU</em>
            </h1>
          </div>
        </div>
        <div className="w-full lg:w-1/2  flex items-center lg:py-0 py-10">
          <form
            name="ocRegistrationForm"
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 flex-colw lg:[&>label]:self-center lg:[&>label]:w-full w-full px-7"
          >
            <h1 className="text-3xl lg:text-6xl pb-5">Registration Form</h1>
            {/* {error && <p>{error.message}</p>} */}
            <label htmlFor="identifier">
              <input
                type="text"
                id="identifier"
                name="firstName"
                placeholder="*First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="text-xl my-3 focus:outline-none border-b-2 w-full"
              />
              {errors?.firstName && <p className="error">{errors?.firstName}</p>}
            </label>
            <label htmlFor="identifier">
              <input
                type="text"
                id="identifier"
                name="lastName"
                placeholder="*Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="text-xl my-3 focus:outline-none border-b-2 w-full"
              />
              {errors.lastName && <p className="error">{errors.lastName}</p>}
            </label>
            <label htmlFor="identifier">
              <input
                type="text"
                id="identifier"
                name="username"
                placeholder="*Username"
                value={formData.username}
                onChange={handleChange}
                required
                className="text-xl my-3 focus:outline-none border-b-2 w-full"
              />
              {errors.username && <p className="error">{errors.username}</p>}
            </label>
            <label htmlFor="identifier">
              <input
                type="text"
                id="identifier"
                name="email"
                placeholder="*Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="text-xl my-3 focus:outline-none border-b-2 w-full"
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </label>
            <label htmlFor="identifier">
              <input
                type="text"
                id="identifier"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="text-xl my-3 focus:outline-none border-b-2 w-full"
              />
            </label>
            <label htmlFor="password">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="text-xl my-3 focus:outline-none border-b-2 w-full"
                required
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </label>
            <label htmlFor="password">
              <input
                type="password"
                id="password"
                name="confirmPassword"
                placeholder="*Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="text-xl my-3 focus:outline-none border-b-2 w-full"
                required
              />
              {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
            </label>

            <button
              type="submit"
              disabled={!isFormValid()}
              className={` ${
                !isFormValid() ? 'bg-[#5a8982]' : ''
              }px-10 text-[24px] font-bold w-full py-4 self-center bg-[#7fc3ba] text-[#2f2d2e] hover:bg-[#5a8982] transition-all hover:text-white `}
            >
              Registration
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
