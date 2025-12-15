import { useEffect, useState } from 'react';

function App() {
  const [msg, setMsg] = useState("Đang tải dữ liệu...");

  useEffect(() => {
    fetch('http://localhost:3000')
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(() => setMsg("Lỗi kết nối Backend!"));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>BÀI TẬP CUỐI KỲ</h1>
      <h2 style={{ color: 'green' }}>{msg}</h2>
    </div>
  );
}
export default App;