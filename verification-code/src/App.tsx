import './App.css';
import CodeInput from './components/verify-code-input';

function App() {
  const handleChange = (value: any) => {
    console.log('当前输入了：', value);
  };

  const handleComplete = (value: any) => {
    console.log('验证码输入完毕', value);
  };

  return (
    <div className="App">
      <div className="code">
        <CodeInput onChange={handleChange} onComplete={handleComplete} />
      </div>
    </div>
  );
}

export default App;
