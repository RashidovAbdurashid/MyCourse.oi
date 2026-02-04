document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openModal");
  const closeBtn = document.getElementById("closeModal");
  const overlay = document.getElementById("modalOverlay");
  const modal = document.getElementById("loginModal");
  const profileForm = document.getElementById("profileForm");

  const loginForm = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  if (openBtn) {
    openBtn.addEventListener("click", () => {
      overlay.classList.add("active");
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      overlay.classList.remove("active");
    });
  }

  if (overlay && modal) {
    overlay.addEventListener("click", (e) => {
      if (!modal.contains(e.target)) {
        overlay.classList.remove("active");
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      overlay.classList.remove("active");
    }
  });

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();

      if (!email || !password) {
        alert("Please fill all fields");
        return;
      }

      const btn = loginForm.querySelector("button");
      btn.textContent = "Logging in...";
      btn.disabled = true;

      setTimeout(() => {
        localStorage.setItem("userEmail", email);
        window.location.href = "sing__up.html";
      }, 80);
    });
  }

  if (profileForm) {
    profileForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const btn = profileForm.querySelector(".save-btn");
      btn.textContent = "Saving...";
      btn.disabled = true;

      setTimeout(() => {
        window.location.href = "account.html";
      }, 700);
    });
  }
});
