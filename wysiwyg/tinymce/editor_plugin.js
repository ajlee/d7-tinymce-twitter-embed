(function($) {
  tinymce.create('tinymce.plugins.twembed', {
    /**
     * Initialize the plugin, executed after the plugin has been created.
     *
     * This call is done before the editor instance has finished it's
     * initialization so use the onInit event of the editor instance to
     * intercept that event.
     *
     * @param ed
     *   The tinymce.Editor instance the plugin is initialized in.
     * @param url
     *   The absolute URL of the plugin location.
     */
    init : function(ed, url) {
      // Register the wysiwygH2Plugin execCommand.
      ed.addCommand('twembed', function() {
        ed.windowManager.open({
          file : Drupal.settings.basePath + 'twembed/wysiwyg',
          width : 480,
          height : 320,
          inline : 1,
          scrollbars : 1
        });
      });

      // Register button.
      ed.addButton('twembed', {
        title : 'Twitter Embed Filter',
        cmd : 'twembed',
        image : url + '/img/twitter.png'
      });
    },

    /**
     * Return information about the plugin as a name/value array.
     */
    getInfo : function() {
      return {
        longname : 'Simple Twitter Embed Plugin',
        author : 'Alex Lee',
        authorurl : '',
        infourl : 'http://github.com/ajlee/d7-tinymce-twitter-embed',
        version : "0.1"
      };
    }
  });

  // Register plugin.
  tinymce.PluginManager.add('twembed', tinymce.plugins.twembed);
})(jQuery);

