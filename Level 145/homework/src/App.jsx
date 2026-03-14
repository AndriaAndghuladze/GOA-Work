export default function App(){

  let a = {
    color: 'red'
  }

  let b = {
    color: 'red'
  }


  let c = {
    color: 'red'
  }

  let d = {
    color: 'red'
  }

  let x = {
    color: 'red'
  }



  return(
    <div>

      <h1 className={{color: 'red'}}>inline</h1>
      <h1 className={{color: 'blue'}}>inline</h1>
      <h1 className={{color: 'yellow'}}>inline</h1>
      <h1 className={{color: 'green'}}>inline</h1>
      <h1 className={{color: 'purple'}}>inline</h1>

      <br />

      <h1 className={a}>object</h1>
      <h1 className={b}>object</h1>
      <h1 className={c}>object</h1>
      <h1 className={d}>object</h1>
      <h1 className={x}>object</h1>


    </div>
  )
}