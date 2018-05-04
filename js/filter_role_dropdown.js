$(document).ready(function(e) {

  var reCourseSettingsPage = /courses\/.+?\/settings/;
  var reCoursePeoplePage = /courses\/.+?\/users/;
  var windowUrl = window.location.pathname;
  var onCourseSettingsPage = (windowUrl.search(reCourseSettingsPage) != -1);
  var onCoursePeoplePage = (windowUrl.search(reCoursePeoplePage) != -1);

  if (onCourseSettingsPage) {
    // Remove TRs in the right-hand column Current Users table that have "None"
    $("aside#right-side > div > table.summary > tbody > tr > td:contains('None')").parent().hide();
  }

  if (onCoursePeoplePage) {
    // Remove options with 0 enrollments from the role dropdown on the People page
    $("select[name='enrollment_role_id'] option:contains('(0)')").remove();
  }
});
