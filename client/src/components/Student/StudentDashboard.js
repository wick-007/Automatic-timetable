import React from 'react';
import './StudentDashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faBook, faCalendarAlt, faBell, faCog, faSignOutAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

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

const courses = [
  { name: 'Basic Mechanics', symbol: 'BM' },
  { name: 'Organic Chemistry', symbol: 'OC' },
  { name: 'Calculus', symbol: 'C' },
  // Add more entries as required
];

const StudentDashboard = () => {
  return (
    <div className="student-dashboard">
      <aside className="menu">
        <img src="/umat_logo.png" alt="UMaT Logo" className="logo" />
        <ul>
          <li><FontAwesomeIcon icon={faTachometerAlt} /> Dashboard</li>
          <li><FontAwesomeIcon icon={faBook} /> My Courses</li>
          <li><FontAwesomeIcon icon={faBook} /> My Classes</li>
          <li><FontAwesomeIcon icon={faCalendarAlt} /> Timetable</li>
          <li><FontAwesomeIcon icon={faBell} /> Notifications</li>
          <li><FontAwesomeIcon icon={faCalendarAlt} /> Schedules</li>
          <li className="menu-spacing"></li>
          <li><FontAwesomeIcon icon={faCog} /> Settings</li>
          <li><FontAwesomeIcon icon={faSignOutAlt} /> Logout</li>
        </ul>
      </aside>
      <main className="content">
        <header>
          <input type="text" placeholder="Search..." className="search-bar" />
          <div className="profile">
            <img src="/student_profile.jpg" alt="Student Profile" className="profile-photo" />
            <span className="profile-name">Student Name</span>
            <span className="notification-bell">🔔</span>
          </div>
        </header>
        <section className="notifications">
          {notifications.map(notification => (
            <div key={notification.id} className="notification-box" style={{ backgroundColor: notification.color }}>
              {notification.text}
              <button className="close-button">x</button>
            </div>
          ))}
        </section>
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
        <section className="courses">
          <h3>Courses You're Taking</h3>
          <div className="courses-list">
            {courses.map((course, index) => (
              <div key={index} className="course-item">
                <span className="course-symbol">{course.symbol}</span>
                <span className="course-name">{course.name}</span>
              </div>
            ))}
          </div>
          <button className="add-schedule-button"><FontAwesomeIcon icon={faPlus} /> Add Daily Schedule</button>
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

export default StudentDashboard;