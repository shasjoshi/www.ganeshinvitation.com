/**
 * Ganesh Chaturthi Invitation - Interactive Script
 * Handles multilingual support, door opening ceremony, particle effects & audio.
 */

var translations = {
  mr: {
    pageTitle: 'गणेश चतुर्थी आमंत्रण',
    languageLabel: 'भाषा',
    doorAria: 'गणेश आमंत्रण उघडा',
    doorMantra: '|| ॐ नमः शिवाय ||',
    greeting: 'नमस्कार',
    doorBlessing: 'परमपूज्य गुरुदेवता श्री कलावती आई यांच्या आशीर्वादाने दरवर्षीप्रमाणे यावर्षीही आपण गणेशाची स्थापना करीत आहोत.',
    doorTitle: 'गणपती बाप्पा मोरया',
    doorSubtitle: 'आपल्यासाठी खास आमंत्रण',
    openButton: 'आमंत्रण उघडा',
    cardMantra: '|| ॐ नमः शिवाय || गणरायाला नमस्कार ||',
    headline: 'गणपती बाप्पा मोरया',
    invitationTitle: 'मनःपूर्वक आमंत्रण',
    inviteLine: 'अत्यंत आनंदाने आणि भक्तिभावाने',
    inviteBody: 'आपणास व आपल्या परिवारास <strong>गणेश चतुर्थी</strong><br>उत्सवासाठी सहर्ष आमंत्रित करत आहोत. पूजा,<br>आरती आणि आपलेपणाने बाप्पाचे<br>स्वागत करण्याचा हा सोहळा.',
    hostNames: 'जोशी परिवार',
    dateLabel: 'तारीख',
    dateValue: 'सोमवार, १४ सप्टेंबर २०२६',
    timeLabel: 'वेळ',
    timeValue: 'सकाळची आरती: ११ ते १२ दरम्यान केली जाईल<br>सायंकाळची आरती: ८ ते ९ दरम्यान केली जाईल',
    locationLabel: 'स्थळ',
    address: 'स्वामी धाम अपार्टमेंट,<br>१०३ ब्लॉक नंबर, पहिला मजला,<br>थ्री टायर चौक, कंसई,<br>अंबरनाथ पूर्व ४२१५०१',
    mapsLabel: 'गुगल मॅप्सवर पहा',
    programTitle: 'कार्यक्रम',
    pranLabel: 'प्राणप्रतिष्ठा',
    pranValue: 'सोमवार, १४ सप्टेंबर २०२६',
    morningLabel: 'सकाळची आरती',
    morningValue: '११ ते १२ दरम्यान',
    eveningLabel: 'सायंकाळची आरती',
    eveningValue: '८ ते ९ दरम्यान',
    visarjanLabel: 'गणपती विसर्जन',
    visarjanValue: 'शनिवार, १९ सप्टेंबर २०२६, सायंकाळी',
    rsvpTitle: 'संपर्क',
    contacts: 'समीर जोशी: <a href="tel:8668768526" class="contact-tel">8668768526</a><br>शशांक जोशी: <a href="tel:8999365388" class="contact-tel">8999365388</a><br>ज्योती जोशी: <a href="tel:9309854569" class="contact-tel">9309854569</a>',
    blessing: 'मंगलमूर्ती मोरया',
    footerNote: 'बाप्पाचे आशीर्वाद घेण्यासाठी कृपया उपस्थित रहा',
    audioMute: 'आवाज बंद करा',
    audioPlay: 'आवाज सुरू करा'
  },
  en: {
    pageTitle: 'Ganesh Chaturthi Invitation',
    languageLabel: 'Language',
    doorAria: 'Open Ganesh invitation',
    doorMantra: '|| Om Namah Shivaya ||',
    greeting: 'Namaskar',
    doorBlessing: 'With the blessings of our revered Gurudevta Shri Kalavati Aai, as every year, we are installing Ganpati this year too.',
    doorTitle: 'Ganpati Bappa Morya',
    doorSubtitle: 'A special invitation for you',
    openButton: 'Open Invitation',
    cardMantra: '|| Om Namah Shivaya || Shri Ganeshaya Namah ||',
    headline: 'Ganpati Bappa Morya',
    invitationTitle: 'A heartfelt invitation',
    inviteLine: 'With great joy and devotion',
    inviteBody: 'You and your family are <strong>cordially invited</strong><br>to our Ganesh Chaturthi celebration — a heartfelt<br>gathering of prayer, aarti, and<br>the welcoming of Bappa.',
    hostNames: 'Joshi Parivar',
    dateLabel: 'Date',
    dateValue: 'Monday, September 14, 2026',
    timeLabel: 'Time',
    timeValue: 'Morning aarti: between 11 and 12<br>Evening aarti: between 8 and 9',
    locationLabel: 'Location',
    address: 'Swami Dham Apartment,<br>Block 103, 1st floor,<br>Three Tyre Chowk, Kansai,<br>Ambernath East 421501',
    mapsLabel: 'View on Google Maps',
    programTitle: 'Programme',
    pranLabel: 'Pranpratishtha',
    pranValue: 'Monday, September 14, 2026',
    morningLabel: 'Morning aarti',
    morningValue: 'Between 11 and 12',
    eveningLabel: 'Evening aarti',
    eveningValue: 'Between 8 and 9',
    visarjanLabel: 'Ganpati visarjan',
    visarjanValue: 'Saturday, September 19, 2026, evening',
    rsvpTitle: 'Contact',
    contacts: 'Sameer Joshi: <a href="tel:8668768526" class="contact-tel">8668768526</a><br>Shashank Joshi: <a href="tel:8999365388" class="contact-tel">8999365388</a><br>Jyoti Joshi: <a href="tel:9309854569" class="contact-tel">9309854569</a>',
    blessing: 'Mangalmurti Morya',
    footerNote: 'Please be present to receive Bappa’s blessings',
    audioMute: 'Mute Audio',
    audioPlay: 'Play Audio'
  },
  kn: {
    pageTitle: 'ಗಣೇಶ ಚತುರ್ಥಿ ಆಮಂತ್ರಣ',
    languageLabel: 'ಭಾಷೆ',
    doorAria: 'ಗಣೇಶ ಆಮಂತ್ರಣ ತೆರೆಯಿರಿ',
    doorMantra: '|| ಓಂ ನಮಃ ಶಿವಾಯ ||',
    greeting: 'ನಮಸ್ಕಾರ',
    doorBlessing: 'ಪರಮಪೂಜ್ಯ ಗುರುದೇವತೆ ಶ್ರೀ ಕಲಾವತಿ ಆಯಿಯವರ ಆಶೀರ್ವಾದದಿಂದ ಪ್ರತಿವರ್ಷದಂತೆ ಈ ವರ್ಷವೂ ನಾವು ಗಣೇಶನ ಪ್ರತಿಷ್ಠಾಪನೆ ಮಾಡುತ್ತಿದ್ದೇವೆ.',
    doorTitle: 'ಗಣಪತಿ ಬಪ್ಪಾ ಮೋರಯಾ',
    doorSubtitle: 'ನಿಮಗಾಗಿ ವಿಶೇಷ ಆಮಂತ್ರಣ',
    openButton: 'ಆಮಂತ್ರಣ ತೆರೆಯಿರಿ',
    cardMantra: '|| ಓಂ ನಮಃ ಶಿವಾಯ || ಶ್ರೀ ಗಣೇಶಾಯ ನಮಃ ||',
    headline: 'ಗಣಪತಿ ಬಪ್ಪಾ ಮೋರಯಾ',
    invitationTitle: 'ಸಹರ್ಷ ಆಮಂತ್ರಣ',
    inviteLine: 'ಅತ್ಯಂತ ಸಂತೋಷದಿಂದ ಮತ್ತು ಭಕ್ತಿಭಾವದಿಂದ',
    inviteBody: 'ನಿಮ್ಮನ್ನು ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬವನ್ನು <strong>ಗಣೇಶ ಚತುರ್ಥಿ</strong><br>ಉತ್ಸವಕ್ಕೆ ಆತ್ಮೀಯವಾಗಿ ಆಹ್ವಾನಿಸುತ್ತೇವೆ — ಪೂಜೆ,<br>ಆರತಿ ಮತ್ತು ಭಕ್ತಿಯಿಂದ ಬಪ್ಪನನ್ನು<br>ಸ್ವಾಗತಿಸುವ ಈ ಸಮಾರಂಭಕ್ಕೆ.',
    hostNames: 'ಜೋಶಿ ಕುಟುಂಬ',
    dateLabel: 'ದಿನಾಂಕ',
    dateValue: 'ಸೋಮವಾರ, ಸೆಪ್ಟೆಂಬರ್ 14, 2026',
    timeLabel: 'ಸಮಯ',
    timeValue: 'ಬೆಳಗಿನ ಆರತಿ: ೧೧ ರಿಂದ ೧೨ರ ನಡುವೆ ನಡೆಯಲಿದೆ<br>ಸಂಜೆಯ ಆರತಿ: ೮ ರಿಂದ ೯ರ ನಡುವೆ ನಡೆಯಲಿದೆ',
    locationLabel: 'ಸ್ಥಳ',
    address: 'ಸ್ವಾಮಿ ಧಾಮ ಅಪಾರ್ಟ್‌ಮೆಂಟ್,<br>೧೦೩ ಬ್ಲಾಕ್ ಸಂಖ್ಯೆ, ಮೊದಲ ಮಹಡಿ,<br>ಥ್ರೀ ಟೈರ್ ಚೌಕ್, ಕನ್ಸಾಯಿ,<br>ಅಂಬರ್‌ನಾಥ್ ಪೂರ್ವ ೪೨೧೫೦೧',
    mapsLabel: 'ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್‌ನಲ್ಲಿ ನೋಡಿ',
    programTitle: 'ಕಾರ್ಯಕ್ರಮ',
    pranLabel: 'ಪ್ರಾಣಪ್ರತಿಷ್ಠೆ',
    pranValue: 'ಸೋಮವಾರ, ಸೆಪ್ಟೆಂಬರ್ 14, 2026',
    morningLabel: 'ಬೆಳಗಿನ ಆರತಿ',
    morningValue: '೧೧ ರಿಂದ ೧೨ರ ನಡುವೆ',
    eveningLabel: 'ಸಂಜೆಯ ಆರತಿ',
    eveningValue: '೮ ರಿಂದ ೯ರ ನಡುವೆ',
    visarjanLabel: 'ಗಣಪತಿ ವಿಸರ್ಜನೆ',
    visarjanValue: 'ಶನಿವಾರ, ಸೆಪ್ಟೆಂಬರ್ 19, 2026, ಸಂಜೆ',
    rsvpTitle: 'ಸಂಪರ್ಕ',
    contacts: 'ಸಮೀರ್ ಜೋಶಿ: <a href="tel:8668768526" class="contact-tel">8668768526</a><br>ಶಶಾಂಕ್ ಜೋಶಿ: <a href="tel:8999365388" class="contact-tel">8999365388</a><br>ಜ್ಯೋತಿ ಜೋಶಿ: <a href="tel:9309854569" class="contact-tel">9309854569</a>',
    blessing: 'ಮಂಗಳಮೂರ್ತಿ ಮೋರಯಾ',
    footerNote: 'ಬಪ್ಪನ ಆಶೀರ್ವಾದ ಪಡೆಯಲು ದಯವಿಟ್ಟು ಉಪಸ್ಥಿತರಿರಿ',
    audioMute: 'ಧ್ವನಿ ನಿಲ್ಲಿಸಿ',
    audioPlay: 'ಧ್ವನಿ ಆಲಿಸಿ'
  }
};

