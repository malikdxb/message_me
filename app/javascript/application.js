// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "jquery"
import "jquery_ujs"
import "popper"
import "bootstrap"
//= require jquery
//= require jquery_ujs
//= require semantic-ui
//= require bootstrap.min
// require turbolinks
//= require_tree

function scroll_bottom() {
  if ($('#messages').length > 0) {
    $('#messages').scrollTop($('#messages')[0].scrollHeight);
  }
}

$(document).on('turbolinks:load', function() {
    $('.ui.dropdown').dropdown();
    $('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
  });
  scroll_bottom();
})
import "channels"
