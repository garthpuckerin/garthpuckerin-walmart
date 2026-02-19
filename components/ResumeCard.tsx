'use client';
import React from 'react';

export default function ResumeCard() {
  const resumePath = '/Garth_Puckerin_AI_Native_Learning_Systems_Architect_Resume.pdf';
  return (
    <div className="card">
      <h2>Resume</h2>
      <p className="muted">Download or view the resume used for this application.</p>
      <p style={{ marginTop: 12 }}>
        <a className="button" href={resumePath} target="_blank" rel="noreferrer">
          Download Resume
        </a>
      </p>
      <p className="muted" style={{ marginTop: 12 }}>
        If the resume does not load, move the PDF into the `public/` folder so it is served at{' '}
        <code>/Garth_Puckerin_AI_Native_Learning_Systems_Architect_Resume.pdf</code>.
      </p>
    </div>
  );
}
