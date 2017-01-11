
var q = require('q');
exports.testParameters = function(params){
  var defer = q.defer();
console.log( "here", params.champSearch);
/*  categorie: this.categorie,
  champSearch: this.champSearch,
  startDate: this.startDate,
  endDate: 'now',
  url: this.url,
  title: this.title,
  author:this.author,
  fullText: this.fullText,
  motCle: this.motCle*/
var aide='';
var cat=[];
// les filtres
  if(typeof params.author !== undefined){
    aide = aide +'enriched.url.author';
    console.log('auteur');
  }
  if(typeof params.url !== undefined)
  { if(aide !== "")
    {aide = aide + ',enriched.url.url';}
    else{
      aide = aide + 'enriched.url.url';
    }
  }
  if(typeof params.fullText !== undefined)
  {
    if(aide !== "")
      {aide= aide + ',enriched.url.text';}
      else{
      aide= aide + 'enriched.url.text';
      }

  }

  if(typeof params.title !== undefined )
  {
    if(aide !== "")
      {aide = aide + ',enriched.url.title';}
      else{
      aide = aide + 'enriched.url.title';
      }

  }

  if(typeof params.motCle !== undefined){
    cat.push('q.enriched.url.enrichedTitle.keywords.keyword.text');
  }
  if(true )
  {
    console.log('cat & aide', cat);
    console.log('cat & aide', aide);
  var param = {
    start: 'now-' +params.startDate +'d',
    end: 'now',
    outputMode: 'json',
    'q.enriched.url.enrichedTitle.keywords.keyword.text': params.champSearch,

    return: [ aide]
};

defer.resolve(param);
  }
else {
  defer.reject("erreur pas entrerr dans les conditions");
}

return defer.promise;



};
