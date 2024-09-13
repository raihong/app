import React, { useState, useEffect } from 'react';
import './css/Mypage.css'; // 별도 CSS 파일 추가

const Mypage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  useEffect(() => {
    // 페이지가 로드될 때, API를 통해 데이터베이스에서 사용자 정보를 가져옴
    fetch('http://localhost:4000/api/profile')
      .then((response) => response.json())
      .then((data) => {
        setName(data.name);
        setEmail(data.email);
        setProfilePicture(data.profilePicture);
      });
  }, []);

  // 이미지 파일 선택 시 처리
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
    }
  };

  // 저장 버튼 클릭 시 API로 데이터 전송
  const handleSave = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('profilePicture', profilePicture);

    fetch('http://localhost:4000/api/profile', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        alert('Profile updated successfully!');
      });
  };

  return (
    <div className="profile-container">
      <h1>Profile Page</h1>
      <div className="profile-picture">
        {profilePicture ? (
          <img src={profilePicture} alt="Profile" />
        ) : (
          <div className="default-picture">No Image</div>
        )}
      </div>
      <input type="file" onChange={handleImageChange} />
      <div className="profile-info">
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default Mypage;
