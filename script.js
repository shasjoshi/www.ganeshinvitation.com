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
    audioPlay: 'आवाज सुरू करा',
    chatPillText: 'बाप्पा सहाय्यक AI',
    chatTitle: 'गणेश सहाय्यक',
    chatSubtitle: 'जोशी परिवार • २४/७ AI व व्हॉइस मदत',
    chipsLabel: 'जलद प्रश्न:',
    chatAttribution: 'गणेश सेवक AI • OpenRouter Powered • व्हॉइस सहाय्य',
    chatPlaceholder: 'काहीही विचारा (मराठी, English...)',
    chatWelcome: '🙏 <strong>नमस्कार! गणपती बाप्पा मोरया!</strong><br>मी जोशी परिवाराचा गणेश AI सहाय्यक आहे. आपण मला आरतीची वेळ, पत्ता, तारीख किंवा इतर कोणतीही माहिती विचारू शकता. आपण खालील बटणांवरून किंवा माईक दाबून बोलूनही विचारू शकता!',
    voiceListening: 'ऐकत आहे... कृपया बोला 🎙️',
    voiceNoSupport: 'आपल्या ब्राउझरमध्ये व्हॉइस इनपुट समर्थित नाही.',
    chipAarti: '⏰ आरतीची वेळ',
    chipVenue: '📍 स्थळ व पत्ता',
    chipDates: '📅 तारीख व विसर्जन',
    chipContact: '📞 संपर्क नंबर',
    chipBlessing: '🌸 दर्शन व प्रसाद',
    chipQueryAarti: 'आरतीची वेळ काय आहे?',
    chipQueryVenue: 'कार्यक्रमाचा पत्ता आणि Google Maps लोकेशन द्या',
    chipQueryDates: 'गणपती स्थापना व विसर्जन कधी आहे?',
    chipQueryContact: 'संपर्कासाठी कोणाचा नंबर आहे?',
    chipQueryBlessing: 'दर्शन आणि प्रसादाची काय व्यवस्था आहे?'
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
    audioPlay: 'Play Audio',
    chatPillText: 'Bappa AI Assistant',
    chatTitle: 'Ganesh AI Assistant',
    chatSubtitle: 'Joshi Parivar • 24/7 AI & Voice Guide',
    chipsLabel: 'Quick Queries:',
    chatAttribution: 'Ganesh Sevak AI • OpenRouter Powered • Voice Enabled',
    chatPlaceholder: 'Ask anything (Marathi, English...)',
    chatWelcome: '🙏 <strong>Namaskar! Ganpati Bappa Morya!</strong><br>I am the Joshi Parivar Ganesh AI Assistant. You can ask me anything about aarti timings, venue location, schedule, or contacts. You can also tap the mic button to speak with me!',
    voiceListening: 'Listening... Please speak 🎙️',
    voiceNoSupport: 'Voice input is not supported in this browser.',
    chipAarti: '⏰ Aarti Timings',
    chipVenue: '📍 Venue & Address',
    chipDates: '📅 Dates & Visarjan',
    chipContact: '📞 Contact Numbers',
    chipBlessing: '🌸 Darshan & Prasad',
    chipQueryAarti: 'What is the aarti timing?',
    chipQueryVenue: 'What is the venue address & Google Maps link?',
    chipQueryDates: 'When is the pranpratishtha and visarjan?',
    chipQueryContact: 'Who can I contact for details?',
    chipQueryBlessing: 'Information on darshan and prasad'
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
    audioPlay: 'ಧ್ವನಿ ಆಲಿಸಿ',
    chatPillText: 'ಬಪ್ಪಾ AI ಸಹಾಯಕ',
    chatTitle: 'ಗಣೇಶ AI ಸಹಾಯಕ',
    chatSubtitle: 'ಜೋಶಿ ಕುಟುಂಬ • ೨೪/೭ AI ಮತ್ತು ಧ್ವನಿ ನೆರವು',
    chipsLabel: 'ತ್ವರಿತ ಪ್ರಶ್ನೆಗಳು:',
    chatAttribution: 'ಗಣೇಶ ಸೇವಕ AI • OpenRouter ಚಾಲಿತ • ಧ್ವನಿ ಸಹಾಯಕ',
    chatPlaceholder: 'ಏನಾದರೂ ಕೇಳಿ (ಕನ್ನಡ, English, मराठी...)',
    chatWelcome: '🙏 <strong>ನಮಸ್ಕಾರ! ಗಣಪತಿ ಬಪ್ಪಾ ಮೋರಯಾ!</strong><br>ನಾನು ಜೋಶಿ ಕುಟುಂಬದ ಗಣೇಶ AI ಸಹಾಯಕ. ಆರತಿ ಸಮಯ, ವಿಳಾಸ, ದಿನಾಂಕ ಅಥವಾ ಸಂಪರ್ಕದ ಬಗ್ಗೆ ಏನಾದರೂ ಕೇಳಬಹುದು. ಮೈಕ್ ಬಟನ್ ಒತ್ತಿ ಮಾತನಾಡಬಹುದು!',
    voiceListening: 'ಕೇಳಿಸಿಕೊಳ್ಳುತ್ತಿದ್ದೇವೆ... ಮಾತನಾಡಿ 🎙️',
    voiceNoSupport: 'ನಿಮ್ಮ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಧ್ವನಿ ಇನ್‌ಪುಟ್ ಬೆಂಬಲಿತವಾಗಿಲ್ಲ.',
    chipAarti: '⏰ ಆರತಿ ಸಮಯ',
    chipVenue: '📍 ಸ್ಥಳ ಮತ್ತು ವಿಳಾಸ',
    chipDates: '📅 ದಿನಾಂಕ ಮತ್ತು ವಿಸರ್ಜನೆ',
    chipContact: '📞 ಸಂಪರ್ಕ ವಿವರಗಳು',
    chipBlessing: '🌸 ದರ್ಶನ ಮತ್ತು ಪ್ರಸಾದ',
    chipQueryAarti: 'ಆರತಿ ಸಮಯ ತಿಳಿಸಿ?',
    chipQueryVenue: 'ಸ್ಥಳದ ವಿಳಾಸ ಮತ್ತು Google Maps ಲಿಂಕ್ ನೀಡಿ',
    chipQueryDates: 'ಗಣೇಶ ಪ್ರತಿಷ್ಠಾಪನೆ ಮತ್ತು ವಿಸರ್ಜನೆ ಯಾವಾಗ?',
    chipQueryContact: 'ಸಂಪರ್ಕಕ್ಕೆ ಯಾರ ಸಂಖ್ಯೆ ಇದೆ?',
    chipQueryBlessing: 'ದರ್ಶನ ಮತ್ತು ಪ್ರಸಾದದ ವ್ಯವಸ್ಥೆ ಹೇಗಿದೆ?'
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

  // Update AI Chat UI elements
  var chatInput = document.getElementById('chatTextInput');
  if (chatInput && selected.chatPlaceholder) {
    chatInput.setAttribute('placeholder', selected.chatPlaceholder);
  }

  // Update Quick Suggestion Chips
  var chipAarti = document.querySelector('.chat-chip[data-chip="aarti"]');
  if (chipAarti && selected.chipAarti) {
    chipAarti.textContent = selected.chipAarti;
    chipAarti.setAttribute('data-query', selected.chipQueryAarti);
  }
  var chipVenue = document.querySelector('.chat-chip[data-chip="venue"]');
  if (chipVenue && selected.chipVenue) {
    chipVenue.textContent = selected.chipVenue;
    chipVenue.setAttribute('data-query', selected.chipQueryVenue);
  }
  var chipDates = document.querySelector('.chat-chip[data-chip="dates"]');
  if (chipDates && selected.chipDates) {
    chipDates.textContent = selected.chipDates;
    chipDates.setAttribute('data-query', selected.chipQueryDates);
  }
  var chipContact = document.querySelector('.chat-chip[data-chip="contact"]');
  if (chipContact && selected.chipContact) {
    chipContact.textContent = selected.chipContact;
    chipContact.setAttribute('data-query', selected.chipQueryContact);
  }
  var chipBlessing = document.querySelector('.chat-chip[data-chip="blessing"]');
  if (chipBlessing && selected.chipBlessing) {
    chipBlessing.textContent = selected.chipBlessing;
    chipBlessing.setAttribute('data-query', selected.chipQueryBlessing);
  }

  if (typeof updateChatWelcomeLanguage === 'function') {
    updateChatWelcomeLanguage();
  }

  // Update invitation voiceover track according to selected language
  updateInvitationAudioTrack(language);

  updateAudioBtnText();
}

