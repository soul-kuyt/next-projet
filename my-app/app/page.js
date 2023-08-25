import About from "@/components/about/About"
import Plan from "@/components/plan/Plan"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between ">
      <h1 className='text-3xl'> Acceuil </h1>
      <About/>
      <Plan/>
    </main>
  )
}
