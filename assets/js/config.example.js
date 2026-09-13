/**
 * Example / Template Configuration File
 *
 * Copy this file to `config.js` and fill in your actual private details:
 *   cp config.example.js config.js
 *
 * NOTE: `config.js` is included in `.gitignore` so your personal details and
 * API credentials won't be exposed in your public repository.
 */
window.APP_CONFIG = {
  // OpenRouter Free Model API Key (Replace with your own or leave empty for local offline fallback)
  openRouterApiKey: 'YOUR_OPENROUTER_API_KEY',

  // Contacts Registry
  contacts: [
    {
      id: 'contact_1',
      keys: ['sameer', 'samir', 'समीर', 'ಸಮೀರ್'],
      phone: '+91 98XXXXXXXX',
      name: {
        mr: 'समीर जोशी',
        en: 'Sameer Joshi',
        kn: 'ಸಮೀರ್ ಜೋಶಿ'
      },
      role: {
        mr: 'मुख्य यजमान (Chief Host)',
        en: 'Chief Host',
        kn: 'ಮುಖ್ಯ ಆಯೋಜಕರು'
      },
      bio: {
        mr: 'हे जोशी परिवाराचे मुख्य यजमान आहेत.',
        en: 'is a key host from the Joshi Parivar.',
        kn: 'ಜೋಶಿ ಕುಟುಂಬದ ಪ್ರಮುಖ ಆಯೋಜಕರು.'
      }
    },
    {
      id: 'contact_2',
      keys: ['shashank', 'शशांक', 'ಶಶಾಂಕ್'],
      phone: '+91 98XXXXXXXX',
      name: {
        mr: 'शशांक जोशी',
        en: 'Shashank Joshi',
        kn: 'ಶಶಾಂಕ್ ಜೋಶಿ'
      },
      role: {
        mr: 'यजमान व परिवार सदस्य',
        en: 'Host & Family Member',
        kn: 'ಆಯೋಜಕರು ಮತ್ತು ಕುಟುಂಬ ಸದಸ್ಯರು'
      },
      bio: {
        mr: 'हे जोशी परिवाराचे सदस्य व यजमान आहेत.',
        en: 'is a family member and host from the Joshi Parivar.',
        kn: 'ಜೋಶಿ ಕುಟುಂಬದ ಸದಸ್ಯರು.'
      }
    },
    {
      id: 'contact_3',
      keys: ['jyoti', 'ज्योती', 'ಜ್ಯೋತಿ'],
      phone: '+91 98XXXXXXXX',
      name: {
        mr: 'ज्योती जोशी',
        en: 'Jyoti Joshi',
        kn: 'ಜ್ಯೋತಿ ಜೋಶಿ'
      },
      role: {
        mr: 'यजमान व परिवार सदस्या',
        en: 'Host & Family Member',
        kn: 'ಆಯೋಜಕರು ಮತ್ತು ಕುಟುಂಬ ಸದಸ್ಯರು'
      },
      bio: {
        mr: 'या जोशी परिवाराच्या सदस्या व यजमान आहेत.',
        en: 'is a family member and host from the Joshi Parivar.',
        kn: 'ಜೋಶಿ ಕುಟುಂಬದ ಸದಸ್ಯರು.'
      }
    },
    {
      id: 'contact_4',
      keys: ['siddhi', 'सिद्धी', 'ಸಿದ್ಧಿ'],
      phone: '+91 98XXXXXXXX',
      name: {
        mr: 'सिद्धी जोशी',
        en: 'Siddhi Joshi',
        kn: 'ಸಿದ್ಧಿ ಜೋಶಿ'
      },
      role: {
        mr: 'यजमान व परिवार सदस्या',
        en: 'Host & Family Member',
        kn: 'ಆಯೋಜಕರು ಮತ್ತು ಕುಟುಂಬ ಸದಸ್ಯರು'
      },
      bio: {
        mr: 'या जोशी परिवाराच्या सदस्या व यजमान आहेत.',
        en: 'is a family member and host from the Joshi Parivar.',
        kn: 'ಜೋಶಿ ಕುಟುಂಬದ ಸದಸ್ಯರು.'
      }
    }
  ],

  // Venue & Location
  venue: {
    address: {
      mr: 'यजमानांचे नाव,<br>इमारतीचे नाव,<br>फ्लॅट / ब्लॉक नंबर,<br>परिसर / चौक,<br>शहर व पिनकोड',
      en: 'Host Name,<br>Building Name,<br>Flat / Block No,<br>Area / Landmark,<br>City & Pincode',
      kn: 'ಆಯೋಜಕರ ಹೆಸರು,<br>ಕಟ್ಟಡದ ಹೆಸರು,<br>ಬ್ಲಾಕ್ ಸಂಖ್ಯೆ,<br>ಪ್ರದೇಶ,<br>ನಗರ ಮತ್ತು ಪಿನ್‌ಕೋಡ್'
    },
    mapUrl: 'https://maps.google.com/?q=Mumbai',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Mumbai&t=&z=14&ie=UTF8&iwloc=&output=embed'
  }
};
