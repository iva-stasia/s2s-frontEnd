import { useState } from 'react'

const useAccordion = () => {
  const [activeItemId, setActiveItemId] = useState(null)
  const changeAccordion = (id) =>
    activeItemId === id ? setActiveItemId(null) : setActiveItemId(id)

  return { activeItemId, changeAccordion }
}

export default useAccordion
