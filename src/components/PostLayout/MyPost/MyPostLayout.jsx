import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const MyPostLayout = ({post}) => {
	const navigate = useNavigate();

	if (!post || post.length === 0) {
		return <div className="post-container">게시글이 없습니다.</div>;
	}
	
	return (
		<div className="flex flex-col w-[270px] h-[350px] border border-custom-pink-1 p-2.5 rounded">
			<Link to={`/post/${post.postId}`}>
				<div className="w-full h-[200px]">
				<img className='w-full h-[200px]' src={`data:image/png;base64,${post.imgBase64}`} alt="사진" />
				</div>
				<div className="mt-2.5 mb-1 w-full h-fit-content">
					<p className="m-0 p-1 text-[#474747]">제목: {post.title}</p>
					<p className="m-0 p-1 text-[#474747]">날짜: {post.createdTime}</p>
				</div>
			</Link>
		</div>
	);
};
  
export default MyPostLayout;