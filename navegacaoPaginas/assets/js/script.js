function redirecionar(id) {
    switch (id) {
        case 'home':
            window.location.href = 'home.html';
            break;
        case 'sobre':
            window.location.href = 'sobre.html';
            break;
        case 'sitemap':
            window.location.href = 'sitemap.html';
            break;
        case 'contato':
            window.location.href = 'contato.html';
            break;
        case 'links':
            window.location.href = 'links.html';
            break;
        default:
            break;
    }
}