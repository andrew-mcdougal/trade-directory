<div class="container search-container">
	<h3><?php bloginfo('description'); ?></h3>
	<form class="row" method="post" action="<?php bloginfo('url');?>/trade-search-results/">
		
		<?php $taxonomies = get_object_taxonomies('trade');
		foreach($taxonomies as $tax){

		echo '<div class="columns three">';
			echo buildSelect($tax);
		echo '</div>';
		}
		?>
		<input class="columns three" type="submit" value="Search" />
	</form>
</div>