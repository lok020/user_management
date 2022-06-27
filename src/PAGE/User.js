import React, { useState } from 'react';
import { Button } from "react-bootstrap";

function User() {
  const [userList, setUserList] = useState([]);

  const FetchUser = () => {
    console.log("FETCHHCHHHH");
    console.log(userList);
  }

  return (
    <div className='user'>
      <div className='get-data-area'>
        <Button className="get-data-btn" onClick={FetchUser}>{"Get Data from AWS S3 Bucket"}</Button>
      </div>
    </div>
  )
}

export default User
