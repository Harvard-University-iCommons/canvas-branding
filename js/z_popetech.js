// Start Pope Tech Accessibility Guide
var key='U1WCwaK6F5jHmaErO0QqO2M8IyJHNOov';(function(a){function b(a,b){var c=document.createElement("script");c.type="text/javascript",c.readyState?c.onreadystatechange=function(){("loaded"===c.readyState||"complete"===c.readyState)&&(c.onreadystatechange=null,b())}:c.onload=function(){b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)}function c(a){return a&&("TeacherEnrollment"===a||"TaEnrollment"===a||"DesignerEnrollment"===a)}function d(){var a=window.location.pathname;return!!(-1!==a.indexOf("/edit")||-1!==a.indexOf("/new")||-1!==a.indexOf("/syllabus")||a.match(/\/courses\/[0-9]+\/pages\/?$/)||a.match(/\/courses\/[0-9]+\/?$/))}function e(){return f()||g()}function f(){var a=/\/courses\/[0-9]+\/pages\/?$/,b=window.location.pathname;return console.log("Check for pages url",window.location.pathname),console.log(a.test(b)),a.test(b)}function g(){var a=window.location.pathname;return console.log("Check for courses url",window.location.pathname),console.log("/courses"===a),"/courses"===a}function h(){var a=/\/accounts\/[0-9]+\/external_tools\/[0-9]+\/?$/,b=/\/courses\/[0-9]+\/external_tools\/[0-9]+\/?$/,c=window.location.pathname;return console.log("Check for external tool url",window.location.pathname),console.log(a.test(c)||b.test(c)),a.test(c)||b.test(c)}function i(f){for(var g=0;g<f.length;++g)if(localStorage.setItem(`${j}.${l}`,JSON.stringify(f)),c(f[g].type)){if(d()&&b("https://canvas-cdn.pope.tech/loader.min.js",function(){}),console.log("Key",a),null===a)break;(e()||h())&&(console.log("Load column"),b(`https://canvas-cdn.pope.tech/accessibility-column.min.js?key=${a}`,function(){}));break}}var j="pt-instructor-guide",k="username",l="enrollments";return-1===window.location.href.indexOf("/login/canvas")?-1===window.location.href.indexOf("?login_success=1")?void function(a,b){var c=localStorage.getItem(`${a}.${b}`);null===c?$.get("/api/v1/users/self/enrollments?type[]=DesignerEnrollment&type[]=TaEnrollment&type[]=TeacherEnrollment",function(a){i(a)}):(c=JSON.parse(c),i(c))}("pt-instructor-guide",l):(localStorage.removeItem(`${"pt-instructor-guide"}.${k}`),void $.get("/api/v1/users/self",function(a){localStorage.setItem(`${"pt-instructor-guide"}.${k}`,a.name)})):(localStorage.removeItem(`${"pt-instructor-guide"}.${k}`),localStorage.removeItem(`${"pt-instructor-guide"}.${"uuid"}`),localStorage.removeItem(`${"pt-instructor-guide"}.${"settings"}`),void localStorage.removeItem(`${"pt-instructor-guide"}.${l}`))})(key);
// End Pope Tech Accessibility Guide