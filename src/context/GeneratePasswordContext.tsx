import {
  Dispatch,
  ReactElement,
  createContext,
  useContext,
  useReducer,
} from 'react'
import { lowercase, uppercase, numbers, symbols } from '../data'

export type Lists = 'lowercase' | 'uppercase' | 'numbers' | 'symbols'

export type ListsKey = {
  [K in Lists]?: string[]
}

type GeneratePasswordType<T> = {
  list: T | string[]
  regex: null | RegExp
  password: string
  error: string
  passwordStrength: string
}

const initState: GeneratePasswordType<ListsKey> = {
  list: [],
  regex: null,
  password: '',
  error: '',
  passwordStrength: '',
}

export type GeneratePasswordContextType<T> = {
  state: GeneratePasswordType<T>
  dispatch: Dispatch<ReducerAction>
}

const initGeneratePasswordState: GeneratePasswordContextType<ListsKey> = {
  state: initState,
  dispatch: () => {},
}
export const GeneratePasswordContext = createContext(initGeneratePasswordState)

type ReducerAction = {
  type: string
  payload?: string
}

export const REDUCER_ACTION_TYPE = {
  LOWERCASE: 'LOWERCASE',
  UPPERCASE: 'UPPERCASE',
  NUMBERS: 'NUMBERS',
  SYMBOLS: 'SYMBOLS',
  LOWERCASE_UPPERCASE: 'LOWERCASE_UPPERCASE',
  LOWERCASE_NUMBERS: 'LOWERCASE_NUMBERS',
  LOWERCASE_SYMBOLS: 'LOWERCASE_SYMBOLS',
  UPPERCASE_SYMBOLS: 'UPPERCASE_SYMBOLS',
  UPPERCASE_NUMBERS: 'UPPERCASE_NUMBERS',
  NUMBERS_SYMBOLS: 'NUMBERS_SYMBOLS',
  LC_UC_NUMS: 'LC_UC_NUMS',
  LC_UC_SYMBOLS: 'LC_UC_SYMBOLS',
  LC_NUMS_SYMBOLS: 'LC_NUMS_SYMBOLS',
  UC_NUMS_SYMBOLS: 'UC_NUMS_SYMBOLS',
  INCLUDE_ALL: 'INCLUDE_ALL',
  SET_STRONG: 'SET_STRONG',
  SET_MEDIUM: 'SET_MEDIUM',
  SET_WEAK: 'SET_WEAK',
  SET_TOO_WEAK: 'SET_TOO_WEAK',
  RESET_VALUE: 'RESET_VALUE',
  SET_ERROR: 'SET_ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR',
  SET_PASSWORD: 'SET_PASSWORD',
}
export type ReducerActionType = typeof REDUCER_ACTION_TYPE

