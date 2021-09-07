/**
 * BLOCK: opdracht3-fancypager
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import "./editor.scss";
import "./style.scss";
import { withSelect } from "@wordpress/data"; // get page data
import { SelectControl } from "@wordpress/components"; // selectControl for selecting page

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType("schakel-opdrachten/block-opdracht3-fancypager", {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __("Opdracht 3 - Fancypager"), // Block title.
	icon: "smiley", // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: "common", // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__("opdracht3-fancypager — Fancypager"),
		__("CGB Example"),
		__("create-guten-block"),
	],
	attributes: {
		selectedPageData: {
			type: "object",
		},
		selectedPageId: {
			type: "integer",
		},
		postFeaturedImage: {
			type: "string",
		},
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: withSelect((select) => {
		const posts = select("core").getEntityRecords("postType", "page", {});

		let media = {};

		if (posts) {
			posts.forEach((post) => {
				media[post.id] = select("core").getMedia(post.featured_media);
			});
		}

		return {
			postsData: {
				posts,
				media,
			},
		};
	})(({ postsData, setAttributes, className, attributes }) => {
		const { media, posts } = postsData;

		// return 'loading' state, if no page data available
		if (!posts || !posts.length || !media) {
			return <p>{__("Loading post data...", "wholesomecode")}</p>;
		}

		if (attributes.selectedPageId || attributes.selectedPageId === 0) {
			posts.forEach((post) => {
				if (post.id === attributes.selectedPageId) {
					setAttributes({ selectedPageData: post });
				}
			});
		} else {
			setAttributes({
				selectedPageId: posts[0].id,
				selectedPageData: posts[0],
			});
		}

		console.log(attributes.selectedPageData);

		let selectControlOptions = posts.map((post) => ({
			value: post.id,
			label: post.title.raw,
		}));

		// selectControlOptions.unshift({
		// 	value: 0,
		// 	label: 'Select a page:',
		// });

		const selectControl = (
			<SelectControl
				label={__("Select page:")}
				value={attributes.selectedPageId} // e.g: value = [ 'a', 'c' ]
				onChange={(page) => {
					setAttributes({ selectedPageId: Number(page) });
				}}
				options={selectControlOptions}
			/>
		);

		if (media[attributes.selectedPageId]) {
			const image =
				media[attributes.selectedPageId].media_details.sizes.full.source_url;
			setAttributes({ postFeaturedImage: image });
		}

		if (!attributes.selectedPageData) {
			return <p>No page data available</p>;
		}

		return (
			<div className={className}>
				{selectControl}

				<h3>{attributes.selectedPageData.title.raw}</h3>

				<img src={attributes.postFeaturedImage} />

				<p>
					<a href={attributes.selectedPageData.link}>Visit page</a>
				</p>
			</div>
		);
	}),

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: ({ attributes }) => {
		if (!attributes.selectedPageData) {
			return <p>No page data available</p>;
		}

		return (
			<div>
				<h3 className="title">{attributes.selectedPageData.title.raw}</h3>

				<img src={attributes.postFeaturedImage} />

				<p className="content">
					<a href={attributes.selectedPageData.link}>Visit page</a>
				</p>
			</div>
		);
	},
});
