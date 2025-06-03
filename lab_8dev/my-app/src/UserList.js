import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <strong>Lista użytkowników (pobrana z API):</strong>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} – {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
