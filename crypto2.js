async function convert() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("from-currency").value;
    const toCurrency = document.getElementById("to-currency").value;

    if (amount.trim() === "") {
        alert("Please enter an amount.");
        return;
    }

    try {
        const response = await fetch(`https://api.coinbase.com/v2/exchange-rates?currency=${fromCurrency}`);
        const data = await response.json();

        if (data.data.rates.hasOwnProperty(toCurrency)) {
            const rate = data.data.rates[toCurrency];
            const convertedAmount = amount * rate;
            document.getElementById("converted-amount").value = convertedAmount.toFixed(8);
        } else {
            alert("Conversion not supported for selected currencies.");
        }
    } catch (error) {
        console.error("Error fetching exchange rates:", error);
        alert("Error fetching exchange rates. Please try again later.");
    }
}
