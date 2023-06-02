import { useEffect, useRef, useState } from 'react';
import './index.scss';

interface IVerifyCodeInput {
  onComplete: (value: any) => void; // 完成后的回调
  onChange?: (value: any) => void; // 改变时的回调
  count?: number; // 验证码位数
}

const VerifyCodeInput = ({ onComplete, onChange, count = 6 }: IVerifyCodeInput) => {
  const [verifyCode, setVerifyCode] = useState(''); //验证码字符串
  const [isFocus, setIsFocus] = useState(false); // 判断是否获取焦点
  const inputRef = useRef(null);

  const handleInputFocus = () => {
    const inputRefCurrent = inputRef?.current as any;
    inputRefCurrent?.focus();
    setIsFocus(true);
  };

  const handleChange = (event: any) => {
    const { value } = event.target;
    if (!value) {
      setVerifyCode('');
      return;
    }

    const inputValue = value.replace(/[^\d]/g, '').substr(0, count);
    setVerifyCode(inputValue);
    onChange && onChange(inputValue);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  const handleFocus = () => {
    setIsFocus(true);
  };

  useEffect(() => {
    if (verifyCode.length !== count) return;
    onComplete && onComplete(verifyCode);
  }, [verifyCode, onComplete]);

  useEffect(() => {
    handleInputFocus();
  }, []);

  return (
    <div className="verify-code-input-container" onClick={handleInputFocus}>
      <div className="number-box">
        {Array.from({ length: count })
          .fill(' ')
          .map((item, index) => {
            return (
              <div
                key={index}
                className={`number-item ${
                  index === verifyCode.length && isFocus ? 'number-item-select' : 'number-item-normal'
                }`}
              >
                {verifyCode.at(index)}
              </div>
            );
          })}
      </div>
      <input
        type="number"
        inputMode="numeric"
        maxLength={6}
        className="input-value"
        value={verifyCode}
        ref={inputRef}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
    </div>
  );
};

VerifyCodeInput.defaultProps = {
  onChange: undefined,
  count: 6,
};

export default VerifyCodeInput;
