import { ChangeEvent, FormEvent, FunctionComponent, useCallback, useEffect, useState } from 'react'
import login from '../../redux/ocAuth/login'
import { useOcDispatch, useOcSelector } from '../../redux/ocStore'
import { Button } from '../../../@/components/ui/button'

interface OcLoginFormProps {
  title?: string
  onLoggedIn: () => void
}

const OcLoginForm: FunctionComponent<OcLoginFormProps> = ({
  title = 'Sign into your account',
  onLoggedIn,
}) => {
  const dispatch = useOcDispatch()

  const { loading, error, isAnonymous } = useOcSelector((s) => ({
    isAnonymous: s.ocAuth.isAnonymous,
    error: s.ocAuth.error,
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
    if (!isAnonymous) {
      onLoggedIn()
    }
  }, [isAnonymous, onLoggedIn])

  return (
    <div className="bg-[#2f2d2e] text-white  overflow-hidden">
      <div className="flex">
        <div className="w-1/2 relative overflow-hidden">
          <img src="login.jpg" alt="" className="absolute top-0 z-0 opacity-50" />
          <div className="w-1/2 ps-5 py-5">
            <h1 className="text-8xl z-10 relative">
              FIND THE HZTL MERCH THAT SUITS <em className="text-8xl underline"> YOU</em>
            </h1>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <form
            name="ocLoginForm"
            onSubmit={handleSubmit}
            className="flex gap-6 flex-col [&>label]:self-center [&>label]:w-3/4 px-7"
          >
            <h1 className="text-6xl text-center">{title}</h1>
            {error && <p>{error.message}</p>}
            <label htmlFor="identifier">
              <input
                type="text"
                id="identifier"
                name="identifier"
                placeholder="USERNAME"
                value={formValues.identifier}
                onChange={handleInputChange('identifier')}
                required
                className="text-2xl my-5 focus:outline-none border-b-2 w-full"
              />
            </label>
            <label htmlFor="password">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="PASSWORD"
                value={formValues.password}
                onChange={handleInputChange('password')}
                className="text-2xl my-5 focus:outline-none border-b-2 w-full"
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
            <Button
              type="submit"
              disabled={loading}
              className="px-10 text-xl w-1/5 self-center bg-[#7fc3ba] text-[#2f2d2e]"
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default OcLoginForm
