import React, { useEffect, useRef } from 'react';
import './NewsBoard.css'; // Import your CSS file

const newsData = [
  { title: ' Exam Results Release', link: 'https://example.com/notice1' },
  { title: 'Annual Sports Date Declaration Notice', link: 'https://example.com/notice2' },
  { title: 'Class 10 Timetable Revision: Latest Updates', link: 'https://example.com/notice3' },
  { title: '"Notice Regarding Publication of Exam Results', link: 'https://example.com/notice4' },
  { title: '"Latest Information on Class Ten New Timetable', link: 'https://example.com/notice4' },
  { title: 'Urgent Notice: Brace Yourself for Exam Results Update!', link: 'https://example.com/notice4' },
  { title: 'Breaking News: Exam Results to Hit the Website Shortly!', link: 'https://example.com/notice4' },
  // Add more news titles as needed
];

const NewsBoard = () => {
  const containerRef = useRef(null);
  const duplicatedNewsData = [...newsData, ...newsData];

  useEffect(() => {
    const container = containerRef.current;

    let animationFrameId;
    let scrolling = true;
    let scrollPosition = 0;

    const handleMouseEnter = () => {
      scrolling = false;
    };

    const handleMouseLeave = () => {
      scrolling = true;
      animateScroll();
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    const animateScroll = () => {
      if (scrolling) {
        scrollPosition += 0.8; // Adjust the scrolling speed as needed
        container.scrollTop = scrollPosition;

        // Reset to the top when reaching the end of duplicated data
        if (scrollPosition >= container.scrollHeight / 2) {
          scrollPosition = 0;
        }

        animationFrameId = requestAnimationFrame(animateScroll);
      }
    };

    animateScroll(); // Start the initial animation

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="news-container" ref={containerRef}>
      {duplicatedNewsData.map((news, index) => (
        <a key={index} href={news.link} className="news-item" target="_blank" rel="noopener noreferrer">
          {news.title}
        </a>
      ))}
    </div>
  );
};

export default NewsBoard;
