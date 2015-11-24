/*
 * SimpleModal Basic Modal Dialog
 * http://simplemodal.com
 *
 * Copyright (c) 2013 Eric Martin - http://ericmmartin.com
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */

jQuery(function ($) {
  // Load dialog on page load
  //$('#basic-modal-content').modal();

  var easter_egg = new Konami(function() {
    $.modal('<iframe width="560" height="315" src="https://www.youtube.com/embed/jS5RIXuyzrU" frameborder="0" allowfullscreen></iframe>');
  });
});