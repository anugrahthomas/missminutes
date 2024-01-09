const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

setInterval(() => {
  const now = new Date();
  hour.textContent = `${
    String(now.getHours()).length <= 1 ? `0${now.getHours()}` : now.getHours()
  }`;
  min.textContent = `${
    String(now.getMinutes()).length <= 1
      ? `0${now.getMinutes()}`
      : now.getMinutes()
  }`;
  sec.textContent = `${
    String(now.getSeconds()).length <= 1
      ? `0${now.getSeconds()}`
      : now.getSeconds()
  }`;
}, 1000);
