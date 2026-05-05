import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MarketPlace from './pages/MarketPlace'
import ListingDetails from './pages/ListingDetails'
import MyListings from './pages/MyListings'
import ManageListing from './pages/ManageListing'
import Messages from './pages/Messages'
import MyOrders from './pages/MyOrders'
import Loading from './pages/Loading'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/marketplace' element={<MarketPlace />} />
        <Route path='/my-listings' element={<MyListings />} />
        <Route path='/listing/:listingId' element={<ListingDetails />} />
        <Route path='/create-listing' element={<ManageListing />} />
       <Route path='/edit-listing/:listingId' element={<ManageListing />} />
       <Route path='/messages' element={<Messages />} />
      <Route path='/my-orders' element={<MyOrders />} />
      <Route path='/loading' element={<Loading />} />

      </Routes>
    </div>
  )
}

export default App