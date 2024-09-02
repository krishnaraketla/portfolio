import React from 'react';
import '../styles/Timeline.css'; // Import the CSS file for styling

const TimelineEvent = () => {
    return (
        <div className='timeline-event'>
            <div className='date-info'></div>
            <div className='event-item'></div>
        </div>
    );
}

const Timeline = ({ items }) => {
  return (
    <div className="timeline-container">
        <TimelineEvent />
        <TimelineEvent />
        <TimelineEvent />
    </div>
  );
};

export default Timeline;