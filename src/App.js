import React from 'react'

class App extends React.Component{
  render(){
    let listNama = ['ilman','teguh','prasetya']
    let nameList = listNama.map((nama,index)=><h2 key={index}>{nama}</h2>)
    return(
      <div className='App'>
        {nameList}
      </div>
    )
  }
}
export default App