(function(doc, win) {
    let docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            let clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            // 16为默认字体大小，375为设计图宽度，375/16为设计稿rem值。屏幕宽度/设计稿rem宽度=页面动态font-size值
            docEl.style.fontSize = clientWidth/(375/16) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


// iPhone5
// font-size: 0.875rem;
// iPhone6
// font-size: 0.875rem;


