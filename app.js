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
      //console.log($('#table').find('td').last());
    });

    $('#remove').on('click', function(event) {
      $('#table').find('tr').last().remove();
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
      totalSalary /= 12;
      $("#totSalary").text(totalSalary);
    }

});
