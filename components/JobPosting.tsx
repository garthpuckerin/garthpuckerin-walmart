"use client"
import React from 'react'

export default function JobPosting(){
  return (
    <div className="card">
      <h1>LMS Administrator — Walmart Connect Academy</h1>
      <p className="muted">Bentonville, AR • San Bruno, CA • Hybrid</p>

      <section>
        <h3>Overview</h3>
        <p>Seeking a highly organized, data-driven LMS Administrator to manage and scale learning experiences on Intellum. Partner across Product, Sales, Client Services, RevOps, and HR to deploy, track, and measure training impact.</p>
      </section>

      <section>
        <h3>What you'll do</h3>
        <ul>
          <li>Serve as primary Intellum LMS administrator: users, enrollments, permissions, and learning paths.</li>
          <li>Pioneer AI-first content creation and help implement AI-personalized learner journeys.</li>
          <li>Build and maintain a support/ticketing system (Airtable or approved tool).</li>
          <li>Build, test, and launch courses, collections, learning paths, and event registrations.</li>
          <li>Develop dashboards and reports on completion, engagement, NPS, and compliance.</li>
          <li>Maintain clean data and manage integrations with HRIS and CRM systems.</li>
        </ul>
      </section>

      <section>
        <h3>Preferred Qualifications</h3>
        <ul>
          <li>4+ years administering LMS platforms (Intellum preferred).</li>
          <li>Experience building Airtable workflows; enterprise learning at scale (3,000+ users).</li>
          <li>Strong Excel/Sheets skills, dashboarding (Tableau/PowerBI/Looker), SCORM/xAPI familiarity.</li>
          <li>AI-first mindset and strong stakeholder management.</li>
        </ul>
      </section>

      <section style={{marginTop:16}}>
        <a className="button" href="/resume">View Resume & Apply</a>
      </section>
    </div>
  )
}
