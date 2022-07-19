import React from "react";
export const UserInput = (props) => {
  const { username, setUsername } = props;
  const handleChange = (event) => {
    setUsername(event.target.value);
  };
  return (
    <div>
      <h2>Введите имя пользователя</h2>
      <input value={username} onChange={handleChange} />
    </div>
  );
};
