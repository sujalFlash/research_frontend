import React from 'react';

const Members = () => {
  const members = [
    { name: 'Dr. Prashant M. Vishwanath', department: 'Dean (Research) KMC' },
    { name: 'Jayanthi M K', department: 'Head of Department, JSS College of Arts, Commerce and Science' },
    { name: 'Dr. S. S. Iyengar', department: 'Professor, Department of Computer Science and Engineering' },
    { name: 'Dr. S. S. Rao', department: 'Professor, Department of Electrical and Electronics Engineering' },
    { name: 'Dr. S. S. Rao', department: 'Professor, Department of Mechanical Engineering' },
    { name: 'Dr. S. S. Rao', department: 'Professor, Department of Civil Engineering' },
    { name: 'Dr. S. S. Rao', department: 'Professor, Department of Chemical Engineering' },
    { name: 'Dr. S. S. Rao', department: 'Professor, Department of Biotechnology' },
    { name: 'Dr. S. S. Rao', department: 'Professor, Department of Information Science and Engineering' },
    { name: 'Dr. S. S. Rao', department: 'Professor, Department of Computer Science and Engineering' },
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}>
      <h2 style={{ color: '#2b7a78' }}>Current Members of JSS</h2>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {members.map((member, index) => (
          <li key={index} style={{ margin: '10px 0', padding: '10px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0px 0px 5px rgba(0,0,0,0.1)' }}>
            <strong>{member.name}</strong> - {member.department}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Members;