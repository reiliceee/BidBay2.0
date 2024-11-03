import './homepage.css';
import { useNavigate } from 'react-router-dom'; 

function App() {
  const navigate = useNavigate();
  const handleLogin =() => {
    navigate('/login');
  };
  
  return (
    <div className="Homepage">
      <div className="top-bar">
        <nav className="nav-left">
          <ul>
            <li><a href="/about" data-tooltip="BidBay is an innovative online auction platform connecting sellers and bidders worldwide. Experience real-time bidding, secure transactions, and a wide range of unique items up for sale.">About Us</a></li>
            <li><a href="/contact" data-tooltip="Reach out to our support team for assistance, inquiries, or feedback, BidBay@gmail.com">Contact</a></li>
            <li><a href="/store">Store List</a></li>
          </ul>
        </nav>
        <div className="nav-right">
          <button className="login-btn" onClick={handleLogin}>Continue to Login</button>
        </div>
      </div>

      <div className="welcome-container">
        <h1>Welcome User</h1>
      </div>
    </div>
  );
}

export default App;
