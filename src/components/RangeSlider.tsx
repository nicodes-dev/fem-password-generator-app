import { ChangeEvent, Dispatch, useRef } from 'react'

type RangePropType = {
  range: number
  setRange: Dispatch<React.SetStateAction<number>>
}

export default function RangeSlider({ range, setRange }: RangePropType) {
  const rangeRef = useRef<HTMLInputElement>(null)

  const handleRangeSlider = (e: ChangeEvent<HTMLInputElement>) => {
    if (rangeRef.current) {
      const sliderValue = rangeRef.current.value
      const progress =
        (parseInt(sliderValue) / parseInt(rangeRef.current.max)) * 100

      rangeRef.current.style.background = `linear-gradient(to right, hsla(127, 100%, 82%, 1)  ${progress}%, hsla(248, 15%, 11%, 1) ${progress}%)`
      setRange(Number(e.target.value))
    }
  }

  return (
    <div className="grid grid-cols-2">
      <p className="text-normal md:text-body col-span-1 self-center">
        Character Length
      </p>
      <p className="text-heading-m md:text-heading-l text-accent-green text-right col-start-2">
        {range}
      </p>
      <input
        type="range"
        min="0"
        max="20"
        className="col-span-full mt-[18px] md:mt-[28px]  mb-[10px]"
        ref={rangeRef}
        value={range}
        onChange={handleRangeSlider}
      />
    </div>
  )
}
