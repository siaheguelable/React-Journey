function Nav() {

  const handleLogout = () => {
    // Implement your logout logic here
    localStorage.removeItem("token");
    window.location.href = "/login";
  }

  return (
    <nav style={{ backgroundColor: '#3B82F6' }}>  

      <ul style={{ display: 'flex', listStyleType: 'none', padding: 20, marginLeft: 10, gap: 20, justifyContent: 'space-between', alignItems: 'center', fontSize: '20px' }}>
        <li>Notes Manager</li>
        <li> <img src="path/to/your/image.jpg" alt="Description" /></li>
        <li><button onClick={handleLogout}>Logout</button></li>
      </ul>
    </nav>
  );

}
export default Nav;