# d7-tinymce-twitter-embed

working with drupal 7 and tinymce 3.58

this is a very simple button that requires a user to paste in a tweet from the embed box twitter. It does very simple validation by making sure that the code starts with blockquote.

rename the directory to twembed, enable the module, then enable the button in wysiwyg, and then set the permissions.

if you have trouble with the tweet displaying, make sure the html is not being stripped and the twitter javascript is loading - this module does not have any text filters to allow this.
