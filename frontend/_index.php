<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="lib/bootstrap/css/bootstrap.css">
        <link rel="stylesheet" href="css/main.css">

        <!-- Optional theme -->
        <link rel="stylesheet" href="/lib/bootstrap/css/bootstrap-theme.css">

        <script src="lib/modernizr-2.6.2.min.js"></script>
  
		    <script type="text/javascript" src="https://www.google.com/jsapi"></script>
		        <script type="text/javascript">
		          google.load("visualization", "1", {packages:["corechart"]});
		          google.setOnLoadCallback(drawChart);
		        function drawChart() {
		            var data = google.visualization.arrayToDataTable([<?php


  
						ini_set('display_errors', 0);
						     require_once 'login.php';
         
						$db_server = mysql_connect($db_hostname, $db_username, $db_password);
						if (mysql_select_db($db_database))
						if (!$db_server) 
						{
						die("Unable to connect to MySQL. " . mysql_error());
						}
						if (mysql_select_db(!$db_database))
						 {
						  die("Unable to select database. " . mysql_error());
						}

						if (mysql_select_db($db_database))
						if (!$db_server) 
						{
						die("Unable to connect to MySQL. " . mysql_error());
						}
						if (mysql_select_db(!$db_database))
						 {
						  die("Unable to select database. " . mysql_error());
					  }

		if (mysql_select_db($db_database))


		{
		$date_time= $_GET['date_time']; 
		}

		$date_time=mysql_real_escape_string($date_time);
	   
	
		$results = mysql_query(" SELECT * FROM USV_Data where date_time like('%$date_time%') ");

		     $num_rows = mysql_num_rows($results);
			 echo
				" ['Time', 'Wind speed', 'Wind speed', 'Longitude'],";
		        ($rows = mysql_num_rows($results));

		for ($j = 0 ; $j < $rows ; ++$j)


				  {
					  echo
			"['".mysql_result($results,$j, 'time')."','_index.php?time_date=%22".mysql_result($results,$j, 'time')."%22',".mysql_result($results,$j, 'wind_speed').",".mysql_result($results,$j, 'wind_speed')."], ";

				   }




		?>]);
		           var view = new google.visualization.DataView(data);
		           view.setColumns([0, 2]);

		           var options = {title:"Mouse over bar & click to break down data by time",
		                width:800, height:400,
				
		                hAxis: {title: "Ocean Data",   },
					   legend: 'none',
			
		              vAxis: {format: '#,###', title: "",  }
		   		 };


		           var chart = new google.visualization.ColumnChart( 
		               document.getElementById('chart_div'));
		           chart.draw(view, options);

		           var selectHandler = function(e) {
		              window.location = data.getValue(chart.getSelection()[0]['row'], 1 );
		           }

		           google.visualization.events.addListener(chart, 'select', selectHandler);
		          }

		  
		        </script>
		    		    <!-- Le styles -->
		    	      <style type="text/css">
		    		
		    		#chart_div {
		    			margin:0;padding:0;
					}
		    	
		    	  	  .money {
		    	  		  text-align:right; width:400px;  
		    	  	  }
		    	  	  .results {  
		    	  		   padding:1%; width:400px; margin-bottom:30px; color:#695330; border-color:#EBF5FF; border-width:2px; border-radius:10px;  border-style: solid; border-radius:10px;
		    	  	   } 
	  
		    	  	  #results {
		    	  	padding:1%; width:400px; margin-bottom:30px; color:#695330; border-color:#EBF5FF; border-width:2px; border-radius:10px;  border-style: solid; border-radius:10px;;  
		    	  	  }
		    	  	      tbody tr:nth-of-type(odd) { background-color: #fff;  width:400px; }
		    	  	      tbody tr:nth-of-type(even) { background-color: #EBF5FF;width:400px;  }
		    	  	      tbody td {padding:5px; color:#695330; width:400px; }

		    			  div.objectives  {  height:30px;overflow:hidden; padding:2px;   }

		    			  div.objectives:hover  {height:200px; padding:2px; overflow:auto }
			  
		    	      </style>
				  
    </head>
    <body>
        <!--[if lt IE 9]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <!-- Add your site or application content here -->
        <div class="container">
            <div class="row">
                <div id="Main View" class="panel panel-default">
                    <div class="panel-heading">BLUE NEMO</div>

                </div>
            </div>

                <div class="row">
 	
	   
		
		
	  	
                <div class="panel-heading">Real time Data</div>
                    
                    <div class ="col-md-3">
                        <div id="map-paramaeters" class="panel panel-default">
                            <div class="panel-heading">Parameters</div>
                            <div class="panel-body">
                                <div class="panel-sideform">
                                    <form method="GET">
                                        <fieldset>
                                            <legend>Date Range</legend>
                                            <input type="date" label="Start:" value="DateStart"/>
                                            <input type="date" label="End" value="DateEnd"/>
                                            <input type="submit" value="Update">
                                        </fieldset>
                                    </form>
							 	   <form action='index.php'  method="GET">
							 	  	<legend>Time Search</legend>
							 	  		<h5>Enter the day/month you would like to see results for in following format 2014-05-06 Year-Month-Day</h5>
							 	  		<form action='_index.php' method="GET">


							 	  		   <lable for="date_time"><input type="text"  id="date_time" name="date_time" value="2014-05-31" /></lable>




							 	  		</select>
							 	  		   </lable>
							 	  		   <lable for="submit"><input type="submit" name="submit" value="Show" id="submit"  /></lable>



							 	  		</form>
                                </div> 
                                <div id="map-canvas"> </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div id="map-view" class="panel panel-default">
                            <div class="panel-heading">Map</div>
                            <div class="panel-body">
                                <div id="map-canvas"></div>
                            </div>
					    	 <div id='chart_div'>
					   	 </div>
						 	  	  <?php
						 	 ini_set('display_errors', 0);
						 	      require_once 'login.php';
         
						 	 $db_server = mysql_connect($db_hostname, $db_username, $db_password);
						 	 if (mysql_select_db($db_database))
						 	 if (!$db_server) 
						 	 {
						 	 die("Unable to connect to MySQL. " . mysql_error());
						 	 }
						 	 if (mysql_select_db(!$db_database))
						 	  {
						 	   die("Unable to select database. " . mysql_error());
						 	 }

						 	 if (mysql_select_db($db_database))
						 	 if (!$db_server) 
						 	 {
						 	 die("Unable to connect to MySQL. " . mysql_error());
						 	 }
						 	 if (mysql_select_db(!$db_database))
						 	  {
						 	   die("Unable to select database. " . mysql_error());

						 }
						 	  if (mysql_select_db($db_database))
						 	       {
						 	    $date_time = $_GET['date_time']; 
						 	       }
	 
						 	 		  			echo
						 	 		  	   		"  <a href='ocius_results_json.php?date_time=$date_time' target='_blank'>
						 	 		  	       JSON </a> |";
						 	 					?>
						 	 	  		<a href='#' onClick ="$('#results').tableExport({type:'xml',escape:'false'});" target='_blank'> XML</a> |
						 	 	  		<a href='#' onClick ="$('#results').tableExport({type:'sql'});"> SQL</a> |

						 	 	  		<a href='#' onClick ="$('#results').tableExport({type:'csv',escape:'false'});">  CSV</a> |
						 	 	  		<a href='#' onClick ="$('#results').tableExport({type:'txt',escape:'false'});">  TXT</a> |


						 	 	  		<a href='#' onClick ="$('#results').tableExport({type:'excel',escape:'false'});"> XLS</a> |
						 	 	  		<a href='#' onClick ="$('#results').tableExport({type:'doc',escape:'false'});">  Word</a> |
						 	 	  		<a href='#' onClick ="$('#results').tableExport({type:'powerpoint',escape:'false'});"> PowerPoint</a> 

	  		


  	
     	 

	
		
						 	 		<?php
						 		ini_set('display_errors', 0);
						 		     require_once 'login.php';
         
						 		$db_server = mysql_connect($db_hostname, $db_username, $db_password);
						 		if (mysql_select_db($db_database))
						 		if (!$db_server) 
						 		{
						 		die("Unable to connect to MySQL. " . mysql_error());
						 		}
						 		if (mysql_select_db(!$db_database))
						 		 {
						 		  die("Unable to select database. " . mysql_error());
						 		}

						 		if (mysql_select_db($db_database))
						 		if (!$db_server) 
						 		{
						 		die("Unable to connect to MySQL. " . mysql_error());
						 		}
						 		if (mysql_select_db(!$db_database))
						 		 {
						 		  die("Unable to select database. " . mysql_error());
		  
						 		}


						 	 	 if (mysql_select_db($db_database))
						 	      {
						 	   $date_time = $_GET['date_time']; 
						 	      }
    
				   
						 	 			    if(isset($_GET['date_time']))
						 	 				{
						 	 	     $results = mysql_query("SELECT * FROM USV_Data where date_time like('%$date_time%')");
						 	 	        $num_rows = mysql_num_rows($results);
       echo
	   "<h4>There are $num_rows results for $date_time</h4>";
						 	 	        ($rows = mysql_num_rows($results));

						 	 	for ($j = 0 ; $j < $rows ; ++$j)
						 	 	{
						 	 	      echo 
						 	 	   "<table class='results'>
						 	 			  <TR><td>Date/Time</b></td><TD class='money'><b>".mysql_result($results,$j, 'date_time')." - ".mysql_result($results,$j, 'time')."  </TD></tr> 
											  <TR><td>Lat/Lon</td><TD class='money'>".mysql_result($results,$j, 'latitude').",".mysql_result($results,$j, 'longitude')."  </TD></tr><tr>

						 	 	<td>Wind speed</td><TD class='money'>".mysql_result($results,$j, 'Wind_speed')."  </TD></tr><tr>
						 	    <td>Wind angle</td><TD class='money'>".mysql_result($results,$j, 'Wind_angle')."  </TD></tr><tr>
						 	 	<td>Azimuth</td><TD class='money'>".mysql_result($results,$j, 'Azimuth')."  </TD></tr><tr>
						 	 	<td>Heading</td><TD class='money'>".mysql_result($results,$j, 'heading')."  </TD></tr><tr>
                               <td>Air pressure</td><TD class='money'>".mysql_result($results,$j, 'air_pressure')."  </TD>
						 	 	</tr>
						 	 	</table>";

						 	 	  }
						 	   }
  
  
						 	 	 ?>
                        </div>
                    </div>
               </div>                
            </div>
        </div>

        <script src="/lib/jquery-2.1.1.js"></script>
        <script src="/lib/bootstrap/js/bootstrap.js"></script>
        <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAaBawzgTiLpNWpRCfYE1U0gb_zzQjyoyM"></script>
        <script data-main="js/main" src="lib/require.js"></script>
    </body>
</html>
