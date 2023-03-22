import { Page } from "../components/Page";

export function Home(){
  return(
    <Page>
      <div className="flex flex-row justify-between items-center gap-3 w-full max-w-[1200px] mx-auto">
        <div className="w-3/4 max-w-[75%] min-w-[75%] border-[1px] border-slate-300 min-h-full">
          Main
        </div>
        <div className="flex-1 border-[1px] border-slate-300 min-h-full">
          Aside
        </div>
      </div>
    </Page>
  )
}
