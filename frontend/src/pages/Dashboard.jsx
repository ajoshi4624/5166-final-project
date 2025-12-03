export default function Dashboard() {
  return (
    <>
      <header className="page-header">
        <p className="page-kicker">UNC Charlotte • News & Innovation</p>
        <h1 className="page-title">
          UNC Charlotte – Giving Tuesday & Entrepreneurship
        </h1>
        <p className="page-subtitle">
          A snapshot of how philanthropy and a new graduate program connect to
          student success and regional innovation.
        </p>
      </header>

      {}
      <section aria-label="Topic summary" className="card">
        <p>
          In December 2025, UNC Charlotte is using Giving Tuesday to spotlight
          both student support and innovation. The University encourages
          donations to the Student Emergency Fund and the Jamil Niner Student
          Pantry, which provide urgent financial assistance and basic needs
          support so students can stay enrolled and focused during difficult
          times. At the same time, UNC Charlotte is highlighting the launch of
          its new Master of Science in Entrepreneurship. Offered through the
          Belk College of Business at The Dubois Center in Uptown Charlotte, the
          program is designed to nurture entrepreneurial thinking, connect
          students with mentors and regional organizations, and build an
          innovation ecosystem that benefits the Charlotte community.
        </p>
        <p>
          The Giving Tuesday initiative and the new entrepreneurship degree
          share a common theme: expanding opportunity. Donors can directly
          support students who face unexpected hardships, while the graduate
          program prepares a new generation of founders and innovators who can
          create jobs and social impact. Together, these efforts show how UNC
          Charlotte is pairing philanthropy with academic innovation to
          strengthen both individual students and the broader region.
        </p>
        <p>
          Source:{' '}
          <a
            href="https://inside.charlotte.edu/2025/12/01/niner-insider-monday-dec-1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inside UNC Charlotte – Giving Tuesday and M.S. in Entrepreneurship
          </a>
        </p>
      </section>

      {}
      <section aria-label="Technical details" className="card">
        <h2>Technical Overview</h2>
        <p>
          This project is a Single Page Application built with React on the
          frontend and a Node.js/Express backend. The backend exposes
          JWT-protected HTTP endpoints for authentication and for retrieving
          JSON data used in charts about Giving Tuesday donations and projected
          enrollment in the Master of Science in Entrepreneurship. The app
          connects to a MySQL database hosted on a remote server. In production
          the frontend runs on port 80 behind a web server, while the backend
          runs independently on port 3000 and handles API requests.
          Accessibility best practices are applied throughout the UI, including
          semantic landmarks, keyboard-navigable menus, and descriptive text
          accompanying visualizations.
        </p>
      </section>
    </>
  );
}