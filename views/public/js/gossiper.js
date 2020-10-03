/* eslint-disable no-undef */
var globalEntries;

function loadContents(entries) {
  $('#content').empty();
  entries.forEach((item) => {
    $('#content').append(entryTemplate(item));
  });

  $('.search-bar').show();
}

function retrieveData() {
  $.get('/api', (data) => {
    loadContents(data.entries);
    globalEntries = data.entries;
  });
}

function entryTemplate(item) {
  return `
    <div class='blog-post'>
        <h2 class='blog-post-title'>${item.title}</h2>
        <div class='py-2'>
            <img src='${item.image}'/>
            <hr/>
        </div>
    </div>`;
}

$(document).scroll(() => {
  var height = document.documentElement.offsetHeight,
    offset = document.documentElement.scrollTop + window.innerHeight;

  if (offset === height) {
    // loadContents(globalEntries);
  }
});

$('#search').keyup(() => {
  $('#content').empty();

  let entries = globalEntries.filter(
    (item) => item.title.indexOf($('#search').val()) != -1
  );

  entries.forEach((item) => {
    $('#content').append(entryTemplate(item));
  });
});

retrieveData();
$('.search-bar').hide();
