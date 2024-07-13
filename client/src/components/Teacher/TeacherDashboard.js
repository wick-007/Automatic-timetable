import React from 'react';
import './TeacherDashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faBook, faCalendarAlt, faBell, faCog, faSignOutAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const notifications = [
  { id: 1, text: 'Upcoming: Math Class at 10 AM', color: '#FFC107' },
  { id: 2, text: 'Assignment Deadline: Science', color: '#F44336' },
  { id: 3, text: 'New Lecture: History', color: '#4CAF50' }
];

const timetable = [
  { day: 'Monday', time: '8 AM - 10 AM', course: 'Math', lecturer: 'Dr. John Doe', image: '/lecturer1.jpg' },
  { day: 'Tuesday', time: '10 AM - 12 PM', course: 'Science', lecturer: 'Dr. Jane Smith', image: '/lecturer2.jpg' },
  // Add more entries as required
];

const workingHoursData = {
  labels: ['Done', 'Pending'],
  datasets: [
    {
      data: [10, 5],
      backgroundColor: ['#4CAF50', '#F44336']
    }
  ]
};

const classesPerDayData = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  datasets: [
    {
      label: 'Number of Classes',
      data: [2, 3, 1, 2, 3],
      backgroundColor: '#4CAF50'
    }
  ]
};

const TeacherDashboard = () => {
  return (
    <div className="teacher-dashboard">
      <aside className="menu">
        <img src="/umat_logo.png" alt="UMaT Logo" className="logo" />
        <ul>
          <li><FontAwesomeIcon icon={faTachometerAlt} /> Dashboard</li>
          <li><FontAwesomeIcon icon={faBook} /> My Classes</li>
          <li><FontAwesomeIcon icon={faCalendarAlt} /> Timetable</li>
          <li><FontAwesomeIcon icon={faBell} /> Notifications</li>
          <li><FontAwesomeIcon icon={faClock} /> Preferences</li>
          <li className="menu-spacing"></li>
          <li><FontAwesomeIcon icon={faCog} /> Settings</li>
          <li><FontAwesomeIcon icon={faSignOutAlt} /> Logout</li>
        </ul>
      </aside>
      <main className="content">
        <header>
          <input type="text" placeholder="Search..." className="search-bar" />
          <div className="profile">
            <img src="/teacher_profile.jpg" alt="Teacher Profile" className="profile-photo" />
            <span className="profile-name">Teacher Name</span>
            <span className="notification-bell">🔔</span>
          </div>
        </header>
        <section className="timetable">
          <h3>Timetable</h3>
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
              </tr>
            </thead>
            <tbody>
              {timetable.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.time}</td>
                  <td>{entry.day === 'Monday' && (
                    <div>
                      <img src={entry.image} alt={entry.lecturer} />
                      <p>{entry.course} - {entry.lecturer}</p>
                    </div>
                  )}</td>
                  <td>{entry.day === 'Tuesday' && (
                    <div>
                      <img src={entry.image} alt={entry.lecturer} />
                      <p>{entry.course} - {entry.lecturer}</p>
                    </div>
                  )}</td>
                  {/* Repeat for other days */}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section className="charts">
          <div className="chart">
            <h3>Working Hours</h3>
            <Pie data={workingHoursData} />
          </div>
          <div className="chart">
            <h3>Classes Per Day</h3>
            <Bar data={classesPerDayData} />
          </div>
        </section>
        <section className="notifications">
          {notifications.map(notification => (
            <div key={notification.id} className="notification-box" style={{ backgroundColor: notification.color }}>
              {notification.text}
              <button className="close-button">x</button>
            </div>
          ))}
        </section>
        <aside className="sidebar">
          <div className="upcoming-classes">
            <h3>Upcoming Classes</h3>
            {timetable.map((entry, index) => (
              <div key={index} className="upcoming-class">
                <p>{entry.course}</p>
                <p>{entry.time}</p>
                <p>{entry.day}</p>
                <p>{entry.room}</p>
              </div>
            ))}
          </div>
          <div className="assignments">
            <h3>Assignments</h3>
            <p>No assignments due.</p>
          </div>
          <div className="calendar">
            <h3>Calendar</h3>
            <Calendar />
          </div>
        </aside>
        <footer className="footer">
          <p>&copy; 2024 UMaT. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default TeacherDashboard;