var currentLang = 'mr';

function setLanguage(language) {
  currentLang = language;
  var selected = translations[language] || translations.mr;
  document.documentElement.lang = language;
  document.title = selected.pageTitle;
  
  document.querySelectorAll('[data-i18n]').forEach(function (element) {
    var key = element.getAttribute('data-i18n');
    var value = selected[key];
    if (value !== undefined) element.innerHTML = value;
  });
  
  document.querySelectorAll('[data-i18n-attr]').forEach(function (element) {
    element.getAttribute('data-i18n-attr').split(',').forEach(function (item) {
      var parts = item.split(':');
      if (parts.length === 2 && selected[parts[1]]) {
        element.setAttribute(parts[0], selected[parts[1]]);
      }
    });
  });

  var languageSelect = document.getElementById('languageSelect');
  if (languageSelect) {
    languageSelect.setAttribute('aria-label', selected.languageLabel);
  }

  updateAudioBtnText();
}

function updateAudioBtnText() {
  var audioBtn = document.getElementById('audioToggle');
  var invitationAudio = document.getElementById('invitationAudio');
  if (!audioBtn || !invitationAudio) return;
  var dict = translations[currentLang] || translations.mr;
  var isPlaying = !invitationAudio.paused && !invitationAudio.ended;
  var text = isPlaying ? dict.audioMute : dict.audioPlay;
  var btnTextEl = audioBtn.querySelector('.audio-btn-label');
  if (btnTextEl) btnTextEl.textContent = text;
  audioBtn.setAttribute('aria-label', text);
  audioBtn.setAttribute('title', text);
}

