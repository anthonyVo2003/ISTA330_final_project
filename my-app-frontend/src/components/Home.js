import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className="homepage-background">
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="homepage-glass"
      >
        <h1 className="homepage-title">Welcome to FitTrack!</h1>
        <p className="homepage-subtitle">
          Track your workouts, smash your personal records, and share your progress with friends.
        </p>

        <div className="card-grid">
          <div className="homepage-card">
            <h2>🏋️ Workout Tracking</h2>
            <p>Log your workouts, sets, reps, and weights. Keep track of your progress day by day.</p>
          </div>

          <div className="homepage-card">
            <h2>📋 Exercise Selection</h2>
            <p>Browse or add custom exercises. Watch videos and understand muscle groups involved.</p>
          </div>

          <div className="homepage-card">
            <h2>🏆 Achievements</h2>
            <p>Break your personal bests and earn icons. Celebrate your milestones.</p>
          </div>

          <div className="homepage-card">
            <h2>📱 Social</h2>
            <p>Connect with other fitness lovers. Share workouts, images, and videos.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
