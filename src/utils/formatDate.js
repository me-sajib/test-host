const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

export default function index(dateString) {
  const d = new Date(dateString);
  const month = monthNames[d.getMonth()];
  const date = d.getDate();
  const year = d.getFullYear();

  const time = formatAMPM(d);

  return `${month} ${date}, ${year} ${time}`;
}
