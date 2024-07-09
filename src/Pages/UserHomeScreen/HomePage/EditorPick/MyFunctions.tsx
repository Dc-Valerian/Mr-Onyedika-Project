// export const formatMoney = (x: number): string => {
//     return roundTo2(x)
//       .toFixed(2)
//       .toString()
//       .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//   }

export const formatMoney = (x: number): string => {
    return x
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  