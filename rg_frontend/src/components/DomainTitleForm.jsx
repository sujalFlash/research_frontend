import React, { useState } from 'react';

const DomainTitleForm = () => {
  const [domain, setDomain] = useState('');
  const [title, setTitle] = useState('');

  const handleDomainChange = (e) => {
    setDomain(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic
    alert(`Domain: ${domain}\nTitle: ${title}`);
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f2f5',
    }}>
      <div style={{
        backgroundColor: 'white',
        border: '2px solid #e5e7eb',
        borderRadius: '10px',
        padding: '40px 30px',
        width: '300px',
        boxShadow: '0px 0px 15px rgba(0,0,0,0.1)',
        textAlign: 'center'
      }}>
        <h2 style={{ marginBottom: '20px', color: '#2b7a78' }}>Enter Domain and Title</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="domain" style={{ display: 'block', marginBottom: '8px' }}>
            Domain:
          </label>
          <input
            type="text"
            id="domain"
            placeholder="Enter Domain"
            value={domain}
            onChange={handleDomainChange}
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              marginBottom: '20px',
            }}
          />

          <label htmlFor="title" style={{ display: 'block', marginBottom: '8px' }}>
            Title:
          </label>
          <input
            type="text"
            id="title"
            placeholder="Enter Title"
            value={title}
            onChange={handleTitleChange}
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              marginBottom: '20px',
            }}
          />

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DomainTitleForm;
