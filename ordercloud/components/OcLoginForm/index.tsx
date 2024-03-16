import { ChangeEvent, FormEvent, FunctionComponent, useCallback, useEffect, useState } from 'react'
import login from '../../redux/ocAuth/login'
import { useOcDispatch, useOcSelector } from '../../redux/ocStore'
// import { Button } from '../../../@/components/ui/button'
import { useRouter } from 'next/router'
interface OcLoginFormProps {
  title?: string
  onLoggedIn: () => void
}

const OcLoginForm: FunctionComponent<OcLoginFormProps> = ({
  title = 'Sign into your account',
  // onLoggedIn,
}) => {
  const dispatch = useOcDispatch()
  const router = useRouter()
  const { loading, error, isAuthenticated } = useOcSelector((s) => ({
    error: s.ocAuth.error,
    isAuthenticated: s.ocAuth.isAuthenticated,
    loading: s.ocAuth.loading,
  }))
  const [formValues, setFormValues] = useState({
    identifier: '',
    password: '',
    remember: false,
  })

  const handleInputChange = (fieldKey: string) => (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues((v) => ({ ...v, [fieldKey]: e.target.value }))
  }

  const handleCheckboxChange = (fieldKey: string) => (e: ChangeEvent<HTMLInputElement>) => {
    setFormValues((v) => ({ ...v, [fieldKey]: !!e.target.checked }))
  }

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault()
      dispatch(
        login({
          username: formValues.identifier,
          password: formValues.password,
          remember: formValues.remember,
        })
      )
    },
    [formValues, dispatch]
  )

  useEffect(() => {
    isAuthenticated && router.push('/home')
  }, [])

  return (
    <div className="bg-[#2f2d2e] text-white  overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 relative overflow-hidden">
          <img
            src="login.jpg"
            alt=""
            className="absolute top-0 z-0 opacity-50 object-cover bg-center w-full h-full"
          />
          <div className="w-3/4 lg:w-1/2 ps-5 py-5">
            <h1 className="text-5xl lg:text-8xl z-10 relative leading-tight">
              FIND THE HZTL MERCH THAT SUITS{' '}
              <em className="text-6xl lg:text-8xl underline"> YOU</em>
            </h1>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center items-center lg:py-0 py-10">
          <form
            name="ocLoginForm"
            onSubmit={handleSubmit}
            className="flex gap-6 flex-col lg:[&>label]:self-center lg:[&>label]:w-full px-7"
          >
            <h1 className=" text-3xl lg:text-6xl text-center font-bold">{title}</h1>
            {error && <p>{error.message}</p>}
            <label htmlFor="identifier">
              <input
                type="text"
                id="identifier"
                name="identifier"
                placeholder="Username"
                value={formValues.identifier}
                onChange={handleInputChange('identifier')}
                required
                className="bg-transparent text-2xl my-5 focus:outline-none border-b-2 w-full"
              />
            </label>
            <label htmlFor="password">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleInputChange('password')}
                className="bg-transparent text-2xl my-5 focus:outline-none border-b-2 w-full"
                required
              />
            </label>
            <label htmlFor="remember" className="flex items-center gap-1 self-start">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                checked={formValues.remember}
                onChange={handleCheckboxChange('remember')}
              />
              Keep me logged in
            </label>
            <button
              type="submit"
              disabled={loading}
              className="px-10 text-[24px] font-bold w-full py-4 self-center bg-[#7fc3ba] text-[#2f2d2e] hover:bg-[#5a8982] transition-all hover:text-white "
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default OcLoginForm
