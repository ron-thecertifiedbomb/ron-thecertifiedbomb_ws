// custom script


// IF STATEMENT
// if (<condition>) statement;
// if (<condition>) {<true_statements>}

let color = 'red';

if(color == 'blue') console.log('It is blue')

if(color == 'blue')
    console.log('It is blue')
    console.log('It is really blue') // out of condition control

if(color == 'blue') {
    console.log('It is blue');
    // alert('It is in fact blue');
    console.log('It is in fact blue');
}

// if (<condition>) <true_statement> else <false_statement>;
// if (<condition>) {<true_statements>;} else {<false_statements>;}

let holiday = 'Tuesday';
if(holiday == 'Monday') 
    console.log('No class today.')
else 
    console.log('Go to Office, please')
    console.log('It is really blue')

if(holiday == 'Monday') console.log('No class today.') 
else console.log('Go to Office, please')

if(holiday == 'Monday') {
    console.log('No class today.')
} else {
    console.log('Go to Office, please')
    console.log('It is really blue')
}

/*
if (<condition>) {
    <true_statements>;
} [
    else if (<condition>) {
        <true_statements>
    }
]*
else {
    <other_condition>;
}
*/

let grade = 93;
let pointGrade;
// 1.00 = 97.6 - 100
// 1.25 = 95.0 - 97.5
// 1.50 = 90.0 - 94.9
// 1.75 = 87.6 - 89.9
// 2.00 = 85.0 - 87.5
if (grade >= 97.6 && grade <= 100) {
    pointGrade = '1.00';
} else if (grade >= 95.0 && grade <= 97.5) {
    pointGrade = '1.25';
} else if (grade >= 90.0 && grade <= 94.9) {
    pointGrade = '1.50';
} else if (grade >= 87.6 && grade <= 89.9) {
    pointGrade = '1.75';
} else if (grade >= 85.0 && grade <= 87.5) {
    pointGrade = '2.00';
} else {
    pointGrade = '4.00'
}
console.log(pointGrade);
let msg;
let name = 'Lean';
msg = 'Your point grade is ' + pointGrade + '. Congrats '+name+'!';
console.log(msg);
msg = `Your point grade is ${pointGrade}. Congrats ${name}!`;  //${}
console.log(msg);



if (grade >= 97.6 && grade <= 100) {
    pointGrade = '1.00';
} else {
    if (grade >= 95.0 && grade <= 97.5) {
        pointGrade = '1.25';
    } else {
        pointGrade = '4.00'
    }
}


if (grade >= 97.6 && grade <= 100) {
    pointGrade = '1.00';
} else {
    if (grade >= 95.0 && grade <= 97.5) {
        pointGrade = '1.25';
    } else {
        if (grade >= 90.0 && grade <= 94.9) {
            pointGrade = '1.50';
        } else {
            if (grade >= 87.6 && grade <= 89.9) {
                pointGrade = '1.75';
            } else {
                if (grade >= 85.0 && grade <= 87.5) {
                    pointGrade = '2.00';
                } else {
                    pointGrade = '4.00'
                }
            }
        }
    }
}

// single line comment

/*
multi line
comment
*/

/**
 * documentation/comment
 */

// SWITCH
// ServiceNow Issue
// Severity: Low, Normal, High
let severity = 'Normal'; //Low, Normal, High
let prompt;
let toName = 'Lean';

function sendEmail (email) {
    console.log(email);
}

/*
switch (<condition>) {
    case <expression>:
        <statements>;
        break;
    default:
        <statements>;
}
*/

switch (severity) {
    case 'Low':
        // actions
        prompt = 'Blue';
        console.log('Low issue is tagged as Blue');
        break;
    case 'Normal':
        prompt = 'Orange';
        console.log('Normal issue is tagged as Orange');
        alert('This is normal');
        (function logError() {
            console.error('This is an Orange Issue')
        })();
        break;
    case 'High':
        prompt = 'Red';
        console.log('High issue is tagged as Red');
        break;
    default:
        prompt = 'White';
        console.log('Unknown issue level is tagged as White');
}

// Implement simple switch using objects
// let severityEvaluator = {
//     Low : 'Blue',
//     Normal: 'Orange',
//     High: 'Red'
// }

// prompt = severityEvaluator[severity] || 'White';

let email = {
    to: 'lean.jerios@outlook.com',
    cc: 'admin.works@servicenow.com',
    bcc: 'logger@servicenow.com',
    subject: `${prompt} Issue Filed.`,
    body: `<h3>Hi ${toName},</h3></br> <p>An new issue with code ${prompt} is filed. Plese review.</p>`
};

sendEmail(email);
