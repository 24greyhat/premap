
import { ToggleTheme } from "../ThemeProvider"




export const TopBar = () => {


  return (
    <div className='w-full flex flex-row justify-end p-4'>
      <ToggleTheme />
    </div>
  )
}
