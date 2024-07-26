// Get DOM elements
const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');
const startDateEl = document.getElementById('start-date');
const endDateEl = document.getElementById('end-date');
const fetchHistoryBtn = document.getElementById('fetch-history');
const chartContainer = document.getElementById('chart-container');
const favoriteList = document.getElementById('favorite-list');
const addFavoriteBtn = document.getElementById('add-favorite');
const toggleDarkModeBtn = document.getElementById('toggle-dark-mode');
const feeEl = document.getElementById('conversion-fee');
const copyBtn = document.getElementById('copy-result');
const languageSelect = document.getElementById('language');

// Symbols for currencies
const symbols = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  NGN: '₦',
  RON: 'lei',
  AED: 'د.إ',
  ARS: '$',
  AUD: 'A$',
  BGN: 'лв',
  BRL: 'R$',
  BSD: 'B$',
  CAD: 'C$',
  CHF: 'CHF',
  CLP: '$',
  CNY: '¥',
  COP: '$',
  CZK: 'Kč',
  DKK: 'kr',
  DOP: 'RD$',
  EGP: '£',
  FJD: '$',
  GTQ: 'Q',
  HKD: 'HK$',
  HRK: 'kn',
  HUF: 'Ft',
  IDR: 'Rp',
  ILS: '₪',
  INR: '₹',
  ISK: 'kr',
  JPY: '¥',
  KRW: '₩',
  KZT: '₸',
  MXN: '$',
  MYR: 'RM',
  NOK: 'kr',
  NZD: 'NZ$',
  PAB: 'B/.',
  PEN: 'S/',
  PHP: '₱',
  PKR: '₨',
  PLN: 'zł',
  PYG: '₲',
  SAR: 'ر.س',
  SEK: 'kr',
  SGD: 'S$',
  THB: '฿',
  TRY: '₺',
  TWD: 'NT$',
  UAH: '₴',
  UYU: '$U',
  VND: '₫',
  ZAR: 'R'
  // Add symbols for other supported currencies
};

// Translations
const translations = {
  en: {
    title: "Currency Converter",
    description: "Choose the currency and the amounts to get the exchange rate",
    chooseLanguage: "Choose Language:",
    swap: "Swap",
    fetchHistory: "Fetch History",
    addFavorite: "Add Favorite",
    copyResult: "Copy Result",
    toggleDarkMode: "Toggle Dark Mode",
    conversionFee: "Conversion Fee (%)",
    favoriteCurrenciesTitle: "Favorite Currencies",
    remove: "Remove"
  },
  es: {
    title: "Convertidor de Moneda",
    description: "Elija la moneda y las cantidades para obtener el tipo de cambio",
    chooseLanguage: "Elige Lengua:",
    swap: "Intercambiar",
    fetchHistory: "Obtener Historial",
    addFavorite: "Añadir Favorito",
    copyResult: "Copiar Resultado",
    toggleDarkMode: "Alternar Modo Oscuro",
    conversionFee: "Tasa de Conversión (%)",
    favoriteCurrenciesTitle: "Monedas Favoritas",
    remove: "Eliminar"
  },
  fr: {
    title: "Convertisseur de Devises",
    description: "Choisissez la monnaie et les montants pour obtenir le taux de change",
    chooseLanguage: "Choisir la Langue:",
    swap: "Échanger",
    fetchHistory: "Obtenir l'Historique",
    addFavorite: "Ajouter aux Favoris",
    copyResult: "Copier le Résultat",
    toggleDarkMode: "Basculer en Mode Sombre",
    conversionFee: "Frais de Conversion (%)",
    favoriteCurrenciesTitle: "Devises Préférées",
    remove: "Supprimer"
  },
  de: {
    title: "Währungsumrechner",
    description: "Wählen Sie die Währung und die Beträge, um den Wechselkurs zu erhalten",
    chooseLanguage: "Sprache Wählen:",
    swap: "Tauschen",
    fetchHistory: "Verlauf Abrufen",
    addFavorite: "Favorit Hinzufügen",
    copyResult: "Ergebnis Kopieren",
    toggleDarkMode: "Dunkelmodus Umschalten",
    conversionFee: "Umrechnungsgebühr (%)",
    favoriteCurrenciesTitle: "Lieblingswährungen",
    remove: "Entfernen"
  },
  zh: {
    title: "货币转换器",
    description: "选择货币和金额以获取汇率",
    chooseLanguage: "选择语言:",
    swap: "交换",
    fetchHistory: "获取历史记录",
    addFavorite: "添加收藏",
    copyResult: "复制结果",
    toggleDarkMode: "切换暗模式",
    conversionFee: "转换费率 (%)",
    favoriteCurrenciesTitle: "收藏货币",
    remove: "移除"
  },
  ar: {
    title: "محول العملات",
    description: "اختر العملة والمبالغ للحصول على سعر الصرف",
    chooseLanguage: "اختر اللغة:",
    swap: "تبديل",
    fetchHistory: "جلب التاريخ",
    addFavorite: "إضافة مفضلة",
    copyResult: "نسخ النتيجة",
    toggleDarkMode: "تبديل الوضع الداكن",
    conversionFee: "رسوم التحويل (%)",
    favoriteCurrenciesTitle: "العملات المفضلة",
    remove: "إزالة"
  },
  hi: {
    title: "मुद्रा परिवर्तक",
    description: "विनिमय दर प्राप्त करने के लिए मुद्रा और राशि चुनें",
    chooseLanguage: "भाषा चुनें:",
    swap: "स्वैप करें",
    fetchHistory: "इतिहास प्राप्त करें",
    addFavorite: "पसंदीदा जोड़ें",
    copyResult: "परिणाम कॉपी करें",
    toggleDarkMode: "डार्क मोड टॉगल करें",
    conversionFee: "परिवर्तन शुल्क (%)",
    favoriteCurrenciesTitle: "पसंदीदा मुद्राएँ",
    remove: "हटाना"
  }
  // Add more translations as needed
};

