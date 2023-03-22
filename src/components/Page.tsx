import { Footer } from "./Footer";
import { Header } from "./Header";

interface PageProps{
  children:JSX.Element,
}

export function Page({children}:PageProps){
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center">
      <Header />
      <div className="flex flex-1 p-3 w-full">
        {children}
      </div>
      <Footer />
    </div>
  )
}
