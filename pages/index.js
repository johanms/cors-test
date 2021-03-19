import { useEffect, useState } from "react";

const API = "https://8vhxxq7jdg.execute-api.eu-west-1.amazonaws.com";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(API, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return <>Message: {message}</>;
}
