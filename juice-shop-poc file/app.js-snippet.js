
// app.js - PoC Middleware with File Logging

const express = require('express');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const app = express();

// Path to log file
const logFilePath = path.join(__dirname, 'user-activity.log');

// Custom logging middleware
app.use((req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1];
    try {
      const decoded = jwt.verify(token, process.env.AUTHENTICATION_SECRET || 'default_secret_key');
      const logData = {
        userId: decoded.data.id,
        email: decoded.data.email,
        route: req.originalUrl,
        method: req.method,
        timestamp: new Date().toISOString()
      };
      const logLine = JSON.stringify(logData) + '\n';
      fs.appendFile(logFilePath, logLine, err => {
        if (err) {
          console.error('Failed to write log:', err);
        }
      });
    } catch (err) {
      // Invalid token - skip logging
    }
  }
  next();
});

// ... Rest of the app setup ...
