function calculateInvestment() {
    const investmentAmount = parseFloat(document.getElementById('investmentAmount').value);
    const investmentDuration = parseFloat(document.getElementById('investmentDuration').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);

    if (isNaN(investmentAmount) || isNaN(investmentDuration) || isNaN(interestRate)) {
        alert('Please enter valid numbers');
        return;
    }

    const totalAmount = investmentAmount * Math.pow((1 + interestRate/100), investmentDuration);

    document.getElementById('result').innerHTML = `
        <p>After ${investmentDuration} years, your investment will be worth:</p>
        <h2>$${totalAmount.toFixed(2)}</h2>
        <p>Initial Investment: $${investmentAmount.toFixed(2)}</p>
        <p>Total Interest Earned: $${(totalAmount - investmentAmount).toFixed(2)}</p>
    `;
}
