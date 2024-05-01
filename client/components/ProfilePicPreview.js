import React from 'react';
import styles from '/pages/users/UserProfile.module.css'; 

const ProfilePicPreview = ({ fileInputRef, profilePic, setProfilePic}) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePic(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles['profile-picture-container']} onClick={() => fileInputRef.current.click()}> 
      <img
        src={profilePic}
        alt="Profile Pic"
        className={styles['profile-pic']} 
        onClick={() => fileInputRef.current && fileInputRef.current.click()}
      />
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleImageChange}
        accept="image/*" 
      />
    </div>
  );
};

export default ProfilePicPreview;
