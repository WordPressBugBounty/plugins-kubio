<?php


/**
 * Override the default woocommerce templates with block templates
 *
 * @param string $template
 *
 * @return string
 */
function kubio_woocommerce_support_template_include( $template ) {

	$post_type              = get_post_type();
	$is_displaying_products = is_archive() || is_single() || is_tax();

	// This theme doesn't have a traditional sidebar.
	remove_action( 'woocommerce_sidebar', 'woocommerce_get_sidebar', 10 );

	if ( $post_type === 'product' && $is_displaying_products ) {

		if ( !empty($template) && strpos( $template, 'template-canvas' ) === false ) {
			$pathinfo     = pathinfo( $template );
			$default_file = isset( $pathinfo['filename'] ) ? $pathinfo['filename'] : null;

			if ( ! $default_file ) {
				return $template;
			}

			$default_file_with_extension = "$default_file.php";
			$templates                   = is_archive() ? array( $default_file_with_extension, 'archive-product.php', 'archive.php' ) : array( $default_file_with_extension, 'single-product.php', 'single.php' );

			if ( is_tax() ) {
				$templates = array( 'archive-product.php', 'archive.php' );
			}

			$templates = array_unique( $templates );
			$template  = locate_block_template( $default_file_with_extension, 'wp_template', $templates );
		}

		global $_wp_current_template_content;

		if ( ! empty( $_wp_current_template_content ) ) {

			kubio_woocommerce_set_template_content( kubio_get_woocommerce_content() );

			if ( is_single() ) {
				add_theme_support( 'wc-product-gallery-zoom' );
				add_theme_support( 'wc-product-gallery-lightbox' );
				add_theme_support( 'wc-product-gallery-slider' );
			}

			// Replace the 'post-content' block with an html block that only carries a fixed
			// placeholder. The real WooCommerce HTML is swapped in later, in a render_block
			// filter, after the template has been parsed into blocks. Pasting the WooCommerce
			// HTML into the template source (as previous versions did) made the block parser
			// and do_shortcode() run over user-controlled text such as product reviews, so a
			// review containing a block delimiter could inject an executable block.
			$_wp_current_template_content = preg_replace(
				'#<!-- wp:post-content(.*)/-->#',
				'<!-- wp:html -->' . KUBIO_WOOCOMMERCE_CONTENT_PLACEHOLDER . '<!-- /wp:html -->',
				$_wp_current_template_content
			);
		}
	}

	return $template;
}

// Unique, non-block token that marks where the WooCommerce HTML is injected. It is plain
// text (not a block delimiter), so the block parser leaves it untouched inside the html block.
const KUBIO_WOOCOMMERCE_CONTENT_PLACEHOLDER = 'kubio-woocommerce-rendered-content-7f3a9c2e';

/**
 * Store (or read back) the WooCommerce HTML that replaces the template's post-content block.
 *
 * @param string|null $content
 *
 * @return string|null
 */
function kubio_woocommerce_set_template_content( $content = null ) {
	static $stored = null;

	if ( func_num_args() > 0 ) {
		$stored = $content;
	}

	return $stored;
}

/**
 * Swap the placeholder for the stored WooCommerce HTML.
 *
 * This runs on render_block, i.e. after parse_blocks()/do_blocks() have already turned the
 * template into blocks, so the injected HTML is final output and is never parsed as blocks or
 * run through do_shortcode(). That is what keeps stored review text from injecting new blocks.
 *
 * @param string $block_content
 * @param array  $block
 *
 * @return string
 */
function kubio_woocommerce_inject_rendered_content( $block_content, $block ) {
	if ( empty( $block['blockName'] ) || 'core/html' !== $block['blockName'] ) {
		return $block_content;
	}

	if ( strpos( $block_content, KUBIO_WOOCOMMERCE_CONTENT_PLACEHOLDER ) === false ) {
		return $block_content;
	}

	$content = kubio_woocommerce_set_template_content();

	return str_replace(
		KUBIO_WOOCOMMERCE_CONTENT_PLACEHOLDER,
		null === $content ? '' : (string) $content,
		$block_content
	);
}

add_filter( 'render_block', 'kubio_woocommerce_inject_rendered_content', 10, 2 );

function kubio_woocommerce_support_rendered_content( $content ) {
	$post_type              = get_post_type();
	$is_displaying_products = is_archive() || is_single();

	if ( $post_type === 'product' && $is_displaying_products ) {
		$content = kubio_get_woocommerce_content();
	}

	return $content;
}

add_filter( 'template_include', 'kubio_woocommerce_support_template_include', 20, 1 );

add_filter( 'kubio/editor/rendered-content', 'kubio_woocommerce_support_rendered_content' );


function kubio_woocommerce_achive_page_title() {
	if ( function_exists( 'is_shop' ) && is_shop() && wc_get_page_id( 'shop' ) ) {
		return get_the_title( wc_get_page_id( 'shop' ) );
	}
}

add_filter( 'post_type_archive_title', 'kubio_woocommerce_achive_page_title' );