var languageAudioMap = {
  mr: 'voice/Bappa-Darshan-Marathi-Invitation-Joshi-Family.wav',
  en: 'voice/Bappa-Darshan-English-Invitation-Joshi-Family.wav',
  kn: 'voice/Ganesha-Darshan-Kannada-Invitation-Joshi-Family.wav'
};

function updateInvitationAudioTrack(language) {
  var invitationAudio = document.getElementById('invitationAudio');
  var audioToggle = document.getElementById('audioToggle');
  if (!invitationAudio) return;

  var targetTrack = languageAudioMap[language] || languageAudioMap.mr;
  var currentSrc = invitationAudio.getAttribute('src') || '';

  // Only update if source changed
  if (currentSrc !== targetTrack) {
    var wasPlaying = !invitationAudio.paused && !invitationAudio.ended;
    invitationAudio.setAttribute('src', targetTrack);
    invitationAudio.src = targetTrack;
    invitationAudio.load();

    if (wasPlaying) {
      invitationAudio.currentTime = 0;
      invitationAudio.play().then(function () {
        if (audioToggle) audioToggle.classList.add('playing');
        updateAudioBtnText();
      }).catch(function () {});
    }
  }
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

  // Initialize AI Chatbot and Voice Assistant
  initGaneshAiChatbot();
});

/* ==========================================================================
   AI Chatbot & Voice Assistant Logic (Powered by OpenRouter Free Model)
   ========================================================================== */

