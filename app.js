$(document).ready(function() {
    var array = [];
    var totalSalary = 0;
    $('#employeeinfo').on('submit', function(event) {
      event.preventDefault();

      var values = {};
      var fields = $('#employeeinfo').serializeArray();

      fields.forEach(function(element, index, array) {
        values[element.name] = element.value;
      });
      //console.log(values);

      $('#employeeinfo').find('input[type=text]').val('');

      appendDom(values);
      updateSalary(values);
    });

    $('#remove').on('click', function(event) {
      $('#table').children().last().remove();
    });

    function appendDom(empInfo) {
      $('#table').append('<tr>' +
        '<td>' + empInfo.employeefirstname + '</td>' +
        '<td>' + empInfo.employeelastname + '</td>' +
        '<td>' + empInfo.employeeIdNumber + '</td>' +
        '<td>' + empInfo.employeeJobTitle + '</td>' +
        '<td>' + empInfo.employeeAnnualSalary + '</td>' +
        '</tr>');
    }

    function updateSalary(empInfo) {
      totalSalary += parseInt(empInfo.employeeAnnualSalary);
      $("#totSalary").text(totalSalary);
    }

});
