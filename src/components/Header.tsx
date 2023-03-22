export function Header(){
  return(
    <div className="min-h-20 h-20 max-h-20 w-full p-3 border-[1px] border-slate-500 ">
      <div className="flex flex-row justify-between items-center gap-2 w-full h-full max-w-[1200px] mx-auto">
        <div className="flex items-center px-2 border-[1px] border-slate-300 w-1/5 max-w-[20%] min-w-[20%] h-full">
          Logo
        </div>
        <div className="flex items-center px-2 border-[1px] border-slate-300 h-full flex-1">
          Nav
        </div>
        <div className="flex items-center px-2 border-[1px] border-slate-300 h-full w-1/6 max-w-[16%] min-w-[16%]">
          Nav 2
        </div>
      </div>
    </div>
  )
}
