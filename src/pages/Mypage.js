import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyPage = () => {
  const [trainerInfo, setTrainerInfo] = useState({ //서버에서 가져온 트레이너 정보를 저장하는 state
    trainer_num: '',
    trainer_insta: '',
    trainer_intro: '',
    gym_name:'',
    gym_link:''
  });


// 서버에서 회원 정보를 받아오는 함수
  useEffect(() => {      
      axios.get('/trainer')
      .then(res=>setTrainerInfo(res.data))
      .catch(err=>console.log(err))
  },[])



  return (
    <div>
      <h1>My Page</h1>
        <p>고유 인식번호:{trainerInfo.trainer_num}</p>
        <p>아이디: {trainerInfo.user_id}</p>
        <p>이메일: {trainerInfo.email}</p>
        <p>생성일: {trainerInfo.trainer_created_at}</p>
        <p>프로필이미지: {trainerInfo.profile_image_url}</p>
        <p>트레이너 SNS: {trainerInfo.trainer_insta}</p>
        <p>자기소개: {trainerInfo.trainer_intro}</p>
        <p>헬스장이름:{trainerInfo. gym_name}</p>
        <p>헬스장위치:{trainerInfo. gym_link}</p>
    </div>
  );
};

export default MyPage;