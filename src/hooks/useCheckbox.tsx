type CheckboxPropType = {
  includeLowercase: boolean
  includeUppercase: boolean
  includeNumbers: boolean
  includeSymbols: boolean
}

export default function useCheckbox({
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols,
}: CheckboxPropType) {
  const onlyLowercase = (): boolean =>
    includeLowercase && !includeUppercase && !includeNumbers && !includeSymbols

  const onlyUppercase = (): boolean =>
    includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols

  const onlyNumbers = (): boolean =>
    includeNumbers && !includeUppercase && !includeLowercase && !includeSymbols

  const onlySymbols = (): boolean =>
    includeSymbols && !includeNumbers && !includeUppercase && !includeLowercase

  const lowercaseAndUppercase = (): boolean =>
    includeUppercase && includeLowercase && !includeSymbols && !includeNumbers

  const lowercaseAndNumbers = (): boolean =>
    includeLowercase && includeNumbers && !includeUppercase && !includeSymbols

  const lowercaseAndSymbols = (): boolean =>
    includeLowercase && includeSymbols && !includeNumbers && !includeUppercase

  const uppercaseAndNumbers = (): boolean =>
    includeNumbers && includeUppercase && !includeLowercase && !includeSymbols

  const uppercaseAndSymbols = (): boolean =>
    includeUppercase && includeSymbols && !includeLowercase && !includeNumbers

  const numbersAndSymbols = (): boolean =>
    includeSymbols && includeNumbers && !includeUppercase && !includeLowercase

  const lowercaseUppercaseAndNumbers = (): boolean =>
    includeNumbers && includeUppercase && includeLowercase && !includeSymbols

  const lowercaseUppercaseAndSmybols = (): boolean =>
    includeUppercase && includeLowercase && includeSymbols && !includeNumbers

  const uppercaseNumbersAndSymbols = (): boolean =>
    includeNumbers && includeUppercase && includeSymbols && !includeLowercase

  const numbersLowercaseAndSymbols = (): boolean =>
    includeNumbers && includeSymbols && includeLowercase && !includeUppercase

  return {
    onlyLowercase,
    onlyUppercase,
    onlyNumbers,
    onlySymbols,
    lowercaseAndUppercase,
    lowercaseAndNumbers,
    lowercaseAndSymbols,
    uppercaseAndNumbers,
    uppercaseAndSymbols,
    numbersAndSymbols,
    lowercaseUppercaseAndNumbers,
    lowercaseUppercaseAndSmybols,
    uppercaseNumbersAndSymbols,
    numbersLowercaseAndSymbols,
  }
}
