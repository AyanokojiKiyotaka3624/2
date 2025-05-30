$(document).ready(function() {
    const $tabs = $('#adminTabs .nav-link');
    const $content = $('#adminContent');
  
    function loadTab(tab) {
      // 탭 스타일
      $tabs.removeClass('active');
      $tabs.filter(`[data-tab="${tab}"]`).addClass('active');
  
      // 로딩 표시
      $content.html('<p class="text-center py-5 text-muted">로딩 중...</p>');
  
      // API 호출
      $.getJSON(`/api/${tab}`, function(data) {
        if (!data.length) {
          $content.html('<p class="text-center py-5">데이터가 없습니다.</p>');
          return;
        }
        // 테이블 생성
        let html = '<div class="table-responsive"><table class="table table-striped">';
        html += '<thead><tr>' + Object.keys(data[0]).map(k => `<th>${k}</th>`).join('') + '</tr></thead>';
        html += '<tbody>' + data.map(row => '<tr>' + Object.values(row).map(v => `<td>${v}</td>`).join('') + '</tr>').join('') + '</tbody>';
        html += '</table></div>';
        $content.html(html);
      }).fail(function() {
        $content.html('<p class="text-center py-5 text-danger">불러오는 데 실패했습니다.</p>');
      });
    }
  
    // 초기 로드
    loadTab('users');
  
    // 탭 클릭
    $tabs.click(function(e) {
      e.preventDefault();
      const tab = $(this).data('tab');
      loadTab(tab);
    });
  });