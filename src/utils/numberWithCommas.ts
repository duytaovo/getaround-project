const numberWithCommas = (num: string): any => num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')

export default numberWithCommas
