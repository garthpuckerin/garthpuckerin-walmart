# Garth Puckerin — Walmart LMS Administrator Application

This is a targeted job application site and resume for the LMS Administrator role at Walmart Connect Academy.

Quick start

```bash
cd garthpuckerin-walmart
npm install
npm run dev
```

Notes
- The resume PDF is present in the repository root as `Garth_Puckerin_AI_Native_Learning_Systems_Architect_Resume.pdf`.
- For local dev and proper serving from Next.js, move the PDF into `public/` (create `public/` and place the PDF there). After moving, the resume will be available at `/Garth_Puckerin_AI_Native_Learning_Systems_Architect_Resume.pdf`.

Files added
- `app/page.tsx` — job posting and apply CTA
- `app/resume/page.tsx` — resume viewer and download link
- `components/JobPosting.tsx` — job content component
- `components/ResumeCard.tsx` — resume link card
