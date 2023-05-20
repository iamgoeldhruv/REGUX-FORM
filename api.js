fetch("https://reqres.in/api/users").then((data)=>{
    //console.log(data);
    return data.json();

}).then((objectdata)=>{
    // console.log(objectdata.data[0].email);
    let tabledata="";
    objectdata.data.map((values)=>{
        tabledata+=`<tr>
        <td>${values.id}</td>
        <td>${values.email}</td>
        <td>${values.first_name}</td>
        <td>${values.last_name}</td>
        <td><img src="${values.avatar}"></td>`;
    })
    document.getElementById("table-body").innerHTML=tabledata
  
    
});  