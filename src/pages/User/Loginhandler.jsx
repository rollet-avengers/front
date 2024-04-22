import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginHandeler = () => {
	const navigate = useNavigate();
	const back = 'https//k9bceeba41403a.user-app.krampoline.com';
	// const back = import.meta.env.VITE_BACK_REDIRECT_URI;
	// const back2 = 'k9bceeba41403a.user-app.krampoline.com/login/oauth2/code/kakao/'
	// const redirect_uri = 'https://k56733b335962a.user-app.krampoline.com/login/oauth2/callback/kakao';
	const redirect_uri = import.meta.env.VITE_FRONT_KAKAO_REDIRECT_URI;
	const code = new URL(window.location.href).searchParams.get("code");
	
// 인가코드 백으로 보내는 작업 하는곳
	useEffect(() => {
    const kakaoLogin = async () => {
			try {
				// 	https://k9bceeba41403a.user-app.krampoline.com/reqlogin/{인가코드}
				const res = await axios.get(`${back}/reqlogin/${code}`);
				localStorage.setItem("access_token", res.data.access_token);
				console.log(res);
				console.log("성공" + code);
				navigate("/code");
			} catch (error){
				console.error("Error occured", error);
				console.log(code);
				navigate("/");
				}
			};
		if(code) {
			kakaoLogin();
		}
	}, [code, navigate]);
	
  return (
    <div className="LoginHandeler">
      <div className="notice">
        <p>로그인 중입니다.</p>
        <p>잠시만 기다려주세요.</p>
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default LoginHandeler;