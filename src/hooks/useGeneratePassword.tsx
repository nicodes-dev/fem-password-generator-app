import { useCallback, useEffect } from 'react'
import {
  REDUCER_ACTION_TYPE,
  useGeneratePasswordContext,
} from '../context/GeneratePasswordContext'
import { ListsKey } from '../context/GeneratePasswordContext'
import { lowercase, numbers, symbols, uppercase } from '../data'

export default function useGeneratePassword(
  includeLowercase?: boolean,
  includeUppercase?: boolean,
  includeNumbers?: boolean,
  includeSymbols?: boolean,
  range?: number
) {
  const {
    state: { regex },
    dispatch,
  } = useGeneratePasswordContext()

  const includeOnlyLc = useCallback(
    () =>
      includeLowercase &&
      !includeUppercase &&
      !includeNumbers &&
      !includeSymbols,
    [includeLowercase, includeNumbers, includeSymbols, includeUppercase]
  )

  const includeOnlyUc = useCallback(
    () =>
      !includeLowercase &&
      includeUppercase &&
      !includeNumbers &&
      !includeSymbols,
    [includeLowercase, includeNumbers, includeSymbols, includeUppercase]
  )

  const includeOnlyNums = useCallback(
    () =>
      !includeLowercase &&
      !includeUppercase &&
      includeNumbers &&
      !includeSymbols,
    [includeLowercase, includeNumbers, includeSymbols, includeUppercase]
  )

  const includeOnlySymbols = useCallback(
    () =>
      !includeLowercase &&
      !includeUppercase &&
      !includeNumbers &&
      includeSymbols,
    [includeLowercase, includeNumbers, includeSymbols, includeUppercase]
  )

  const includeLcAndUc = useCallback(
    () =>
      includeLowercase &&
      includeUppercase &&
      !includeNumbers &&
      !includeSymbols,
    [includeLowercase, includeNumbers, includeSymbols, includeUppercase]
  )

  const includeLcAndNums = useCallback(
    () =>
      includeLowercase &&
      !includeUppercase &&
      includeNumbers &&
      !includeSymbols,
    [includeLowercase, includeNumbers, includeSymbols, includeUppercase]
  )

  const includeLcAndSymbols = useCallback(
    () =>
      includeLowercase &&
      !includeUppercase &&
      !includeNumbers &&
      includeSymbols,
    [includeLowercase, includeNumbers, includeSymbols, includeUppercase]
  )

  const includeUcAndSymbols = useCallback(
    () =>
      !includeLowercase &&
      includeUppercase &&
      !includeNumbers &&
      includeSymbols,
    [includeLowercase, includeNumbers, includeSymbols, includeUppercase]
  )

  const includeUcAndNums = useCallback(
    () =>
      !includeLowercase &&
      includeUppercase &&
      includeNumbers &&
      !includeSymbols,
    [includeLowercase, includeNumbers, includeSymbols, includeUppercase]
  )

  const includeSymbolsAndNums = useCallback(
    () =>
      !includeLowercase &&
      !includeUppercase &&
      includeNumbers &&
      includeSymbols,
    [includeLowercase, includeNumbers, includeSymbols, includeUppercase]
  )

  const includeLcUcAndNums = useCallback(
    () =>
      includeLowercase && includeUppercase && includeNumbers && !includeSymbols,
    [includeLowercase, includeNumbers, includeSymbols, includeUppercase]
  )

  const includeLcUcAndSymbols = useCallback(
    () =>
      includeLowercase && includeUppercase && !includeNumbers && includeSymbols,
    [includeLowercase, includeNumbers, includeSymbols, includeUppercase]
  )

  const includeUcNumsAndSymbols = useCallback(
    () =>
      !includeLowercase && includeUppercase && includeNumbers && includeSymbols,
    [includeLowercase, includeNumbers, includeSymbols, includeUppercase]
  )

  const includeAll = useCallback(
    () =>
      includeLowercase && includeUppercase && includeNumbers && includeSymbols,
    [includeLowercase, includeNumbers, includeSymbols, includeUppercase]
  )

  const includeLcNumsAndSymbols = useCallback(
    () =>
      includeLowercase && !includeUppercase && includeNumbers && includeSymbols,
    [includeLowercase, includeNumbers, includeSymbols, includeUppercase]
  )

  useEffect(() => {
    if (includeOnlyLc())
      return dispatch({ type: REDUCER_ACTION_TYPE.LOWERCASE })
    else if (includeOnlyUc())
      return dispatch({ type: REDUCER_ACTION_TYPE.UPPERCASE })
    else if (includeOnlyNums())
      return dispatch({ type: REDUCER_ACTION_TYPE.NUMBERS })
    else if (includeOnlySymbols())
      return dispatch({ type: REDUCER_ACTION_TYPE.SYMBOLS })
    else if (includeLcAndUc())
      return dispatch({ type: REDUCER_ACTION_TYPE.LOWERCASE_UPPERCASE })
    else if (includeLcAndNums())
      return dispatch({ type: REDUCER_ACTION_TYPE.LOWERCASE_NUMBERS })
    else if (includeLcAndSymbols())
      return dispatch({ type: REDUCER_ACTION_TYPE.LOWERCASE_SYMBOLS })
    else if (includeUcAndSymbols())
      return dispatch({ type: REDUCER_ACTION_TYPE.UPPERCASE_SYMBOLS })
    else if (includeUcAndNums())
      return dispatch({ type: REDUCER_ACTION_TYPE.UPPERCASE_NUMBERS })
    else if (includeSymbolsAndNums())
      return dispatch({ type: REDUCER_ACTION_TYPE.NUMBERS_SYMBOLS })
    else if (includeLcUcAndNums())
      return dispatch({ type: REDUCER_ACTION_TYPE.LC_UC_NUMS })
    else if (includeLcUcAndSymbols())
      return dispatch({ type: REDUCER_ACTION_TYPE.LC_UC_SYMBOLS })
    else if (includeLcNumsAndSymbols())
      return dispatch({ type: REDUCER_ACTION_TYPE.LC_NUMS_SYMBOLS })
    else if (includeUcNumsAndSymbols())
      return dispatch({ type: REDUCER_ACTION_TYPE.UC_NUMS_SYMBOLS })
    else if (includeAll())
      return dispatch({ type: REDUCER_ACTION_TYPE.INCLUDE_ALL })
    else if (
      !includeLowercase &&
      !includeUppercase &&
      !includeNumbers &&
      !includeSymbols
    )
      return dispatch({ type: REDUCER_ACTION_TYPE.RESET_VALUE })

    return dispatch({
      type: REDUCER_ACTION_TYPE.SET_ERROR,
      payload: 'MAY MALI',
    })
  }, [
    dispatch,
    range,
    includeLowercase,
    includeNumbers,
    includeUppercase,
    includeSymbols,
    includeLcUcAndSymbols,
    includeOnlyLc,
    includeOnlyNums,
    includeOnlySymbols,
    includeOnlyUc,
    includeSymbolsAndNums,
    includeUcAndNums,
    includeUcAndSymbols,
    includeUcNumsAndSymbols,
    includeAll,
    includeLcAndNums,
    includeLcAndSymbols,
    includeLcAndUc,
    includeLcUcAndNums,
    includeLcNumsAndSymbols,
  ])

  const handleGeneratePassword = (list: ListsKey | string[], range: number) => {
    let listCopy = []

    if (Array.isArray(list) && list.length !== 0) {
      listCopy = [...list]

      const newList: string[] = []

      for (let x = 0; x < range; x++) {
        const idx = Math.floor(Math.random() * (listCopy.length - 1)) + 1

        newList.push(listCopy[idx])
      }

      dispatch({
        type: REDUCER_ACTION_TYPE.SET_PASSWORD,
        payload: newList.join(''),
      })
      dispatch({ type: REDUCER_ACTION_TYPE.CLEAR_ERROR })
      return
    }

    const mappedList = Object.keys(list).flatMap(key => {
      let newList: string[] = []

      if (key === 'uppercase') {
        newList = [...newList, ...uppercase]
      }
      if (key === 'lowercase') {
        newList = [...newList, ...lowercase]
      }
      if (key === 'numbers') {
        newList = [...newList, ...numbers]
      }
      if (key === 'symbols') {
        newList = [...newList, ...symbols]
      }
      return newList
    })

    const newList: string[] = []
    for (let x = 0; x < range; x++) {
      const idx = Math.floor(Math.random() * (mappedList.length - 1)) + 1

      newList.push(mappedList[idx])
    }

    if (regex) {
      regex.test(newList.join(''))
        ? dispatch({
            type: REDUCER_ACTION_TYPE.SET_PASSWORD,
            payload: newList.join(''),
          })
        : handleGeneratePassword(list, range)
    }
  }

  const calculateStrengthMeter = (range: number) => {
    if (includeOnlyLc() || includeOnlyUc()) {
      if (range > 15) return dispatch({ type: REDUCER_ACTION_TYPE.SET_STRONG })
      if (range <= 15 && range >= 12)
        return dispatch({ type: REDUCER_ACTION_TYPE.SET_MEDIUM })
      if (range < 12 && range > 7)
        return dispatch({ type: REDUCER_ACTION_TYPE.SET_WEAK })

      return dispatch({ type: REDUCER_ACTION_TYPE.SET_TOO_WEAK })
    }

    if (includeOnlyNums() || includeOnlySymbols()) {
      if (range > 13) return dispatch({ type: REDUCER_ACTION_TYPE.SET_MEDIUM })
      if (range <= 13 && range >= 8)
        return dispatch({ type: REDUCER_ACTION_TYPE.SET_WEAK })

      return dispatch({ type: REDUCER_ACTION_TYPE.SET_TOO_WEAK })
    }

    if (includeLcAndUc()) {
      if (range > 13) return dispatch({ type: REDUCER_ACTION_TYPE.SET_STRONG })

      if (range <= 13 && range >= 10)
        return dispatch({ type: REDUCER_ACTION_TYPE.SET_MEDIUM })
      if (range < 10 && range > 6)
        return dispatch({ type: REDUCER_ACTION_TYPE.SET_WEAK })

      return dispatch({ type: REDUCER_ACTION_TYPE.SET_TOO_WEAK })
    }

    if (includeOnlyNums() || includeOnlySymbols()) {
      if (range > 13) return dispatch({ type: REDUCER_ACTION_TYPE.SET_MEDIUM })

      if (range <= 13 && range >= 8)
        return dispatch({ type: REDUCER_ACTION_TYPE.SET_WEAK })

      return dispatch({ type: REDUCER_ACTION_TYPE.SET_TOO_WEAK })
    }

    if (includeLcNumsAndSymbols()) {
      if (range > 15) return dispatch({ type: REDUCER_ACTION_TYPE.SET_STRONG })

      if (range <= 15 && range >= 11)
        return dispatch({ type: REDUCER_ACTION_TYPE.SET_MEDIUM })

      if (range < 11 && range > 6)
        return dispatch({ type: REDUCER_ACTION_TYPE.SET_WEAK })

      return dispatch({ type: REDUCER_ACTION_TYPE.SET_TOO_WEAK })
    }

    if (includeLcUcAndNums() || includeLcUcAndSymbols()) {
      if (range > 13) return dispatch({ type: REDUCER_ACTION_TYPE.SET_STRONG })

      if (range >= 10 && range <= 13)
        return dispatch({ type: REDUCER_ACTION_TYPE.SET_MEDIUM })

      if (range >= 6 && range <= 9)
        return dispatch({ type: REDUCER_ACTION_TYPE.SET_WEAK })

      return dispatch({ type: REDUCER_ACTION_TYPE.SET_TOO_WEAK })
    }

    if (includeLcNumsAndSymbols() || includeUcNumsAndSymbols()) {
      if (range > 14) return dispatch({ type: REDUCER_ACTION_TYPE.SET_STRONG })

      if (range <= 15 && range >= 12)
        return dispatch({ type: REDUCER_ACTION_TYPE.SET_MEDIUM })

      if (range < 11 && range > 6)
        return dispatch({ type: REDUCER_ACTION_TYPE.SET_WEAK })

      return dispatch({ type: REDUCER_ACTION_TYPE.SET_TOO_WEAK })
    }

    if (includeAll()) {
      if (range > 12) {
        return dispatch({ type: REDUCER_ACTION_TYPE.SET_STRONG })
      }
      if (range <= 12 && range >= 9) {
        return dispatch({ type: REDUCER_ACTION_TYPE.SET_MEDIUM })
      }
      return dispatch({ type: REDUCER_ACTION_TYPE.SET_WEAK })
    }
  }

  return { handleGeneratePassword, calculateStrengthMeter }
}
