import React from 'react'

export default function Text({ translation, original }) {
	return (
		<div className='word__text'>
			<div className='original'>
				{original}
			</div>
			<div className='translation'>
				{translation}
			</div>
		</div>
	)
}
