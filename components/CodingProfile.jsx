"use client "

function CodingProfile({ platform, username, profileData }) {
    return (
      <div className="border p-4 mb-4">
        <h3>{platform}</h3>
        <a href={`https://${platform}.com/${username}`} target="_blank" rel="noopener noreferrer">
          View Profile
        </a>
        {/* Assuming profileData is an object: */}
        <div>
          <p>Solved Problems: {profileData.solvedProblems}</p>
          {/* ... Add more data display as needed */}
        </div>
      </div>
    );
  }
  
  export default CodingProfile;
  