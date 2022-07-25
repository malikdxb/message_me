// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
//= require jquery
//= require jquery_ujs
//= require semantic-ui
//= require bootstrap.min
// require turbolinks
//= require_tree

$(document).on('turbolinks:load', function() {
    $('.ui.dropdown').dropdown();
    $('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
  });
})
import "channels"
