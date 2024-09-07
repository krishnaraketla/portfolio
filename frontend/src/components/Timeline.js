import React from 'react';
import '../styles/Timeline.css';

const TimelineEvent = ({ title, date, description }) => {
    return (
        <div className='timeline-event'>
            <div className='date-info'>{date}</div>
            <div className='event-container'>
                <div className='event-item'>
                    <h3 style={styles.title}>{title}</h3>
                    <div 
                        dangerouslySetInnerHTML={{ __html: description }}
                        style={styles.description}
                    />
                </div>
            </div>
        </div>
    );
}

const Timeline = ({ items }) => {
  return (
    <div className="timeline-container">
        {items.map((item, index) => (
            <TimelineEvent 
                key={index}
                title={item.title}
                date={item.date}
                description={item.description}
            />
        ))}
    </div>
  );
};

const styles = {
    title: {
        fontSize: '1.5rem',
        color: '#333',
        marginBottom: '1rem',
        fontWeight: 600,
    },
    description: {
        fontSize: '1rem',
        color: '#555',
        lineHeight: 1.6,
    },
};

export default Timeline;