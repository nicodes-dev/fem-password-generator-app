import { Dispatch } from 'react'
import useGeneratePassword from '../hooks/useGeneratePassword'

type CheckboxPropType = {
  includeLowercase: boolean
  includeUppercase: boolean
  includeNumbers: boolean
  includeSymbols: boolean
  setIncludeLowercase: Dispatch<React.SetStateAction<boolean>>
  setIncludeUppercase: Dispatch<React.SetStateAction<boolean>>
  setIncludeNumbers: Dispatch<React.SetStateAction<boolean>>
  setIncludeSymbols: Dispatch<React.SetStateAction<boolean>>
}

export default function Checkbox({
  includeLowercase,
  includeNumbers,
  includeSymbols,
  includeUppercase,
  setIncludeLowercase,
  setIncludeNumbers,
  setIncludeSymbols,
  setIncludeUppercase,
}: CheckboxPropType) {
  useGeneratePassword(
    includeLowercase,
    includeNumbers,
    includeSymbols,
    includeUppercase
  )

  return (
    <div className="py-8 grid gap-y-4 md:gap-y-[19px] text-normal">
      <div className="flex gap-x-5">
        <input
          type="checkbox"
          className="checkbox"
          checked={includeUppercase}
          onChange={() => setIncludeUppercase(prevValue => !prevValue)}
          id="uppercase"
        />

        <label htmlFor="uppercase" className="text-normal md:text-body">
          Include Uppercase Letters
        </label>
      </div>
      <div className="flex gap-x-5">
        <input
          type="checkbox"
          className="checkbox"
          id="lowercase"
          checked={includeLowercase}
          onChange={() => setIncludeLowercase(prevValue => !prevValue)}
        />
        <label htmlFor="lowercase" className="text-normal md:text-body">
          Include Lowercase Letters
        </label>
      </div>
      <div className="flex gap-x-5">
        <input
          type="checkbox"
          className="checkbox"
          checked={includeNumbers}
          onChange={() => setIncludeNumbers(prevValue => !prevValue)}
          id="numbers"
        />
        <label htmlFor="numbers" className="text-normal md:text-body">
          Include Numbers
        </label>
      </div>
      <div className="flex gap-x-5">
        <input
          type="checkbox"
          className="checkbox"
          checked={includeSymbols}
          onChange={() => setIncludeSymbols(prevValue => !prevValue)}
          id="symbols"
        />
        <label htmlFor="symbols" className="text-normal md:text-body">
          Include Symbols
        </label>
      </div>
    </div>
  )
}
