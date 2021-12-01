

function consulta(){
    $.ajax({
        url: '/consultaaskandbid', success: function(consulta){
            var limit = '';

            consulta.ultimo.forEach(element => {
                limit = element.Time;                       
               
            }) 
            var objetivo = document.getElementById('limittext');
            objetivo.innerHTML = limit;

            contenidoask.innerHTML = '';
            var cantidadask =[];
            consulta.ask.forEach(element => {
                contenidoask.innerHTML +=`
                <tr>
                    <td>${element._id.Price}</td>
                    <td>${element.total}</td>
                    <td>${element._id.Volume}</td>
                </tr>               
                `
                //cantidadask.push({'precio':element._id.Price,'total':element.total});
            })           
           // $('#graficolimittotalaske').remove(); 
           // $('#graph-containerlimittotalaske').append('<div id="graficolimittotalaske" style="width:600px;height:120px"></div>'); 
/*
            Morris.Bar({
                element: 'graficolimittotalaske',
                data: cantidadask
                ,
                xkey: ['precio'],
                ykeys: ['total'],
                labels: ['total'],
                barColors: ['red'],
                resize: false,
                Stacked: false
              });*/
            /******************** */
            var cantidadbid =[];
            contenidobid.innerHTML = '';
            consulta.bid.forEach(element => {
                contenidobid.innerHTML +=`
                <tr>
                    <td>${element._id.Price}</td>
                    <td>${element.total}</td>
                    <td>${element._id.Volume}</td>
                </tr>               
                `
            })             





            }
    }); 
   $.ajax({
        url: '/consultabid', success: function(consulta){              
            var cantidad =[];
            contenidobid.innerHTML = '';
            consulta.forEach(element => {
                contenidobid.innerHTML +=`
                <tr>
                    <td>${element._id.Price}</td>
                    <td>${element.total}</td>
                    <td>${element._id.Volume}</td>
                </tr>               
                `
                cantidad.push({'precio':element._id.Price,'total':element.total});
            })             

            $('#graficolimittotalbide').remove(); 
            $('#graph-containerlimittotalbide').append('<div id="graficolimittotalbide" style="width:600px;height:120px"></div>'); 

            Morris.Bar({
                element: 'graficolimittotalbide',
                data: cantidad
                ,
                xkey: ['precio'],
                ykeys: ['total'],
                labels: ['total'],
                barColors: ['green'],
                resize: false,
                Stacked: false
              });


            }
    });     
    $.ajax({
        url: '/consultaaskl', success: function(consulta){              
            var cantidad =[];
            contenidoa.innerHTML = '';
            consulta.forEach(element => {
                contenidoa.innerHTML +=`
                <tr>
                    <td>${element._id}</td>
                    <td>${element.total}</td>
                </tr>               
                `
                cantidad.push({'precio':element._id,'total':element.total});
            })             

            $('#graficoa').remove(); 
            $('#graph-containera').append('<div id="graficoa" style="width:600px;height:120px"></div>'); 

            Morris.Bar({
                element: 'graficoa',
                data: cantidad
                ,
                xkey: ['precio'],
                ykeys: ['total'],
                labels: ['total'],
                barColors: ['red'],
                resize: false,
                Stacked: false
              });

            }
    }); 
    $.ajax({
        url: '/consultabidl', success: function(consulta){              
            var cantidad =[];
            contenidob.innerHTML = '';
            consulta.forEach(element => {
                contenidob.innerHTML +=`
                <tr>
                    <td>${element._id}</td>
                    <td>${element.total}</td>
                </tr>               
                `
                cantidad.push({'precio':element._id,'total':element.total});
            })             

            $('#graficob').remove(); 
            $('#graph-containerb').append('<div id="graficob" style="width:600px;height:120px"></div>'); 

            Morris.Bar({
                element: 'graficob',
                data: cantidad
                ,
                xkey: ['precio'],
                ykeys: ['total'],
                labels: ['total'],
                barColors: ['green'],
                resize: false,
                Stacked: false
              });

            }


    }); 
    $.ajax({
        url: '/consultaasktotal', success: function(consulta){              
            var cantidad =[];
            contenidoatotal.innerHTML = '';
            consulta.forEach(element => {
                contenidoatotal.innerHTML +=`
                <tr>
                    <td>${element.total}</td>
                </tr>               
                `
                cantidad.push({'total':element.total});
            })             

            $('#graficoatotal').remove(); 
            $('#graph-containeratotal').append('<div id="graficoatotal" style="width:600px;height:120px"></div>'); 

            Morris.Bar({
                element: 'graficoatotal',
                data: cantidad
                ,
                xkey: ['total'],
                ykeys: ['total'],
                labels: ['total'],
                barColors: ['red'],
                resize: false,
                Stacked: false
              });

            }


    });
    $.ajax({
        url: '/consultabidtotal', success: function(consulta){              
            var cantidad =[];
            contenidobtotal.innerHTML = '';
            consulta.forEach(element => {
                contenidobtotal.innerHTML +=`
                <tr>
                    <td>${element.total}</td>
                </tr>               
                `
                cantidad.push({'total':element.total});
            })             

            $('#graficobtotal').remove(); 
            $('#graph-containerbtotal').append('<div id="graficobtotal" style="width:600px;height:120px"></div>'); 

            Morris.Bar({
                element: 'graficobtotal',
                data: cantidad
                ,
                xkey: ['total'],
                ykeys: ['total'],
                labels: ['total'],
                barColors: ['green'],
                resize: false,
                Stacked: false
              });

            }


    });



 };
 
 function deleteall(){
    $.ajax({
        url: '/deleteall', success: function(consulta){              
            console.log('Borrado');

            }


    });
 };