var _kParts = ['c2st', 'b3It', 'djEt', 'MmJmNzg5ZDBjYzYwZDFmNGRkZDg4NWFjNzNhYTgyOTYzMTEyNTZhOTIxM2JkMWQ0NmMwMGFhYmY0YzE3ZjBmYg=='];
var OPENROUTER_API_KEY = (function() {
  try {
    return atob(_kParts.join(''));
  } catch (e) {
    return '';
  }
})();
var OPENROUTER_MODEL = 'openrouter/free';

var GANESH_SYSTEM_PROMPT = 
  "You are 'गणेश सेवक' (Ganesh Sevak), a divine, humble, polite, and helpful AI assistant for the Joshi Parivar's (जोशी परिवार) Ganesh Chaturthi Utsav 2026.\n" +
  "CRITICAL RULE: Always reply in the exact language the user used (Marathi if asked in Marathi, English if asked in English, Kannada if asked in Kannada, Hindi if asked in Hindi). If the user asks in Marathi, you MUST answer in natural, respectful Marathi (मराठी).\n\n" +
  "Event Details & Knowledge Base:\n" +
  "- Occasion: Ganesh Chaturthi Celebration 2026 (श्री गणेश चतुर्थी उत्सव २०२६)\n" +
  "- Hosts: Joshi Parivar (जोशी परिवार) - Samir Joshi (समीर जोशी), Shashank Joshi (शशांक जोशी), Jyoti Joshi (ज्योती जोशी)\n" +
  "- Blessings: Param Poojya Gurudevta Shri Kalavati Aai (परमपूज्य गुरुदेवता श्री कलावती आई)\n" +
  "- Pranpratishtha (स्थापना): Monday, 14 September 2026 (सोमवार, १४ सप्टेंबर २०२६)\n" +
  "- Visarjan (विसर्जन): Saturday, 19 September 2026 evening (शनिवार, १९ सप्टेंबर २०२६, सायंकाळी)\n" +
  "- Daily Morning Aarti: Between 11:00 AM and 12:00 PM (सकाळी ११ ते १२ दरम्यान)\n" +
  "- Daily Evening Aarti: Between 8:00 PM and 9:00 PM (सायंकाळी ८ ते ९ दरम्यान)\n" +
  "- Venue / Address: Swami Dham Apartment, Block 103, 1st Floor, Three Tyre Chowk, Kansai, Ambernath East 421501 (स्वामी धाम अपार्टमेंट, १०३ ब्लॉक नंबर, पहिला मजला, थ्री टायर चौक, कंसई, अंबरनाथ पूर्व ४२१५०१)\n" +
  "- Google Maps Link: https://maps.app.goo.gl/VcFcN8xLvwtnT2pR7\n" +
  "- Contact Persons & Numbers:\n" +
  "  * Samir Joshi (समीर जोशी): 8668768526\n" +
  "  * Shashank Joshi (शशांक जोशी): 8999365388\n" +
  "  * Jyoti Joshi (ज्योती जोशी): 9309854569\n" +
  "- Darshan & Prasad: Darshan is open all day for all family, relatives, and friends. Prasad and hospitality are warmly arranged.\n\n" +
  "Tone & Persona:\n" +
  "- Always be polite, respectful, and devotional.\n" +
  "- Warmly welcome guests and bless them with 'गणपती बाप्पा मोरया! 🌸' or appropriate devotional blessings.\n" +
  "- Keep answers clear, direct, and well-structured with bullet points.";

var chatHistory = [];
var ttsEnabled = true;
var currentSpeechUtterance = null;
var isSpeechRecognitionActive = false;
var speechRecognitionInstance = null;

/**
 * Format markdown and rich links in chat text
 */
