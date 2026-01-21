const welcome = document.getElementById("welcome");
const dashboard = document.getElementById("dashboard");
const content = document.getElementById("content");

document.getElementById("enterBtn").onclick = () => {
    welcome.classList.remove("active");
    dashboard.classList.add("active");
};

document.querySelectorAll(".category-grid button").forEach(btn => {
    btn.onclick = () => {
        dashboard.classList.remove("active");
        content.classList.add("active");

        document.querySelectorAll(".content-box").forEach(box => {
            box.classList.remove("active");
        });

        document.getElementById(btn.dataset.target).classList.add("active");
    };
});

document.getElementById("backBtn").onclick = () => {
    content.classList.remove("active");
    dashboard.classList.add("active");
};
