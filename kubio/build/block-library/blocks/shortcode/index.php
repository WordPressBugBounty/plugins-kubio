<?php

namespace Kubio\Blocks;

use Kubio\Core\Blocks\BlockBase;
use Kubio\Core\Registry;
use Kubio\Core\Utils;

class ShortcodeBlock extends BlockBase {
	const OUTER = 'outer';

	public function mapPropsToElements() {
		$shortcode = $this->getAttribute( 'shortcode' );
		$in_editor = $this->getAttribute( 'inEditor' ) && $this->isEditorPreviewRequest();

		$shortcode = wp_kses_post( $shortcode );

		if ( $in_editor ) {
			$content = $this->getEditorShortcode( $shortcode );
		} else {
			if ( $shortcode ) {
				$content = $this->getLiveShortcode( $shortcode );
			} else {
				$content = Utils::getEmptyShortcodePlaceholder();
			}
		}

		return array(
			self::OUTER => array( 'innerHTML' => $content ),
		);
	}

	/**
	 * The `inEditor` attribute is only sent by the block editor through the
	 * REST block-renderer endpoint. Block attributes come from stored content
	 * that may not be trusted, so never honor it on a regular front-end render.
	 *
	 * @return bool
	 */
	protected function isEditorPreviewRequest() {
		$is_rest = ( defined( 'REST_REQUEST' ) && REST_REQUEST );

		return $is_rest && current_user_can( 'edit_posts' );
	}

	public function getEditorShortcode( $shortcode ) {
		$content          = '';
		$content          = apply_filters( 'kubio/editor/before_render_shortcode', $content, $shortcode );
		$shortcode_output = do_shortcode( $shortcode );
		$content         .= $shortcode_output;
		$content          = apply_filters( 'kubio/editor/after_render_shortcode', $content, $shortcode );

		// Do not urldecode() the rendered output: decoding after wp_kses_post()
		// turns encoded markup (e.g. %3Cscript%3E) back into live HTML.
		return $content;
	}

	public function getLiveShortcode( $shortcode ) {
		return do_shortcode( $shortcode );
	}
}

Registry::registerBlock(
	__DIR__,
	ShortcodeBlock::class
);
