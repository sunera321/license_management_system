import React from 'react'
import ClientList from '../components/page/ControlPanel/ClientList'
import SearchBar from '../components/page/ControlPanel/searchBar'
const ControlPanel = () => {
  return (
      <div>
      <SearchBar/>
      <ClientList/>
    </div>
  )
}

export default ControlPanel