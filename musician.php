<html>
<body>
<?php 
$connection = mysqli_connect("localhost", "root", "", "musicians");

if(mysqli_connect_errno())
{
	echo"Failed to connect to MySQL".mysql_connect_errno();
}
$query = "SELECT name, genre, MONTH(performance.MonthYear) AS Month FROM musician JOIN performance ON musician.MusicianID = performance.MusicianID ORDER BY MonthYear";
$result = mysqli_query($connection,$query);

	if($result->num_rows!=0){
		$temp = '';
	while($rows = $result->fetch_assoc())
{

	$month = $rows['Month'];
	$name = $rows['name'];
	$genre = $rows['genre'];
	if ($temp != $month)
	{
		$temp = $month;
		echo"<p>Month: $month</p>";
	}
	    
	echo"<p>Name: ";
	echo '<a href ="artistdetails.html">';  
	echo" $name </a> " ;
	echo "&nbsp &nbsp &nbsp &nbsp Genre: $genre </p>";
	
}
	}
	else {
		echo"No REsults";
	}
	
mysqli_close($connection); 
?>
</body>
</html>