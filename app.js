let subject1 = +prompt('Enter your English marks');
let subject2 = +prompt('Enter your Math marks');
let subject3 = +prompt('Enter your Physics marks');
let subject4 = +prompt('Enter your Biology marks');
let subject5 = +prompt('Enter your Chemistry marks');
let subject6 = +prompt('Enter your Urdu marks');
let username = prompt('Enter your name');

let total = subject1 + subject2 + subject3 + subject4 + subject5 + subject6;
let percentage = (total / 600) * 100;

document.write(`
    <h1 style="text-align: center">Marks Sheet</h1>
    <center>
        <table border="2">
            <tr>
                <td>Subject</td>
                <td>Total Marks</td>
                <td>Obtained Marks</td>
            </tr>
            <tr>
                <td>English</td>
                <td>100</td>
                <td>${subject1}</td>
            </tr>
            <tr>
                <td>Math</td>
                <td>100</td>
                <td>${subject2}</td>
            </tr>
            <tr>
                <td>Physics</td>
                <td>100</td>
                <td>${subject3}</td>
            </tr>
            <tr>
                <td>Biology</td>
                <td>100</td>
                <td>${subject4}</td>
            </tr>
            <tr>
                <td>Chemistry</td>
                <td>100</td>
                <td>${subject5}</td>
            </tr>
            <tr>
                <td>Urdu</td>
                <td>100</td>
                <td>${subject6}</td>
            </tr>
            <tr>
                <td>Total</td>
                <td>600</td>
                <td>${total}</td>
            </tr>
            <tr>
                <td>Your Grade</td>
                <td colspan="2">
                    ${percentage >= 90 ? 'A+' : percentage >= 80 ? 'A' : percentage >= 70 ? 'B' : percentage >= 60 ? 'C' : percentage >= 50 ? 'D' : 'Fail'}
                </td>
            </tr>
            <tr>
                <td>Your Percentage</td>
                <td colspan="2">${percentage.toFixed(2)}%</td>
            </tr>
        </table>
        <h1>${username}, Good Job!</h1>
        <h1>Refresh To Try Again</h1>
    </center>
`);
