import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function GitHubUsers({ usernames }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getUsers(names) {
    let jobs = [];

    for (let name of names) {
      let job = fetch(`https://api.github.com/users/${name}`).then(
        (successResponse) => {
          if (successResponse.status !== 200) {
            return null;
          } else {
            return successResponse.json();
          }
        },
        (failResponse) => {
          return null;
        }
      );
      jobs.push(job);
    }

    let results = await Promise.all(jobs);
    return results;
  }

  useEffect(() => {
    async function fetchUsers() {
      const fetchedUsers = await getUsers(usernames);
      setUsers(fetchedUsers);
      setLoading(false);
    }
    
    fetchUsers();
  }, [usernames]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (

    <div>
      <h1>GitHub Users</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user ? (
              <>
                <p>{user.login}</p>
                <img src={user.avatar_url} alt={`${user.login}'s avatar`} width={50} height={50} />
              </>
            ) : (
              <p>User not found</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
