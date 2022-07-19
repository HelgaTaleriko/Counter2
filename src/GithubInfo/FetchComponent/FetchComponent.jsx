import React, { useEffect, useState } from "react";

export const FetchComponent = (props) => {
  const { username } = props;
  const [info, setInfo] = useState();
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.text())
      .then((result) => setInfo(result));
  }, [username, setInfo]);
  return (
    <div>
      <button>Отправить</button>
      {username}
      <div>{info}</div>
    </div>
  );
};
