import { PriceSchedule, RequiredDeep } from 'ordercloud-javascript-sdk'
import { FunctionComponent } from 'react'

interface OcQuantityInputProps {
  controlId: string
  priceSchedule: RequiredDeep<PriceSchedule>
  label?: string
  disabled?: boolean
  quantity: number
  onChange: (quantity: number) => void
}

const OcQuantityInput: FunctionComponent<OcQuantityInputProps> = ({
  controlId,
  label = 'Quantity',
  quantity,
  onChange,
}) => {
  // const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   onChange(Number(e.target.value))
  // }

  // const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
  //   onChange(Number(e.target.value))
  // }

  return (
    <label htmlFor={controlId}>
      <span className="mr-4">{label}</span>
      {/* {priceSchedule.RestrictedQuantity ? (
        // eslint-disable-next-line
        <select id={controlId} disabled={disabled} value={quantity} onChange={handleSelectChange}>
          {priceSchedule.PriceBreaks.map((pb) => (
            <option key={pb.Quantity} value={pb.Quantity}>
              {pb.Quantity}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={controlId}
          disabled={disabled}
          type="number"
          min={priceSchedule.MinQuantity}
          max={priceSchedule.MaxQuantity}
          step={1}
          value={quantity}
          onChange={handleInputChange}
        />
      )} */}
      {quantity > 0 && (
        <button className="px-2 py-1 bg-yellow-200 mx-1" onClick={() => onChange(quantity - 1)}>
          -
        </button>
      )}
      {quantity}
      <button className="px-2 py-1 bg-yellow-200 mx-1" onClick={() => onChange(quantity + 1)}>
        +
      </button>
    </label>
  )
}

export default OcQuantityInput
