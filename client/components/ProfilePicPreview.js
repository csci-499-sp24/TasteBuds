import React from 'react';

const ProfilePicPreview = ({ fileInputRef, profilePic, setProfilePic }) => {
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
    <div className="profile-pic-preview">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />
      <img
        src={profilePic || 'default_profile_pic_url'}
        alt="Profile Pic"
        onClick={() => fileInputRef.current && fileInputRef.current.click()}
      />
    </div>
  );
};

export default ProfilePicPreview;
