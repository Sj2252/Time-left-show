<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Remain with Time</title>
  <link rel="stylesheet" href="style.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="favicon.ico" type="image/x-icon">
</head>
<body>
  <!-- Time Info Display -->
  <div id="time-info">
    <p id="start-time"></p>
  </div>

  <div class="main">
    <h1 class="title" id="main-title">Remain with Time</h1>

    <input type="time" id="target-time" value="22:00">
    <p id="current-time"></p>

    <div class="countdown" id="countdown">
      <span id="hours">00</span>:<span id="minutes">00</span>:<span id="seconds">00</span>
    </div>

    <button id="startStopBtn">Start</button>

    <!-- Fullscreen Toggle -->
    <label class="container" id="fullscreenToggle">
      <input type="checkbox" id="fullscreenCheckbox">
      <svg viewBox="0 0 448 512" height="1em" xmlns="http://www.w3.org/2000/svg" class="expand">
        <path d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"/>
      </svg>
      <svg viewBox="0 0 448 512" height="1em" xmlns="http://www.w3.org/2000/svg" class="compress">
        <path d="M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V64zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32H96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V64zM320 320c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32V384h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320z"/>
      </svg>
    </label>
  </div>

  <script src="script.js"></script>
</body>
</html>
