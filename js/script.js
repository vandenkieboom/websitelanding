//dit is de log-in button kleur rood/groen
document.getElementById('profileButton').addEventListener('click', function() {
  document.getElementById('badge').classList.toggle('bg-danger');
  document.getElementById('badge').classList.toggle('bg-success');
});


//dit is wanneer er een video speelt met hover
function playVideo(index) {
  let video = document.getElementById(`video-${index}`);
  video.style.display = 'block';
  video.play();
};

function pauseVideo(index) {
  let video = document.getElementById(`video-${index}`);
  video.pause();
  video.currentTime = 0;
  video.style.display = 'none';
};


//dit is om create account en back to login to gebruiken
document.addEventListener("DOMContentLoaded", function() {
  const showCreateAccountBtn = document.getElementById("showCreateAccountBtn");
  const backToLoginBtn = document.getElementById("backToLoginBtn");
  const loginForm = document.getElementById("loginForm");
  const createAccountForm = document.getElementById("createAccountForm");

  showCreateAccountBtn.addEventListener("click", function() {
    loginForm.style.display = "none";
    createAccountForm.style.display = "block";
    showCreateAccountBtn.style.display = "none";
    backToLoginBtn.style.display = "inline";
  });

  backToLoginBtn.addEventListener("click", function() {
    createAccountForm.style.display = "none";
    loginForm.style.display = "block";
    backToLoginBtn.style.display = "none";
    showCreateAccountBtn.style.display = "inline";
  });
});