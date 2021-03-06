import faker from 'faker'

const CommentDetails = (props) => {
	return (
		<div className='comment'>
			<a href=''>
				<img alt='avatar' src={faker.image.image()} />
			</a>
			<div className='content'>
				<a href='/' className='author'>
					{props.author}
				</a>
				<div className='metadata'>
     <span className='date'>{props.timeAgo}</span>
				</div>
				<div className='text'>Nice Blog Post</div>
			</div>
		</div>
	)
}

export default CommentDetails
