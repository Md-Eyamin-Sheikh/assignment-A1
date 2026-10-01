// Question No. 1: Value Detective
function describeValue(value) {
  const valueType = typeof value;
  const truthiness = value ? "truthy" : "falsy";
  return `${valueType} | ${truthiness}`;
}

// Question No. 2: Bangladesh Weekend Machine
function getDayType(day) {
  switch (day.toLowerCase()) {
    case "friday":
    case "saturday":
      return "Weekend";
    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      return "Working Day";
    default:
      return "Invalid Day";
  }
}

// Question No. 3: Username Gatekeeper
function validateUsername(username) {
  if (username.length < 4) {
    return "Too Short";
  }
  if (username.includes(" ")) {
    return "No Space Allowed";
  }
  if (username.toLowerCase().includes("admin")) {
    return "Reserved Word";
  }
  return "Available";
}

// Question No. 4: Dhaka CNG Fare Meter
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
  let totalFare = 50;

  if (distance > 2) {
    totalFare += (distance - 2) * 15;
  }

  totalFare += waitingMinutes * 2;

  if (isNight) {
    totalFare *= 1.2;
  }

  return totalFare;
}

// Question No. 5: Run Chase Commentator
const getChaseVerdict = (target, scored, ballsLeft) => {
  const runsNeeded = target - scored;

  if (runsNeeded <= 0) {
    return "Won";
  }
  if (ballsLeft <= 0) {
    return "Lost";
  }

  const requiredRate = (runsNeeded / ballsLeft) * 6;
  let verdict = "";

  if (requiredRate <= 6) {
    verdict = "Comfortable";
  } else if (requiredRate <= 12) {
    verdict = "Tough";
  } else {
    verdict = "Almost Impossible";
  }

  return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};