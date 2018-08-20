var el = wp.element.createElement;
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { RichText, BlockControls, BlockFormatControls, AlignmentToolbar } = wp.editor;
const { Button, Dashicon, Tooltip, IconButton, Toolbar } = wp.components;
var editors = {}; //stores all the TinyMCE editors in our blocks

registerBlockType( 'my-block-plugin/block-w-insert-shortcode', {
	title: 'Block w Shortcode Button',
	icon: 'universal-access-alt',
	category: 'layout',

	attributes: {
		content: {
			type: 'array',
			source: 'children'
		},
		alignment: {
			type: 'string',
		},
		editorID: {
			type: 'string',
		}
	},
	edit: function( props ) {
		
		var content = props.attributes.content,
			alignment = props.attributes.alignment,
			editorID = props.attributes.editorID;
		
		function onChangeContent( newContent ) {
			props.setAttributes( { content: newContent } );
		}

		function onChangeAlignment( newAlignment ) {
			props.setAttributes( { alignment: newAlignment } );
		}
		
		function onClickShortcodeButton( event, editorID ) {
			var activeEditor = editors[props.attributes.editorID];
			var myContent = '[myshortcode][/myshortcode]';
			activeEditor.execCommand('mceInsertContent', false, myContent);
		}
		
		function onEditorSetup( editor ) {
			//store a reference to this editor
			editors[editor.id] = editor;
			//store a reference to the editor ID within the Block
			props.setAttributes( { editorID: editor.id } );
		}
		
		return [
			el(
				BlockFormatControls,
				{ key: 'controls-custom' },
				<Toolbar>
					<IconButton
						icon="edit"
						label="Insert Shortcode"
						onClick={(event) => onClickShortcodeButton(event, editorID)}
					/>
				</Toolbar>
			),
			el(
				BlockControls,
				{ key: 'controls-alignment' },
				el(
					AlignmentToolbar,
					{
						value: alignment,
						onChange: onChangeAlignment
					}
				)
			),
			el(
				RichText,
				{
					key: 'editable',
					tagName: 'p',
					className: props.className,
					style: { textAlign: alignment },
					onChange: onChangeContent,
					value: content,
					onSetup: onEditorSetup
				}
			),
		];
	},

	save: function( props ) {
		var content = props.attributes.content,
			alignment = props.attributes.alignment;

		return el( RichText.Content, {
			className: props.className,
			style: { textAlign: alignment },
			value: content
		} );
	},
} );