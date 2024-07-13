import React from 'react';
import './AdminDashboard.css';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie, Line, Bar } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faCalendarAlt, faBell, faChalkboardTeacher, faBuilding, faChartBar, faCogs, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// Register the necessary components with ChartJS
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <aside className="menu">
        <img src="/umat_logo.png" alt="UMaT Logo" className="logo" />
        <ul>
          <li><FontAwesomeIcon icon={faTachometerAlt} /> Dashboard</li>
          <li><FontAwesomeIcon icon={faCalendarAlt} /> Academic Terms</li>
          <li><FontAwesomeIcon icon={faBell} /> Scheduling</li>
          <li><FontAwesomeIcon icon={faChalkboardTeacher} /> Notification</li>
          <li><FontAwesomeIcon icon={faChalkboardTeacher} /> Lecturers</li>
          <li><FontAwesomeIcon icon={faBuilding} /> Lecture Halls (Rooms)</li>
          <li><FontAwesomeIcon icon={faChartBar} /> Reports</li>
          <li className="menu-spacing"></li>
          <li><FontAwesomeIcon icon={faCogs} /> Settings</li>
          <li><FontAwesomeIcon icon={faSignOutAlt} /> Logout</li>
        </ul>
      </aside>
      <main className="content">
        <header>
          <input type="text" placeholder="Search..." className="search-bar" />
          <div className="profile">
            <img src="/admin_profile.jpg" alt="Admin Profile" className="profile-photo" />
            <span className="profile-name">Admin Name</span>
            <span className="notification-bell">🔔</span>
          </div>
        </header>
        <section className="notifications">
          <div className="notification-box">
            <h3>Active Courses</h3>
            <button>Add Course</button>
          </div>
          <div className="notification-box">
            <h3>Allocated Lecturers</h3>
            <button>Allocate a Lecturer</button>
          </div>
          <div className="notification-box">
            <h3>Detected Conflicts</h3>
            <button>Fix Conflict</button>
          </div>
          <div className="notification-box">
            <h3>Available Rooms</h3>
            <button>Schedule a Class</button>
          </div>
        </section>
        <section className="charts">
          <div className="chart pie-chart">
            <h3>Schedule Accuracy</h3>
            <Pie
              data={{
                labels: ['Fulfilled Classes', 'Rescheduled Classes', 'Cancelled Classes'],
                datasets: [
                  {
                    data: [60, 30, 10],
                    backgroundColor: ['#4CAF50', '#FFC107', '#F44336']
                  }
                ]
              }}
            />
          </div>
          <div className="chart line-chart">
            <h3>Lecturers' Attendance Rate</h3>
            <Line
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [
                  {
                    label: 'Attendance Rate',
                    data: [85, 90, 78, 88, 92, 85],
                    fill: false,
                    borderColor: '#4CAF50'
                  }
                ]
              }}
            />
            <div className="calendar">
              <h3>Calendar</h3>
              <Calendar />
            </div>
          </div>
        </section>
        <section className="adjustments">
          <div className="adjustments-header">
            <h3>Adjustment Requests</h3>
            <button>View All</button>
          </div>
          <div className="chart bar-chart">
            <h3>Room Utilisation</h3>
            <Bar
              data={{
                labels: ['Room 1', 'Room 2', 'Room 3', 'Room 4', 'Room 5'],
                datasets: [
                  {
                    label: 'Utilisation Rate',
                    data: [75, 50, 60, 80, 55],
                    backgroundColor: '#4CAF50'
                  }
                ]
              }}
            />
          </div>
        </section>
        <footer className="footer">
          <p>&copy; 2024 UMaT. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default AdminDashboard;