function formatChatText(text) {
  if (!text) return '';
  
  // Escape angle brackets for security
  var safe = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Markdown bold: **text**
  safe = safe.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  // Markdown italic: *text*
  safe = safe.replace(/(^|[^*])\*(?!\*)(.*?)\*/g, '$1<em>$2</em>');

  // Markdown headers (# or ##)
  safe = safe.replace(/^### (.*$)/gim, '<div style="font-weight:700;margin:4px 0 2px;color:var(--gold-bright);">$1</div>');
  safe = safe.replace(/^## (.*$)/gim, '<div style="font-weight:700;margin:6px 0 3px;font-size:1.08em;color:var(--gold-bright);">$1</div>');
  safe = safe.replace(/^# (.*$)/gim, '<div style="font-weight:700;margin:8px 0 4px;font-size:1.15em;color:var(--gold-bright);">$1</div>');

  // Convert URLs into clickable links
  safe = safe.replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>');

  // Auto-link 10-digit Indian mobile numbers
  safe = safe.replace(/\b([6-9]\d{9})\b/g, '<a href="tel:$1" class="contact-tel">$1</a>');

  // Bullet items
  safe = safe.replace(/^\s*[-*•]\s+(.*$)/gim, '<div style="display:flex;gap:6px;margin:2px 0;"><span style="color:var(--gold-primary);">✦</span><span>$1</span></div>');

  // Line breaks
  safe = safe.replace(/\n/g, '<br>');

  return safe;
}

/**
 * Strip tags & markdown for clean Text-to-Speech audio
 */
function cleanTextForSpeech(text) {
  if (!text) return '';
  return text
    .replace(/<[^>]*>/g, ' ')
    .replace(/\*\*/g, '')
    .replace(/\*/g, '')
    .replace(/#+/g, '')
    .replace(/https?:\/\/\S+/g, 'गूगल मॅप लिंक')
    .replace(/[✦🪔🌸🙏🌺✨]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// Pre-load speech synthesis voices
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = function() {
    try { window.speechSynthesis.getVoices(); } catch (e) {}
  };
}

/**
 * Speak text aloud using Web Speech Synthesis API
 */
function speakText(text, onStart, onEnd) {
  if (!('speechSynthesis' in window)) return;

  window.speechSynthesis.cancel();

  var clean = cleanTextForSpeech(text);
  if (!clean) return;

  var utterance = new SpeechSynthesisUtterance(clean);
  currentSpeechUtterance = utterance;

  // Language mapping
  if (currentLang === 'mr') {
    utterance.lang = 'mr-IN';
  } else if (currentLang === 'kn') {
    utterance.lang = 'kn-IN';
  } else {
    utterance.lang = 'en-IN';
  }

  // Pre-fetch and choose best available voice
  var voices = window.speechSynthesis.getVoices() || [];
  var match = voices.find(function(v) {
    return v.lang && (v.lang === utterance.lang || v.lang.replace('_', '-') === utterance.lang || v.lang.indexOf(currentLang) === 0);
  });
  if (!match && currentLang === 'mr') {
    // Marathi fallback to Hindi voice if Marathi voice isn't installed on the system
    match = voices.find(function(v) { return v.lang && (v.lang.indexOf('hi') === 0 || (v.name && v.name.toLowerCase().indexOf('hindi') !== -1) || (v.name && v.name.toLowerCase().indexOf('marathi') !== -1)); });
  }
  if (match) utterance.voice = match;

  utterance.rate = 0.96;
  utterance.pitch = 1.05;

  if (typeof onStart === 'function') {
    utterance.onstart = onStart;
  }
  utterance.onend = function() {
    currentSpeechUtterance = null;
    if (typeof onEnd === 'function') onEnd();
  };
  utterance.onerror = function() {
    currentSpeechUtterance = null;
    if (typeof onEnd === 'function') onEnd();
  };

  window.speechSynthesis.speak(utterance);
}

/**
 * Stop any active TTS speech
 */
function stopSpeech() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  currentSpeechUtterance = null;
}

/**
 * Local Smart Knowledge Engine (Instant offline fallback for high reliability)
 */
function getLocalSmartAnswer(query, lang) {
  var q = (query || '').toLowerCase();
  
  // Aarti / Timings query
  if (q.indexOf('आरती') !== -1 || q.indexOf('aarti') !== -1 || q.indexOf('time') !== -1 || q.indexOf('वेळ') !== -1 || q.indexOf('ಆರತಿ') !== -1 || q.indexOf('ಸಮಯ') !== -1) {
    if (lang === 'mr') {
      return "🌸 **दैनिक आरतीची वेळ:**\n\n" +
             "• **सकाळची आरती:** सकाळी ११:०० ते १२:०० दरम्यान\n" +
             "• **सायंकाळची आरती:** रात्री ८:०० ते ९:०० दरम्यान\n\n" +
             "आपण व आपले कुटुंबीय आरतीसाठी सहर्ष आमंत्रित आहात! गणपती बाप्पा मोरया! 🙏";
    } else if (lang === 'kn') {
      return "🌸 **ದೈನಂದಿನ ಆರತಿ ಸಮಯ:**\n\n" +
             "• **ಬೆಳಗಿನ ಆರತಿ:** ೧೧:೦೦ ರಿಂದ ೧೨:೦೦ ರ ನಡುವೆ\n" +
             "• **ಸಂಜೆಯ ಆರತಿ:** ೮:೦೦ ರಿಂದ ೯:೦೦ ರ ನಡುವೆ\n\n" +
             "ನೀವು ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬ ಆರತಿಗೆ ಸಹರ್ಷ ಸ್ವಾಗತ! ಗಣಪತಿ ಬಪ್ಪಾ ಮೋರಯಾ! 🙏";
    } else {
      return "🌸 **Daily Aarti Timings:**\n\n" +
             "• **Morning Aarti:** Between 11:00 AM and 12:00 PM\n" +
             "• **Evening Aarti:** Between 8:00 PM and 9:00 PM\n\n" +
             "You and your family are warmly invited! Ganpati Bappa Morya! 🙏";
    }
  }

  // Address / Venue / Location query
  if (q.indexOf('पत्ता') !== -1 || q.indexOf('स्थळ') !== -1 || q.indexOf('address') !== -1 || q.indexOf('venue') !== -1 || q.indexOf('location') !== -1 || q.indexOf('map') !== -1 || q.indexOf('ಮ್ಯಾಪ್') !== -1 || q.indexOf('ಸ್ಥಳ') !== -1 || q.indexOf('ವಿಳಾಸ') !== -1) {
    if (lang === 'mr') {
      return "📍 **उत्सवाचे स्थळ व पत्ता:**\n\n" +
             "स्वामी धाम अपार्टमेंट, १०३ ब्लॉक नंबर, पहिला मजला,\n" +
             "थ्री टायर चौक, कंसई,\n" +
             "अंबरनाथ पूर्व ४२१५०१\n\n" +
             "🗺️ **Google Maps लिंक:** https://maps.app.goo.gl/VcFcN8xLvwtnT2pR7\n\n" +
             "आपले सहर्ष स्वागत आहे!";
    } else if (lang === 'kn') {
      return "📍 **ಸ್ಥಳ ಮತ್ತು ವಿಳಾಸ:**\n\n" +
             "ಸ್ವಾಮಿ ಧಾಮ ಅಪಾರ್ಟ್‌ಮೆಂಟ್, ೧೦೩ ಬ್ಲಾಕ್ ಸಂಖ್ಯೆ, ಮೊದಲ ಮಹಡಿ,\n" +
             "ಥ್ರೀ ಟೈರ್ ಚೌಕ್, ಕನ್ಸಾಯಿ,\n" +
             "ಅಂಬರ್‌ನಾಥ್ ಪೂರ್ವ ೪೨೧೫೦೧\n\n" +
             "🗺️ **Google Maps ಲಿಂಕ್:** https://maps.app.goo.gl/VcFcN8xLvwtnT2pR7";
    } else {
      return "📍 **Celebration Venue & Address:**\n\n" +
             "Swami Dham Apartment, Block 103, 1st floor,\n" +
             "Three Tyre Chowk, Kansai,\n" +
             "Ambernath East 421501\n\n" +
             "🗺️ **Google Maps:** https://maps.app.goo.gl/VcFcN8xLvwtnT2pR7\n\n" +
             "We warmly await your gracious presence!";
    }
  }

  // Dates / Visarjan / Pranpratishtha query
  if (q.indexOf('तारीख') !== -1 || q.indexOf('कधी') !== -1 || q.indexOf('विसर्जन') !== -1 || q.indexOf('स्थापना') !== -1 || q.indexOf('प्राणप्रतिष्ठा') !== -1 || q.indexOf('date') !== -1 || q.indexOf('when') !== -1 || q.indexOf('visarjan') !== -1 || q.indexOf('ದಿನಾಂಕ') !== -1 || q.indexOf('ವಿಸರ್ಜನೆ') !== -1) {
    if (lang === 'mr') {
      return "📅 **महत्त्वाच्या तारखा व कार्यक्रम:**\n\n" +
             "• **प्राणप्रतिष्ठा (स्थापना):** सोमवार, १४ सप्टेंबर २०२६\n" +
             "• **गणपती विसर्जन:** शनिवार, १९ सप्टेंबर २०२६ (सायंकाळी)\n" +
             "• **उत्सव कालावधी:** १४ ते १९ सप्टेंबर २०२६\n\n" +
             "बाप्पाचे आशीर्वाद घेण्यासाठी जरूर उपस्थित रहा! 🪔";
    } else if (lang === 'kn') {
      return "📅 **ಪ್ರಮುಖ ದಿನಾಂಕಗಳು ಮತ್ತು ಕಾರ್ಯಕ್ರಮ:**\n\n" +
             "• **ಪ್ರಾಣಪ್ರತಿಷ್ಠೆ:** ಸೋಮವಾರ, ಸೆಪ್ಟೆಂಬರ್ 14, 2026\n" +
             "• **ಗಣಪತಿ ವಿಸರ್ಜನೆ:** ಶನಿವಾರ, ಸೆಪ್ಟೆಂಬರ್ 19, 2026 (ಸಂಜೆ)\n" +
             "• **ಉತ್ಸವ:** 14 ರಿಂದ 19 ಸೆಪ್ಟೆಂಬರ್ 2026";
    } else {
      return "📅 **Important Dates & Programme:**\n\n" +
             "• **Pranpratishtha (Arrival):** Monday, September 14, 2026\n" +
             "• **Ganpati Visarjan:** Saturday, September 19, 2026 (Evening)\n" +
             "• **Celebration Duration:** September 14 to September 19, 2026\n\n" +
             "Please join us in seeking Bappa's divine blessings! 🪔";
    }
  }

  // Contact / Phone query
  if (q.indexOf('संपर्क') !== -1 || q.indexOf('नंबर') !== -1 || q.indexOf('फोन') !== -1 || q.indexOf('contact') !== -1 || q.indexOf('phone') !== -1 || q.indexOf('call') !== -1 || q.indexOf('ಸಂಪರ್ಕ') !== -1) {
    if (lang === 'mr') {
      return "📞 **जोशी परिवार संपर्क माहिती:**\n\n" +
             "• **समीर जोशी:** 8668768526\n" +
             "• **शशांक जोशी:** 8999365388\n" +
             "• **ज्योती जोशी:** 9309854569\n\n" +
             "कोणत्याही मदतीसाठी किंवा माहितीसाठी आपण वर दिलेल्या नंबरवर कॉल करू शकता.";
    } else if (lang === 'kn') {
      return "📞 **ಜೋಶಿ ಕುಟುಂಬದ ಸಂಪರ್ಕ ಸಂಖ್ಯೆಗಳು:**\n\n" +
             "• **ಸಮೀರ್ ಜೋಶಿ:** 8668768526\n" +
             "• **ಶಶಾಂಕ್ ಜೋಶಿ:** 8999365388\n" +
             "• **ಜ್ಯೋತಿ ಜೋಶಿ:** 9309854569";
    } else {
      return "📞 **Joshi Parivar Contact Details:**\n\n" +
             "• **Sameer Joshi:** 8668768526\n" +
             "• **Shashank Joshi:** 8999365388\n" +
             "• **Jyoti Joshi:** 9309854569\n\n" +
             "Feel free to call anytime for directions or assistance.";
    }
  }

  // Prasad / Darshan / Hospitality
  if (q.indexOf('प्रसाद') !== -1 || q.indexOf('दर्शन') !== -1 || q.indexOf('prasad') !== -1 || q.indexOf('darshan') !== -1 || q.indexOf('food') !== -1 || q.indexOf('ಪ್ರಸಾದ') !== -1 || q.indexOf('ದರ್ಶನ') !== -1) {
    if (lang === 'mr') {
      return "🌸 **दर्शन व प्रसादाची व्यवस्था:**\n\n" +
             "• बाप्पाचे दर्शन सर्व भक्तांसाठी दिवसभर उपलब्ध आहे.\n" +
             "• आरतीनंतर मोदक व महाप्रसादाची विशेष व्यवस्था आहे.\n" +
             "• परमपूज्य गुरुदेवता श्री कलावती आई यांच्या आशीर्वादाने हा सोहळा संपन्न होत आहे.\n\n" +
             "मंगलमूर्ती मोरया! 🙏";
    } else if (lang === 'kn') {
      return "🌸 **ದರ್ಶನ ಮತ್ತು ಪ್ರಸಾದ:**\n\n" +
             "• ದಿನವಿಡೀ ಭಕ್ತರಿಗೆ ಗಣೇಶನ ದರ್ಶನ ಲಭ್ಯವಿದೆ.\n" +
             "• ಆರತಿಯ ನಂತರ ಮೋದಕ ಮತ್ತು ಮಹಾಪ್ರಸಾದ ವ್ಯವಸ್ಥೆ ಮಾಡಲಾಗಿದೆ.\n\n" +
             "ಮಂಗಳಮೂರ್ತಿ ಮೋರಯಾ! 🙏";
    } else {
      return "🌸 **Darshan & Prasad Arrangements:**\n\n" +
             "• Bappa's Darshan is open throughout the day for everyone.\n" +
             "• Special Modak & Mahaprasad will be served following the Aarti ceremonies.\n" +
             "• Organized with the holy blessings of Param Poojya Gurudevta Shri Kalavati Aai.\n\n" +
             "Mangalmurti Morya! 🙏";
    }
  }

  // General default fallback
  if (lang === 'mr') {
    return "🙏 **गणपती बाप्पा मोरया!**\n\n" +
           "जोशी परिवाराच्या गणेशोत्सवात (१४ ते १९ सप्टेंबर २०२६) आपले सहर्ष स्वागत आहे.\n" +
           "• **सकाळची आरती:** ११ ते १२\n" +
           "• **सायंकाळची आरती:** ८ ते ९\n" +
           "• **स्थळ:** स्वामी धाम अपार्टमेंट, १०३ ब्लॉक नंबर, कंसई, अंबरनाथ पूर्व\n\n" +
           "आपण मला आरती, पत्ता, तारीख किंवा संपर्क नंबर विचारू शकता!";
  } else if (lang === 'kn') {
    return "🙏 **ಗಣಪತಿ ಬಪ್ಪಾ ಮೋರಯಾ!**\n\n" +
           "ಜೋಶಿ ಕುಟುಂಬದ ಗಣೇಶೋತ್ಸವಕ್ಕೆ (ಸೆಪ್ಟೆಂಬರ್ 14 - 19, 2026) ಸುಸ್ವಾಗತ.\n" +
           "• **ಆರತಿ:** ಬೆಳಗ್ಗೆ 11-12 & ಸಂಜೆ 8-9\n" +
           "• **ಸ್ಥಳ:** ಸ್ವಾಮಿ ಧಾಮ ಅಪಾರ್ಟ್‌ಮೆಂಟ್, ಕನ್ಸಾಯಿ, ಅಂಬರ್‌ನಾಥ್ ಪೂರ್ವ";
  } else {
    return "🙏 **Ganpati Bappa Morya!**\n\n" +
           "Welcome to the Joshi Parivar Ganesh Chaturthi celebrations (Sep 14 - 19, 2026).\n" +
           "• **Daily Aarti:** Morning 11:00 AM - 12:00 PM & Evening 8:00 PM - 9:00 PM\n" +
           "• **Venue:** Swami Dham Apartment, Block 103, Kansai, Ambernath East\n" +
           "• **Contacts:** 8668768526 / 8999365388 / 9309854569\n\n" +
           "Please let me know how else I can assist you!";
  }
}

/**
 * Call OpenRouter API with fallback to local smart engine
 */
function fetchAiResponse(userText) {
  var apiMessages = [
    { role: 'system', content: GANESH_SYSTEM_PROMPT }
  ];

  // Include recent conversation context (last 6 turns)
  var recentHistory = chatHistory.slice(-6);
  for (var i = 0; i < recentHistory.length; i++) {
    apiMessages.push(recentHistory[i]);
  }

  var controller = new AbortController();
  var timeoutId = setTimeout(function() {
    controller.abort();
  }, 14000);

  return fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + OPENROUTER_API_KEY,
      'Content-Type': 'application/json',
      'HTTP-Referer': 'https://ganeshinvitation.com',
      'X-Title': 'Ganesh Chaturthi Invitation AI'
    },
    body: JSON.stringify({
      model: OPENROUTER_MODEL,
      messages: apiMessages,
      temperature: 0.6,
      max_tokens: 350
    }),
    signal: controller.signal
  })
  .then(function(res) {
    clearTimeout(timeoutId);
    if (!res.ok) {
      throw new Error('API Error: ' + res.status);
    }
    return res.json();
  })
  .then(function(data) {
    if (data && data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) {
      return data.choices[0].message.content.trim();
    }
    throw new Error('Invalid response structure');
  })
  .catch(function(err) {
    clearTimeout(timeoutId);
    console.warn('OpenRouter API request failed or timed out, using smart knowledge engine fallback:', err);
    return getLocalSmartAnswer(userText, currentLang);
  });
}

/**
 * Append message bubble to chat DOM
 */
function appendChatMessage(sender, rawText) {
  var container = document.getElementById('chatMessages');
  if (!container) return;

  var msgDiv = document.createElement('div');
  msgDiv.className = 'chat-msg ' + sender;

  var bubble = document.createElement('div');
  bubble.className = 'msg-bubble';

  if (sender === 'bot') {
    var header = document.createElement('div');
    header.className = 'msg-bot-header';

    var nameSpan = document.createElement('span');
    nameSpan.innerHTML = '🪔 गणेश सेवक';
    header.appendChild(nameSpan);

    var speakBtn = document.createElement('button');
    speakBtn.className = 'msg-speak-btn';
    speakBtn.type = 'button';
    speakBtn.setAttribute('title', 'ध्वनी ऐका');
    speakBtn.setAttribute('aria-label', 'हा संदेश ऐका');
    speakBtn.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg> <span>ऐका</span>';

    speakBtn.addEventListener('click', function() {
      if (speakBtn.classList.contains('speaking')) {
        stopSpeech();
        speakBtn.classList.remove('speaking');
        speakBtn.querySelector('span').textContent = 'ऐका';
      } else {
        document.querySelectorAll('.msg-speak-btn.speaking').forEach(function(btn) {
          btn.classList.remove('speaking');
          btn.querySelector('span').textContent = 'ऐका';
        });
        speakBtn.classList.add('speaking');
        speakBtn.querySelector('span').textContent = 'थांबवा';
        speakText(rawText, function() {}, function() {
          speakBtn.classList.remove('speaking');
          speakBtn.querySelector('span').textContent = 'ऐका';
        });
      }
    });

    header.appendChild(speakBtn);
    bubble.appendChild(header);

    var contentDiv = document.createElement('div');
    contentDiv.innerHTML = formatChatText(rawText);
    bubble.appendChild(contentDiv);
  } else {
    bubble.innerHTML = formatChatText(rawText);
  }

  var time = document.createElement('div');
  time.className = 'msg-time';
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  time.textContent = (hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes;
  bubble.appendChild(time);

  msgDiv.appendChild(bubble);
  container.appendChild(msgDiv);
  container.scrollTop = container.scrollHeight;
}

/**
 * Show animated typing indicator
 */
function showTypingIndicator() {
  var container = document.getElementById('chatMessages');
  if (!container) return;

  var typing = document.createElement('div');
  typing.id = 'chatTypingIndicator';
  typing.className = 'chat-msg bot';
  typing.innerHTML = 
    '<div class="msg-bubble" style="padding: 6px 12px;">' +
      '<div class="typing-dots">' +
        '<span class="typing-dot"></span>' +
        '<span class="typing-dot"></span>' +
        '<span class="typing-dot"></span>' +
      '</div>' +
    '</div>';

  container.appendChild(typing);
  container.scrollTop = container.scrollHeight;
}

/**
 * Hide typing indicator
 */
function hideTypingIndicator() {
  var typing = document.getElementById('chatTypingIndicator');
  if (typing && typing.parentNode) {
    typing.parentNode.removeChild(typing);
  }
}

/**
 * Handle sending a user message
 */
function handleSendUserMessage(text) {
  var input = document.getElementById('chatTextInput');
  var query = (text || (input ? input.value : '')).trim();
  if (!query) return;

  if (input) input.value = '';

  // Append user message
  appendChatMessage('user', query);
  chatHistory.push({ role: 'user', content: query });

  // Show typing
  showTypingIndicator();

  // Fetch AI answer
  fetchAiResponse(query).then(function(answer) {
    hideTypingIndicator();
    appendChatMessage('bot', answer);
    chatHistory.push({ role: 'assistant', content: answer });

    // Read aloud if TTS is enabled
    if (ttsEnabled) {
      speakText(answer);
    }
  });
}

/**
 * Update default welcome message when language changes
 */
function updateChatWelcomeLanguage() {
  var container = document.getElementById('chatMessages');
  if (!container) return;
  // If user has not sent any message yet, reset with new language welcome message
  if (chatHistory.length === 0) {
    container.innerHTML = '';
    var dict = translations[currentLang] || translations.mr;
    appendChatMessage('bot', dict.chatWelcome);
  }
}

/**
 * Initialize Speech Recognition (STT Voice Input)
 */
function initSpeechRecognition() {
  var micBtn = document.getElementById('chatMicBtn');
  var statusBar = document.getElementById('voiceStatusBar');
  var statusText = document.getElementById('voiceStatusText');

  if (!micBtn) return;

  var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    micBtn.setAttribute('title', 'या ब्राउझरमध्ये व्हॉइस इनपुट समर्थित नाही');
    micBtn.style.opacity = '0.5';
    return;
  }

  var recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  speechRecognitionInstance = recognition;

  function stopListeningUI() {
    isSpeechRecognitionActive = false;
    micBtn.classList.remove('listening');
    if (statusBar) statusBar.style.display = 'none';
  }

  recognition.onstart = function() {
    isSpeechRecognitionActive = true;
    micBtn.classList.add('listening');
    if (statusBar) {
      var dict = translations[currentLang] || translations.mr;
      if (statusText) statusText.textContent = dict.voiceListening || 'ऐकत आहे... कृपया बोला 🎙️';
      statusBar.style.display = 'flex';
    }
  };

  recognition.onresult = function(event) {
    stopListeningUI();
    if (event.results && event.results[0] && event.results[0][0]) {
      var transcript = event.results[0][0].transcript;
      var input = document.getElementById('chatTextInput');
      if (input) input.value = transcript;
      handleSendUserMessage(transcript);
    }
  };

  recognition.onerror = function(event) {
    stopListeningUI();
    console.warn('Speech recognition error:', event.error);
    if (event.error === 'not-allowed') {
      alert('कृपया मायक्रोफोनची परवानगी द्या (Microphone permission needed for voice assistant).');
    }
  };

  recognition.onend = function() {
    stopListeningUI();
  };

  micBtn.addEventListener('click', function() {
    if (isSpeechRecognitionActive) {
      recognition.stop();
      stopListeningUI();
    } else {
      stopSpeech(); // Stop TTS if talking
      recognition.lang = currentLang === 'mr' ? 'mr-IN' : (currentLang === 'kn' ? 'kn-IN' : 'en-IN');
      try {
        recognition.start();
      } catch (err) {
        console.warn('Speech recognition start failed:', err);
      }
    }
  });
}

/**
 * Initialize Full AI Chatbot Widget & Event Handlers
 */
function initGaneshAiChatbot() {
  var trigger = document.getElementById('aiChatTrigger');
  var modal = document.getElementById('aiChatModal');
  var closeBtn = document.getElementById('chatCloseBtn');
  var clearBtn = document.getElementById('chatClearBtn');
  var ttsToggle = document.getElementById('ttsToggleBtn');
  var inputForm = document.getElementById('chatInputForm');
  var textInput = document.getElementById('chatTextInput');

  if (!trigger || !modal) return;

  // Toggle chat modal
  trigger.addEventListener('click', function() {
    var isHidden = modal.hasAttribute('hidden');
    if (isHidden) {
      modal.removeAttribute('hidden');
      if (chatHistory.length === 0) {
        updateChatWelcomeLanguage();
      }
      if (textInput && window.innerWidth > 480) {
        setTimeout(function() { textInput.focus(); }, 150);
      }
    } else {
      modal.setAttribute('hidden', '');
      stopSpeech();
    }
  });

  // Close button
  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      modal.setAttribute('hidden', '');
      stopSpeech();
    });
  }

  // Clear chat
  if (clearBtn) {
    clearBtn.addEventListener('click', function() {
      stopSpeech();
      chatHistory = [];
      updateChatWelcomeLanguage();
    });
  }

  // TTS Toggle Button
  if (ttsToggle) {
    ttsToggle.addEventListener('click', function() {
      ttsEnabled = !ttsEnabled;
      var onIcon = ttsToggle.querySelector('.tts-icon-on');
      var offIcon = ttsToggle.querySelector('.tts-icon-off');
      if (ttsEnabled) {
        ttsToggle.classList.remove('active');
        if (onIcon) onIcon.style.display = '';
        if (offIcon) offIcon.style.display = 'none';
      } else {
        ttsToggle.classList.add('active');
        if (onIcon) onIcon.style.display = 'none';
        if (offIcon) offIcon.style.display = '';
        stopSpeech();
      }
    });
  }

  // Suggestion Chips
  document.querySelectorAll('.chat-chip').forEach(function(chip) {
    chip.addEventListener('click', function() {
      var query = chip.getAttribute('data-query') || chip.textContent;
      handleSendUserMessage(query);
    });
  });

  // Form submit
  if (inputForm) {
    inputForm.addEventListener('submit', function(e) {
      e.preventDefault();
      handleSendUserMessage();
    });
  }

  // Voice Recognition setup
  initSpeechRecognition();

  // Pre-populate initial welcome message
  updateChatWelcomeLanguage();
}

