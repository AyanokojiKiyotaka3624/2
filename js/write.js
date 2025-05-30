$(document).ready(function() {
    $('#postForm').on('submit', function(e) {
      e.preventDefault();
      var board = $(this).data('board-type');
      var formData = new FormData(this);
      $.ajax({
        url: '/api/' + board,
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function() {
          alert('등록되었습니다.');
          window.location.href = board + '.html';
        },
        error: function() {
          alert('등록 중 오류가 발생했습니다.');
        }
      });
    });
  });
  