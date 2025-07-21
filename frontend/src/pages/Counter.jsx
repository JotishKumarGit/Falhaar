import React from 'react';
import CountUp from 'react-countup';

const Counter = () => {
    const stats = [
        { label: 'Clients', end: 1500 },
        { label: 'Happy Clients', end: 1400 },
        { label: 'Projects Completed', end: 320 },
        { label: 'Awards', end: 25 },
    ];

    const boxStyle = {
        background: 'linear-gradient(135deg, #fceabb 0%, #f8b500 100%)',
        borderRadius: '10px',
        padding: '20px',
        minWidth: '120px',
        transition: 'transform 0.3s ease-in-out',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        textAlign: 'center',
    };

    return (
        <div className="container-fluid py-5" style={{ backgroundColor: '#c7e0d2ff   ' }}>
            <div className="container mt-5">
                <h2 className="text-center mb-4">🚀 Our Achievements</h2>
                <div className="row justify-content-center gap-3">
                    {stats.map((stat, index) => (
                        <div className="col-auto mb-3" key={index}>
                            <div
                                style={boxStyle}
                                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                            >
                                <div style={{ fontSize: '2rem', color: '#28a745', fontWeight: 'bold' }}>
                                    <CountUp end={stat.end} duration={2} /> +
                                </div>
                                <div className="text-uppercase small text-muted">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Counter;
