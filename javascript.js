const toggleButton = document.getElementById('checkbox');

const corpo2 = document.getElementById('corpo2');
let iscorpo2Visible = false;

const taskbar = document.getElementById('taskbar');
let isTaskbarVisible = false;



toggleButton.addEventListener('click', () => {
  if (isTaskbarVisible) {
    taskbar.style.display = 'none';
    isTaskbarVisible = false;
  } else {
    taskbar.style.display = 'block';
    isTaskbarVisible = true;
  }
});


toggleButton.addEventListener('click', () => {
  if (iscorpo2Visible) {
    corpo2.style.display = 'none';
    iscorpo2Visible = false;
  } else {
    corpo2.style.display = 'block';
    iscorpo2Visible = true;
  }
});
