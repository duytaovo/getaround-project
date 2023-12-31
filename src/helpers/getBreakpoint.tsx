const getBreakpoint = (breakpoints: Array<Object>) => {
   const type = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
   return breakpoints.map((breakpoint, idx) => {
      return { [type[idx]]: breakpoint };
   });
};

export default getBreakpoint;

const getRandomColorWhiteAndMain = () => {
   const colors = ['white','#3699d3']
   const randomIndex = Math.floor(Math.random() * colors.length)
   return colors[randomIndex]
 }
 const getRandomColorBlackAndMain = () => {
  const colors = ['black','#3699d3']
  const randomIndex = Math.floor(Math.random() * colors.length)
  return colors[randomIndex]
}

export const changeColorWhiteAndMain =(arrContent:any | undefined)=>(
   arrContent?.map((word:any, index:any) => (
     <span key={index} style={{ color: getRandomColorWhiteAndMain() }}>
       {word}{' '}
     </span>
   ))
 ) 

 export const changeColorBlackAndMain =(arrContent:any | undefined)=>(
  arrContent?.map((word:any, index:number) => (
    <span key={index} style={{ color: getRandomColorBlackAndMain() }}>
      {word}{' '}
    </span>
  ))
) 