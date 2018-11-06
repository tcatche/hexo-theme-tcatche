/**
* Thumbnail Helper
* @description Get the thumbnail url from a post
* @example
*     <%- thumbnail(post) %>
*/
var index = 0;
var defaultCollectionIds = [
    "362263",
    "420324",
    "328212",
    "139015",
    "168902",
    "409541",
    "190728",
    "452289",
    "337672",
    "138584",
    "87821",
    "561941",
    "354179",
    "176316",
    "311766",
    "357250",
    "367159",
    "354040",
    "325836"
];
defaultCollectionIds = defaultCollectionIds.sort(function () {
    return Math.random() > 0.5 ? 1 : -1
});
hexo.extend.helper.register('thumbnail', function (post) {
    var url = post.thumbnail || '';
    if (!url) {
        var randomIndex = defaultCollectionIds[index];
        index = (index + 1) % defaultCollectionIds.length;
        return "https://source.unsplash.com/collection/" + randomIndex;
    }
    return url;
});