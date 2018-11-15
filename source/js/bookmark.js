$(function() {
  var $bookmark = $(".bookmark");
  $bookmark.parent().remove(".bookmark");
  $("body").append($bookmark);
  var isRendered = false;
  var renderBookmark = function() {
    if (isRendered) return;
    isRendered = true;
    var hList = [].filter.call($('article').find('h2, h3, h4'), function(ele) {
      return ele.textContent.trim().length > 0;
    });
    if (hList.length > 0) {
      var lastTagName = 'h2';
      var list = '<ul class="mark-list">';
      hList.forEach(function(item) {
        var currTagName = item.tagName.toLowerCase();
        var text = item.textContent.trim();
        if (currTagName > lastTagName) {
          list += '<ul class="mark-' + currTagName +'">'
          list += '<li class="mark-' + currTagName +'">' + '<a href="#" data-id="#' + item.id + '" title="' + text + '">' + text +'</a>';
        } else if (currTagName === lastTagName) {
          list += '</li><li class="mark-' + currTagName +'">' + '<a href="#" data-id="#' + item.id + '" title="' + text + '">' + text +'</a>';
        } else {
          list += '</ul></li>';
          list += '<li class="mark-' + currTagName +'">' + '<a href="#" data-id="#' + item.id + '" title="' + text + '">' + text +'</a>';
        }
        lastTagName = currTagName;
      });
      list += '</ul>';
      $('.bookmark-content').append(list);
    }
  }

  $("#open-bookmark").on('click', function() {
    renderBookmark();
    $bookmark.fadeIn();
  });
  $(".bookmark").on('click', 'a', function(ele) {
    var id = $(ele.target).data('id');
    var top = $(id)[0].offsetTop;
    if (top) {
      $bookmark.fadeOut();
      $('#root').animate({ scrollTop: top }, 600);
    }
  }).on('click', '.close', function(ele) {
    $bookmark.fadeOut();
  });
})