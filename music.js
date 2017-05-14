// Put your Last.fm API key here
var api_key = " 8a03e835c900d196a7908efdbeff01d5";

function sendRequest () {
    var xhr = new XMLHttpRequest();
    var method = "artist.getinfo";
   // var artist = <?php echo json_encode($name); ?>;
    var artist = encodeURI(document.getElementById("form-input").value);
    xhr.open("GET", "proxy.php?method="+method+"&artist="+artist+"&api_key="+api_key+"&format=json", true);
    xhr.setRequestHeader("Accept","application/json");
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            var json = JSON.parse(this.responseText);
            var str = JSON.stringify(json,undefined,2);
            var name = JSON.stringify(json['artist']['name']);
            var url = JSON.stringify(json['artist']['url']);
            var lin = JSON.stringify(json['artist']['url']);
            var img = JSON.stringify(json['artist']['image']);
            var bio = JSON.stringify(json['artist']['bio']['content']);
            
            var imag = '';
       
                for(i=0;i<json.artist.image.length;i++){
                    if(json.artist.image[i].size=="large"){
                        imag+=JSON.stringify(json.artist.image[i]['#text']).replace(/\"/g,"");
                    }                        
                    
                }  
         
        
            var final = "<p><strong> Name: </strong></p><p> " + name + "</p><p><strong> URL: </strong></p><p> " + url.link(lin.replace(/\"/g,"")) + "</p><p><strong> Image: </strong></p><p> <img src= " + imag + "></img><p><strong> Biography: </strong></p><p> " + bio + " </p>";
            
            document.getElementById("output").innerHTML =  "<pre>" + final.replace(/\"/g,"") + "</pre>";
        }
    };  
    xhr.send(null);
    var xhr1 = new XMLHttpRequest();
    var method2="artist.getTopAlbums";
    var artist = encodeURI(document.getElementById("form-input").value);
    xhr1.open("GET", "proxy.php?method="+method2+"&artist="+artist+"&api_key="+api_key+"&format=json", true);
    xhr1.setRequestHeader("Accept","application/json");
    xhr1.onreadystatechange = function () {
        if (this.readyState == 4) {
            var json = JSON.parse(this.responseText);
            var str = JSON.stringify(json,undefined,2);
            var topal=JSON.stringify(json['topalbums']['album'],undefined,2);
            var i=json['topalbums']['album']
            var tn1=JSON.stringify(i[0]['name'],undefined,2).replace(/\"/g,"");
            var ti1 = '';
             ti1+=JSON.stringify(i[0]['image'][2]['#text'],undefined,2).replace(/\"/g,"");
            var tn2=JSON.stringify(i[1]['name'],undefined,2).replace(/\"/g,"");
            var ti2 = '';
             ti2+=JSON.stringify(i[1]['image'][2]['#text'],undefined,2).replace(/\"/g,"");
            var tn3=JSON.stringify(i[2]['name'],undefined,2).replace(/\"/g,"");
            var ti3 = '';
            ti3+=JSON.stringify(i[2]['image'][2]['#text'],undefined,2).replace(/\"/g,"");

            var final2 = "<p> 1. " + tn1 + "</p><p><img src= " + ti1 + "></img></p><p> 2. " + tn2 + "</p><p><img src= " + ti2 + "></img></p><p> 3." + tn3 + "</p><p><img src= " + ti3 + "</p>";
            

            document.getElementById("output2").innerHTML = "<pre><p><strong> Top Albums: </strong></p>" + final2.replace(/\"/g,"") + "</pre>";

        }

    };
    xhr1.send(null); 
    
    var xhr2 = new XMLHttpRequest();
    var method3="artist.getSimilar";
    var artist = encodeURI(document.getElementById("form-input").value);
    xhr2.open("GET", "proxy.php?method="+method3+"&artist="+artist+"&api_key="+api_key+"&format=json", true);
    xhr2.setRequestHeader("Accept","application/json");
    xhr2.onreadystatechange = function () {
        if (this.readyState == 4) {
            var json = JSON.parse(this.responseText);
            var str = JSON.stringify(json,undefined,2);
            var i=json['similarartists']['artist'];
            var sn1=JSON.stringify(i[0]['name'],undefined,2).replace(/\"/g,"");
            var su1=JSON.stringify(i[0]['url'],undefined,2).replace(/\"/g,"");
            var sn2=JSON.stringify(i[1]['name'],undefined,2).replace(/\"/g,"");
            var su2=JSON.stringify(i[1]['url'],undefined,2).replace(/\"/g,"");
            var sn3=JSON.stringify(i[2]['name'],undefined,2).replace(/\"/g,"");
            var su3=JSON.stringify(i[2]['url'],undefined,2).replace(/\"/g,"");           
            

            var final3="\n  1.  "+ sn1.link(su1) +"\n\n  2.  "+ sn2.link(su2) +"\n\n  3.  "+ sn3.link(su3);

            document.getElementById("output3").innerHTML="<pre><p><strong> Similar Artists:</strong></p>" + final3 + "</pre>";
        }
    }; 
    xhr2.send(null);
} 

