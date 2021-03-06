var answer = require('./index');
var options = {
    q: "Who is the owner of google", // question
    limit: 2 // results limit
};
new answer(options, function (res) {
    for (var r in res) {
        console.log(res[r].answer);
    }
})
    .error = function (err) {
        console.error(err);
    };
// => Larry Page and Sergey Brin, who were Ph.D. students at Stanford \n Google Chrome is owned by the founder of Google and the Google company. It is not just owned by a single person.
