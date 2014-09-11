/*
 * This file is part of the Silvestra package.
 *
 * (c) Tadas Gliaubicas <tadcka89@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

$.fn.mediaGallery = function () {
    var $gallery = $(this);
    var $imageUploadModal = new MediaImageUploadModal();
    var $addImageButton = $('a#add-image-button');

    $gallery.on('click', $addImageButton, function () {
        $imageUploadModal.show();
    });
};
