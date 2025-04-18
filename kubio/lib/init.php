<?php

function kubio_plugin_activated() {
	$experimental_options = get_option( 'gutenberg-experiments', array() );
	if ( ! is_array( $experimental_options ) ) {
		$experimental_options = array( $experimental_options );
	}
	$experimental_options['gutenberg-navigation']         = 1;
	$experimental_options['gutenberg-widget-experiments'] = 1;

	update_option( 'gutenberg-experiments', $experimental_options );
	do_action( 'kubio/plugin_activated' );
}

function kubio_plugin_deactivated() {

	$run_deactivation = apply_filters( 'kubio/run_deactivation_hooks', false );

	if ( ! $run_deactivation ) {
		return;
	}

	do_action( 'kubio/plugin_deactivated' );
}

function kubio_enable_block_support() {
	add_theme_support( 'block-templates' );

	if ( ! current_theme_supports( 'align-wide' ) ) {
		add_theme_support( 'align-wide' );
	}

	if ( ! current_theme_supports( 'align-full' ) ) {
		add_theme_support( 'align-full' );
	}
}

function kubio_plugin_init() {
	require_once plugin_dir_path( __FILE__ ) . '/load.php';
	add_filter( 'kubio_is_enabled', '__return_true' );

	register_activation_hook( KUBIO_ENTRY_FILE, 'kubio_plugin_activated' );
	register_deactivation_hook( KUBIO_ENTRY_FILE, 'kubio_plugin_deactivated' );
	add_action( 'after_setup_theme', 'kubio_enable_block_support', 500 );
}

kubio_plugin_init();