function updateLanguage() {
  const selectedLanguage = languageSelect.value;
  document.getElementById('title').innerText = translations[selectedLanguage].title;
  document.getElementById('description').innerText = translations[selectedLanguage].description;
  document.getElementById('choose-language').innerText = translations[selectedLanguage].chooseLanguage;
  swap.innerText = translations[selectedLanguage].swap;
  fetchHistoryBtn.innerText = translations[selectedLanguage].fetchHistory;
  addFavoriteBtn.innerText = translations[selectedLanguage].addFavorite;
  copyBtn.innerText = translations[selectedLanguage].copyResult;
  toggleDarkModeBtn.innerText = translations[selectedLanguage].toggleDarkMode;
  document.getElementById('conversion-fee-label').innerText = translations[selectedLanguage].conversionFee;
  document.getElementById('favorite-currencies-title').innerText = translations[selectedLanguage].favoriteCurrenciesTitle;

  // Update existing "Remove" buttons
  const removeButtons = favoriteList.querySelectorAll('button');
  removeButtons.forEach(button => {
    button.innerText = translations[selectedLanguage].remove;
  });
}

function updateSymbols() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;
  document.getElementById('symbol-one').textContent = symbols[currency_one] || '';
  document.getElementById('symbol-two').textContent = symbols[currency_two] || '';
}

function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;
  const fee = parseFloat(feeEl.value) / 100;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
      const rate = data.rates[currency_two];
      const adjustedRate = rate * (1 - fee);
      rateEl.innerText = `1 ${currency_one} = ${adjustedRate.toFixed(4)} ${currency_two}`;
      amountEl_two.value = (amountEl_one.value * adjustedRate).toFixed(2);
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
      rateEl.innerText = 'Error fetching rate';
    });
}

function fetchHistoricalRates() {
  const startDate = startDateEl.value;
  const endDate = endDateEl.value;
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  fetch(`https://api.exchangerate-api.com/v4/history/${currency_one}?start=${startDate}&end=${endDate}`)
    .then(res => res.json())
    .then(data => {
      const rates = data.rates;
      const labels = Object.keys(rates);
      const values = labels.map(date => rates[date][currency_two]);

      const ctx = document.createElement('canvas');
      chartContainer.innerHTML = '';
      chartContainer.appendChild(ctx);

      new Chart(ctx, {
        type: 'line',
        data: {
          labels,
          datasets: [{
            label: `Exchange Rate (${currency_one} to ${currency_two})`,
            data: values,
            borderColor: 'rgba(95, 186, 167, 1)',
            backgroundColor: 'rgba(95, 186, 167, 0.2)',
            fill: true
          }]
        },
        options: {
          responsive: true,
          scales: {
            x: { title: { display: true, text: 'Date' } },
            y: { title: { display: true, text: `Rate (${currency_two})` } }
          }
        }
      });
    });
}

function addFavoriteCurrency() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;
  const selectedLanguage = languageSelect.value;
  const removeText = translations[selectedLanguage].remove;
  
  const favoriteItem = document.createElement('li');
  favoriteItem.innerHTML = `${currency_one} to ${currency_two} <button onclick="removeFavorite(this)">${removeText}</button>`;
  favoriteItem.addEventListener('click', (event) => {
    if (event.target.tagName !== 'BUTTON') {
      currencyEl_one.value = currency_one;
      currencyEl_two.value = currency_two;
      calculate();
    }
  });
  favoriteList.appendChild(favoriteItem);
}

function removeFavorite(button) {
  const favoriteItem = button.parentElement;
  favoriteList.removeChild(favoriteItem);
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

copyBtn.addEventListener('click', () => {
  const rateText = rateEl.innerText;
  const amountText = amountEl_two.value;
  const textToCopy = `${rateText}\nConverted Amount: ${amountText}`;
  navigator.clipboard.writeText(textToCopy).then(() => {
    alert('Copied to clipboard!');
  });
});

// Event listeners for currency and amount input changes
currencyEl_one.addEventListener('change', () => {
  updateSymbols();
  calculate();
});
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', () => {
  updateSymbols();
  calculate();
});
amountEl_two.addEventListener('input', calculate);

// Event listener for the swap button
swap.addEventListener('click', () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  updateSymbols();
  calculate();
});

// Event listeners for additional functionalities
fetchHistoryBtn.addEventListener('click', fetchHistoricalRates);
addFavoriteBtn.addEventListener('click', addFavoriteCurrency);
toggleDarkModeBtn.addEventListener('click', toggleDarkMode);
feeEl.addEventListener('input', calculate);
languageSelect.addEventListener('change', updateLanguage);

// Initial setup
updateSymbols();
calculate();
updateLanguage();
