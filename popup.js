const browserAPI = typeof browser !== 'undefined' ? browser : chrome;

const fireflyToggle = document.getElementById('fireflyToggle');
const brightnessSlider = document.getElementById('brightnessSlider');
const trailLengthSlider = document.getElementById('trailLengthSlider');
const backgroundOpacitySlider = document.getElementById('backgroundOpacitySlider');
const colorPicker = document.getElementById('colorPicker');

function saveSettings() {
  const settings = {
    fireflyEnabled: fireflyToggle.classList.contains('active'),
    brightness: brightnessSlider.value,
    trailLength: trailLengthSlider.value,
    backgroundOpacity: backgroundOpacitySlider.value,
    themeColor: colorPicker.value
  };
  console.log('💾 Saving settings:', settings);
  browserAPI.storage.local.set(settings, () => {
    console.log('✅ Settings saved successfully');
  });
}

fireflyToggle.addEventListener('click', () => {
  fireflyToggle.classList.toggle('active');
  console.log('🔄 Toggle changed to:', fireflyToggle.classList.contains('active'));
  saveSettings();
});

brightnessSlider.addEventListener('input', () => {
  console.log('🎚️ Brightness changed to:', brightnessSlider.value);
  saveSettings();
});

trailLengthSlider.addEventListener('input', () => {
  console.log('📏 Trail length changed to:', trailLengthSlider.value);
  saveSettings();
});

backgroundOpacitySlider.addEventListener('input', () => {
  console.log('🖼️ Background opacity changed to:', backgroundOpacitySlider.value);
  saveSettings();
});

colorPicker.addEventListener('input', () => {
  console.log('🎨 Theme color changed to:', colorPicker.value);
  saveSettings();
});

browserAPI.storage.local.get(['fireflyEnabled', 'brightness', 'trailLength', 'backgroundOpacity', 'themeColor'], (result) => {
  console.log('📖 Loaded settings:', result);
  if (result.fireflyEnabled !== undefined) {
    fireflyToggle.classList.toggle('active', result.fireflyEnabled);
    console.log('✅ Firefly enabled set to:', result.fireflyEnabled);
  }
  if (result.brightness !== undefined) {
    brightnessSlider.value = result.brightness;
    console.log('✅ Brightness set to:', result.brightness);
  }
  if (result.trailLength !== undefined) {
    trailLengthSlider.value = result.trailLength;
    console.log('✅ Trail length set to:', result.trailLength);
  }
  if (result.backgroundOpacity !== undefined) {
    backgroundOpacitySlider.value = result.backgroundOpacity;
    console.log('✅ Background opacity set to:', result.backgroundOpacity);
  }
  if (result.themeColor !== undefined) {
    colorPicker.value = result.themeColor;
    console.log('✅ Theme color set to:', result.themeColor);
  }
});