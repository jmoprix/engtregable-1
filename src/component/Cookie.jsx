import react from 'react'
const Cookie = ({data, back})=>{
    return (
      <div className='card' style={{ background: back }}>
        <h1>Your destiny is</h1>
        <ul>
          <p>Phrase: {data.phrase}</p>
          <p>Author: {data.author}</p>
        </ul>
       </div>
  )
}
export default Cookie