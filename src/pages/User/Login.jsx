import kakaoLogin from "./../../assets/kakao_login_medium_wide.png";
const Login = () => {
  const CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID;
  const REDIRECT_URI = import.meta.env.VITE_FRONT_KAKAO_REDIRECT_URI;
  // const REDIRECT_URI = 'https://k56733b335962a.user-app.krampoline.com/login/oauth2/callback/kakao';
  const link = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;

  const loginHandler = () => {
    window.location.href = link;
  };

  return (
    <div className="w-1/2 min-h-96 absolute transform translate-x-[50%] translate-y-48">
      <p className="ml-[45%] text-2xl font-bold">Sign UP</p>
      <button
        type="button"
        onClick={loginHandler}
        className="w-1/2 h-12 p-0 mt-5 transform translate-x-1/2 translate-y-24 border-0"
      >
        <img src={kakaoLogin} className="w-full h-14 " />
      </button>
    </div>
  );
};

export default Login;
