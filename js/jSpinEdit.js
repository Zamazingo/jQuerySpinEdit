/**
* jQuery spinEdit Plugin
*/

(function($) {
    function SpinEdit() {
        this._init.apply(this, arguments);
    }

    SpinEdit.prototype = {
        _init: function() {
            this._parent = arguments[0];
            this._settings = arguments[1];
            var sName = this._parent[0].id;
            var sDivId = 'spinedit' + this._parent[0].id;
            var position = this._parent.position();
            var sDivLeft = position.left + this._parent.width() + 5;
            var sUp = sDivId + 'up';
            var sDown = sDivId + 'down';
            var sH = this._parent.height();
            this._parent.before('<div id="' + sDivId + '"></div>');
            $('#' + sDivId).css('position', 'absolute');
            $('#' + sDivId).css('padding', '1px');
            $('#' + sDivId).css('left', sDivLeft + 'px');
            $('#' + sDivId).css('top', position.top + 'px');
            $('#' + sDivId).css('width', '9px');
            $('#' + sDivId).css('height', sH + 'px');
            $('#' + sDivId).append('<div id="' + sUp + '"></div>');
            $('#' + sUp).css('height', ((sH / 2) - 1) + 'px');
            $('#' + sUp).css('border', '1px solid #ddd');
            $('#' + sUp).css('background', 'url(images/sUp.png) no-repeat top left');
            //$('#' + sUp).css('margin-top', '1px');
            $('#' + sDivId).append('<div id="' + sDown + '"></div>');
            $('#' + sDown).css('height', ((sH / 2) - 1) + 'px');
            $('#' + sDown).css('border', '1px solid #ddd');
            $('#' + sDown).css('background', 'url(images/sDown.png) no-repeat top left');
            $('#' + sDown).css('margin-top', '1px');

            $('#' + sUp).click(function() {
                var val = 0;
                if ($('#' + sName).val() == "") val = 0;
                else
                    val = $('#' + sName).val();
                val++;
                $('#' + sName).val(val);
            });

            $('#' + sDown).click(function() {
                var val = 0;
                if ($('#' + sName).val() == "") val = 0;
                else
                    val = $('#' + sName).val();
                val--;
                $('#' + sName).val(val);
            });

            this._parent.keydown(function(e) {
                if (!isNaN(String.fromCharCode(e.keyCode))) {
                    this.value += String.fromCharCode(e.keyCode);
                    return false;
                }
                else if (e.keyCode == 8) {
                    this.value = this.value.substring(0, this.value.length - 1);
                    return false;
                }
                else {
                    return false;
                }
            });
        }

    }

    $.fn.spinEdit = function(options) {
        var settings = $.extend({
            'max': 1000000,
            'min': 1000000
        }, options);

        return new SpinEdit($(this), settings);
    };

})(jQuery);