const reducer = (
  state: GeneratePasswordType<ListsKey>,
  action: ReducerAction
) => {
  switch (action.type) {
    case 'UPPERCASE': {
      return { ...state, regex: /^[A-Z]+$/g, list: [...uppercase] }
    }
    case 'LOWERCASE': {
      return { ...state, regex: /^[a-z]+$/g, list: [...lowercase] }
    }
    case REDUCER_ACTION_TYPE.NUMBERS: {
      return { ...state, regex: /^[\d]+$/g, list: [...numbers] }
    }
    case REDUCER_ACTION_TYPE.SYMBOLS: {
      return { ...state, regex: /^[-+_!@#$%^&*.,?()]+$/g, list: [...symbols] }
    }
    case REDUCER_ACTION_TYPE.LOWERCASE_UPPERCASE: {
      return {
        ...state,
        regex: /^(?=.*[a-z])(?=.*[A-Z])(?!.*\d)(?!.*[-+_!@#$%^&*.,?()]).+$/g,
        list: {
          lowercase,
          uppercase,
        },
      }
    }
    case REDUCER_ACTION_TYPE.LOWERCASE_NUMBERS: {
      return {
        ...state,
        regex: /^(?=.*[a-z])(?=.*[\d])(?!.*[A-Z])(?!.*[-+_!@#$%^&*.,?()]).+$/g,
        list: {
          lowercase,
          numbers,
        },
      }
    }
    case REDUCER_ACTION_TYPE.LOWERCASE_SYMBOLS: {
      return {
        ...state,
        regex: /^(?=.*[a-z])(?!.*[\d])(?!.*[A-Z])(?=.*[-+_!@#$%^&*.,?()]).+$/g,
        list: {
          lowercase,
          symbols,
        },
      }
    }
    case REDUCER_ACTION_TYPE.UPPERCASE_SYMBOLS: {
      return {
        ...state,
        regex: /^(?!.*[a-z])(?!.*[\d])(?=.*[A-Z])(?=.*[-+_!@#$%^&*.,?()]).+$/g,
        list: {
          symbols,
          uppercase,
        },
      }
    }
    case REDUCER_ACTION_TYPE.UPPERCASE_NUMBERS: {
      return {
        ...state,
        regex: /^(?!.*[a-z])(?=.*[\d])(?=.*[A-Z])(?!.*[-+_!@#$%^&*.,?()]).+$/g,
        list: {
          numbers,
          uppercase,
        },
      }
    }
    case REDUCER_ACTION_TYPE.NUMBERS_SYMBOLS: {
      return {
        ...state,
        regex: /^(?!.*[a-z])(?=.*[\d])(?!.*[A-Z])(?=.*[-+_!@#$%^&*.,?()]).+$/g,
        list: {
          symbols,
          numbers,
        },
      }
    }
    case REDUCER_ACTION_TYPE.LC_UC_NUMS: {
      return {
        ...state,
        regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*[-+_!@#$%^&*.,?()]).+$/g,
        list: {
          lowercase,
          uppercase,
          numbers,
        },
      }
    }
    case REDUCER_ACTION_TYPE.LC_UC_SYMBOLS: {
      return {
        ...state,
        regex: /^(?=.*[a-z])(?=.*[A-Z])(?!.*\d)(?=.*[-+_!@#$%^&*.,?()]).+$/g,
        list: {
          lowercase,
          uppercase,
          symbols,
        },
      }
    }
    case REDUCER_ACTION_TYPE.LC_NUMS_SYMBOLS: {
      return {
        ...state,
        regex: /^(?=.*[a-z])(?!.*[A-Z])(?=.*\d)(?=.*[-+_!@#$%^&*.,?()]).+$/g,
        list: {
          lowercase,
          numbers,
          symbols,
        },
      }
    }
    case REDUCER_ACTION_TYPE.UC_NUMS_SYMBOLS: {
      return {
        ...state,
        regex: /^(?!.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-+_!@#$%^&*.,?()]).+$/g,
        list: {
          numbers,
          uppercase,
          symbols,
        },
      }
    }
    case REDUCER_ACTION_TYPE.INCLUDE_ALL: {
      return {
        ...state,
        regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-+_!@#$%^&*.,?()]).+$/g,
        list: {
          lowercase,
          uppercase,
          numbers,
          symbols,
        },
      }
    }
    case REDUCER_ACTION_TYPE.SET_STRONG: {
      return { ...state, passwordStrength: 'strong' }
    }
    case REDUCER_ACTION_TYPE.SET_MEDIUM: {
      return { ...state, passwordStrength: 'medium' }
    }
    case REDUCER_ACTION_TYPE.SET_WEAK: {
      return { ...state, passwordStrength: 'weak' }
    }
    case REDUCER_ACTION_TYPE.SET_TOO_WEAK: {
      return { ...state, passwordStrength: 'too weak' }
    }

    case REDUCER_ACTION_TYPE.RESET_VALUE: {
      return {
        ...state,
        passwordStrength: '',
        password: '',
        error: '',
        regex: null,
        list: [],
      }
    }
    case REDUCER_ACTION_TYPE.SET_ERROR: {
      if (action.payload) {
        return {
          ...state,
          passwordStrength: '',
          password: '',
          list: [],
          regex: null,
          error: action.payload,
        }
      }

      throw new Error('invalid action type')
    }
    case REDUCER_ACTION_TYPE.CLEAR_ERROR: {
      return { ...state, error: '' }
    }

    case REDUCER_ACTION_TYPE.SET_PASSWORD: {
      if (action.payload)
        return { ...state, error: '', password: action.payload }

      throw new Error('invalid action type')
    }

    default:
      throw new Error('invalid action type')
  }
}

type ChildrenType = {
  children?: ReactElement | ReactElement[]
}

export const GeneratePasswordProvider = ({
  children,
}: ChildrenType): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initState)

  return (
    <GeneratePasswordContext.Provider value={{ state, dispatch }}>
      {children}
    </GeneratePasswordContext.Provider>
  )
}

export const useGeneratePasswordContext = () => {
  return useContext(GeneratePasswordContext)
}
