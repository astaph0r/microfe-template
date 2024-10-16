import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Container Home</h2>
      <div style={{ display: 'flex', gap: '10px' }}>
        {/* Button 1 */}
        <Link to="/app1/route1">
          <button style={{ padding: '10px 20px' }}>Go to App1-Route1</button>
        </Link>
        
        {/* Button 2 */}
        <Link to="/app1/route2">
          <button style={{ padding: '10px 20px' }}>Go to App1-Route2</button>
        </Link>

        {/* Button 3 */}
        <Link to="/app2/route1">
          <button style={{ padding: '10px 20px' }}>Go to App2-Route1</button>
        </Link>

        {/* Button 4 */}
        <Link to="/app2/route2">
          <button style={{ padding: '10px 20px' }}>Go to App2-Route2</button>
        </Link>
      </div>
    </div>
  )
}

export default Home