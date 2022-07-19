import React, { useState } from "react";
import { UserInput } from "./UserInput";
import { FetchComponent } from "./FetchComponent";
export const GithubInfo = () => {
  const [username, setUsername] = useState("HelgaTaleriko");
  return (
    <div>
      <UserInput username={username} setUsername={setUsername} />
      <FetchComponent username={username} />
    </div>
  );
};
