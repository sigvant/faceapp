import React from 'react';
import brain from './showputer.png';
import './Logo.css'

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<div> 
				<img alt='logo' src={brain} style={{ height:150, width: 150}}/>
			</div>
		</div>
	
	)
}

export default Logo;