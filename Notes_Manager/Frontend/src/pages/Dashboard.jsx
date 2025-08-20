import Nav from "../components/Nav";
import Main from "../components/Main";

function Dashboard() {
  return (
    <div>
      <Nav />
      <h2 style={{ textAlign: 'center', margin: '20px 0' }}>Dashboard</h2>
        <p style={{ textAlign: 'center', margin: '20px 0' }}>Welcome to your notes manager dashboard!</p>
        {/* Additional dashboard content can go here */}
        <p style={{ textAlign: 'center', margin: '20px 0' }}>Here you can manage your notes, view recent activity, and more.</p>
        {/* You can add components for displaying notes, statistics, etc. */}
        <Main />

    </div>
    
  );
}

export default Dashboard;
