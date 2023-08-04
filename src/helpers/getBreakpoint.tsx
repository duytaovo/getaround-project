const getBreakpoint = (breakpoints: Array<Object>) => {
   const type = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
   return breakpoints.map((breakpoint, idx) => {
      return { [type[idx]]: breakpoint };
   });
};

export default getBreakpoint;

const getRandomColor = () => {
   const colors = ['white','#3699d3']
   const randomIndex = Math.floor(Math.random() * colors.length)
   return colors[randomIndex]
 }

export const changeColor =(arrContent:string[] | undefined)=>(
   arrContent?.map((word, index) => (
     <span key={index} style={{ color: getRandomColor() }}>
       {word}{' '}
     </span>
   ))
 ) 