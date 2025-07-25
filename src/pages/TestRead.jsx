import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig'; // pastikan path-nya sesuai
import { doc, getDoc } from 'firebase/firestore';

const TestRead = () => {
  const [userStats, setUserStats] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const docRef = doc(db, 'users', 'VooZI8ojaUGIwllqhQIj'); // ID yang kamu screenshot
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUserStats(docSnap.data());
        console.log('Data found:', docSnap.data());
      } else {
        console.log('No such document!');
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <h2>🔥 User Progress Data</h2>
      {userStats ? (
        <ul>
          {Object.entries(userStats).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default TestRead;
