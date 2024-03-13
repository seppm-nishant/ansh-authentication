"use client"; // Depending on your data and component logic
import { useState, useEffect } from 'react';

function AccountInformation() {
  const [accountData, setAccountData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAccountInfo = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/account'); // Assuming your backend route
        if (!response.ok) { // Check for HTTP error codes
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAccountData(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAccountInfo();
  }, []);


  return (
    <div>
      <h2>Account Information</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {accountData && (
        <>
          <div>
            <span>Subscription Status:</span> {accountData.subscriptionStatus}
          </div>
          {/* ... Display other details like billing, usage stats, etc. */}
        </>
      )}
    </div>
  );
}

export default AccountInformation;
