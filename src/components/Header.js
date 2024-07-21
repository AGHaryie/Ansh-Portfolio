import React, { useEffect, useState } from 'react';
import './Header.css';

const Welcome = () => {
  const [message, setMessage] = useState('');
  const [liveText, setLiveText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const liveTextArray = ["Welcome To My Portfolio  ", "Explore About Me  ", "Contact Us Below For More Details  "];

  useEffect(() => {
    const getTimeMessage = () => {
      const now = new Date();
      const utcOffset = now.getTimezoneOffset();
      const istOffset = 330; // IST is UTC +5:30
      const istTime = new Date(now.getTime() + (istOffset + utcOffset) * 60000);

      const hours = istTime.getHours();

      if (hours < 12&& hours > 4) {
        return 'Good Morning!';
      } else if (hours < 17) {
        return 'Good Afternoon!';
      } else if (hours < 20) {
        return 'Good Evening!';
      } else {
        return 'Good Night!';
      }
    };

    setMessage(getTimeMessage());
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % liveTextArray.length;
      const fullText = liveTextArray[i];

      setLiveText(isDeleting ? fullText.substring(0, liveText.length - 1) : fullText.substring(0, liveText.length + 1));

      if (!isDeleting && liveText === fullText) {
        setIsDeleting(true);
        setTypingSpeed(50);
      } else if (isDeleting && liveText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [liveText, isDeleting, typingSpeed, loopNum, liveTextArray]);

  return (
    <div className="welcome-section">
      <h1>{message}</h1>
      <p className="live-text"> {liveText}<span className="caret"></span></p>
    </div>
  );
};

export default Welcome;
