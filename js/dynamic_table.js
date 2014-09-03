var Trailer_Pic = new Array();
var previoustargetframe = 100000000;
function createDynamicTable(tableID) {
    $.ajax({
        type: "GET",
        crossDomain: true,
        url: "http://SRIWEBSERVER.cloudapp.net:90/wcfbodytables.svc/bodyservice",        
        async: false,
        success: function (xml1) {
            var loop = 0;
            var length = $(xml1).find('bodytable_Content').length;
            var resp = $(xml1).find('bodytable_Content').each(
                function () {
                    var out;
                    
                    
                    var ActedBy = $(this).find('ActedBy').text();                    
                    //console.log(ActedBy);
                    var Description = $(this).find('Description').text();
                    //console.log(Description);
                    var MovieName = $(this).find('MovieName').text();
                    //console.log(MovieName);
                    var ReleaseDate = $(this).find('ReleaseDate').text();                                       
                    //console.log(ReleaseDate);
                    
                    var i = 0;
                    var Links;
                    var Linksarray = new Array();
                    var Link = $(this).find('Link').each(
                        function () {
                            $(this).find('string').each(function () {                                
                                Links = $(this).text();
                                Linksarray[i] = Links;
                                Trailer_Pic[loop] = Linksarray[0].replace('?autoplay=1', '?rel=0&autohide=1&showinfo=0&frameborder=0&allowfullscreen');
                                //console.log(Trailer_Pic);
                                i = i + 1;
                                //console.log(Links);
                                
                            });
                        });
                     
                    var Songs;
                    var Songsarray = new Array();
                    i = 0;
                    var SongName = $(this).find('SongName').each(
                        function () {
                            $(this).find('string').each(function () {
                                Songs = $(this).text();
                                Songsarray[i] = Songs;
                                i = i + 1;
                                //console.log(Songs);                                
                            });
                        });

                    out = out + "<tr> <td width=20% align=center> <iframe src='"+Trailer_Pic[loop]+"' name=" + loop + " id=" + loop + "></iframe> </td> <td> <table border=1 width=100%>";
                    for (var i = 0; i < Linksarray.length; i = i + 1) {
                        //console.log(Linksarray[i]);
                        //console.log(Songsarray[i]);
                        out = out + "<tr><td><a href='" + Linksarray[i] + "'style='color=blue' target='"+ loop +"' class='"+loop+"' onclick=\"checkclicked("+loop+","+ length +")\">" + Songsarray[i] + "</a></td></tr>";
                    }
                                      
                    out = out + "</table> </td> <td> <table border=1 width=100%> <tr><td>"+MovieName+"</td></tr> <tr><td>"+ Description +"</td></tr> <tr><td>"+ ActedBy + "</td></tr> <tr><td>"+ ReleaseDate +"</td></tr> </table></td></tr>";
                    $("#dynamictable").append(out);
                    //console.log(out);
                    loop = loop + 1;
                });            
        },
        error: function (data, status, errorThrown) {
            alert(data);
            console.log(data);
        }
    });



    /// Sample learning code
    //var table = document.getElementById(tableID);

    //var rowCount = table.rows.length;
    //var row = table.insertRow(rowCount);
    
    //var cell1 = row.insertCell(0);
    //var element1 = document.createElement("input");
    //element1.type = "checkbox";
    //element1.name = "chkbox[]";
    //cell1.appendChild(element1);

    //var cell2 = row.insertCell(1);
    //cell2.innerHTML = rowCount + 1;

    //var cell3 = row.insertCell(2);
    //var element2 = document.createElement("input");
    //element2.type = "text";
    //element2.name = "txtbox[]";
    //cell3.appendChild(element2);

    //var sout;
    
    //for (var i = 0; i < 10; i += 1) {
    //    sout =  sout + "<tr>" +
    //        "<td width=20% align=center>" + "<iframe src='http://www.youtube.com/watch_popup?v=1cDoRqPnCXU'></iframe>" + "</td>" +
    //        "<td width=50%><table border=1 width=100%>" ;
    //    for (var j = 0; j < 5; j += 1) {
    //        sout = sout + "<tr><td>" + j + "</td></tr>";
    //    }
    //        sout = sout + "</table></td>" +
    //        "<td width=20%>" + i + "</td>" +
    //        "</tr>";
    //}
    //$("#dynamictable").append(sout);
}


function checkclicked(loop, length) {
    //alert("link clicked " + loop +" "+ length);    
       
    //for (var i = 0; i < length; i++) {
    //    if (i != loop) {
    //        console.log(Trailer_Pic[i]);
    //        $('#'+i+'').attr('src', Trailer_Pic[previoustargetframe]);
    //    }
    //}
    if(previoustargetframe!=100000000)
    $('#' + previoustargetframe + '').attr('src', Trailer_Pic[previoustargetframe]);
    previoustargetframe = loop;
}