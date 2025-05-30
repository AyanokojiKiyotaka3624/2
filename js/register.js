$(document).ready(function() {
    $('#registerForm').on('submit', function(e) {
      e.preventDefault();
      const data = {
        name: $('#name').val(),
        email: $('#email').val(),
        pw: $('#pw').val(),
        phone: $('#phone').val(),
        address: $('#address').val(),
        role: $('#role').val()
      };
      // 유효성 검사
      for (let key in data) {
        if (!data[key]) {
          alert('모든 필드를 입력해주세요.');
          return;
        }
      }
      // TODO: AJAX 요청 예시
      $.ajax({
        url: '/api/register',
        method: 'POST',
        data: data,
        success: function(response) {
          alert('회원가입 성공');
          window.location.href = 'login.html';
        },
        error: function() {
          alert('회원가입에 실패했습니다.');
        }
      });
    });
  });
  