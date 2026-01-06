function checkBackend() {
  fetch("/api/health")
    .then(res => res.json())
    .then(data => {
      document.getElementById("backend-status").innerText = "RUNNING ✅";
      document.getElementById("api-health").innerText = data.status;
    })
    .catch(() => {
      document.getElementById("backend-status").innerText = "DOWN ❌";
      document.getElementById("api-health").innerText = "Not reachable";
    });
}
