
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
												$date_time= $_GET['date_time']; 
												}

												$date_time=mysql_real_escape_string($date_time);
	   
	
												$results = mysql_query(" SELECT * FROM USV_Data where date_time like('%$date_time%') ");

												     $num_rows = mysql_num_rows($results);
													 echo
														" [{";
												        ($rows = mysql_num_rows($results));

												for ($j = 0 ; $j < $rows ; ++$j)


														  {
															  echo
													"{
													\"date:\" \"".mysql_result($results,$j, 'date_time')."\",
													 \"time:\" \"".mysql_result($results,$j, 'time')."\",
													 \"wind_speed:\" \"".mysql_result($results,$j, 'wind_speed')."\",
													 \"wind_angle: \" \"".mysql_result($results,$j, 'wind_angle')."\"
													 }";

														   }

														   echo
															   "}]";


												?>