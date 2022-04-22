import CommentDetail from './CommentDetails'
import ApprovalCard from './ApprovalCard'
const App = () => {
	return (
		<div className='ui container comments'>
			<ApprovalCard>
				<CommentDetail author='Sam' timeAgo='toaday at 7:00 PM' />
				</ApprovalCard>
			<CommentDetail author='Alex' timeAgo='toaday at 7:00 PM' />
			<CommentDetail author='Jane' timeAgo='toaday at 7:00 PM' />
		</div>
	)
}

export default App
