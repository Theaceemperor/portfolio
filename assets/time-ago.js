


export const timeAgo = (pastTimestamp) => {
    const currentTimeStamp = new Date().getTime();
    const diff = currentTimeStamp - pastTimestamp;
    const minutesAgo = Math.floor(diff / 1000 / 60);

    if (minutesAgo < 60) {
        return Math.floor(diff / 1000 / 60) + ' Minute(s) ago';
    }

    if (minutesAgo < 1440) {
        return Math.floor(diff / 1000 / 60 / 60) + " Hour(s) ago";
    }
    
    if (minutesAgo > 1440 && minutesAgo < 10080) {
        return Math.floor(diff / 1000 / 60 / 60 / 24) + " Day(s) ago";
    }

    if (minutesAgo >= 10080) {
        return new Date(pastTimestamp).toDateString();
    }
}