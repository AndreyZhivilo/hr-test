export const getLastVisibleItem = ({
  itemsWidths,
  containerWidth,
  moreBtnWidth,
}: {
  itemsWidths: number[]
  containerWidth: number
  moreBtnWidth: number
}) => {
  if (!itemsWidths?.length) return 0

  if (itemsWidths[itemsWidths.length - 1] < containerWidth) {
    return itemsWidths.length - 1
  }

  const visibleItems = itemsWidths.filter((width) => width + moreBtnWidth < containerWidth)

  return visibleItems.length ? visibleItems.length - 1 : 0
}
