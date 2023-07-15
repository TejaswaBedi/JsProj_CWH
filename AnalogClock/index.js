setInterval(() => {
  let date = new Date();
  let htime = date.getHours();
  let mtime = date.getMinutes();
  let stime = date.getSeconds();
  let hRotation = 30 * htime + mtime / 2;
  let mRotation = 6 * mtime;
  let sRotation = 6 * stime;
  hour.style.transform = `rotate(${hRotation}deg)`;
  minute.style.transform = `rotate(${mRotation}deg)`;
  second.style.transform = `rotate(${sRotation}deg)`;
}, 1000);
