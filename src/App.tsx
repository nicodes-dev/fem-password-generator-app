import { useState, useRef } from 'react'
import Footer from './components/Footer'
import {
  REDUCER_ACTION_TYPE,
  useGeneratePasswordContext,
} from './context/GeneratePasswordContext'
import useGeneratePassword from './hooks/useGeneratePassword'
import RangeSlider from './components/RangeSlider'
import Checkbox from './components/Checkbox'

export default function App() {
  const [includeUppercase, setIncludeUppercase] = useState(false)
  const [includeLowercase, setIncludeLowercase] = useState(false)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)
  const [range, setRange] = useState(0)
  const [hasFade, setHasFade] = useState(false)
  const pwRef = useRef<HTMLSpanElement>(null)
  const copyRef = useRef<HTMLSpanElement>(null)

  const {
    state: { list, password, passwordStrength, error },
    dispatch,
  } = useGeneratePasswordContext()
  const { handleGeneratePassword, calculateStrengthMeter } =
    useGeneratePassword(
      includeLowercase,
      includeUppercase,
      includeNumbers,
      includeSymbols,
      range
    )

  const copyPassword = () => {
    if (pwRef.current && copyRef.current && password) {
      setHasFade(true)
      navigator.clipboard
        .writeText(pwRef.current.innerText)
        .then(() => {
          console.log('copied to clipboard')
          copyRef.current?.classList.add('animate-fade-out')
          copyRef.current?.classList.remove('hidden')
          setTimeout(() => {
            copyRef.current?.classList.remove('animate-fade-out')
            copyRef.current?.classList.add('hidden')
            setHasFade(false)
          }, 1000)
        })
        .catch(() => {
          dispatch({
            type: REDUCER_ACTION_TYPE.SET_ERROR,
            payload: 'Failed to copy',
          })
        })
    }
  }
  return (
    <>
      <main className="pt-16 px-4 md:pt-[133px] md:pb-0 text-neutral-300 grid place-content-start  justify-center gap-y-4 md:gap-y-6">
        <h1 className="text-center text-neutral-500 text-normal md:text-heading-m md:mb-[7px]">
          Password Generator
        </h1>
        <div className="relative bg-neutral-700 p-4 md:py-[19px] md:px-8 flex justify-between align-middle min-w-[343px] md:min-w-[540px]">
          {error && (
            <span className="absolute top-0 text-[12px] md:text-[17px] text-accent-red">
              {error}
            </span>
          )}
          <span
            ref={pwRef}
            className={`text-heading-m md:text-heading-l  ${
              password ? 'opacity-100' : 'opacity-25'
            }`}
          >
            {`${password ? password : 'P4$5W0rD!'}`}
          </span>
          <button
            className="relative flex gap-x-4 items-center"
            onClick={copyPassword}
            disabled={hasFade}
            aria-label="copy"
          >
            <span
              ref={copyRef}
              className="absolute top-[5px] right-[36px] hidden text-accent-green md:top-[12px] text-body"
            >
              COPIED
            </span>
            <svg width="21" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z"
                fill="#A4FFAF"
              />
            </svg>
          </button>
        </div>
        <div className="bg-neutral-700 p-4 md:pt-6 md:pb-8 md:px-8">
          <RangeSlider range={range} setRange={setRange} />
          <Checkbox
            includeLowercase={includeLowercase}
            includeNumbers={includeNumbers}
            includeSymbols={includeSymbols}
            includeUppercase={includeUppercase}
            setIncludeLowercase={setIncludeLowercase}
            setIncludeUppercase={setIncludeUppercase}
            setIncludeNumbers={setIncludeNumbers}
            setIncludeSymbols={setIncludeSymbols}
          />
          <div className="bg-neutral-900 px-4 flex justify-between py-3.5 md:py-[22px] md:px-8">
            <p className="text-normal md:text-body text-neutral-500 self-center">
              STRENGTH
            </p>
            <div className="flex gap-x-4">
              <p className="self-center text-body md:text-heading-m uppercase">
                {passwordStrength}
              </p>
              <div
                className={`flex gap-x-2 ${passwordStrength.replace(' ', '-')}`}
              >
                <span className="meter"></span>
                <span className="meter"></span>
                <span className="meter"></span>
                <span className="meter"></span>
              </div>
            </div>
          </div>
          <button
            className="bg-accent-green hover:bg-neutral-900 border-2 border-accent-green flex w-full gap-x-4 justify-center pt-[18px] pb-[17px]   text-neutral-900 hover:text-accent-green text-normal md:text-body mt-4 md:mt-8 group"
            onClick={() => {
              const numOfIncluded =
                Number(includeLowercase) +
                Number(includeUppercase) +
                Number(includeNumbers) +
                Number(includeSymbols)

              if (range >= numOfIncluded) {
                handleGeneratePassword(list, range)
                calculateStrengthMeter(range)
              } else {
                dispatch({
                  type: REDUCER_ACTION_TYPE.SET_ERROR,
                  payload: `Character length must be greater than ${
                    numOfIncluded - 1
                  }`,
                })
              }
            }}
          >
            GENERATE
            <span>
              <svg
                width="12"
                height="12"
                className="fill-neutral-900 group-hover:fill-accent-green mt-1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z" />
              </svg>
            </span>
          </button>
        </div>
      </main>
      <Footer />
    </>
  )
}
