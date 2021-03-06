import React, { useState } from "react";

function AddFriend(props) {
  const { onAddFriend } = props;
  const [friend1, setFriend1] = useState("");
  const [friend2, setFriend2] = useState("");
  return (
    <div>
      <label>Friend 1</label>
      <input value={friend1} onChange={e => setFriend1(e.target.value)} />
      <br />
      <br />
      <label>Friend 2</label>
      <input value={friend2} onChange={e => setFriend2(e.target.value)} />
      <br />
      <button onClick={() => onAddFriend(friend1, friend2)}>Add Friend</button>
    </div>
  );
}

export default AddFriend;
