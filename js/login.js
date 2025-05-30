$(document).ready(function() {
    $('#loginForm').on('submit', function(e) {
      e.preventDefault();
      const email = $('#email').val();
      const password = $('#password').val();
      if (!email || !password) {
        alert('이메일과 비밀번호를 모두 입력해주세요.');
        return;
      }
      // TODO: AJAX 요청 예시
      $.ajax({
        url: '/api/login',
        method: 'POST',
        data: { email, password },
        success: function(response) {
          alert('로그인 성공');
          window.location.href = 'index.html';
        },
        error: function() {
          alert('로그인에 실패했습니다.');
        }
      });
    });
  });
  