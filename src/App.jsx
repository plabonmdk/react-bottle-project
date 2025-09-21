
import { Suspense } from 'react'
import './App.css'
import Bottles from './Components/Bottles/Bottles'




const bottlesPromise = fetch(`Bottles.json`).then(res => res.json())
// const bottlesPromise2 = fetch(`https://raw.githubusercontent.com/jhankarpHero/bottles-data/refs/heads/main/bottles.json`)
// .then(res => res.json())

function App() {
  
  // const bottles = [
  //   {id : 1, name : "pink nike bottle", price: 250, color: "pink"},
  //   {id : 2, name : "pink nike bottle", price: 280, color: "pink"},
  //   {id : 3, name : "pink nike bottle", price: 230, color: "pink"},
  //   {id : 4, name : "pink nike bottle", price: 200, color: "pink"},
  //   {id : 5, name : "pink nike bottle", price: 290, color: "pink"}
  // ]

  return (
    <>
      
      <h1>Buy Awesome Water Bottle</h1>
      
      <Suspense fallback={<h3>Bottles are loading.......</h3>}>
       <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </>
  )
}

export default App
