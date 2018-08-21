var el = wp.element.createElement;
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { RichText, BlockControls, BlockFormatControls, AlignmentToolbar } = wp.editor;
const { Button, Dashicon, Tooltip, IconButton, Toolbar } = wp.components;
const { Component, Fragment } = wp.element;

//standard registerBlockType init

registerBlockType( 'my-block-plugin/block-w-insert-shortcode', {
	title: 'Block w Shortcode Button', //any title you like
	icon: 'universal-access-alt', //any dashicon or svg
	category: 'layout', //which category to appear under
	
	//schema of attributes
	attributes: {
		content: {
			type: 'array',
			source: 'children'
		}
	},
	
	//for adding things like a rich text editor, and controls - the editor
	edit: class extends Component {
		
		//standard constructor for a component
		constructor() {
			super( ...arguments );
			
			//make sure we bind `this` to the current component within our callbacks
			this.setupEditor = this.setupEditor.bind( this );
			this.onChangeContent = this.onChangeContent.bind( this );

			this.state = {
				//we don't need our component to manage a state in this instance
			};
		}
		
		//get a local reference to the editor on setup
		setupEditor( editor ) {
			this.editor = editor;
		}
		
		//update attributes when content is updated
		onChangeContent( newContent ) {
			this.props.setAttributes( { content: newContent } );
		}
		
		//tinymce interaction when button is clicked
		onClickShortcodeButton() {
			return () => {
				
				//the content we want to insert
				var myContent = '[myshortcode][/myshortcode]';
				
				if ( this.editor ) {
					//execCommand is a TinyMCE function
					this.editor.execCommand( 'mceInsertContent', false, myContent );
				}
			};
		}
		
		render() {
			const {
				attributes,
				setAttributes,
				className,
			} = this.props;
			
			//return toolbar and richtext components
			return ( 
				<Fragment>
					<BlockControls
						controls={ [
							{
								icon: 'edit',
								title: __( 'Insert Shortcode' ),
								onClick: this.onClickShortcodeButton(),
							},
						] }
					/>
					<RichText
						//getSettings={ this.getEditorSettings } //a useful callback for adding params to TinyMCE on setup
						onSetup={ this.setupEditor }
						key = { 'editable' }
						tagName = { 'p' }
						className = { className }
						onChange =  { this.onChangeContent }
						value = { attributes.content}
					/>
				</Fragment>
			);
		}
	},
	
	//save our content to the DB
	save: function( props ) {
		
		//save the content variable
		var content = props.attributes.content;

		return el( RichText.Content, {
			className: props.className,
			value: content
		} );
	},
} );