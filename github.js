(function(){
    if ('github-hide-whitespace-changes' in window) return
    window['github-hide-whitespace-changes'] = true;

    var observer = new window.MutationObserver(function(mutations, observer) {
        mutations.forEach((mutation) => {
            if (mutation.type != 'childList') {
                return;
            }
                
            mutation.addedNodes.forEach((node) => {
                if ((node.localName != 'a') || !node.href) {
                    return;
                }
                    
                if (node.href.includes('/pull/') && node.href.includes('/files') && !node.href.includes('w=1')) {
                    if (node.href.includes('?')) {
                        node.href += '&w=1';
                    } else {
                        node.href += '?w=1';
                    }
                }         
            });
        });
    });

    observer.observe(document, {
        subtree: true,
        childList: true
    });
})();
