document.addEventListener("DOMContentLoaded", function () {
  // 高さをトグルする関数
  function toggleIframe(containerId) {
    const container = document.getElementById(containerId);

    if (container) {
      if (container.classList.contains("expanded")) {
        container.classList.remove("expanded");
        container.classList.add("collapsed");
      } else {
        container.classList.remove("collapsed");
        container.classList.add("expanded");
      }
    } else {
      console.error(`ID '${containerId}' の要素が見つかりません`);
    }
  }

  // グローバル関数として公開
  window.toggleIframe = toggleIframe;
});
