export const getPrecalculatedWidths = (
  element: HTMLElement,
  moreBtnId: string,
  gap: number
) => {
  const { width: containerWidth, left: containerLeft } =
    element.getBoundingClientRect()
  const children = Array.from(element.childNodes) as HTMLElement[]

  let moreWidth = 0
  const itemsWidths = children.reduce<number[]>((result, node) => {
    if (node.getAttribute('id') === moreBtnId) {
      moreWidth = node.getBoundingClientRect().width
      return result
    }

    const rect = node.getBoundingClientRect()
    const width = rect.width + (rect.left - containerLeft) + gap

    return [...result, width]
  }, [])

  return {
    moreWidth,
    itemsWidths,
    containerWidth,
  }
}
