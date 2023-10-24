import React from 'react';
import { Link } from 'react-router-dom';

function SidePanel({ showButtons, toggleButtons }) { // Add toggleButtons here
    return (
        <div className="left-panel">
            <button onClick={toggleButtons} className="hamburger-btn">  {/* Use it here */}
                ☰
            </button>
            {showButtons && (
                <div className="button-container">
                    <button onClick={() => (window.location.href = '/page1')}>Page 1</button>
                    {/* <Link to="/deviceForm">Page 1</Link> */}

                    <button onClick={() => (window.location.href = '/page2')}>Page 2</button>
                    <button onClick={() => (window.location.href = '/page3')}>Page 3</button>
                </div>
            )}
        </div>
    );
}

export default SidePanel;
