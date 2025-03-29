'use client';

import React from 'react';

const Marquee = () => {
  return (
    <div className="marquee-container rounded-lg bg-primary p-3 text-lg font-medium text-white dark:bg-dark-2">
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-container {
          overflow: hidden;
          white-space: nowrap;
          position: relative;
        }
        .marquee-content {
          display: inline-block;
          padding-left: 100%;
          animation: marquee 20s linear infinite;
        }
      `}</style>
      <div className="marquee-content">
        Tersedia untuk menyelesaikan project / Tugas anda 🚀 &nbsp; 
        Tersedia untuk menyelesaikan project / Tugas anda 🚀 &nbsp;
      </div>
    </div>
  );
};

export default Marquee;