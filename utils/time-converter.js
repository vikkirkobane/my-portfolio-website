// utils/time-converter.js
export function timeConverter(isoTime) {
  // Handle invalid or missing input
  if (!isoTime || typeof isoTime !== 'string') {
    return 'Recently';
  }

  try {
    const currentTime = Date.now();
    const pastTime = new Date(isoTime).getTime();
    
    // Handle invalid dates
    if (isNaN(pastTime)) {
      return 'Recently';
    }

    const timeDifference = currentTime - pastTime;
    const seconds = Math.floor(timeDifference / 1000);
    
    if (seconds < 60) {
      return 'Just now';
    }
    
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    }
    
    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    }
    
    const days = Math.floor(hours / 24);
    if (days < 30) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
    }
    
    const months = Math.floor(days / 30);
    if (months < 12) {
      return `${months} month${months > 1 ? 's' : ''} ago`;
    }
    
    const years = Math.floor(months / 12);
    return `${years} year${years > 1 ? 's' : ''} ago`;
  } catch (error) {
    console.error('Error converting time:', error);
    return 'Recently';
  }
}

