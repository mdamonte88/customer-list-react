import React, { useState, useEffect } from "react"
import CustomerList from './CustomerList'
import List from '../List';

function SearchCustomer() {
  const [dataSearch, setDataSearch] = useState('')
  const [listFiltered, setListFiltered] = useState(List)

  useEffect(() => {
    filterRowsBySearch()
	}, [dataSearch])

  const filterRowsBySearch = () => {
    if (dataSearch === '') {
      setListFiltered(List)
      return
    }

    const rowsFiltered = listFiltered.filter((row, i) => {
      const name = row.name,
            age = row.age.toString(),
            location = row.location,
            gender = row.gender,
            income = row.income;

      return name.startsWith(dataSearch) || age.startsWith(dataSearch) || location.startsWith(dataSearch) 
        || gender.startsWith(dataSearch) || income.startsWith(dataSearch)
    })

    setListFiltered(rowsFiltered)
  }

  const handleInputSearch = (e) => {
    setDataSearch(e.target.value)
	}

  return (
    <>
    <div className='layout-row align-items-center justify-content-center mt-30'>
        <input type="text" className='large mx-20 w-20' data-testid='search-input' value={dataSearch} placeholder='Enter search term (Eg: Phil)' onChange={handleInputSearch} />
    </div>
    <CustomerList customers={listFiltered} />
    </>
  )
}

export default SearchCustomer