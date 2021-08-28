import { createContext, useContext, useState, useMemo, useEffect } from 'react'
import { pricePerItem } from '../constants'
// @ts-ignore
const OrderDetails = createContext()

//  create custom hook to check were inside of provider
export const useOrderDetails = () => {
  const context = useContext(OrderDetails)

  if (!context) {
    throw new Error('useOrderDetails must be used within OrderDetailsProvider')
  }
  return context
}

const caculateSubtotal = (optionType: string, optionCounts: any) => {
  let optionCount = 0
  for (const count of optionCounts[optionType].values()) {
    optionCount += count
  }

  interface Prices {
    scoops: number
    toppings: number
  }

  return optionCount * pricePerItem[optionType]
}

export const OrderDetailsProvider = (props: any) => {
  const [optionCounts, setOptionCounts] = useState<any>({
    scoops: new Map(),
    toppings: new Map(),
  })

  const [totals, setTotals] = useState({
    scoops: 0,
    toppings: 0,
    grandTotal: 0,
  })

  useEffect(() => {
    const scoopsSubtotal = caculateSubtotal('scoops', optionCounts)
    const toppingsSubtotal = caculateSubtotal('toppings', optionCounts)
    const grandTotal = scoopsSubtotal + toppingsSubtotal

    setTotals({ scoops: scoopsSubtotal, toppings: toppingsSubtotal, grandTotal })
  }, [optionCounts])

  const value = useMemo(() => {
    const updateItemCount = (itemName: string, newItemCount: string, optionType: string) => {
      const newOptionCounts = { ...optionCounts }
      // update option count for this item with new value
      const optionCountsMap = optionCounts[optionType]
      optionCountsMap.set(itemName, parseInt(newItemCount))
      setOptionCounts(newOptionCounts)
    }
    // getter: obj containing option counts for scoops and toppings and subtotal and totals
    //  setter:  updateOtion Count

    return [{ ...optionCounts, totals }, updateItemCount]
  }, [optionCounts, totals])
  return <OrderDetails.Provider value={value} {...props} />
}
