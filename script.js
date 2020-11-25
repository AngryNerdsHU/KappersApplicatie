const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".calenderHours");

  const maanden = [
    "Januari",
    "Februari",
    "Maart",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Augustus",
    "September",
    "Oktober",
    "November",
    "December",
  ];

  // weeknummerfunctie
  const getWeekNumber = d => {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    return weekNo;
  }

  var weeknummer = getWeekNumber(new Date());

  document.querySelector(".prev").addEventListener("click", () => {
    weeknummer+=1;
    renderCalendar();
  });
  console.log(weeknummer)

  document.querySelector(".date h1").innerHTML = "Week " + weeknummer;

  const dagen = [
    "Zo",
    "Ma",
    "Di",
    "Wo",
    "Do",
    "Vrij",
    "Za"
  ]

  document.querySelector(".date p").innerHTML = dagen[new Date().getDay()] + " " + new Date().getDate() + " " + maanden[date.getMonth()] + " " + date.getFullYear();

  let days = "";

  for (let j = 1; j <= 63; j++) {
    if(j<8) {
      days += '<div>9:00-10:00</div>';
    }
    else if(j<15) {
      days += '<div>10:00-11:00</div>';
    }
    else if(j<22) {
      days += '<div>11:00-12:00</div>';
    }
    else if(j<29) {
      days += '<div>12:00-13:00</div>';
    }
    else if(j<36) {
      days += '<div>13:00-14:00</div>';
    }
    else if(j<43) {
      days += '<div>14:00-15:00</div>';
    }
    else if(j<50) {
      days += '<div>15:00-16:00</div>';
    }
    else if(j<57) {
      days += '<div>16:00-17:00</div>';
    }
    else if(j<64) {
      days += '<div>17:00-18:00</div>';
    }
    else days += `<div>hoi</div>`;
    monthDays.innerHTML = days;
  }
};



document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();

