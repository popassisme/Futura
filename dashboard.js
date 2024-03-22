document.addEventListener('DOMContentLoaded', function() {
    // Dummy data
    const incomeData = [2000, 2500, 3000, 3500, 4000];
    const expenseData = [1000, 1200, 1500, 1800, 2000];
    
    const netBalanceData = incomeData.map((income, index) => income - expenseData[index]);

    // Create chart
    const canvasElement = document.getElementById('budgetChart');
    const ctx = document.getElementById('budgetChart').getContext('2d');
    const budgetChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [
                {
                    label: 'Income',
                    data: incomeData,
                    borderColor: 'green',
                    backgroundColor: 'rgba(0, 128, 0, 0.1)',
                },
                {
                    label: 'Expenses',
                    data: expenseData,
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.1)',
                },
                {
                    label: 'Net Balance',
                    data: netBalanceData,
                    borderColor: 'blue',
                    backgroundColor: 'rgba(0, 0, 255, 0.1)',
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    canvasElement.style.cursor = 'pointer';
});
