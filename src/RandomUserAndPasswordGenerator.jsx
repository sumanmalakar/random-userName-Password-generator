import React, { useState } from 'react';

function RandomUserAndPasswordGenerator() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const generateRandomUsername = (length = 8) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let username = '';
    for (let i = 0; i < length; i++) {
      username += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return username;
  }

  const generateRandomPassword = (length = 12) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    let password = '';
    for (let i = 0; i < length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
  }

  const handleGenerateClick = () => {
    const newUsername = generateRandomUsername();
    const newPassword = generateRandomPassword();
    setUsername(newUsername);
    setPassword(newPassword);
  }

  return (
    <div>
      <button onClick={handleGenerateClick}>Generate</button>
      <div>
        <strong>Username:</strong> {username}
      </div>
      <div>
        <strong>Password:</strong> {password}
      </div>
    </div>
  );
}

export default RandomUserAndPasswordGenerator;
