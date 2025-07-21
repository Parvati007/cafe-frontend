export default function Header() {
  const { user } = useContext(AppContext);

  return (
    <div className="header-container">
      <h1 className="header-title">MERN Frontend</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart">MyCart</Link>
        <Link to="/order">MyOrder</Link>
        {user?.role === "admin" && <Link to="/admin">Admin</Link>}
        {user?.token ? (
          <Link to="/profile">Profile</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
}

   