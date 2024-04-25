import { Link, useNavigate } from "react-router-dom";
import Mail from '../../../assets/mail.png';
import axios from "axios";

const SaveCodeLayout = ({ code }) => {
	const navigate = useNavigate();
  const back = 'https://k9bceeba41403a.user-app.krampoline.com';
	
	if (!code || code.length === 0) {
    return <div>작성한 게시글이 없습니다.</div>;
  }
	
	const startChating = async () => {
    const my_member_id = localStorage.getItem('member_id');
    const chat_member_id = code.memberId;
    const chat_message = '대화을 시작합니다.';
    
    try {
      const res = await axios.post(`${back}/chat/start`, {
        sender: my_member_id,
        reciver: chat_member_id,
        message: chat_message,
      });
      console.log('대화 시작');
      navigate(`${back}/chat/start?memberId=${my_member_id}`);
    } catch (error) {
      alert('대화 요청을 실패하였습니다.');
    }
  };

  return (
    <div className='w-full h-[100px] border border-[#d5d5d5]' >
      <div className="flex justify-between items-center" >
        <div>
            <div>
              <div className="flex p-2">
                <div className="p-2">
                  <p>답변자: {code.memberName}</p>
                </div>
                <button onClick={startChating} className="p-1 w-[40px] h-10 border border-custom-pink-1 text-[#474747] rounded bg-custom-pink-1 hover:bg-custom-pink-3 transition-colors duration-300">
                  <img className="w-[30px]" src={Mail} />
                </button>
              </div>
            <div className="ml-2 p-2">
              <p>작성시간: {code.createTime}</p>
            </div>
          </div>
        </div>
        <Link to={`/post/preview?postId=${code.postId}&replyId=${code.replyId}`} className="mr-2 p-2 h-10 border border-custom-pink-1 text-[#474747] rounded bg-custom-pink-1 hover:bg-custom-pink-3 transition-colors duration-300">
          미리보기
        </Link>
      </div>
    </div>
  );
};

export default SaveCodeLayout; 