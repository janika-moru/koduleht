window.addEventListener('load', function () {
  if (document.querySelector('charla-widget')) return;

  var widgetElement = document.createElement('charla-widget');
  widgetElement.setAttribute('p', 'd80ba51f-fc66-4667-92df-3484a6c24bec');
  document.body.appendChild(widgetElement);

  var widgetCode = document.createElement('script');
  widgetCode.src = 'https://app.charla.com/widget/widget.js';
  document.body.appendChild(widgetCode);
});
