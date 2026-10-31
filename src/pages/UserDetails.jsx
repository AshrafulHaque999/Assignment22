import { useParams, Link } from 'react-router-dom';

function UserDetails() {

  const { id } = useParams();

  return (
    <div className="card">

      <h1>User Details</h1>

      <h2>Selected User ID: {id}</h2>

      <p>You are viewing user number {id}.</p>

      <Link to="/users">
        Back to Users
      </Link>

    </div>
  );
}

export default UserDetails;