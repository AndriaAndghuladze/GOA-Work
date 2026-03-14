export default function App(){

  let s = {
    color: 'blue'

  }

  return(
    <div>
      
      <h1 style={{ color: 'red', fontFamily: 'cursive' }}>Inline</h1>

      <br />
      <br />

      
      <h1 style={s}>Object</h1>
    </div>
  )
}