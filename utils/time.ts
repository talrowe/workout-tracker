// utils/time.ts

export type Duration = {
  hours: number;
  minutes: number;
  seconds: number;
};

export function parseDuration(durationStr: string): Duration {
  const regex = /(\d+)\s*(h|m|s)/gi;
  let duration: Duration = { hours: 0, minutes: 0, seconds: 0 };
  let match;
  let matched = false;

  while ((match = regex.exec(durationStr)) !== null) {
    matched = true;
    const value = parseInt(match[1], 10);
    const unit = match[2];

    switch(unit) {
      case 'h':
        // duration.hours += value * 3600;
        duration.hours += value;
        break;
      case 'm':
        // duration.minutes += value * 60;
        duration.minutes += value;
        break;
      case 's':
        duration.seconds += value;
        // duration.seconds += value;
        break;
    }
  }

  if (duration.hours === 0 && duration.minutes === 0 && duration.seconds === 0 ) {
    throw new Error("Invalid time format. Please enter time in hours (h), minutes (m), or seconds (s).");
  }

  return duration;
}

export function durationToSeconds({ hours, minutes, seconds }: Duration): number {
  return hours * 3600 + minutes * 60 + seconds;
}
