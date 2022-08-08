import React, { useEffect, useState } from "react";
import PrivateRoute from "../components/PrivateRoute";

export default function LoginPage() {
  const [myData, setMyData] = useState(null);

  useEffect(() => {
    const url = "https://frebi.willandskill.eu/api/v1/me";
    const token = localStorage.getItem("webb21-redo");

    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setMyData(data));
  }, []);

  return (
    <PrivateRoute>
      <h1>Hello World!</h1>
      {myData && (
        <>
          <p>
            <b>Email:</b> {myData.email}
          </p>
        </>
      )}
    </PrivateRoute>
  );
}
