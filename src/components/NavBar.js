import React, {useContext} from 'react'
import BookContext from '../contexts/BookContext'

const NavBar = () => {
	
	const {books} = useContext(BookContext)
	console.log(books, " ∆")

	return (
		<div className="navbar">
			<h1>Reading List</h1>
			{/*<p>Currently you have : {books.length} books...</p>*/}
		</div>
	)
}

export default NavBar