document.addEventListener('DOMContentLoaded', function () {
  var languageSelect = document.getElementById('languageSelect');
  if (languageSelect) {
    languageSelect.addEventListener('change', function () {
      setLanguage(this.value);
    });
  }
  setLanguage('mr');

  var openButton = document.getElementById('openInvitation');
  var flowerBurst = document.getElementById('flowerBurst');
  var invitationAudio = document.getElementById('invitationAudio');
  var audioToggle = document.getElementById('audioToggle');

  if (audioToggle && invitationAudio) {
    audioToggle.addEventListener('click', function () {
      if (invitationAudio.paused) {
        invitationAudio.play().then(function () {
          audioToggle.classList.add('playing');
          updateAudioBtnText();
        }).catch(function () {});
      } else {
        invitationAudio.pause();
        audioToggle.classList.remove('playing');
        updateAudioBtnText();
      }
    });

    invitationAudio.addEventListener('play', function () {
      audioToggle.classList.add('playing');
      updateAudioBtnText();
    });

    invitationAudio.addEventListener('pause', function () {
      audioToggle.classList.remove('playing');
      updateAudioBtnText();
    });

    invitationAudio.addEventListener('ended', function () {
      audioToggle.classList.remove('playing');
      updateAudioBtnText();
    });
  }

  if (openButton) {
    openButton.addEventListener('click', function () {
      openButton.disabled = true;
      document.body.classList.add('invitation-open');

      var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (flowerBurst && !reduce) {
        var flowerColors = ['#F0CE85', '#D9A441', '#F2A93B', '#FFFFFF', '#E65100'];
        for (var flowerIndex = 0; flowerIndex < 52; flowerIndex++) {
          var flower = document.createElement('span');
          flower.className = 'burst-flower';
          flower.textContent = flowerIndex % 4 === 0 ? '✿' : (flowerIndex % 2 === 0 ? '✦' : '❃');
          flower.style.color = flowerColors[flowerIndex % flowerColors.length];
          flower.style.setProperty('--x', ((Math.random() - 0.5) * 440) + 'px');
          flower.style.setProperty('--y', ((Math.random() - 0.55) * 540) + 'px');
          flower.style.setProperty('--rotation', ((Math.random() - 0.5) * 560) + 'deg');
          flower.style.animationDelay = (Math.random() * 0.25) + 's';
          flowerBurst.appendChild(flower);
        }

        var devotionalWords = ['ॐ'];
        devotionalWords.forEach(function (word, wordIndex) {
          var wordElement = document.createElement('span');
          wordElement.className = 'burst-word';
          wordElement.textContent = word;
          wordElement.style.setProperty('--x', ((wordIndex - 1.5) * 105) + 'px');
          wordElement.style.setProperty('--y', (-90 - (wordIndex % 2) * 85) + 'px');
          wordElement.style.animationDelay = (0.12 + wordIndex * 0.16) + 's';
          flowerBurst.appendChild(wordElement);
        });
      }

      window.setTimeout(function () {
        if (invitationAudio) {
          invitationAudio.currentTime = 0;
          invitationAudio.play().then(function () {
            if (audioToggle) audioToggle.classList.add('playing');
            updateAudioBtnText();
          }).catch(function () {
            // Autoplay might be restricted in some browsers
          });
        }
      }, 1400);
    });
  }

  // Floating gentle marigold petal generation
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion) {
    var field = document.getElementById('petalField');
    if (field) {
      var colors = ['#D9A441', '#C1440E', '#F0CE85', '#E67E22'];
      var count = window.innerWidth < 480 ? 12 : 20;

      for (var i = 0; i < count; i++) {
        var petal = document.createElement('div');
        petal.className = 'petal';

        var size = 9 + Math.random() * 9;
        var left = Math.random() * 100;
        var fallDuration = 8 + Math.random() * 9;
        var swayDuration = 2.8 + Math.random() * 2.2;
        var delay = -Math.random() * 15;
        var color = colors[Math.floor(Math.random() * colors.length)];

        petal.style.left = left + 'vw';
        petal.style.width = size + 'px';
        petal.style.height = (size * 0.75) + 'px';
        petal.style.background = color;
        petal.style.borderRadius = '0% 60% 0% 60%';
        petal.style.animationDuration = fallDuration + 's, ' + swayDuration + 's';
        petal.style.animationDelay = delay + 's, ' + delay + 's';

        field.appendChild(petal);
      }
    }
  }
});
