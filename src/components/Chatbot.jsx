<iframe
  id="widget-iframe"
  src="https://chat-widget.sicada.ai/06a7216f-3a7f-75b8-8000-e81e525b5359?type=chat"
  frameborder="0"
  allow="microphone"
  style="
    position: fixed;
    bottom: 0;
    right: 0;
    width: 260px;
    height: 76px;
    border: none;
    z-index: 2147483647;
    background: transparent;
    overflow: hidden;
    transition: width 0.2s ease, height 0.2s ease;
  "
></iframe>
<script>
  window.addEventListener('message', function (e) {
    var iframe = document.getElementById('widget-iframe');
    if (!iframe || e.source !== iframe.contentWindow) return;
    if (e.data.type === 'widget:resize') {
      iframe.style.width  = e.data.width;
      iframe.style.height = e.data.height;
    }
  });
</script>
